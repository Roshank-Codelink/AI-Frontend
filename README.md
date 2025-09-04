# AI-Frontend

A modern Next.js application with dynamic sidebar navigation and responsive design.

## Features

- ✅ **Dynamic Sidebar Navigation** - URL-based active states
- ✅ **Responsive Design** - Mobile and desktop support
- ✅ **Modern UI** - Clean and professional interface
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Home page
│   ├── projects/page.tsx   # Projects page
│   ├── summary/page.tsx    # Summary page
│   └── payout/page.tsx     # Payout page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Dynamic header
│   │   ├── LeftSidebar.tsx # Navigation sidebar
│   │   ├── Notification.tsx
│   │   └── Useraccount.tsx
│   └── ui/
│       ├── dropdown-menu.tsx
│       └── tooltip.tsx
└── lib/
    └── utils.ts
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Radix UI** - UI components

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.