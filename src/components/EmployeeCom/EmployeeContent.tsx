"use client"

import { Search, Users, ChevronUp, ChevronDown } from "lucide-react";

import { Employees } from "@/type";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function EmployeeContent() {
    const employees: Employees[] = [
        {
            id: 25,
            name: "Amanda Henry",
            email: "amanda.henry@example.com",
            phone: "07700 107123",
            role: "User Researcher",
            avatar: "AH",
            profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            joinDate: "12/10/2023",
            project: "NHS",
            status: "Active"
        },
        {
            id: 26,
            name: "Bessie Cooper",
            email: "bessi@example.com",
            phone: "07700 900123",
            role: "QA Engineer",
            avatar: "BC",
            profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            joinDate: "11/15/2020",
            project: "NHS",
            status: "Active"
        },
        {
            id: 27,
            name: "Jenny Wilson",
            email: "jenny@example.com",
            phone: "07740 506178",
            role: "QA Engineer",
            avatar: "JW",
            profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            joinDate: "12/09/2022",
            project: "NHS",
            status: "Active"
        },
        {
            id: 28,
            name: "John Wilson",
            email: "john@example.com",
            phone: "07790 206321",
            role: "User Researcher",
            avatar: "JW",
            profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            joinDate: "12/09/2022",
            project: "NHS",
            status: "Active"
        },
        {
            id: 29,
            name: "Mrs. Shawna Franey",
            email: "Charlene42@hotmail.com",
            phone: "07700 123456",
            role: "Project Manager",
            avatar: "SF",
            profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
            joinDate: "01/15/2023",
            project: "Healthcare",
            status: "Active"
        },
      
        {
            id: 31,
            name: "Jennie Kris",
            email: "Mathias92@gmail.com",
            phone: "07700 345678",
            role: "Business Analyst",
            avatar: "JK",
            profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
            joinDate: "05/10/2023",
            project: "Finance",
            status: "Active"
        },
        
     
      
    ];

    return (
        <div className="p-4 sm:p-6">
            {/* Search Bar */}


            {/* Employee Cards - Responsive on all screens */}
            <div className="w-full mb-4">
                <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto sm:h-[80px] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="bg-white w-full sm:w-[48%] h-[80px] p-3 sm:p-4 grid grid-cols-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                        </div>
                        <div className="col-span-2 flex flex-col items-start justify-center">
                            <h1 className="text-[13px] sm:text-[15px] text-gray-600 font-medium">Total Employee</h1>
                            <p className="text-[18px] sm:text-[22px] text-gray-800 font-bold">100</p>
                        </div>
                    </div>
                    <div className="bg-white w-full sm:w-[48%] h-[80px] p-3 sm:p-4 grid grid-cols-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                        </div>
                        <div className="col-span-2 flex flex-col items-start justify-center">
                            <h1 className="text-[13px] sm:text-[15px] text-gray-600 font-medium">Active Employee</h1>
                            <p className="text-[18px] sm:text-[22px] text-gray-800 font-bold">85</p>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="employee-list w-full h-[450px] ">
                <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100">
                    <Table>
                        <TableCaption>A list of all employees in the organization.</TableCaption>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="w-[80px] text-center">
                                    <div className="flex items-center justify-center gap-1">
                                        ID
                                        
                                    </div>
                                </TableHead>
                                <TableHead className="min-w-[250px]">
                                    <div className="flex items-center gap-1">
                                        Name
                                        
                                    </div>
                                </TableHead>
                                <TableHead className="min-w-[150px]">
                                    <div className="flex items-center gap-1">
                                        Role
                                        
                                    </div>
                                </TableHead>
                                <TableHead className="min-w-[200px]">
                                    <div className="flex items-center gap-1">
                                        Phone no / Email
                                   
                                    </div>
                                </TableHead>
                             
                                <TableHead className="w-[120px] text-center">
                                    <div className="flex items-center justify-center gap-1">
                                        Status
                                     
                                    </div>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {employees.map((employee) => (
                                <TableRow key={employee.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                    <TableCell className="text-center text-gray-600 font-medium">
                                        {employee.id}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                                <img 
                                                    src={employee.profileImage} 
                                                    alt={employee.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm hidden">
                                                    {employee.avatar}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">{employee.name}</div>
                                                <div className="text-sm text-gray-500">{employee.joinDate}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-gray-700">
                                        {employee.role}
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-gray-600">
                                            <div className="font-medium">{employee.phone}</div>
                                            <div className="text-sm text-gray-500">{employee.email}</div>
                                        </div>
                                    </TableCell>
                                 
                                    <TableCell className="text-center">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            employee.status === 'Active' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                                employee.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                                            }`}></div>
                                            {employee.status}
                                        </span>
                                    </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
} 