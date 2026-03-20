interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">Visvasahome</h3>
            <p className="text-sm">
              Complete service ecosystem. Local-first execution.
              Community-first values.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Browse Services
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('get-started-customer')}
                  className="hover:text-white transition-colors text-left"
                >
                  Book a Service
                </button>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">For Contractors</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('join-professional')}
                  className="hover:text-white transition-colors text-left"
                >
                  Join as Professional
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('benefits')}
                  className="hover:text-white transition-colors text-left"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('training-support')}
                  className="hover:text-white transition-colors text-left"
                >
                  Training & Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('success-stories')}
                  className="hover:text-white transition-colors text-left"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@visvasahome.com"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="tel:+919057567160"
                  className="hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; 2025 VisvasaHome. All rights reserved.
            Building communities, not just platforms.
          </p>
        </div>
      </div>
    </footer>
  );
}