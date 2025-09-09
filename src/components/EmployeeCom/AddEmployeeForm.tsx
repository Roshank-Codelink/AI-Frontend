"use client"

import { useState } from "react";
import { User, Mail, Phone, Calendar, Building, UserCheck, Upload, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";

export default function AddEmployeeForm() {
    const [dateOfBirth, setDateOfBirth] = useState<Date>();
    const [joinDate, setJoinDate] = useState<Date>();

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Add New Employee</h2>
                    <p className="text-sm text-gray-500">Fill in the details to add a new team member</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Full Name *
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                placeholder="Enter full name"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                placeholder="Enter email address"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                placeholder="Enter phone number"
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Date of Birth *
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal px-3 py-2.5 h-auto border-gray-300 hover:bg-gray-50"
                                    >
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {dateOfBirth ? format(dateOfBirth, "PPP") : "Select date of birth"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <CalendarComponent
                                        mode="single"
                                        selected={dateOfBirth}
                                        onSelect={setDateOfBirth}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Role */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <UserCheck className="w-4 h-4" />
                                Role *
                            </label>
                            <Select>
                                <SelectTrigger className="w-full px-3 py-2.5 border-gray-300 focus:ring-orange-500">
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="project-manager">Project Manager</SelectItem>
                                    <SelectItem value="qa-engineer">QA Engineer</SelectItem>
                                    <SelectItem value="software-developer">Software Developer</SelectItem>
                                    <SelectItem value="ui-ux-designer">UI/UX Designer</SelectItem>
                                    <SelectItem value="data-analyst">Data Analyst</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Department */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Building className="w-4 h-4" />
                                Department *
                            </label>
                            <Select>
                                <SelectTrigger className="w-full px-3 py-2.5 border-gray-300 focus:ring-orange-500">
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="engineering">Engineering</SelectItem>
                                    <SelectItem value="product-management">Product Management</SelectItem>
                                    <SelectItem value="design">Design</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                    <SelectItem value="sales">Sales</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Join Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Join Date *
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal px-3 py-2.5 h-auto border-gray-300 hover:bg-gray-50"
                                    >
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {joinDate ? format(joinDate, "PPP") : "Select join date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <CalendarComponent
                                        mode="single"
                                        selected={joinDate}
                                        onSelect={setJoinDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Project */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                Project *
                            </label>
                            <Select>
                                <SelectTrigger className="w-full px-3 py-2.5 border-gray-300 focus:ring-orange-500">
                                    <SelectValue placeholder="Select project" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="nhs">NHS</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="finance">Finance</SelectItem>
                                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                                    <SelectItem value="technology">Technology</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Profile Image Upload */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            Profile Picture
                        </label>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                <User className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="file"
                                    id="profile-picture"
                                    accept="image/*"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="profile-picture"
                                    className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors"
                                >
                                    <Upload className="w-4 h-4 mr-2" />
                                    Upload Picture
                                </label>
                                <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                            </div>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Status</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Active"
                                    defaultChecked
                                    className="text-orange-500 focus:ring-orange-500"
                                />
                                <span className="text-sm text-gray-700">Active</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Inactive"
                                    className="text-orange-500 focus:ring-orange-500"
                                />
                                <span className="text-sm text-gray-700">Inactive</span>
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                        <Button
                            type="button"
                            variant="outline"
                            className="px-6 py-2.5"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white"
                        >
                            Add Employee
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}