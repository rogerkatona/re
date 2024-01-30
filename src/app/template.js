"use client"; // This is a client component 👈

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Template({ children }) {
    return (
        <div>
            <div className="flex flex-col">
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </div>
    )
}