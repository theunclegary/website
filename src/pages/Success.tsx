import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // In a real app, you'd fetch order details from your backend
      // For now, we'll simulate order details
      setOrderDetails({
        id: sessionId,
        title: "My Long Journey Home",
        format: "Hardcover",
        quantity: 1,
        total: 24.99,
        email: "customer@example.com"
      });
    }
  }, [sessionId]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            Thank you for your purchase. Your order has been successfully processed.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Order Summary</h2>
          
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{orderDetails.title}</h3>
                <p className="text-gray-600">{orderDetails.format} Edition</p>
                <p className="text-sm text-gray-500">Quantity: {orderDetails.quantity}</p>
              </div>
              <span className="font-bold text-primary-600">${orderDetails.total}</span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-mono text-gray-900">{orderDetails.id.slice(0, 16)}...</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-900">{orderDetails.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-semibold">Confirmed</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">What Happens Next?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-primary-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                <p className="text-gray-700">You'll receive a detailed confirmation email within the next few minutes.</p>
              </div>
            </div>
            
            {orderDetails.format === 'E-book' ? (
              <div className="flex items-start space-x-3">
                <Download className="h-6 w-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Digital Download</h3>
                  <p className="text-gray-700">Your e-book download links will be sent to your email immediately.</p>
                </div>
              </div>
            ) : (
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Shipping</h3>
                  <p className="text-gray-700">Your book will be shipped within 2-3 business days. You'll receive tracking information via email.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>Return to Home</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <div className="text-sm text-gray-600">
            <p>Questions about your order? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link></p>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center bg-primary-800 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-primary-100 text-lg">
            Your support means the world to TUG. We hope you enjoy "My Long Journey Home" 
            and find inspiration in its pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;