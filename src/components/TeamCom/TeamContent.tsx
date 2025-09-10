"use client"

import { Search, Users, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Edit, Trash2, Plus, Filter, Download } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

type Props = {
    onTabChange?: (value: string) => void;
};

export default function EmployeeContent({ onTabChange }: Props) {


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
        {
            id: 32,
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
        {
            id: 33,
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
        {
            id: 34,
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
        {
            id: 35,
            name: "Jennie Kris",
            email: "Mathias92@gmail.com",
            phone: "07700 345678",
            role: "Business Analyst",
            avatar: "JK",
            profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
            joinDate: "05/10/2023",
            project: "Finance",
            status: "Active"
        }
    ];
    const router = useRouter();

    const handleAddEmployee = () => {
        router.push("/team/newemployee");
    };

    return (
        <div className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 flex gap-4">
            {/* Employee Cards - Keep Current Position */}
            <div className="w-[70%]">
                <div className="w-full mb-4 sm:mb-5 md:mb-6">
                    <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[70%] flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="bg-white w-full sm:w-[48%] h-[80px] p-3 sm:p-4 grid grid-cols-4 rounded-lg shadow-sm border border-text-gray-100">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                            </div>
                            <div className="col-span-2 flex flex-col items-start justify-center">
                                <h1 className="text-xs sm:text-sm md:text-[15px] text-text-gray-600 font-medium">Total Employee</h1>
                                <p className="text-lg sm:text-xl md:text-[22px] text-text-gray-800 font-bold">100</p>
                            </div>
                        </div>
                        <div className="bg-white w-full sm:w-[49%] h-[80px] p-3 sm:p-4 grid grid-cols-4 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                            </div>
                            <div className="col-span-2 flex flex-col items-start justify-center">
                                <h1 className="text-xs sm:text-sm md:text-[15px] text-gray-600 font-medium">Active Employee</h1>
                                <p className="text-lg sm:text-xl md:text-[22px] text-gray-800 font-bold">85</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar and Filter - Modern Blue Theme */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-4xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search employees here..."
                                className="w-full pl-10 pr-4 py-2 h-10 text-sm border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 focus:bg-white transition-all duration-200"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-48 h-10 text-sm border-blue-200 bg-blue-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                                    <SelectValue placeholder="Filter by Status & Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Employees</SelectItem>
                                    <SelectItem value="active">Active Employees</SelectItem>
                                    <SelectItem value="inactive">Inactive Employees</SelectItem>
                                    <SelectItem value="researcher">User Researchers</SelectItem>
                                    <SelectItem value="engineer">QA Engineers</SelectItem>
                                    <SelectItem value="manager">Project Managers</SelectItem>
                                    <SelectItem value="analyst">Business Analysts</SelectItem>
                                    <SelectItem value="new">New This Week</SelectItem>
                                    <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Add Employee Button - Mobile & Tablet */}

                {/* Add Employee Button - Mobile & Tablet */}
                <div className="mb-3 lg:hidden flex justify-start">
                    <Button
                        onClick={handleAddEmployee}
                        className="w-auto bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium rounded-md shadow-sm transition-colors"
                    >
                        <Plus className="w-3 h-3" />
                        Add New Employee
                    </Button>
                </div>


                <div className="employee-list w-full">
                    <div className="w-full bg-white rounded-lg border border-gray-100">
                        {/* Single Responsive Table */}
                        <div>
                            <Table className="w-full">
                                <TableHeader className="lg:sticky lg:top-0 lg:z-20">
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="w-[80px] sm:w-[100px] text-center lg:bg-gray-50 lg:border-b lg:border-gray-200">
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="text-xs sm:text-sm font-semibold text-gray-700">ID</span>
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-[200px] sm:w-[250px] lg:w-[300px] lg:bg-gray-50 lg:border-b lg:border-gray-200">
                                            <div className="flex items-center gap-1">
                                                <span className="text-xs sm:text-sm font-semibold text-gray-700">Name</span>
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-[120px] sm:w-[150px] lg:w-[200px] lg:bg-gray-50 lg:border-b lg:border-gray-200">
                                            <div className="flex items-center gap-1">
                                                <span className="text-xs sm:text-sm font-semibold text-gray-700">Role</span>
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-[180px] sm:w-[220px] lg:w-[250px] lg:bg-gray-50 lg:border-b lg:border-gray-200">
                                            <div className="flex items-center gap-1">
                                                <span className="text-xs sm:text-sm font-semibold text-gray-700">Phone / Email</span>
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-[100px] sm:w-[120px] lg:w-[150px] text-center lg:bg-gray-50 lg:border-b lg:border-gray-200">
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="text-xs sm:text-sm font-semibold text-gray-700">Status</span>
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-[100px] sm:w-[120px] lg:w-[150px] text-center lg:bg-gray-50 lg:border-b lg:border-gray-200">
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="text-xs sm:text-sm font-semibold text-gray-700">Action</span>
                                            </div>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {employees.map((employee) => (
                                        <TableRow key={employee.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                            <TableCell className="w-[80px] sm:w-[100px] text-center text-gray-600 font-medium">
                                                {employee.id}
                                            </TableCell>
                                            <TableCell className="w-[200px] sm:w-[250px] lg:w-[300px]">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ">
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
                                                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm hidden">
                                                            {employee.avatar}
                                                        </div>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{employee.name}</div>
                                                        <div className="text-xs sm:text-sm text-gray-500">{employee.joinDate}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="w-[120px] sm:w-[150px] lg:w-[200px] text-gray-700 text-sm sm:text-base">
                                                {employee.role}
                                            </TableCell>
                                            <TableCell className="w-[180px] sm:w-[220px] lg:w-[250px]">
                                                <div className="text-gray-600">
                                                    <div className="font-medium text-xs sm:text-sm">{employee.phone}</div>
                                                    <div className="text-xs text-gray-500 truncate">{employee.email}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="w-[100px] sm:w-[120px] lg:w-[150px] text-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${employee.status === 'Active'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${employee.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                                                        }`}></div>
                                                    {employee.status}
                                                </span>
                                            </TableCell>
                                            <TableCell className="w-[100px] sm:w-[120px] lg:w-[150px] text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        className="p-1.5 cursor-pointer text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="Edit Employee"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        className="p-1.5 cursor-pointer text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete Employee"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>

                {/* Shadcn Pagination - Beautiful Colors */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5  border-gray-200 min-h-[85px] sm:min-h-[90px] md:min-h-[95px] lg:min-h-[100px]">
                    {/* Items per page dropdown */}
                    <div className="flex items-center gap-2 order-2 sm:order-1">
                        <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">Show</span>
                        <Select defaultValue="15">
                            <SelectTrigger className="w-16 sm:w-18 md:w-20 h-7 sm:h-8 md:h-9 text-xs sm:text-sm bg-white border-orange-200 hover:border-orange-300 focus:border-orange-500 focus:ring-orange-500/20">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-orange-200">
                                <SelectItem value="15" className="hover:bg-orange-50 focus:bg-orange-50 text-xs sm:text-sm">15</SelectItem>
                                <SelectItem value="25" className="hover:bg-orange-50 focus:bg-orange-50 text-xs sm:text-sm">25</SelectItem>
                                <SelectItem value="35" className="hover:bg-orange-50 focus:bg-orange-50 text-xs sm:text-sm">35</SelectItem>
                                <SelectItem value="50" className="hover:bg-orange-50 focus:bg-orange-50 text-xs sm:text-sm">50</SelectItem>
                            </SelectContent>
                        </Select>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">entries</span>
                    </div>

                    {/* Shadcn Pagination */}
                    <div className="order-1 sm:order-2">
                        <Pagination className="w-auto">
                            <PaginationContent className="gap-0.5 sm:gap-1">
                                <PaginationItem>
                                    <PaginationPrevious href="#" className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-auto md:px-2.5 p-0 text-xs sm:text-sm bg-white border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-colors" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-auto md:px-3 p-0 text-xs sm:text-sm bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 shadow-sm">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-auto md:px-3 p-0 text-xs sm:text-sm bg-white border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-colors">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-auto md:px-3 p-0 text-xs sm:text-sm bg-white border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-colors">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-auto md:px-2.5 p-0 text-xs sm:text-sm bg-white border-gray-300 text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-colors" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
            <div className="w-[28%] space-y-4">
                {/* Quick Stats */}
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Stats</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Total Employees</span>
                            <span className="text-lg font-bold text-orange-600">100</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Active Today</span>
                            <span className="text-lg font-bold text-green-600">85</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">New This Week</span>
                            <span className="text-lg font-bold text-blue-600">8</span>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Activity</h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">New employee added</p>
                                <p className="text-xs text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">Profile updated</p>
                                <p className="text-xs text-gray-500">4 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">Status changed</p>
                                <p className="text-xs text-gray-500">6 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
                    <div className="space-y-2">
                    
                        <Button variant="outline" className="w-full justify-start text-sm h-9">
                            <Download className="w-4 h-4 mr-2" />
                            Export Data
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-sm h-9">
                            <Filter className="w-4 h-4 mr-2" />
                            Advanced Filter
                        </Button>
                    </div>
                </div>

                {/* Team Overview */}
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Overview</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Department</span>
                            <span className="text-sm font-medium text-gray-900">Engineering</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Manager</span>
                            <span className="text-sm font-medium text-gray-900">John Doe</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Location</span>
                            <span className="text-sm font-medium text-gray-900">Remote</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Avg. Experience</span>
                            <span className="text-sm font-medium text-gray-900">3.2 years</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
} 