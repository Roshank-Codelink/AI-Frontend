"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react" // User icon

export default function AccountDropdown() {


  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer">
          {/* Static avatar with icon */}
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
            <User className="w-4 h-4" /> 
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-10 shadow-lg border border-gray-200 rounded-md bg-white p-2">
        <DropdownMenuLabel className="text-gray-600 text-sm">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition">Profile</DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition">Billing</DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition">Team</DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
