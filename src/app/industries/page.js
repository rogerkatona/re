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
            <section className="xl:px-12 px-6 pt-12">
                <div className="container mx-auto max-w-8xl flex items-center">
                    <div className='font-raleway text-4xl text-platinum-200'>
                        Featured industries
                    </div>
                </div>
            </section>
            <Service type="industry"/>
            <GridMedia type="industry"/>
            <Quote id={0}/>
            <section className="xl:px-12 px-6 pt-12">
                <div className="container mx-auto max-w-8xl flex items-center">
                    <div className='font-raleway text-4xl text-platinum-200'>
                        All industries
                    </div>
                </div>
            </section>
            <GridList type="industry"/>
        </>
    )
}