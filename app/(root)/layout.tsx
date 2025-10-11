import { cn } from "@/lib/utils"
import Footer from "@/modules/home/footer"
import {Header} from "@/modules/home/header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        template: "ExoCode - Editor",
        default: "Code Editor for VibeCoders - ExoCode"
    }
}


export default function HomeLayout({children}:{children: React.ReactNode}) {

    return (
        <>
            {/* Header  */}
            <Header />

            {/* Background effects and Grid */}
            <div
                className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] border-2",
                )}
            />
            {/* Main */}
            <main className="z-20 relative pt-0 w-full border-2 border-orange-200">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}