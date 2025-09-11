"use client"

import { useState } from "react";
import { User, Mail, Phone, Calendar as CalendarIcon, Upload, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";


import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";


export default function AddEmployeeForm() {
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
    const [joinDate, setJoinDate] = useState<Date | undefined>(undefined);
    const [dateOfBirthOpen, setDateOfBirthOpen] = useState(false);
    const [joinDateOpen, setJoinDateOpen] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCountry, setSelectedCountry] = useState({
        code: "+91",
        countryCode: "IN",
        name: "India"
    });

    const countries = [
        { code: "+91", countryCode: "IN", name: "India" },
        { code: "+1", countryCode: "US", name: "United States" },
        { code: "+44", countryCode: "GB", name: "United Kingdom" },
        { code: "+61", countryCode: "AU", name: "Australia" },
        { code: "+49", countryCode: "DE", name: "Germany" },
        { code: "+33", countryCode: "FR", name: "France" },
        { code: "+81", countryCode: "JP", name: "Japan" },
        { code: "+86", countryCode: "CN", name: "China" },
        { code: "+55", countryCode: "BR", name: "Brazil" },
        { code: "+7", countryCode: "RU", name: "Russia" },
        { code: "+971", countryCode: "AE", name: "UAE" },
        { code: "+966", countryCode: "SA", name: "Saudi Arabia" },
        { code: "+92", countryCode: "PK", name: "Pakistan" },
        { code: "+880", countryCode: "BD", name: "Bangladesh" },
        { code: "+94", countryCode: "LK", name: "Sri Lanka" },
        { code: "+977", countryCode: "NP", name: "Nepal" },
        { code: "+975", countryCode: "BT", name: "Bhutan" },
        { code: "+93", countryCode: "AF", name: "Afghanistan" },
        { code: "+98", countryCode: "IR", name: "Iran" },
        { code: "+90", countryCode: "TR", name: "Turkey" },
        { code: "+39", countryCode: "IT", name: "Italy" },
        { code: "+34", countryCode: "ES", name: "Spain" },
        { code: "+31", countryCode: "NL", name: "Netherlands" },
        { code: "+46", countryCode: "SE", name: "Sweden" },
        { code: "+47", countryCode: "NO", name: "Norway" },
        { code: "+45", countryCode: "DK", name: "Denmark" },
        { code: "+41", countryCode: "CH", name: "Switzerland" },
        { code: "+43", countryCode: "AT", name: "Austria" },
        { code: "+32", countryCode: "BE", name: "Belgium" },
        { code: "+351", countryCode: "PT", name: "Portugal" }
    ];

    return (
        <div className="p-3 sm:p-6">
            <div className="w-full max-w-2xl mx-auto lg:w-1/2 lg:mx-0">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-[5px] flex items-center justify-center">
                        <User className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Add New Employee</h2>
                        <p className="text-sm text-gray-500">Fill in the details to add a new team member</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <form className="space-y-6">
                        {/* Name and Email - Horizontal */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <User className="w-4 h-4 text-orange-500" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-[5px]   outline-none "
                                    placeholder="Full Name"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-orange-500" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-[5px]   outline-none "
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>

                        {/* Phone - Connected Country Code + Number */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Phone className="w-4 h-4 text-orange-500" />
                                Phone Number *
                            </label>
                            <div className="flex border border-gray-300 rounded-[5px] overflow-hidden  transition-all">
                                {/* Country Code Selector */}
                                <div className="relative">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="h-11 px-3 border-0 bg-gray-50  rounded-none border-r border-gray-300"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <ReactCountryFlag
                                                        countryCode={selectedCountry.countryCode}
                                                        svg
                                                        style={{
                                                            width: '20px',
                                                            height: '15px',
                                                            borderRadius: '2px'
                                                        }}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
                                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                                </div>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-80 p-0" align="start">
                                            <div className="max-h-60 overflow-y-auto">
                                                {countries.map((country, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setSelectedCountry(country)}
                                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-orange-50 transition-colors ${selectedCountry.code === country.code ? 'bg-orange-50 border-r-2 border-orange-500' : ''
                                                            }`}
                                                    >
                                                        <ReactCountryFlag
                                                            countryCode={country.countryCode}
                                                            svg
                                                            style={{
                                                                width: '24px',
                                                                height: '18px',
                                                                borderRadius: '3px'
                                                            }}
                                                        />
                                                        <div className="flex-1">
                                                            <div className="text-sm font-medium text-gray-900">{country.name}</div>
                                                            <div className="text-xs text-gray-500">{country.code}</div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Phone Number Input */}
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="flex-1 h-11 px-4 text-[15px]  outline-none "
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        {/* Date of Birth and Join Date - Horizontal */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* Date of Birth */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4 text-orange-500" />
                                    Date of Birth *
                                </label>
                                <Popover open={dateOfBirthOpen} onOpenChange={setDateOfBirthOpen}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full text-[15px] bg-gray-50 justify-start rounded-[5px] text-gray-500 text-left font-normal px-3 py-2.5 h-auto border-gray-300 hover:bg-gray-50 hover:text-gray-500">
                                            {dateOfBirth ? format(dateOfBirth, "PPP") : "Select date of birth"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar 
                                            mode="single" 
                                            selected={dateOfBirth} 
                                            onSelect={(date) => { 
                                                setDateOfBirth(date); 
                                                setDateOfBirthOpen(false); 
                                            }} 
                                            initialFocus 
                                            captionLayout="dropdown" 
                                            showOutsideDays={false} 
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Join Date */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4 text-orange-500" />
                                    Join Date *
                                </label>
                                <Popover open={joinDateOpen} onOpenChange={setJoinDateOpen}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full bg-gray-50 text justify-start text-[15px] rounded-[5px] text-gray-500 text-left font-normal px-3 py-2.5 h-auto border-gray-300 hover:bg-gray-50 hover:text-gray-500">
                                            {joinDate ? format(joinDate, "PPP") : "Select join date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar 
                                            mode="single" 
                                            selected={joinDate} 
                                            onSelect={(date) => {
                                                setJoinDate(date); 
                                                setJoinDateOpen(false);
                                            }} 
                                            initialFocus 
                                            captionLayout="dropdown" 
                                            showOutsideDays={false} 
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                            {/* Profile Image Upload */ }
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Upload className="w-4 h-4 text-orange-500" />
                                    Profile Picture *
                                </label>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="w-16 h-16 bg-gray-100 rounded-[5px] flex items-center justify-center border-2 border-dashed border-gray-300 flex-shrink-0">
                                        <User className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <input
                                            type="file"
                                            id="profile-picture"
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="profile-picture"
                                            className="inline-flex items-center px-4 py-2 rounded-[5px] bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-[5px] cursor-pointer transition-colors"
                                        >
                                            <Upload className="w-4 h-4 mr-2" />
                                            Upload Picture
                                        </label>
                                        <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Status */ }
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Status</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="Active"
                                            defaultChecked
                                            className="cursor-pointer accent-orange-600 "
                                        />
                                        <span className="text-sm text-gray-700">Active</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="Inactive"
                                            className="cursor-pointer accent-orange-600"
                                        />
                                        <span className="text-sm text-gray-700">Inactive</span>
                                    </label>
                                </div>
                            </div>

                            {/* Action Buttons */ }
                            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full sm:w-auto px-6 py-2.5 rounded-[5px] cursor-pointer"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto cursor-pointer px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-[5px]"
                                >
                                    Add Employee
                                </Button>
                            </div>
                    </form>
                        </div>
                        </div>
                </div>
                );
}