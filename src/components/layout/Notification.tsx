

import Image from "next/image"
import bell from '@/assets/images/bell.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Notification() {
  return (
    <DropdownMenu>
      {/* Trigger is the Bell Icon */}
      <DropdownMenuTrigger asChild>
        <button className="relative p-1 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer">
          <Image
            src={bell}
            alt="Notification"
            width={24}
            height={24}
          />
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
            3
          </span>
        </button>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent  align="end" className="w-64 shadow-lg border border-gray-200 rounded-md bg-white p-2">
        <DropdownMenuLabel className="text-gray-600 text-sm">Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition">
          New message from John
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition">
          Project deadline approaching
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition">
          Subscription renewed
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
