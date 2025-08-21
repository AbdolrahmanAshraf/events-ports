import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Team', href: 'team' },
  { label: 'Contact', href: 'contact' }
];

const Footer = () => {
  return (
    <footer className="bg-[#0C0824] py-12 backdrop-blur-md border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo/About */}
        <div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900 mb-4">
            EVENTINO
          </h3>
          <p className="text-gray-400">
            Creating unforgettable experiences with innovative event solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <ScrollLink
                  to={href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <address className="text-gray-400 not-italic">
            <p className="mb-2">
              <a href="mailto:info@eventino.com" className="hover:text-blue-400 transition-colors">
                info@eventino.com
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                +1 (234) 567-890
              </a>
            </p>
            <p>123 Event St, Creative City</p>
          </address>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition-colors"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition-colors"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} EVENTINO. All rights reserved. | 
          <a href="#" className="hover:text-blue-400 ml-2 transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;