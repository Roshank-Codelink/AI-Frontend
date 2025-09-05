import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectTaps() {
  return (
    <Tabs defaultValue="New Project" className="w-[400px] max-w-full mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger 
          value="New Project" 
          className="text-[#000] text-[14px] sm:text-[16px] p-3  cursor-pointer"
        >
          New Project
        </TabsTrigger>
        <TabsTrigger 
          value="In Progress" 
          className="text-[#000] text-[14px] sm:text-[16px] p-3  cursor-pointer"
        >
          In Progress
        </TabsTrigger>
        <TabsTrigger 
          value="Completed" 
          className="text-[#000] text-[14px] sm:text-[16px] p-3 cursor-pointer"
        >
          Completed
        </TabsTrigger>
      </TabsList>
      <TabsContent value="New Project" className="mt-4 sm:mt-6">
        <div className="p-3 sm:p-4">
          Make changes to your account here.
        </div>
      </TabsContent>
      <TabsContent value="In Progress" className="mt-4 sm:mt-6">
        <div className="p-3 sm:p-4">
          Change your password here.
        </div>
      </TabsContent>
      <TabsContent value="Completed" className="mt-4 sm:mt-6">
        <div className="p-3 sm:p-4">
          Change your password here.
        </div>
      </TabsContent>
    </Tabs>
  )
}