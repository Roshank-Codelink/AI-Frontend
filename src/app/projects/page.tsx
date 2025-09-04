"use client"

export default function Project() {
  return (
    <div className="w-full h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Projects</h1>
        <p className="text-gray-600">Manage your projects and tasks</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Project List</h2>
        <p className="text-gray-500">
          Your projects and tasks will appear here. Manage and track your work progress.
        </p>
      </div>
    </div>
  )
}