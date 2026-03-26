# Romero & Locksley Website

Ultra-premium, dark-luxury consulting site built with **Next.js (App Router)** and **Tailwind CSS**.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   - Create `.env.local` from `.env.example`
   - Set `NEXT_PUBLIC_BOOK_CALL_URL` to your scheduling link (e.g. Calendly).
3. Run locally:
   ```bash
   npm run dev
   ```

## Pages / Routes

- `/` Home
- `/contractors` Contractors
- `/business-owners` Business Owners

The “Book a Call” button and contact form open `NEXT_PUBLIC_BOOK_CALL_URL` in a new tab once it’s set.

