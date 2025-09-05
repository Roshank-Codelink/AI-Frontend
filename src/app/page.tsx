"use client"

import ProjectTaps from "@/components/ProjectTaps"

export default function HomePage() {
  return (
    <div className="w-full h-full p-2 sm:p-4 md:p-6 overflow-x-hidden">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Home</h1>
        <p className="text-gray-600 text-sm sm:text-base">Welcome to your dashboard</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">Dashboard Overview</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
          Here you can manage all your activities and view important information.
        </p>
      </div>
      
      <div className="w-full flex justify-center sm:justify-start">
        <div className="w-full max-w-[400px]">
          <ProjectTaps />
        </div>
      </div>
    </div>
  );
}