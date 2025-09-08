"use client";

import { Plus, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  onTabChange: (value: string) => void;
};

export default function AddEmployee({ onTabChange }: Props) {
  return (
    <div className="w-full h-full  bg-[#e4e4ed4f]  p-2">
      {/* Add New */}
      <div className="w-full h-[150px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm hover:shadow-md transition-shadow">
        <Tabs className="w-full h-full">
          <TabsList className="grid w-full h-full grid-cols-1 bg-transparent">
            <TabsTrigger
              value="NewEmployee"
              onClick={() => onTabChange("NewEmployee")}
              className="w-full h-full text-[#ff8d4f] font-semibold flex flex-col items-center justify-center gap-3 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                <Plus className="w-10 h-10 text-gray-600" />
              </div>
              <span className="text-[#DDDDDD] text-base font-medium">Add New</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Employees */}
      <div className="w-full">
        <Tabs defaultValue="Employees" className="w-full">
          <TabsList className="grid w-full grid-cols-1 bg-transparent">
            <TabsTrigger
              value="Employees"
              onClick={() => onTabChange("Employees")}
              className="w-full text-[#ff8d4f] font-semibold flex items-center justify-center gap-3 p-4 cursor-pointer
                         data-[state=active]:text-[#ff8d4f] data-[state=active]:bg-white rounded-md"
            >
              <Users className="w-10 h-10 text-gray-600" />
              <span className="text-base font-medium">Employees</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
