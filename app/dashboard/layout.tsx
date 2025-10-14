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

    const formattedPlaygroundData = playgroundData?.map(playground => ({
        id: playground.id,
        title: playground.title,
        //TODO: star
        starred: false,
        icon: technologyIconMap[playground.template] || "Code2"
    }));

    return (
        <SidebarProvider>
                <div className="min-h-screen flex w-full overflow-x-hidden">
                    {/* Dashboard Sidebar  */}
                    {/* @ts-expect-error -> ts error */}
                    <DashboardSidebar initialPlaygroundData={formattedPlaygroundData} />

                    <main className="border border-red-500 flex-1">
                        {children}
                    </main>
                </div>
        </SidebarProvider>
    )
    
}