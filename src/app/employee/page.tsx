"use client"

import AddEmployee from "@/components/EmployeeCom/AddEmployee";
import AddEmployeeForm from "@/components/EmployeeCom/AddEmployeeForm";
import EmployeeContent from "@/components/EmployeeCom/EmployeeContent";
import { useState } from "react";

// ;import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function EmployeePage() {
    const [activeTab, setActiveTab] = useState("Employees");
   
    
   



    return (
        <div className="flex h-full">
            {/* Fixed Sidebar - Only visible on large screens */}
            <div className="hidden lg:block w-[220px] h-full">
                <AddEmployee onTabChange={setActiveTab} />
            </div>
            
            {/* Content Area */}
            <div className="flex-1 h-full overflow-y-auto">
                {activeTab === "Employees" && <EmployeeContent />}
                {activeTab === "NewEmployee" && (
                    <AddEmployeeForm />
                )}
            </div>
        </div>
    );
}   