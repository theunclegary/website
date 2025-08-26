import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with The Uncle Garry for collaborations, speaking engagements, or just to say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@theunclegarry.com</p>
                    <p className="text-sm text-gray-500">Best for general inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Tech Queen Elite Training Institute</p>
                    <p className="text-sm text-gray-500">Professional inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">24-48 hours</p>
                    <p className="text-sm text-gray-500">Monday through Friday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaking Engagements */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-4">Speaking Engagements</h3>
              <p className="text-gray-700 mb-4">
                Available for talks on technology leadership, music and creativity, 
                and personal development journeys.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Corporate events</li>
                <li>• Educational institutions</li>
                <li>• Technology conferences</li>
                <li>• Music industry events</li>
              </ul>
            </div>

            {/* Collaboration */}
            <div className="bg-primary-800 text-white rounded-xl p-6">
              <MessageCircle className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-4">Collaboration Opportunities</h3>
              <p className="text-primary-100">
                Interested in working together on music projects, 
                technology initiatives, or creative collaborations? 
                Let's explore the possibilities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="book">Book Related</option>
                    <option value="music">Music Project</option>
                    <option value="technology">Technology Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell me more about your inquiry..."
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                  
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How quickly do you respond to messages?</h4>
                  <p className="text-gray-700">I typically respond within 24-48 hours during business days. For urgent matters, please mention it in your subject line.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do you accept music collaboration requests?</h4>
                  <p className="text-gray-700">Yes! I'm always open to exploring creative collaborations. Please provide details about your project and vision.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Are you available for speaking engagements?</h4>
                  <p className="text-gray-700">I speak at technology conferences, educational institutions, and corporate events. Please include event details and dates in your inquiry.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">When will "My Long Journey Home" be available?</h4>
                  <p className="text-gray-700">The book is currently in production. Pre-orders are available, and you'll be notified as soon as the release date is confirmed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;