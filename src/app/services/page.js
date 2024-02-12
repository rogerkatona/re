"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";
import GridMedia from "@/app/components/grid-media";
import GridList from "@/app/components/grid-list";


export default function Services() {
    return (
        <>
            <header className="bg-hero-service min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={2}/>
            </header>
            <section className="xl:px-12 px-6 pt-12">
                <div className="container mx-auto max-w-8xl flex items-center">
                    <div className='font-raleway text-4xl text-platinum-200'>
                        Featured services
                    </div>
                </div>
            </section>
            <Service type="service"/>
            <GridMedia type="service"/>
            <Quote id={0}/>
            <section className="xl:px-12 px-6 pt-12">
                <div className="container mx-auto max-w-8xl flex items-center">
                    <div className='font-raleway text-4xl text-platinum-200'>
                        All services
                    </div>
                </div>
            </section>
            <GridList type="service"/>
        </>
    )
}