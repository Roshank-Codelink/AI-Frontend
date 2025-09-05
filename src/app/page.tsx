"use client"

import ProjectTaps from "@/components/ProjectCom/ProjectTaps"

export default function HomePage() {
  return (
    <div className="w-full h-full p-5 sm:p-2 md:p-4 lg:p-6 overflow-x-hidden">
      <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3">Home</h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">Welcome to your dashboard</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-2 sm:p-3 md:p-4 lg:p-6 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2 sm:mb-3 md:mb-4">Dashboard Overview</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg">
          Here you can manage all your activities and view important information.
        </p>
      </div>
      
      <div className="w-full">
        <ProjectTaps />
      </div>
    </div>
  );
}