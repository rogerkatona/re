import Link from "next/link";
import {useState} from "react";
import useModal from "@/app/lib/useModal";
import VideoBackground from "@/app/components/video-background";

export default function HeroIndex({ toggleModal }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const {isShowing, toggle} = useModal();


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

            <section className="bg-hero-index bg-cover md:bg-fixed bg-no-repeat md:bg-center">
                <div className="flex lg:flex-row flex-col-reverse justify-center lg:items-center lg:mx-auto lg:max-w-8xl h-screen90vh md:px-0 px-4">
                    <div className="text-center">
                        <div>
                            <div className="font-raleway font-bold lg:text-7xl text-5xl text-platinum-700 pb-4 ">Where Creativity Meets Conversion: Unleash the Power of Your Brand.</div>
                        </div>
                        <div>
                            <Link href=''>
                                <button
                                    onClick={toggleModal}
                                    className="bg-vanilla-200 hover:bg-vanilla-100 text-xs text-platinum hover:text-platinum-300 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
    </>
    )
}


