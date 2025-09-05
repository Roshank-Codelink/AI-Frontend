import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Projects } from "@/type"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function ProjectTaps() {

    let projects: Projects[] = [
        {
            title: "Project 1",
            description: "Description 1",
            status: "New Project",
            createdAt: "2021-01-01",
        },
        {
            title: "Project 2",
            description: "Description 2",
            status: "In Progress",
            createdAt: "2021-01-02",
        },

        {
            title: "Project 3",
            description: "Description 3",
            status: "Completed",
            createdAt: "2021-01-03",
        },
    ]



    return (
        <div className="w-full">
            <Tabs defaultValue="New Project" className="w-full">
                <div className="w-full max-w-[400px]">
                    <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-10 md:mb-12">
                        <TabsTrigger
                            value="New Project"
                            className="text-[#000] text-[12px] sm:text-[14px] md:text-[16px] p-2 sm:p-3 cursor-pointer data-[state=active]:text-orange-600 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                            New Project
                        </TabsTrigger>
                        <TabsTrigger
                            value="In Progress"
                            className="text-[#000] text-[12px] sm:text-[14px] md:text-[16px] p-2 sm:p-3 cursor-pointer data-[state=active]:text-orange-600 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                            In Progress
                        </TabsTrigger>
                        <TabsTrigger
                            value="Completed"
                            className="text-[#000] text-[12px] sm:text-[14px] md:text-[16px] p-2 sm:p-3 cursor-pointer data-[state=active]:text-orange-600 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                            Completed
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="New Project" className="mt-0 w-full">
                    <div className="w-full">
                        <Card className="h-auto min-h-[90px]">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Card Title</CardTitle>
                                <CardDescription className="text-sm">Card Description</CardDescription>
                            </CardHeader>
                            <CardContent className="py-2">
                                <p className="text-sm">Card Content</p>
                            </CardContent>
                            <CardFooter className="pt-2">
                                <p className="text-xs text-gray-500">Card Footer</p>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="In Progress" className="mt-0 w-full">
                    <div className="w-full p-3 sm:p-4 md:p-6">
                        Change your password here.
                    </div>
                </TabsContent>
                <TabsContent value="Completed" className="mt-0 w-full">
                    <div className="w-full p-3 sm:p-4 md:p-6">
                        Change your password here.
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}