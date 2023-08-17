import React from "react"
import type {Metadata} from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css'

// will specify different rules for the authentication routes
//will be applicable only to these routes 
const inter = Inter({subsets:["latin"]})

export const metadata:Metadata = {
    title:'WalmartUnity',
    description:'A Next.js 13 Meta Threads Application',
};

export default function RootLayout ({children,
}:{
    // types of prop
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-white`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}