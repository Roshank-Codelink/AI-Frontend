"use client"

import Notification from "./Notification"
import AccountDropdown from "./Useraccount"

export default function Header() {
  return (
    <>
      <div className="w-full h-14 bg-[#f8f9fa] border-b border-[#ddd] px-4 flex items-center justify-between relative">
        <header className="w-full bg-[#f8f9fa] px-5 flex items-center justify-between relative">
          {/* Title */}
          <h1 className="text-[#ff8d4f] text-xl font-bold">Projects</h1>

          {/* Right section: Notification + Account */}
          <div className="flex items-center gap-4">
            <Notification />
            <AccountDropdown />
          </div>
        </header>
      </div>
    </>
  )
}
