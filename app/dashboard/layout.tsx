import {SidebarProvider} from "@/components/ui/sidebar"
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions"
import { DashboardSidebar } from "@/modules/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({children}: {children:React.ReactNode}) {

    const playgroundData = await getAllPlaygroundForUser();

    const technologyIconMap:Record<string,string> = {
        REACT: "ZAP",
        NEXTJS: "Lightbulb",
        EXPRESS: "Database",
        VUE: "Compass",
        HONO: "FlameIcon",
        ANGULAR: "Terminal"
    }
    
    
        //TODO: star
    const formattedPlaygroundData = playgroundData?.map(playground => ({
        id: playground.id,
        title: playground.title,
        starred: playground.starmark?.[0]?.isMarked || false,
        icon: technologyIconMap[playground.template] || "Code2"
    }));
    console.log(formattedPlaygroundData,"formattedPlayData");

    return (
        <SidebarProvider>
                <div className="min-h-screen flex w-full overflow-x-hidden">
                    {/* Dashboard Sidebar  */}
                    {/* @ts-expect-error -> ts error */}
                    <DashboardSidebar initialPlaygroundData={formattedPlaygroundData} />

                    <main className="flex-1">
                        {children}
                    </main>
                </div>
        </SidebarProvider>
    )
    
}