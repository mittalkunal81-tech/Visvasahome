// Multi-channel OTP Service - Phone SMS, WhatsApp, Email
// Production: Requires Twilio (SMS + WhatsApp) and Email service credentials

interface OTPResponse {
  success: boolean;
  message: string;
  sid?: string;
}

export type OTPMethod = 'sms' | 'whatsapp' | 'email';

// Generate 6-digit OTP
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Store OTP in memory (in production, use Redis or database)
const otpStore: Map<string, { otp: string; timestamp: number; method: OTPMethod }> = new Map();

// Send OTP via Phone SMS
export async function sendSMSOTP(phoneNumber: string): Promise<OTPResponse> {
  try {
    const otp = generateOTP();
    const formattedPhone = phoneNumber.startsWith('+91') ? phoneNumber : `+91${phoneNumber}`;

    // Store OTP with expiry (5 minutes)
    otpStore.set(phoneNumber, {
      otp,
      timestamp: Date.now(),
      method: 'sms',
    });

    // Development mode - show alert
    if (process.env.NODE_ENV === 'development' || !process.env.TWILIO_ACCOUNT_SID) {
      console.log(`[DEV MODE] SMS OTP for ${formattedPhone}: ${otp}`);
      alert(`[DEV MODE] Your SMS OTP is: ${otp}\n\nThis will be sent via SMS in production.`);
      return {
        success: true,
        message: 'OTP sent successfully (dev mode)',
      };
    }

    // Production mode - Send via Twilio SMS API
    const apiUrl = '/api/send-sms-otp';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: formattedPhone, otp }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'OTP sent to your phone via SMS',
        sid: data.sid,
      };
    } else {
      throw new Error(data.message || 'Failed to send SMS OTP');
    }
  } catch (error) {
    console.error('Error sending SMS OTP:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send SMS OTP',
    };
  }
}

// Send OTP via WhatsApp
export async function sendWhatsAppOTP(phoneNumber: string): Promise<OTPResponse> {
  try {
    const otp = generateOTP();
    const formattedPhone = phoneNumber.startsWith('+91') ? phoneNumber : `+91${phoneNumber}`;

    // Store OTP with expiry (5 minutes)
    otpStore.set(phoneNumber, {
      otp,
      timestamp: Date.now(),
      method: 'whatsapp',
    });

    // Development mode - show alert
    if (process.env.NODE_ENV === 'development' || !process.env.TWILIO_ACCOUNT_SID) {
      console.log(`[DEV MODE] WhatsApp OTP for ${formattedPhone}: ${otp}`);
      alert(`[DEV MODE] Your WhatsApp OTP is: ${otp}\n\nThis will be sent via WhatsApp in production.`);
      return {
        success: true,
        message: 'OTP sent successfully (dev mode)',
      };
    }

    // Production mode - Send via Twilio WhatsApp API
    const apiUrl = '/api/send-whatsapp-otp';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: formattedPhone, otp }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'OTP sent to your WhatsApp',
        sid: data.sid,
      };
    } else {
      throw new Error(data.message || 'Failed to send WhatsApp OTP');
    }
  } catch (error) {
    console.error('Error sending WhatsApp OTP:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send WhatsApp OTP',
    };
  }
}

// Send OTP via Email
export async function sendEmailOTP(email: string, phoneNumber?: string): Promise<OTPResponse> {
  try {
    const otp = generateOTP();
    const key = email || phoneNumber || '';

    // Store OTP with expiry (5 minutes)
    otpStore.set(key, {
      otp,
      timestamp: Date.now(),
      method: 'email',
    });

    // Development mode - show alert
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV MODE] Email OTP for ${email}: ${otp}`);
      alert(`[DEV MODE] Your Email OTP is: ${otp}\n\nThis will be sent via Email in production.`);
      return {
        success: true,
        message: 'OTP sent successfully (dev mode)',
      };
    }

    // Production mode - Send via Email API
    const apiUrl = '/api/send-email-otp';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: email, otp }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'OTP sent to your email',
      };
    } else {
      throw new Error(data.message || 'Failed to send email OTP');
    }
  } catch (error) {
    console.error('Error sending Email OTP:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email OTP',
    };
  }
}

// Verify OTP (works for all methods)
export function verifyOTP(identifier: string, otp: string): boolean {
  const stored = otpStore.get(identifier);

  if (!stored) {
    return false;
  }

  // Check if OTP expired (5 minutes)
  const fiveMinutes = 5 * 60 * 1000;
  if (Date.now() - stored.timestamp > fiveMinutes) {
    otpStore.delete(identifier);
    return false;
  }

  // Verify OTP
  if (stored.otp === otp) {
    otpStore.delete(identifier);
    return true;
  }

  return false;
}

// Clear expired OTPs (call this periodically)
export function clearExpiredOTPs() {
  const fiveMinutes = 5 * 60 * 1000;
  const now = Date.now();

  otpStore.forEach((value, key) => {
    if (now - value.timestamp > fiveMinutes) {
      otpStore.delete(key);
    }
  });
}
