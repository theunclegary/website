# The Uncle Garry (TUG) Music Website

A professional website for Garry Washington (The Uncle Garry), featuring music releases, book sales, and personal content.

## Features

- **Music Releases**: Showcase of TUG's musical works
- **Book Sales**: E-commerce integration for "My Long Journey Home"
- **Photo Gallery**: Visual journey through TUG's experiences
- **Video Content**: Performances and behind-the-scenes content
- **Anthology**: Collection of stories and insights
- **Contact Forms**: Professional inquiry handling

## E-commerce Setup

This site includes Stripe integration for secure book sales. To set up payments:

### 1. Get Stripe Keys

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the [Developers section](https://dashboard.stripe.com/apikeys)
3. Copy your Publishable Key and Secret Key

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key
REACT_APP_DOMAIN=https://theunclegarry.com
```

### 3. Backend Setup Required

To complete the e-commerce functionality, you'll need to set up a backend server to handle:

- Creating Stripe checkout sessions
- Processing webhooks
- Managing orders
- Sending confirmation emails

Example backend endpoints needed:
- `POST /api/create-checkout-session`
- `POST /api/webhook` (for Stripe webhooks)

### 4. Test the Integration

1. Use Stripe's test card numbers for testing
2. Test card: `4242 4242 4242 4242`
3. Use any future expiry date and any 3-digit CVC

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is configured for deployment to Netlify with custom domain support.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Payments**: Stripe
- **Build Tool**: Vite

## Support

For questions about the website or technical issues, contact through the website's contact form.