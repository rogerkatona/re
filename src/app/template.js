"use client"; // This is a client component 👈

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ContactOverlay from '@/app/components/contact-overlay';
import {useState} from "react";

export default function Template({ children }) {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <div>
            <div className="flex flex-col">
                <Header toggleModal={toggleOverlay} />
                <main>{children}</main>
                <ContactOverlay isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />
                <Footer toggleModal={toggleOverlay} />
            </div>
        </div>
    )
}