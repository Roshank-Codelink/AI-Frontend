"use client"

import { Search } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Employees } from "@/type";

export default function EmployeeContent() {
    const employees: Employees[] = [
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

            {/* Employee Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {employees.map((employee) => (
                    <Card key={employee.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                            <div className="flex flex-col items-center text-center space-y-3">
                                {/* Avatar */}
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 text-xl font-bold">{employee.avatar}</span>
                                </div>
                                
                                {/* Employee Info */}
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-lg">{employee.name}</h3>
                                    <p className="text-sm text-gray-600">{employee.email}</p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                        employee.status === 'Active' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {employee.role}
                                    </span>
                                </div>
                                
                                {/* Status Badge */}
                                <div className={`px-2 py-1 rounded-full text-xs ${
                                    employee.status === 'Active' 
                                        ? 'bg-green-100 text-green-700' 
                                        : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {employee.status}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
} 