"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Hero from "@/app/components/hero";
import GridMedia from "@/app/components/grid-media";
import Feature from "@/app/components/feature";

export default function Portfolio() {
    return (
        <section>
            <header className="bg-hero-portfolio bg-cover bg-right bg-no-repeat">
                <Hero id={1}/>
            </header>
            <Feature  id={0} type="work"/>
            <Feature id={1}/>
            <Quote id={0}/>
            <GridMedia type="media"/>

        </section>
    )
}