import React, { useState } from 'react';
import { Book, Star, CheckCircle } from 'lucide-react';
import BookPurchase from '../components/BookPurchase';

const Order = () => {
  const bookDetails = {
    title: "My Long Journey Home",
    author: "Garry Washington (The Uncle Garry)",
    price: {
      hardcover: 24.99,
      paperback: 16.99,
      ebook: 9.99
    },
    description: "A deeply personal memoir chronicling TUG's journey through technology, music, and personal growth. This inspiring story explores the challenges and triumphs of finding one's way home through life's complexities."
  };

  const features = [
    "Personally signed by the author",
    "Exclusive behind-the-scenes content",
    "High-quality printing and binding",
    "Free shipping on pre-orders"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Order TUG's Book
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pre-order "My Long Journey Home" and be among the first to experience this inspiring story
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Book Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <img 
                src="/book cover copy.png" 
                alt="My Long Journey Home - Book Cover" 
                className="w-full max-w-sm mx-auto h-80 rounded-lg object-contain shadow-lg mb-6 bg-gray-200"
              />
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary-800">{bookDetails.title}</h2>
                <p className="text-lg text-gray-600">by {bookDetails.author}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(Pre-order - Coming Soon)</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{bookDetails.description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Form */}
          <div className="space-y-6">
            <BookPurchase book={bookDetails} />

            {/* Contact for Bulk Orders */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Bulk Orders</h3>
              <p className="mb-4">
                Looking to order multiple copies for your organization or event?
              </p>
              <button className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Contact for Bulk Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;