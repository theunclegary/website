import React from 'react';
import { Music, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">The Uncle Garry</span>
            </div>
            <p className="text-gray-300 mb-4">
              Chief Technology Officer at Tech Queen Elite Training Institute
            </p>
            <p className="text-gray-300">
              Music, Technology, and Inspiring Stories
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="/music" className="text-gray-300 hover:text-primary-400 transition-colors">Music Releases</a></li>
              <li><a href="/order" className="text-gray-300 hover:text-primary-400 transition-colors">Order Book</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@theunclegarry.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>Available via contact form</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Tech Queen Elite Training Institute</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 The Uncle Garry (TUG). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;