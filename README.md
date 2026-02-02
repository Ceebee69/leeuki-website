# Leeuki Website

A modern Next.js website for Leeuki - Retail Intelligence & Consulting services.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
leeuki-website/
├── app/
│   ├── layout.js (Root layout with header/footer)
│   ├── page.js (Homepage)
│   ├── services/
│   │   ├── consulting/page.js (Class 035)
│   │   ├── retail-intelligence/page.js (Class 042 - SaaS)
│   │   └── insight-bot/page.js (Class 042 - Chatbot)
│   ├── pricing/page.js
│   ├── about/page.js
│   └── contact/page.js
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── ServiceCard.js
└── public/
    └── specimens/ (mockup images)
```

## Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality
- ✅ Responsive design
- ✅ Service pages for each offering
- ✅ Pricing page
- ✅ Contact form
- ✅ About page

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
