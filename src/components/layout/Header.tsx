"use client"

import { usePathname } from "next/navigation";
import Notification from "./Notification"
import AccountDropdown from "./Useraccount"

export default function Header() {
  const pathname = usePathname();
  const title = pathname.split("/")[1];

  return (
    <header className="w-full h-16 bg-[#f8f9fa] border-b border-[#ddd]/40 px-2 sm:px-3 md:px-4 lg:px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Title - Fully responsive */}
      <h1 className="text-[#ff8d4f] text-sm sm:text-base md:text-lg lg:text-xl font-bold truncate flex-1 min-w-0 mr-2">
        {title || "dashboard"}
      </h1> 

      {/* Right section: Notification + Account (Mobile only) */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 flex-shrink-0 pr-3 sm:pr-4">
        <Notification />
        {/* Account Dropdown - Only visible on mobile */}
        <div className="md:hidden">
          <AccountDropdown alignment="end" />
        </div>
      </div>
    </header> 
  )
}
