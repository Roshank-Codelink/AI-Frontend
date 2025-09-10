"use client";

import { Plus, Users, User } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

type Props = {
  onTabChange: (value: string) => void;
};

export default function AddEmployee({ onTabChange }: Props) {
  const router = useRouter();

  const handleNewEmployeeClick = () => {
    router.push("/team/manage");
  };

  const handleEmployeesClick = () => {
    router.push("/team");
  };

  return (
    <div className="w-full h-full  bg-[#e4e4ed4f]  p-4">
      {/* Add New */}
      <div className="w-full h-[150px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm hover:shadow-md transition-shadow">
        <Tabs className="w-full h-full">
          <TabsList className="grid w-full h-full grid-cols-1 bg-transparent">
            <TabsTrigger
              value="Manage"
              onClick={handleNewEmployeeClick}
              className="w-full h-full text-[#ff8d4f] font-semibold flex flex-col items-center justify-center gap-3 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Plus className="w-12 h-12 text-gray-600" />
              </div>
              <span className="text-[#DDDDDD] text-base font-medium">Add New</span>
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
              className="w-full text-[#ff8d4f]   font-semibold flex items-center justify-center gap-3 p-4 cursor-pointer
                         data-[state=active]:text-[#ff8d4f] data-[state=active]:bg-white rounded-md"
            >
              <User  className="text-orange-500 flex-shrink-0" />
              <span className="text-[18px] font-medium">Team</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
