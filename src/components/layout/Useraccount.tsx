"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react"

export default function AccountDropdown({alignment}: {alignment: "center" | "start" | "end"}) {
  return (
    <DropdownMenu>  
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300 flex-shrink-0">
          {/* Avatar - Mobile optimized */}
          <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" /> 
        </button>
      </DropdownMenuTrigger>

      {/* Dropdown Content - Mobile optimized */}
      <DropdownMenuContent align={alignment} className="w-28 sm:w-36 md:w-44 lg:w-52 shadow-lg border border-gray-200 rounded-md bg-white z-50">
        <DropdownMenuLabel className="text-gray-600 text-xs sm:text-sm font-medium px-2 py-1.5">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition text-xs sm:text-sm px-2 py-1.5 cursor-pointer">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition text-xs sm:text-sm px-2 py-1.5 cursor-pointer">
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition text-xs sm:text-sm px-2 py-1.5 cursor-pointer">
          Team
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600 hover:bg-red-50 rounded-md transition text-xs sm:text-sm px-2 py-1.5 cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
