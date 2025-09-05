"use client"

import { Search, Filter, Download } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function EmployeeContent() {
    const employees = [
        {
            id: 1,
            name: "Mrs. Shawna Franey",
            email: "Charlene42@hotmail.com",
            role: "Project Manager",
            avatar: "SF",
            status: "Active"
        },
        {
            id: 2,
            name: "Ollie Bayer MD",
            email: "Johan49@yahoo.com",
            role: "Content Writer",
            avatar: "OB",
            status: "Active"
        },
        {
            id: 3,
            name: "Jennie Kris",
            email: "Mathias92@gmail.com",
            role: "Business Analyst",
            avatar: "JK",
            status: "Active"
        },
        {
            id: 4,
            name: "Neal Harvey",
            email: "Lizeth.Sanford@yahoo.com",
            role: "UI/UX Designer",
            avatar: "NH",
            status: "On Leave"
        },
        {
            id: 5,
            name: "Chris Cruickshank",
            email: "Harley18@gmail.com",
            role: "Business Analyst",
            avatar: "CC",
            status: "Active"
        },
        {
            id: 6,
            name: "Erma DuBuque I",
            email: "Ross1@yahoo.com",
            role: "Product Owner",
            avatar: "ED",
            status: "Active"
        },
        {
            id: 7,
            name: "Miss Elaine Kemmer",
            email: "Garland_Harris18@hotmail.com",
            role: "Business Analyst",
            avatar: "EK",
            status: "Active"
        },
        {
            id: 8,
            name: "Dianne Hills",
            email: "Coby66@yahoo.com",
            role: "Product Owner",
            avatar: "DH",
            status: "Active"
        },
        // Add more for testing scroll
        {
            id: 9,
            name: "John Smith",
            email: "john@company.com",
            role: "Developer",
            avatar: "JS",
            status: "Active"
        },
        {
            id: 10,
            name: "Jane Doe",
            email: "jane@company.com",
            role: "Designer",
            avatar: "JD",
            status: "Active"
        },
        {
            id: 11,
            name: "Mike Wilson",
            email: "mike@company.com",
            role: "Manager",
            avatar: "MW",
            status: "Active"
        },
        {
            id: 12,
            name: "Sarah Johnson",
            email: "sarah@company.com",
            role: "Analyst",
            avatar: "SJ",
            status: "Active"
        }
    ];

    return (
        <div className="p-4 sm:p-6">
            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search employees here..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Employee List</CardTitle>
                    <CardDescription>Manage your team members</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-semibold">Profile Picture</th>
                                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                                    <th className="text-left py-3 px-4 font-semibold">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={employee.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <td className="py-3 px-4">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-blue-600 text-sm font-medium">{employee.avatar}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 font-medium">{employee.name}</td>
                                        <td className="py-3 px-4 text-gray-600">{employee.email}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                employee.status === 'Active' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {employee.role}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 