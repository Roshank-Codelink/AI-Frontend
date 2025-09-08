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

          {/* Main Content Area - Phone Padding Fixed */}
          <div className="flex flex-col flex-1 bg-gray-50 min-w-0 overflow-hidden pb-[50px] lg:pb-0 md:pb-0">
            {/* Dynamic Header - Fixed */}
            <Header />

            {/* Page Content - Phone Padding */}
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
