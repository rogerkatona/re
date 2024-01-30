"use client"; // This is a client component 👈🏽

import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";


export default function Process() {
    return (
        <>
            <header className="bg-hero-process min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={3}/>
            </header>
            <Service type="process"/>
            <Promo id={1}/>
        </>
    )
}