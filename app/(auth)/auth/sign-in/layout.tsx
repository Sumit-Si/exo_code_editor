import React from "react";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <main className="flex justify-center gap-2 items-center h-screen bg-zinc-900">
            {children}
        </main>
    )
}

export default AuthLayout;