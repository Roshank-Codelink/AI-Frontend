"use client"

export default function Summary() {
  return (
    <div className="w-full h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Summary</h1>
        <p className="text-gray-600">View detailed reports and analytics</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Summary Reports</h2>
        <p className="text-gray-500">
          View detailed summaries and reports of your work and activities.
        </p>
      </div>
    </div>
  )
}