"use client"; // This is a client component 👈🏽

import Hero from "@/app/components/hero";
import AboutItem from "@/app/components/about-item";
import Quote from "@/app/components/quote";
import AboutTeam from "@/app/components/about-team";


export default function About() {
    return (
        <>
            <header className="bg-hero-about min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={4}/>
            </header>
            <AboutItem type="about"/>
            <Quote id={0}/>
            <AboutItem type="team"/>
            <AboutTeam type="team"/>

        </>
    )
}