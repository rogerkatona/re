"use client"; // This is a client component 👈🏽

import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import AboutItem from "@/app/components/about-item";
import Quote from "@/app/components/quote";


export default function About() {
    return (
        <>
            <header className="bg-hero-about min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={4}/>
            </header>
            <AboutItem type="about"/>
            <Quote id={0}/>
        </>
    )
}