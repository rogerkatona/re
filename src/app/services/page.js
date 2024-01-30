"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";


export default function Services() {
    return (
        <>
            <header className="bg-hero-service min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={2}/>
            </header>
            <Service type="service"/>
            <Promo id={1}/>
        </>
    )
}