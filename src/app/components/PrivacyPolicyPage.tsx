import { ArrowLeft, Shield } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PrivacyPolicyPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onBack, onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header
        onRegisterContractor={() => onNavigate('register-contractor')}
        onBookService={() => onNavigate('get-started-customer')}
        selectedLocation={null}
        onLocationSelect={() => {}}
        onAMCOffice={() => onNavigate('amc-office')}
        onAMCHome={() => onNavigate('amc-home')}
        onAMCCommercial={() => onNavigate('amc-commercial')}
        onAMCIndustrial={() => onNavigate('amc-industrial')}
        onAMCHealthcare={() => onNavigate('amc-healthcare')}
        onAMCEducational={() => onNavigate('amc-educational')}
        onAMCHospitality={() => onNavigate('amc-hospitality')}
        onAMCSociety={() => onNavigate('amc-society')}
        onHome={onBack}
      />

      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
          </div>
          <p className="text-blue-100">Last updated: April 2025 | Effective for all users of www.visvasahome.com</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Summary:</strong> VisvasaHome collects only the information necessary to provide our services. We do not sell your personal data. We use your information to connect you with verified professionals, manage bookings, and improve our platform. You have the right to access, correct, and delete your data.
              </p>
            </div>

            {[
              {
                title: '1. Who We Are',
                content: `VisvasaHome (operated by Visvasa Pvt. Ltd.) is a local services platform based in Jaipur, Rajasthan, India. We connect customers with verified local professionals for home maintenance, repair, cleaning, beauty, wellness, and other services. Our website is www.visvasahome.com and we can be reached at contact@visvasahome.com or +91 905 7567 160.`,
              },
              {
                title: '2. Information We Collect',
                content: `When you use VisvasaHome, we may collect the following types of information:

• Personal Information: Your name, phone number, and email address when you make a booking, register an account, or contact us.
• Service Information: The type of service required, your location (city/area), preferred scheduling, and service history.
• Professional Information (for contractors): Identification documents, certifications, bank account details, and work history.
• Usage Data: How you interact with our website, including pages visited and time spent (collected via standard analytics tools).
• Communication Records: WhatsApp messages, call records, and contact form submissions for support and quality assurance purposes.

We do not collect payment card data. Payments are processed through secure third-party payment gateways.`,
              },
              {
                title: '3. How We Use Your Information',
                content: `We use the information we collect to:

• Process and manage your service bookings
• Match you with the most suitable verified professional in your area
• Confirm appointments and send service reminders
• Handle customer support requests and complaints
• Verify the identity and credentials of service professionals
• Process payments and maintain billing records
• Improve our platform, services, and matching algorithms
• Send relevant service updates (you can opt out at any time)
• Comply with applicable Indian laws and regulatory requirements

We do not use your data for unsolicited marketing, sell it to third parties, or share it with advertisers.`,
              },
              {
                title: '4. How We Share Your Information',
                content: `We share information only as necessary to provide services:

• With Service Professionals: We share your name, contact number, and service address with the professional assigned to your booking so they can contact you and complete the job.
• With Payment Processors: Payment information is securely handled by our third-party payment partners (e.g., Razorpay). We do not store card details.
• With Analytics Tools: We use privacy-compliant analytics to understand website usage patterns. This data is anonymized.
• Legal Requirements: We may disclose information if required by Indian law, court order, or regulatory authority.

We never sell, rent, or trade your personal information to any third party for commercial purposes.`,
              },
              {
                title: '5. Data Retention',
                content: `We retain your personal data for as long as your account is active or as needed to provide services. Booking records are retained for 7 years as required by Indian accounting and tax regulations. You may request deletion of your account and associated data at any time by contacting contact@visvasahome.com, subject to legal retention requirements.`,
              },
              {
                title: '6. Your Rights',
                content: `As a user of VisvasaHome, you have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate information
• Request deletion of your account and personal data (subject to legal obligations)
• Opt out of marketing communications at any time
• Withdraw consent for data processing where consent is the legal basis

To exercise these rights, email us at contact@visvasahome.com with your name and request. We will respond within 30 days.`,
              },
              {
                title: '7. Security',
                content: `We take appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include HTTPS encryption for all data transmission, restricted access to personal data within our team, secure storage systems, and regular security reviews. No system is 100% secure; if you suspect a security issue, please contact us immediately.`,
              },
              {
                title: '8. Cookies and Tracking',
                content: `Our website uses essential cookies for functionality (e.g., maintaining your session) and analytics cookies to understand how users interact with our platform. You can disable cookies through your browser settings. Disabling essential cookies may affect the functionality of the website.`,
              },
              {
                title: '9. Children\'s Privacy',
                content: `VisvasaHome services are not directed at children under 18 years of age. We do not knowingly collect personal information from minors. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
              },
              {
                title: '10. Changes to This Policy',
                content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Significant changes will be notified via email or a prominent notice on our website. Continued use of VisvasaHome after policy changes constitutes acceptance of the updated terms.`,
              },
              {
                title: '11. Contact Us',
                content: `For any privacy-related questions, data requests, or concerns, contact us at:\n\nEmail: contact@visvasahome.com\nPhone: +91 905 7567 160\nAddress: VisvasaHome (Visvasa Pvt. Ltd.), Jaipur, Rajasthan, India`,
              },
            ].map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={(page: any) => onNavigate(page)} />
    </div>
  );
}
