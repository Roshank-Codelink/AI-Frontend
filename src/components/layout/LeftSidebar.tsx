"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Wallet, Users } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavLinkList } from "@/type";
import AccountDropdown from "./Useraccount";

const NavLinks: NavLinkList[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Team", url: "/team", icon: Users },
  { title: "Summary", url: "/summary", icon: FileText },
  { title: "Payout", url: "/payout", icon: Wallet },
];

export default function AppSidebar({ className }: { className: string }) {
  const pathname = usePathname();

  // Function to check if a route is active
  const isActive = (url: string) => {
    if (url === "/team") {
      // Employee tab should be active for both /employee and /employee/newemployee
      return pathname === "/team" || pathname.startsWith("/team/");
    }
    return pathname === url;
  };

  return (
    <>
      {/* Desktop Vertical Sidebar */}
      <div className={`hidden md:flex h-screen w-20 bg-white border-r flex-col items-center py-6 ${className}`}>
        {/* Logo */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-300 flex items-center justify-center shadow mb-10">
          <span className="text-white font-bold text-xl">Yp</span>
        </div>

        {/* Menu Items */}
        <TooltipProvider>
          <div className="flex-1 flex flex-col gap-3">
            {NavLinks.map(({ title, url, icon: Icon }) => {
              const active = isActive(url);
              return (
                <Tooltip key={title}>
                  <TooltipTrigger asChild>
                    <Link
                      href={url}
                      className={`relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all
                        ${active ? "bg-orange-100 text-orange-600 shadow" : "text-gray-500 hover:bg-gray-100"}`}
                    >
                      <Icon size={26} />
                      {active && <span className="absolute -right-3 w-1.5 h-10 bg-orange-500 rounded-full" />}
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent
                    side="right"
                    className="relative bg-orange-500 text-white text-sm font-medium px-3 py-1.5 rounded-md shadow-md"
                  >
                    {title}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>

        {/* Account Dropdown - At Bottom of Desktop Sidebar */}
        <div className="mt-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <AccountDropdown  alignment="start" />
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="relative bg-orange-500 text-white text-sm font-medium px-3 py-1.5 rounded-md shadow-md"
              >
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Mobile Bottom Navigation - No Account Here */}
      <div className="flex md:hidden z-50 fixed bottom-0 left-0 right-0 bg-white border-t justify-around py-2 shadow-t-lg">
        {NavLinks.map(({ title, url, icon: Icon }) => {
          const active = isActive(url);
          return (
            <Link
              key={title}
              href={url}
              className={`flex flex-col items-center text-xs transition-all ${
                active ? "text-orange-600" : "text-gray-500"
              }`}
            >
              <Icon size={22} />
              <span>{title}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
