import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_stripe_publishable_key_here';

export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export interface CheckoutSessionData {
  format: string;
  quantity: number;
  price: number;
  title: string;
}

export const createCheckoutSession = async (data: CheckoutSessionData) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export const redirectToCheckout = async (sessionId: string) => {
  const stripe = await stripePromise;
  
  if (!stripe) {
    throw new Error('Stripe failed to initialize');
  }

  const result = await stripe.redirectToCheckout({
    sessionId,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
};