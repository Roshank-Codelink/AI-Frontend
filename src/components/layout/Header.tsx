"use client"

import Notification from "./Notification"
import AccountDropdown from "./Useraccount"

export default function Header() {
  return (
    <header className="w-full h-14 bg-[#f8f9fa] border-b border-[#ddd] px-3 sm:px-4 md:px-6 flex items-center justify-between relative min-w-0">
      {/* Title - Mobile optimized */}
      <h1 className="text-[#ff8d4f] text-sm sm:text-base md:text-lg lg:text-xl font-bold truncate flex-1 min-w-0 mr-2">
        Projects
      </h1>

      {/* Right section: Notification + Account - Mobile optimized spacing */}
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
        <div className="flex-shrink-0">
          <Notification />
        </div>
        <div className="flex-shrink-0">
          <AccountDropdown />
        </div>
      </div>
    </header>
  )
}
