"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import Notification from "./Notification"
import AccountDropdown from "./Useraccount"

export default function Header() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  
  // Split the path to separate main section and sub-section
  const pathParts = pathname.split("/").filter(part => part !== "");
  const mainSection = pathParts[0] || "dashboard";
  const subSection = pathParts[1];

  return (
    <header className="w-full h-16 bg-custom-light-bg border-b border-custom-light-border/40 px-2 sm:px-3 md:px-4 lg:px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Title - Dynamic navigation */}
      <div className="flex-1 min-w-0 mr-2">
        <h1 className="text-primary-500 text-sm sm:text-base md:text-lg lg:text-xl font-bold truncate">
          {/* Main section - clickable to go to main page */}
          <Link href={`/${mainSection}`} className="cursor-pointer capitalize hover:text-primary-600 transition-colors">
            {mainSection}
            
          </Link>
          
       
          {subSection && (
            <span className="text-custom-black text-[12px] font-normal ml-2">
              <Link href={pathname} className="cursor-pointer capitalize hover:text-gray-700 transition-colors">
                / {subSection}
              </Link>
            </span>
          )}
        </h1>
      </div>

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
