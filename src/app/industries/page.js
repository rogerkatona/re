"use client"; // This is a client component 👈🏽

import Hero from "@/app/components/hero";
import Service from "@/app/components/service";
import GridMedia from "@/app/components/grid-media";
import GridList from "@/app/components/grid-list";
import Quote from "@/app/components/quote";

export default function Industries() {
    return (
        <>
            <header className="bg-hero-process min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={3}/>
            </header>
            <Service type="industries"/>
            <GridMedia type="industry"/>
            <Quote id={0}/>
            <GridList type="industry"/>
        </>
    )
}