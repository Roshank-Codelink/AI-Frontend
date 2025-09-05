

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
      <DropdownMenuTrigger asChild>
        <button className="relative p-1 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300 flex-shrink-0">
          <Image
            src={bell}
            alt="Notification"
            width={20}
            height={20}
            className="sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
          {/* Notification Badge - Mobile optimized */}
          <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-red-500 text-white text-[8px] sm:text-[9px] md:text-[10px] w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-semibold">
            3
          </span>
        </button>
      </DropdownMenuTrigger>

      {/* Dropdown Content - Mobile optimized */}
      <DropdownMenuContent align="end" className="w-36 sm:w-44 md:w-52 lg:w-60 shadow-lg border border-gray-200 rounded-md bg-white p-2 z-50">
        <DropdownMenuLabel className="text-gray-600 text-xs sm:text-sm font-medium">Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition text-xs sm:text-sm px-2 py-1.5 cursor-pointer">
          New message from John
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition text-xs sm:text-sm px-2 py-1.5 cursor-pointer">
          Project deadline approaching
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 rounded-md transition text-xs sm:text-sm px-2 py-1.5 cursor-pointer">
          Subscription renewed
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
