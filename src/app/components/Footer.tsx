import logoImg from "figma:asset/eb512c399380dc0d7f2c91ba581d523880a08201.png";
import { Instagram, Facebook, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src={logoImg}
                alt="VisvasaHome"
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)", maxWidth: "180px" }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-2">
              India's trusted local services ecosystem. Connecting communities with verified professionals — from home repair and cleaning to beauty, wellness, and annual maintenance contracts.
            </p>
            <p className="text-xs text-gray-500 mb-6 italic">
              Founded by Kunal Mittal · Jaipur, India · Est. 2022
            </p>
            <div className="space-y-2 mb-6">
              <a href="tel:+919057567160" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 905 7567 160
              </a>
              <a href="mailto:contact@visvasahome.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                contact@visvasahome.com
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Jaipur, Rajasthan, India
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/visvasa_home_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Visvasaheritage/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@visvasahomes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/110911374/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">For Customers</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('get-started-customer')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Book a Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="text-gray-400 hover:text-white transition-colors text-left">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('amc-home')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Home AMC Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="text-gray-400 hover:text-white transition-colors text-left">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Customer Support
                </button>
              </li>
            </ul>
          </div>

          {/* For Contractors */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">For Professionals</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('join-professional')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Join as Professional
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('register-contractor')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Register as Contractor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('benefits')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Benefits & Earnings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('training-support')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Training & Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('success-stories')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('about-us')} className="text-gray-400 hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('our-mission')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Our Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Tips & Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy-policy')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* AMC Plans Quick Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-4 font-medium">AMC Plans</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Home AMC', page: 'amc-home' },
              { label: 'Office AMC', page: 'amc-office' },
              { label: 'Commercial AMC', page: 'amc-commercial' },
              { label: 'Industrial AMC', page: 'amc-industrial' },
              { label: 'Healthcare AMC', page: 'amc-healthcare' },
              { label: 'Educational AMC', page: 'amc-educational' },
              { label: 'Hospitality AMC', page: 'amc-hospitality' },
              { label: 'Society AMC', page: 'amc-society' },
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            <p>&copy; 2025 VisvasaHome (Visvasa Pvt. Ltd.). All rights reserved.</p>
            <p className="mt-1">Founded by Kunal Mittal · Reliable · Transparent · Local-First · Quality-Driven</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('privacy-policy')} className="hover:text-gray-300 transition-colors">Privacy Policy</button>
            <span>·</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-gray-300 transition-colors">Terms of Service</button>
            <span>·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-gray-300 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
