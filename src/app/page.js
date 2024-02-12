"use client"; // This is a client component 👈🏽

import HeroIndex from "@/app/components/hero_index";
import Quote from "@/app/components/quote";
import FeatureIndex from "@/app/components/feature-index";
import Promo from "@/app/components/promo";

export default function Home() {
  return (
    <main>
        <HeroIndex/>
        <Promo id={0}/>
        <FeatureIndex  featured="true" type="service"/>
        <Quote id={0}/>
        <FeatureIndex  featured="true" type="industry"/>
        <Promo id={1}/>
        <FeatureIndex  featured="true" type="team"/>
    </main>
  )
}
