"use client"; // This is a client component 👈🏽

import NavBar from '../components/navBar'
import Link from "next/link";
import { useState} from 'react'
import navItems from "../data/navItems";


export default function Header({ toggleModal }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)


    return (
    <header className="bg-rich_black-500 sticky top-0 z-20 xl:px-12 px-6">
            <div className="md:container md:mx-auto md:max-w-8xl md:flex md:justify-between md:items-center py-4">

{/*      <header className="bg-rich_black-500 sticky top-0 z-20">
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-8xl py-6 xl:px-0 md:px-12 px-6">*/}

            <section>
                    <Link href='/'>
                        <div>
                            <div className="">
                                <div className="sm:block hidden">
                                    <img
                                        src="/image/logo/logo@2x.png"
                                        width={400}
                                        alt="RE Marketing and Communication"
                                    />
                                </div>
                                <div className="sm:hidden block">
                                    <img
                                        src="/image/logo/logo-small@2x.png"
                                        width={36}
                                        alt="RE Marketing and Communication"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
             <div>
                    <section className="absolute lg:right-10 right-6 top-5">
                        <button
                            className="lg:hidden text-secondary hover:text-primary focus:appearance-none border-none"
                            onClick={handleClick}>
                            <svg
                                className='w-6 h-6 '
                                fill='none'
                                stroke='#d2d2d2'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </section>
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:my-0 mt-6 `}>
                            <NavBar navItems={navItems}/>
                             <Link href=''>
                                 <button
                                     onClick={toggleModal}
                                     className="bg-vanilla-200 hover:bg-vanilla-100 text-xs text-platinum hover:text-platinum-300 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-2">
                                     Contact us
                                 </button>
                            </Link>
                    </section>
                </div>
            </div>
        </header>

    )
}