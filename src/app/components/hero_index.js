import Link from "next/link";
import Modal from "@/app/components/modal";
import {useState} from "react";
import useModal from "@/app/lib/useModal";
import VideoBackground from "@/app/components/video-background";

export default function HeroIndex({ children, home }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const {isShowing, toggle} = useModal();


    return (
        <>
        <section className="">

                <VideoBackground />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="text-center">
                        <div>
                            <div className="whitespace-break-spaces font-raleway font-bold lg:text-7xl text-5xl text-platinum pb-4">
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
        <section>
            <Modal
                isShowing={isShowing}
                onClose={toggle}
            />
        </section>
    </>
    )
}


