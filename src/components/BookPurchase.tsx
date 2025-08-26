import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ShoppingCart, CreditCard, Shield, Truck } from 'lucide-react';

// Initialize Stripe (you'll need to replace with your actual publishable key)
const stripePromise = loadStripe('pk_test_your_stripe_publishable_key_here');

interface BookPurchaseProps {
  book: {
    title: string;
    author: string;
    price: {
      hardcover: number;
      paperback: number;
      ebook: number;
    };
  };
}

const BookPurchase: React.FC<BookPurchaseProps> = ({ book }) => {
  const [quantity, setQuantity] = useState(1);
  const [format, setFormat] = useState('hardcover');
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    
    try {
      // Show message that backend setup is required
      alert(`E-commerce setup required!\n\nTo complete your purchase of "${book.title}" (${format}, qty: ${quantity}):\n\n1. Set up a backend server\n2. Configure Stripe API keys\n3. Implement the checkout session endpoint\n\nSee README.md for detailed setup instructions.`);
    } catch (error) {
      console.error('Purchase error:', error);
      alert('E-commerce backend not configured. Please see README.md for setup instructions.');
    } finally {
      setIsLoading(false);
    }
  };

  const totalPrice = book.price[format as keyof typeof book.price] * quantity;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-primary-800 mb-6">Purchase Options</h3>
        
        {/* Format Selection */}
        <div className="space-y-4 mb-6">
          <h4 className="font-semibold text-gray-900">Choose Format:</h4>
          {Object.entries(book.price).map(([formatType, price]) => (
            <label
              key={formatType}
              className={`block p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                format === formatType
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <input
                type="radio"
                name="format"
                value={formatType}
                checked={format === formatType}
                onChange={(e) => setFormat(e.target.value)}
                className="sr-only"
              />
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-900 capitalize">{formatType}</span>
                  {formatType === 'hardcover' && (
                    <p className="text-sm text-gray-600">Premium quality, signed by author</p>
                  )}
                  {formatType === 'paperback' && (
                    <p className="text-sm text-gray-600">Standard paperback edition</p>
                  )}
                  {formatType === 'ebook' && (
                    <p className="text-sm text-gray-600">Digital download (PDF/EPUB)</p>
                  )}
                </div>
                <span className="text-xl font-bold text-primary-600">${price.toFixed(2)}</span>
              </div>
            </label>
          ))}
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
              disabled={isLoading}
            >
              -
            </button>
            <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
              disabled={isLoading}
            >
              +
            </button>
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-primary-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center text-lg mb-2">
            <span className="font-medium">Subtotal:</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Shipping:</span>
            <span>{format === 'ebook' ? 'Digital delivery' : 'FREE'}</span>
          </div>
          <div className="border-t pt-2 flex justify-between items-center text-xl font-bold text-primary-600">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Purchase Button */}
        <button
          onClick={handlePurchase}
          disabled={isLoading}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-6 w-6" />
              <span>Buy Now - ${totalPrice.toFixed(2)}</span>
            </>
          )}
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Secure checkout powered by Stripe
        </p>
      </div>

      {/* Security & Shipping Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">Secure Payment</h4>
          <p className="text-sm text-gray-600">SSL encrypted checkout</p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">Free Shipping</h4>
          <p className="text-sm text-gray-600">On all physical books</p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <CreditCard className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">Easy Returns</h4>
          <p className="text-sm text-gray-600">30-day return policy</p>
        </div>
      </div>
    </div>
  );
};

export default BookPurchase;