import Link from "next/link";
import {useState} from "react";
import VideoBackground from "@/app/components/video-background";

export default function HeroIndex({ children, home }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)


    return (
        <>
            {/*<section className="">
                 <VideoBackground />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-4">
                    <div className="text-center">
                        <div>
                            <div className="max-w-8xl mx-auto font-raleway font-bold md:text-7xl text-5xl text-platinum ">
                                <p>Where Creativity Meets Conversion:</p>
                                <p>Unleash the Power of Your Brand.</p>
                            </div>
                        </div>
                        <div>
                            <Link href=''>
                                <button
                                    onClick={toggle}
                                    className="bg-vanilla-200 hover:bg-vanilla-100 text-xs text-platinum hover:text-platinum-300 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
        */}

            <section className="bg-hero-dotr h-screen65vh bg-cover md:bg-fixed bg-no-repeat md:bg-center flex flex-col justify-center">
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
    </>
    )
}


