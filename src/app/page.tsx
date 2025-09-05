"use client"

import ProjectTaps from "@/components/ProjectCom/ProjectTaps"

export default function HomePage() {
  return (
    <div className="w-full h-full p-2 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">Home</h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">Welcome to your dashboard</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6 lg:p-8 mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4 md:mb-5">Dashboard Overview</h2>
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