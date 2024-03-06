"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Hero from "@/app/components/proposal/hero";
import GridMedia from "@/app/components/grid-media";
import Feature from "@/app/components/feature";

export default function Dotr() {
    return (
        <section className="">
            <Hero id={0}/>
            <section className="bg-hero-dotr_about h-screen65vh bg-cover md:bg-fixed bg-no-repeat md:bg-center flex flex-col justify-center pt-24">
                <div className="container mx-auto max-w-8xl px-6">
                    <div>
                        <div className="bg-alabaster-200 lg:w-64 w-40 h-2 "></div>
                    </div>
                    <div className="">
                        <div className="font-raleway font-bold lg:text-6xl text-5xl text-alabaster-200 pb-4 ">PROPOSAL:</div>
                        <div className="font-raleway font-bold lg:text-8xl text-6xl text-alabaster-100 pb-4 ">DOGS ON THE RUN</div>
                    </div>
                </div>
            </section>
            <Quote id={0}/>
            <GridMedia type="media"/>

        </section>
    )
}