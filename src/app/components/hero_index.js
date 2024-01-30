import Link from "next/link";
import Modal from "@/app/components/modal";
import {useState} from "react";
import useModal from "@/app/lib/useModal";

export default function HeroIndex({ children, home }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const {isShowing, toggle} = useModal();


    return (
        <>
        <section className="bg-hero-index bg-cover md:bg-fixed bg-no-repeat md:bg-center">
            <div className="flex lg:flex-row flex-col-reverse justify-center lg:items-center lg:mx-auto lg:max-w-8xl h-screen90vh md:px-0">
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


