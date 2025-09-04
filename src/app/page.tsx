"use client"

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Home</h1>
        <p className="text-gray-600">Welcome to your dashboard</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Dashboard Overview</h2>
        <p className="text-gray-500">
          Here you can manage all your activities and view important information.
        </p>
      </div>
    </div>
  );
}