import { useState } from 'react';
import { Phone, ArrowRight, Shield, CheckCircle, AlertCircle, Mail, MessageCircle } from 'lucide-react';
import { sendSMSOTP, sendWhatsAppOTP, sendEmailOTP, verifyOTP, type OTPMethod } from '../utils/otpService';

interface AuthPageProps {
  onLoginSuccess: (phoneNumber: string) => void;
  onBack: () => void;
}

export function AuthPage({ onLoginSuccess, onBack }: AuthPageProps) {
  const [step, setStep] = useState<'phone' | 'method' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<OTPMethod | null>(null);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate phone number (Indian format)
    if (phoneNumber.length !== 10 || !/^[6-9]\d{9}$/.test(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setStep('method');
  };

  const handleMethodSelect = async (method: OTPMethod) => {
    setSelectedMethod(method);
    setError('');
    setSuccess('');

    // If email method is selected and email is not provided, ask for email
    if (method === 'email' && !email) {
      const userEmail = prompt('Please enter your email address:');
      if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        setError('Please enter a valid email address');
        return;
      }
      setEmail(userEmail);
    }

    setLoading(true);

    try {
      let response;

      if (method === 'sms') {
        response = await sendSMSOTP(phoneNumber);
      } else if (method === 'whatsapp') {
        response = await sendWhatsAppOTP(phoneNumber);
      } else if (method === 'email') {
        response = await sendEmailOTP(email, phoneNumber);
      }

      if (response && response.success) {
        setSuccess(response.message);
        setStep('otp');
      } else {
        setError(response?.message || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('OTP error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter complete 6-digit OTP');
      return;
    }

    setLoading(true);

    // Verify OTP - use email if email method was selected, otherwise phone
    const identifier = selectedMethod === 'email' ? email : phoneNumber;
    const isValid = verifyOTP(identifier, otpValue);

    setLoading(false);

    if (isValid) {
      setSuccess('Verification successful! Logging you in...');
      setTimeout(() => {
        onLoginSuccess(phoneNumber);
      }, 500);
    } else {
      setError('Invalid or expired OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
      // Focus first OTP input
      document.getElementById('otp-0')?.focus();
    }
  };

  const handleResendOtp = async () => {
    if (!selectedMethod) return;

    setOtp(['', '', '', '', '', '']);
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      let response;

      if (selectedMethod === 'sms') {
        response = await sendSMSOTP(phoneNumber);
      } else if (selectedMethod === 'whatsapp') {
        response = await sendWhatsAppOTP(phoneNumber);
      } else if (selectedMethod === 'email') {
        response = await sendEmailOTP(email, phoneNumber);
      }

      if (response && response.success) {
        setSuccess('OTP resent successfully!');
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(response?.message || 'Failed to resend OTP');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getMethodLabel = () => {
    if (selectedMethod === 'sms') return `SMS to +91 ${phoneNumber}`;
    if (selectedMethod === 'whatsapp') return `WhatsApp to +91 ${phoneNumber}`;
    if (selectedMethod === 'email') return `Email to ${email}`;
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={onBack}
                className="text-blue-100 hover:text-white transition-colors"
              >
                ← Back
              </button>
              <Shield className="w-6 h-6 text-blue-200" />
            </div>
            <h1 className="text-2xl font-bold mb-2">
              {step === 'phone' ? 'Login / Sign Up' : step === 'method' ? 'Choose OTP Method' : 'Verify OTP'}
            </h1>
            <p className="text-blue-100 text-sm">
              {step === 'phone'
                ? 'Enter your mobile number to continue'
                : step === 'method'
                ? 'Select how you want to receive your OTP'
                : `OTP sent via ${getMethodLabel()}`}
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm font-medium">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm font-medium">{success}</p>
              </div>
            )}

            {/* Step 1: Phone Number */}
            {step === 'phone' && (
              <form onSubmit={handlePhoneSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">+91</span>
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Enter 10-digit number"
                      className="w-full pl-24 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none text-lg font-medium"
                      maxLength={10}
                      autoFocus
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    We'll send you a one-time password (OTP)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading || phoneNumber.length !== 10}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">100% Secure</p>
                      <p className="text-xs text-gray-600">Your data is encrypted and protected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">No Spam</p>
                      <p className="text-xs text-gray-600">We never share your number</p>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* Step 2: Choose Method */}
            {step === 'method' && (
              <div>
                <div className="mb-6">
                  <p className="text-center text-gray-700 font-semibold mb-2">
                    Mobile: +91 {phoneNumber}
                  </p>
                  <p className="text-center text-sm text-gray-500 mb-6">
                    Choose your preferred method to receive OTP
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Phone SMS */}
                  <button
                    onClick={() => handleMethodSelect('sms')}
                    disabled={loading}
                    className="w-full p-5 border-2 border-blue-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Phone className="w-7 h-7 text-blue-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-bold text-gray-900 mb-1">Phone SMS</p>
                      <p className="text-sm text-gray-600">Receive OTP via SMS</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                  </button>

                  {/* WhatsApp */}
                  <button
                    onClick={() => handleMethodSelect('whatsapp')}
                    disabled={loading}
                    className="w-full p-5 border-2 border-green-200 rounded-xl hover:border-green-600 hover:bg-green-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <MessageCircle className="w-7 h-7 text-green-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-bold text-gray-900 mb-1">WhatsApp</p>
                      <p className="text-sm text-gray-600">Receive OTP on WhatsApp</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                  </button>

                  {/* Email */}
                  <button
                    onClick={() => handleMethodSelect('email')}
                    disabled={loading}
                    className="w-full p-5 border-2 border-orange-200 rounded-xl hover:border-orange-600 hover:bg-orange-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <Mail className="w-7 h-7 text-orange-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-bold text-gray-900 mb-1">Email</p>
                      <p className="text-sm text-gray-600">Receive OTP on your email</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setStep('phone');
                    setError('');
                  }}
                  className="w-full mt-6 text-gray-600 hover:text-gray-900 py-3 text-sm font-medium"
                >
                  ← Change Mobile Number
                </button>
              </div>
            )}

            {/* Step 3: OTP Verification */}
            {step === 'otp' && (
              <form onSubmit={handleOtpSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-4">
                    Enter 6-Digit OTP
                  </label>
                  <div className="flex gap-2 justify-between">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                        maxLength={1}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Didn't receive OTP?</p>
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={loading}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 disabled:text-gray-400"
                    >
                      Resend OTP
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || otp.join('').length !== 6}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Verify & Continue
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep('method');
                    setOtp(['', '', '', '', '', '']);
                    setError('');
                  }}
                  className="w-full mt-3 text-gray-600 hover:text-gray-900 py-3 text-sm font-medium"
                >
                  ← Change OTP Method
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-blue-100 text-xs mt-6 px-4">
          By continuing, you agree to VisvasaHome's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
