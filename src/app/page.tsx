import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AppSidebar from "@/components/layout/LeftSidebar";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Frontend - Project Management",
  description: "AI-powered project management dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen w-screen">
          {/* Global Sidebar - Fixed */}
          <AppSidebar className="hidden md:flex" />

          {/* Main Content Area - No Scrolling */}
          <div className="flex flex-col flex-1 bg-gray-50 min-w-0">
            {/* Dynamic Header - Fixed */}
            <Header />

            {/* Page Content - No Scrolling */}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}