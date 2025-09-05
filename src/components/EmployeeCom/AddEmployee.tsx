import { Plus, UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AddEmployee() {
    return (
        <div className="w-[200px] h-screen  bg-[#e4e4ed4f] p-2 sm:p-4 md:p-6">
            {/* Add New Button */}
            <div className="w-full h-[150px] bg-white rounded-lg cursor-pointer flex flex-col items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-[#DDDDDD] text-lg font-medium">Add New</span>
            </div>

            {/* Single Tab in Tabs Component */}
            <div className="w-full ">
                <Tabs defaultValue="employees" className="w-full">
                    <TabsList className="grid w-full grid-cols-1">
                        <TabsTrigger
                            value="employees"
                            className="w-full text-[#ff8d4f] text-lg font-semibold p-1 cursor-pointer data-[state=active]:text-[#ff8d4f] data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
                        >
                            Employees
                        </TabsTrigger>
                        <TabsContent value="employees" className="mt-0 w-full">
                            <div className="w-full">
                                <p>Employees</p>
                            </div>
                        </TabsContent>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    )
}