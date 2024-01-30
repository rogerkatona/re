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
        <FeatureIndex  featured="true" type="work"/>
        <Quote id={0}/>
        <FeatureIndex  featured="true" type="blog"/>
        <Promo id={0}/>
    </main>
  )
}
