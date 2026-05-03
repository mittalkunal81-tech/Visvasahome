# Quick Start: Send Real WhatsApp OTP

## Why OTP is Not Going to Other Devices

Currently, the app is in **DEVELOPMENT MODE** - OTP only shows in browser alert, not sent to WhatsApp.

To send **REAL WhatsApp OTP** to other devices, you need:
1. Backend server (to make API calls)
2. Twilio account (WhatsApp API provider)

---

## Option 1: Quick Test with Twilio Sandbox (Fastest - 10 minutes)

### Step 1: Create Twilio Account
1. Go to https://www.twilio.com/try-twilio
2. Sign up (FREE account)
3. Verify your email and phone

### Step 2: Get WhatsApp Sandbox
1. In Twilio Console, go to: **Messaging** → **Try it out** → **Send a WhatsApp message**
2. You'll see a number like: `+1 415 523 8886`
3. **IMPORTANT**: Send this message to that number from your WhatsApp:
   ```
   join <your-sandbox-code>
   ```
   Example: `join steel-tiger`
4. You'll receive confirmation message

### Step 3: Get Credentials
From Twilio Console homepage:
- Copy **Account SID** (starts with AC...)
- Copy **Auth Token** (click show to see it)

### Step 4: Deploy Backend (Choose One)

#### A. Using Vercel (Easiest - FREE)

Create file: `api/send-whatsapp-otp.js`
```javascript
const twilio = require('twilio');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  const { to, otp } = req.body;

  try {
    await client.messages.create({
      from: 'whatsapp:+14155238886', // Twilio sandbox number
      to: `whatsapp:${to}`,
      body: `🏠 VisvasaHome OTP: ${otp}\n\nValid for 5 minutes.`
    });

    res.json({ success: true, message: 'OTP sent' });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
```

**Deploy Steps:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard:
# TWILIO_ACCOUNT_SID=ACxxxx...
# TWILIO_AUTH_TOKEN=your_token
```

Your API will be at: `https://your-app.vercel.app/api/send-whatsapp-otp`

#### B. Using Node.js Server (Local Testing)

1. Create folder: `backend-server`
2. Create `server.js`:
```javascript
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(
  'ACxxxx...', // Your Account SID
  'your_token' // Your Auth Token
);

app.post('/api/send-whatsapp-otp', async (req, res) => {
  const { to, otp } = req.body;
  
  try {
    await client.messages.create({
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${to}`,
      body: `🏠 VisvasaHome OTP: ${otp}\n\nValid for 5 minutes.`
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(3001, () => console.log('Server on http://localhost:3001'));
```

3. Run:
```bash
npm install express cors twilio
node server.js
```

### Step 5: Update Frontend

Update `src/app/utils/whatsappOTP.ts` line 36:
```typescript
// Change from:
const response = await fetch('/api/send-whatsapp-otp', {

// To your deployed URL:
const response = await fetch('https://your-app.vercel.app/api/send-whatsapp-otp', {
```

OR for local testing:
```typescript
const response = await fetch('http://localhost:3001/api/send-whatsapp-otp', {
```

---

## Option 2: Alternative APIs (India-Specific)

### MSG91 (Popular in India)
- Website: https://msg91.com
- Pricing: ₹0.25/message
- Setup: Similar to Twilio
- Better for Indian numbers

### Gupshup
- Website: https://www.gupshup.io
- WhatsApp Business API
- Good for enterprise

---

## Testing Steps

1. **Join WhatsApp Sandbox** (if using Twilio sandbox)
   - Send `join <code>` to sandbox number
   - Wait for confirmation

2. **Test on Your Phone**
   - Open VisvasaHome website
   - Click Login
   - Enter your phone number (+91XXXXXXXXXX)
   - Click "Send OTP"
   - **Check WhatsApp** - OTP should arrive within 5-10 seconds

3. **Test on Another Device**
   - Use different phone number
   - Must join sandbox first (if using sandbox)
   - Follow same steps

---

## Troubleshooting

### "OTP not received"
✅ **Solution:**
1. Did you join WhatsApp sandbox? Send `join <code>` first
2. Is phone number correct? Must include +91
3. Check backend logs for errors
4. Verify Twilio credentials

### "Failed to send OTP" error
✅ **Solution:**
1. Check Twilio Account SID and Auth Token
2. Ensure backend server is running
3. Check Twilio balance (sandbox is free)
4. Verify WhatsApp number is active

### "Network error"
✅ **Solution:**
1. Check backend URL is correct
2. Enable CORS on backend
3. Check browser console for errors

---

## Cost Breakdown

### Twilio Sandbox (FREE)
- **Cost**: $0 (FREE for testing)
- **Limit**: Users must join sandbox first
- **Best for**: Development & testing

### Twilio Production
- **Cost**: $0.005 per message (₹0.40)
- **Setup**: Requires WhatsApp Business approval (1-2 weeks)
- **Best for**: Live production

### MSG91 (India)
- **Cost**: ₹0.25 - ₹0.50 per message
- **Setup**: Instant activation
- **Best for**: Indian customers

---

## Quick Summary

**Current State**: ✅ Development mode (browser alert only)

**To Send Real WhatsApp OTP**:
1. ✅ Create Twilio account (5 min)
2. ✅ Join WhatsApp sandbox (1 min)
3. ✅ Deploy backend API (5 min)
4. ✅ Update frontend URL (1 min)
5. ✅ Test and verify (2 min)

**Total Time**: ~15 minutes

---

## Need Help?

1. **Twilio Docs**: https://www.twilio.com/docs/whatsapp
2. **Video Tutorial**: Search "Twilio WhatsApp API setup"
3. **Support**: contact@visvasahome.com

**Pro Tip**: Start with Twilio sandbox for testing, then upgrade to production WhatsApp Business API when ready to launch.
