"use client";

import { Plus, User } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

type Props = {
  onTabChange?: (value: string) => void;
};

export default function AddEmployee({ onTabChange }: Props) {
  
    const router = useRouter();

  const handleNewEmployeeClick = () => {
    onTabChange?.("Manage");
    router.push("/team/manage");
  };

  const handleEmployeesClick = () => {
    onTabChange?.("Team");
    // Only navigate if we're not already on the team page
    if (window.location.pathname !== "/team") {
      router.push("/team");
    }
  };

  return (
    <div className="w-full h-full bg-[#e4e4ed4f] p-4">
      {/* Add New */}
      <div className="w-full h-[150px] bg-white rounded-[5px] flex items-center justify-center mb-4">
        <Tabs className="w-full h-full">
          <TabsList className="grid w-full h-full grid-cols-1 bg-transparent">
            <TabsTrigger
              value="Manage"
              
              onClick={handleNewEmployeeClick}
              className="w-full h-full text-[#ff8d4f] font-semibold flex flex-col items-center justify-center  cursor-pointer"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Plus className="w-8 h-8 text-gray-600" />
              </div>
              <span className="text-[#DDDDDD] text-sm font-medium">Add New</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Employees */}
      <div className="w-full">
        <Tabs defaultValue="Team" className="w-full">
          <TabsList className="grid w-full grid-cols-1 bg-transparent">
            <TabsTrigger
              value="Team"
              onClick={handleEmployeesClick}
              className="w-full text-[#ff8d4f] shadow-none font-semibold flex items-center justify-center p-2 cursor-pointer
                         data-[state=active]:text-[#ff8d4f] data-[state=active]:bg-white rounded-[5px]"
            >
              <User className="text-orange-500 flex-shrink-0 w-5 h-5" />
              <span className="text-base font-medium">Team</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
