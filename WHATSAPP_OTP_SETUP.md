# WhatsApp OTP Integration Setup Guide

This guide explains how to set up WhatsApp OTP authentication for VisvasaHome.

## Overview

The WhatsApp OTP system is now integrated into the authentication flow. Users receive their OTP directly via WhatsApp message instead of SMS.

## Current Implementation

### Development Mode
- **Status**: ✅ Working
- **Behavior**: OTP is displayed in a browser alert for testing
- **No setup required**: Works out of the box for development

### Production Mode
- **Status**: ⚙️ Requires setup
- **Provider**: Twilio WhatsApp API (Recommended)
- **Setup required**: Follow steps below

---

## Production Setup (Twilio WhatsApp API)

### Step 1: Create Twilio Account

1. Go to [https://www.twilio.com/](https://www.twilio.com/)
2. Click "Sign up" and create a free account
3. Verify your email and phone number
4. Navigate to the [Twilio Console](https://console.twilio.com/)

### Step 2: Get Your Credentials

1. In the Twilio Console, find:
   - **Account SID** (e.g., `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
   - **Auth Token** (e.g., `your_auth_token_here`)
2. Save these securely - you'll need them later

### Step 3: Enable WhatsApp

#### Option A: WhatsApp Sandbox (For Testing)
1. Go to **Messaging** > **Try it out** > **Send a WhatsApp message**
2. Send a test message to join the sandbox
3. Use the sandbox number: `whatsapp:+14155238886`
4. **Note**: Users must send "join [your-code]" to this number before receiving messages

#### Option B: WhatsApp Business API (For Production)
1. Go to **Messaging** > **WhatsApp** > **Senders**
2. Click "Request to enable WhatsApp"
3. Follow Facebook/Meta's approval process (takes 1-2 weeks)
4. Get your approved WhatsApp Business number

### Step 4: Set Up Backend API

You need a backend server to handle OTP sending. Choose one option:

#### Option 1: Node.js/Express Server

```bash
# Install dependencies
npm install twilio express cors dotenv
```

Create `server.js`:
```javascript
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post('/api/send-whatsapp-otp', async (req, res) => {
  try {
    const { to, otp } = req.body;
    
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${to}`,
      body: `🏠 VisvasaHome OTP: ${otp}\n\nValid for 5 minutes.\nDo not share with anyone.`
    });

    res.json({ success: true, sid: message.sid });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

Create `.env`:
```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

Run:
```bash
node server.js
```

#### Option 2: Vercel Serverless Function

Create `api/send-whatsapp-otp.ts`:
```typescript
import twilio from 'twilio';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!
  );

  const { to, otp } = req.body;

  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER!,
      to: `whatsapp:${to}`,
      body: `🏠 VisvasaHome OTP: ${otp}\n\nValid for 5 minutes.`
    });

    res.json({ success: true, sid: message.sid });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}
```

Add environment variables in Vercel dashboard.

#### Option 3: Firebase Cloud Functions

```typescript
import * as functions from 'firebase-functions';
import twilio from 'twilio';

export const sendWhatsAppOTP = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.status(204).send('');
    return;
  }

  const client = twilio(
    functions.config().twilio.sid,
    functions.config().twilio.token
  );

  const { to, otp } = req.body;

  try {
    await client.messages.create({
      from: functions.config().twilio.whatsapp_number,
      to: `whatsapp:${to}`,
      body: `🏠 VisvasaHome OTP: ${otp}`
    });

    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});
```

### Step 5: Update Frontend Configuration

Update the API endpoint in `src/app/utils/whatsappOTP.ts`:

```typescript
// Change this line to your backend URL
const response = await fetch('https://your-backend.com/api/send-whatsapp-otp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: formattedPhone,
    otp,
  }),
});
```

---

## Alternative Providers

### 1. MSG91 (India-focused)
- **Website**: [https://msg91.com/](https://msg91.com/)
- **Pricing**: ₹0.25 - ₹0.50 per message
- **Best for**: Indian phone numbers
- **Setup**: Similar to Twilio, with MSG91 SDK

### 2. Gupshup
- **Website**: [https://www.gupshup.io/](https://www.gupshup.io/)
- **Features**: WhatsApp Business API
- **Best for**: Enterprise solutions
- **Pricing**: Contact for quote

### 3. Kaleyra
- **Website**: [https://www.kaleyra.com/](https://www.kaleyra.com/)
- **Features**: Multi-channel messaging
- **Best for**: Large scale operations
- **Pricing**: Contact for quote

---

## Testing

### Development Testing
1. Enter any valid Indian phone number (10 digits, starting with 6-9)
2. Click "Send OTP"
3. OTP will appear in browser alert
4. Enter the OTP and verify

### Production Testing
1. Ensure backend is running
2. User must join WhatsApp sandbox (if using sandbox)
3. Enter phone number
4. Check WhatsApp for OTP message
5. Verify OTP

---

## Security Best Practices

1. **Rate Limiting**: Implement rate limiting to prevent OTP spam
2. **OTP Expiry**: Current implementation: 5 minutes
3. **Secure Storage**: Never log OTPs in production
4. **HTTPS Only**: Always use HTTPS in production
5. **Environment Variables**: Store credentials securely

---

## Cost Estimation

### Twilio Pricing (As of 2024)
- WhatsApp messages: $0.005 per message
- 1000 OTPs ≈ $5 USD
- 10,000 OTPs ≈ $50 USD

### Budget Recommendations
- Startup (0-1000 users/month): $10-20/month
- Growing (1000-10000 users/month): $50-100/month
- Scale (10000+ users/month): $100+/month

---

## Troubleshooting

### Issue: OTP not received
**Solutions**:
- Check if user joined WhatsApp sandbox
- Verify phone number format (+91xxxxxxxxxx)
- Check Twilio dashboard for error logs
- Ensure backend is running

### Issue: "Failed to send OTP" error
**Solutions**:
- Check Twilio credentials
- Verify WhatsApp number is active
- Check backend logs
- Ensure sufficient Twilio balance

### Issue: OTP expired
**Solutions**:
- Current expiry: 5 minutes
- Click "Resend OTP" button
- User receives new OTP

---

## Support

For issues or questions:
- Check Twilio documentation: [https://www.twilio.com/docs/whatsapp](https://www.twilio.com/docs/whatsapp)
- Review code in `src/app/utils/whatsappOTP.ts`
- Check backend API logs
- Contact: contact@visvasahome.com

---

## Files Modified

1. `src/app/utils/whatsappOTP.ts` - WhatsApp OTP utility functions
2. `src/app/components/AuthPage.tsx` - Updated to use WhatsApp OTP
3. `api-example-whatsapp-otp.ts` - Backend API example

---

**Status**: ✅ Development mode working | ⚙️ Production requires Twilio setup
