# 📱 Multi-Channel OTP Setup - VisvasaHome

## ✅ Features Implemented

Your VisvasaHome website now supports **3 methods** for OTP delivery:

1. **📱 Phone SMS** - Traditional SMS OTP
2. **💬 WhatsApp** - OTP via WhatsApp (most popular in India)
3. **📧 Email** - OTP via Email

Users can choose their preferred method during login!

---

## 🎯 How It Works

### User Flow

```
1. User enters mobile number
   ↓
2. User selects OTP method:
   - Phone SMS
   - WhatsApp
   - Email (optional - will ask for email)
   ↓
3. OTP is sent via selected method
   ↓
4. User receives 6-digit OTP
   ↓
5. User enters OTP
   ↓
6. Login successful!
```

---

## 🚀 Setup Instructions

### 1. Twilio Setup (for SMS + WhatsApp)

#### Create Twilio Account
1. Go to https://www.twilio.com/try-twilio
2. Sign up (FREE $15 credit)
3. Verify your email and phone

#### Get Credentials
Go to Twilio Console Dashboard:
- **Account SID**: Starts with `AC...`
- **Auth Token**: Click "Show" to reveal

#### For SMS:
1. Go to **Phone Numbers** → **Manage** → **Buy a number**
2. Select a phone number (costs ~$1/month)
3. Note the number in format: `+1XXXXXXXXXX`

#### For WhatsApp (Testing):
1. Go to **Messaging** → **Try it out** → **Send a WhatsApp message**
2. Join sandbox by sending `join [code]` to `+1 415 523 8886`
3. Use sandbox number: `whatsapp:+14155238886`

#### For WhatsApp (Production):
1. Apply for WhatsApp Business API
2. Wait 1-2 weeks for approval
3. Get your approved WhatsApp Business number

---

### 2. Email Setup (for Email OTP)

#### Option A: Gmail (Recommended for Testing)

1. **Enable 2-Step Verification**:
   - Go to https://myaccount.google.com/security
   - Turn on 2-Step Verification

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "VisvasaHome OTP"
   - Click "Generate"
   - Copy the 16-character password

3. **Use These Credentials**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx  (16-char app password)
   SMTP_FROM_EMAIL=your-email@gmail.com
   ```

#### Option B: SendGrid (Recommended for Production)

1. Sign up at https://sendgrid.com (FREE 100 emails/day)
2. Create API key
3. Use these settings:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your_sendgrid_api_key
   SMTP_FROM_EMAIL=your-verified-sender@yourdomain.com
   ```

#### Option C: AWS SES (Cheapest for High Volume)

1. Sign up for AWS SES
2. Verify your domain/email
3. Get SMTP credentials
4. Configure settings

---

### 3. Environment Variables

#### Update `.env` file in Vercel:

```bash
# Twilio (SMS + WhatsApp)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# Email Service (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your_app_password_16_chars
SMTP_FROM_EMAIL=your-email@gmail.com
```

#### In Vercel Dashboard:

1. Go to your project
2. **Settings** → **Environment Variables**
3. Add each variable above
4. Click **Save**
5. **Redeploy** your project

---

## 💰 Cost Breakdown

### Free Tier (Testing)

| Service | Free Tier | Cost After |
|---------|-----------|------------|
| **Twilio SMS** | $15 credit (~100 SMS) | ₹0.60/SMS |
| **Twilio WhatsApp** | $15 credit (~3000 msgs) | ₹0.40/message |
| **Gmail SMTP** | Unlimited | FREE |
| **SendGrid Email** | 100/day forever | ₹0.001/email |
| **Vercel Hosting** | 100GB bandwidth | FREE |

### Production Costs (1000 OTPs/month)

| Method | Monthly Cost | Best For |
|--------|-------------|----------|
| **Phone SMS** | ₹600/month | Users without WhatsApp |
| **WhatsApp** | ₹400/month | Most Indian users (98% have WhatsApp) |
| **Email** | FREE-₹10/month | International users |

**Recommended**: Enable all 3 and let users choose. Most will pick WhatsApp (cheapest + most popular in India).

---

## 🧪 Testing

### Development Mode (Current)

Right now the app is in **development mode**:
- OTP shows in browser alert (not sent)
- No backend credentials needed
- Perfect for UI/UX testing

### Test All Three Methods:

1. **Test Phone SMS**:
   - Open website
   - Enter mobile number
   - Select "Phone SMS"
   - OTP appears in alert popup
   - Enter OTP and login

2. **Test WhatsApp**:
   - Enter mobile number
   - Select "WhatsApp"
   - OTP appears in alert popup
   - Enter OTP and login

3. **Test Email**:
   - Enter mobile number
   - Select "Email"
   - Enter email when prompted
   - OTP appears in alert popup
   - Enter OTP and login

---

## 🔧 Files Created/Modified

### Backend APIs
```
/api/send-sms-otp.ts          - SMS OTP via Twilio
/api/send-whatsapp-otp.ts      - WhatsApp OTP via Twilio
/api/send-email-otp.ts         - Email OTP via SMTP
```

### Frontend
```
/src/app/utils/otpService.ts           - Multi-channel OTP service
/src/app/components/AuthPage.tsx       - Updated login with method selection
/src/app/components/MobileContactBar.tsx - Contact bar with 3 options
```

### Configuration
```
/package.json               - Added nodemailer, @types/nodemailer
/.env.example              - Updated with all credentials
/MULTI_CHANNEL_OTP_SETUP.md - This guide
```

---

## 📊 Production Deployment

### Step 1: Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Add multi-channel OTP support"
git push

# Or deploy directly
vercel --prod
```

### Step 2: Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add all credentials from `.env.example`.

### Step 3: Test Production

1. **Test SMS**: Use real phone number, check SMS
2. **Test WhatsApp**: Join sandbox first, then test
3. **Test Email**: Use real email, check inbox/spam

---

## 🐛 Troubleshooting

### SMS Not Received
✅ Check Twilio phone number is correct
✅ Check phone number format: `+91XXXXXXXXXX`
✅ Verify Twilio has credit
✅ Check Twilio logs in console

### WhatsApp Not Received
✅ User must join sandbox (if using sandbox)
✅ Check WhatsApp number format: `whatsapp:+14155238886`
✅ Verify message template is approved (production)
✅ Check Twilio WhatsApp logs

### Email Not Received
✅ Check spam/junk folder
✅ Verify SMTP credentials are correct
✅ For Gmail: Ensure App Password is used (not regular password)
✅ Check SMTP port (587 for TLS, 465 for SSL)
✅ Verify from-email is allowed

### API Errors
✅ Check Vercel function logs
✅ Verify all environment variables are set
✅ Check API endpoint URLs
✅ Verify credentials are not expired

---

## 🎉 Success!

Your website now supports:
- ✅ **Phone SMS OTP** (traditional)
- ✅ **WhatsApp OTP** (most popular in India)
- ✅ **Email OTP** (international friendly)
- ✅ **User choice** of preferred method
- ✅ **Mobile contact bar** (Phone, WhatsApp, Email)
- ✅ **Real-time delivery** (when deployed)

**Next Step**: Deploy to Vercel and add credentials! 🚀
