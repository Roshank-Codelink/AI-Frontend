import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"




export default function ProjectTaps() {
  return (
    <Tabs defaultValue="New Project" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="New Project" className="text-[#000] text-[16px] p-5 cursor-pointer">New Project</TabsTrigger>
        <TabsTrigger value="In Progress" className="text-[#000] text-[16px]  p-5 cursor-pointer">In Progress</TabsTrigger>
        <TabsTrigger value="Completed" className="text-[#000] text-[16px]  p-5 cursor-pointer">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="New Project">Make changes to your account here.</TabsContent>
      <TabsContent value="In Progress">Change your password here.</TabsContent>
      <TabsContent value="Completed">Change your password here.</TabsContent>
    </Tabs>
  )
}