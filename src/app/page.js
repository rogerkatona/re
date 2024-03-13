"use client"; // This is a client component 👈🏽

import HeroIndex from "@/app/components/hero_index";
import Quote from "@/app/components/quote";
import FeatureIndex from "@/app/components/feature-index";
import Promo from "@/app/components/promo";
import ContactOverlay from "@/app/components/contact-overlay";
import {useState} from "react";

export default function Home() {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

  return (
    <main>
        <HeroIndex toggleModal={toggleOverlay} />
        <Promo id={0}/>
        <FeatureIndex  featured="true" type="service"/>
        <Quote id={4}/>
        <FeatureIndex  featured="true" type="industry"/>
        <Promo id={1}/>
        <FeatureIndex  featured="true" type="team"/>
        <ContactOverlay isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />
    </main>
  )
}
