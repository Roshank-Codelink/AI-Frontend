import { Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AddEmployee() {
    return (
        <div className="w-full h-full bg-[#e4e4ed4f] p-1 sm:p-2 md:p-3 lg:p-4">
            {/* Add New Button */}
            <div className="w-full h-[120px] sm:h-[140px] md:h-[150px] bg-white rounded-lg cursor-pointer flex flex-col items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </div>
                <span className="text-[#DDDDDD] text-sm sm:text-base md:text-lg font-medium">Add New</span>
            </div>

            {/* Single Tab in Tabs Component */}
            <div className="w-full">
                <Tabs defaultValue="employees" className="w-full">
                    <TabsList className="grid w-full grid-cols-1 bg-transparent">
                        <TabsTrigger
                            value="employees"
                            className="w-full text-[#ff8d4f] text-sm sm:text-base md:text-lg font-semibold p-2 sm:p-3 cursor-pointer data-[state=active]:text-[#ff8d4f] data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md bg-transparent"
                        >
                            Employees
                        </TabsTrigger>
                    </TabsList>
                    
                </Tabs>
            </div>
        </div>
    )
}