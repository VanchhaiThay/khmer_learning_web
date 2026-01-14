// app/components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Khmer Learning</h3>
          <p className="text-gray-400 text-sm">
            Making the world a better place through constructing elegant hierarchies.
          </p>

          {/* Social Icons */}
          <div className="flex mt-4 gap-3 text-xl">
            <a href="https://web.facebook.com/zeii.nai.7547" className="hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/thayvanchhai/" className="hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaInstagram />
            </a>
            <a href="https://x.com/astragreek74048?s=21" className="hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaTwitter />
            </a>
            <a href="https://github.com/VanchhaiThay" className="hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaGithub />
            </a>
            <a href="https://t.me/Vanchhai2004" className="hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-2">Solutions</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Marketing</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Analytics</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Automation</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Commerce</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Insights</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Submit Ticket</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Guides</Link></li>
          </ul>
        </div>

        {/* Company / Legal */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Jobs</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">License</Link></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {currentYear} Khmer Learning, Inc. All rights reserved.
      </div>
    </footer>
  );
}
