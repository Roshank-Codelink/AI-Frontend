"use client"

import AddEmployee from "@/components/EmployeeCom/AddEmployee";
import AddEmployeeForm from "@/components/EmployeeCom/AddEmployeeForm";
import { useState } from "react";

export default function NewEmployee() {
    const [activeTab, setActiveTab] = useState("NewEmployee");
    console.log(activeTab);

    return (
        <div className="flex h-full">
            {/* Fixed Sidebar - Only visible on large screens */}
            <div className="hidden lg:block w-[220px] h-full">
                <AddEmployee onTabChange={setActiveTab} />
            </div>
            
            {/* Content Area */}
            <div className="flex-1 h-full overflow-y-auto">
                {activeTab == "NewEmployee" && (
                    <AddEmployeeForm />
                )}
            </div>
        </div>
    );
}
