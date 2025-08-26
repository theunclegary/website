import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, ShoppingCart } from 'lucide-react';

const Cancel = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            Order Cancelled
          </h1>
          <p className="text-xl text-gray-600">
            Your order was cancelled. No charges were made to your account.
          </p>
        </div>

        {/* Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">What Happened?</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Your payment was cancelled before completion. This could happen for several reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You clicked the back button or closed the payment window</li>
              <li>There was an issue with your payment method</li>
              <li>The session timed out</li>
              <li>You decided not to complete the purchase</li>
            </ul>
            <p className="font-semibold text-primary-800">
              Don't worry - no charges were made to your account.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Try Again</span>
            </Link>
            
            <Link
              to="/"
              className="inline-flex items-center space-x-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Return to Home</span>
            </Link>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>Need help? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact our support team</Link></p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Need Assistance?</h2>
          <p className="text-gray-700 mb-6">
            If you're experiencing issues with your purchase or have questions about the book, 
            we're here to help. Our support team typically responds within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>Get Help</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;