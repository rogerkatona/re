import gridItems from "../data/gridItems";
import Date from "./date";
import Image from "next/image";
import Link from "next/link";


export default function GridMediaIndex(props) {

    return (
        <div className="md:px-12 px-6 pt-24">
            <section>
                <div className="flex flex-col max-w-8xl mx-auto">
                    <div className='text-yellow500'>
                        <Link href="../portfolio">
                            <span className='hover:underline uppercase text-xs'>/ Portfolio</span>
                        </Link>
                    </div>
                    <div className='font-bebasNeue text-3xl text-bg300'>
                        Recent work
                    </div>
                    <div className='font-raleway text-4xl text-bg100 py-4 '>
                        Take a look at some of our recent work
                    </div>
                    <div className='text-bg200'>Our recent projects showcase a diverse portfolio, ranging from visually stunning corporate brand narratives to engaging promotional content, where our team seamlessly blends creative storytelling, cutting-edge technology, and professional execution to bring our clients' visions to life.</div>
                </div>
            </section>
            <section>
                <div  className="flex pt-8 ">
                    <div className="grid xl:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 max-w-8xl mx-auto">
                        {gridItems
                            .filter(filteredItem => filteredItem.type === props.type)
                            .sort((a, b) => {
                                if (a.date < b.date) {
                                    return 1
                                } else {
                                    return -1
                                }
                            })
                            .map(gridItems => (

                                <div key={gridItems.id} className="">

                                    <div className="relative group">
                                        <Image
                                            src={gridItems.src}
                                            alt={gridItems.alt}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto transition-transform transform-gpu grayscale group-hover:grayscale-0"
                                        />
                                        {/* Add overlay or other elements for click effect */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">

                                            <div className="absolute bottom-0 bg-bg500 bg-opacity-60 w-full p-4 hover:bg-opacity-80">
                                                <a
                                                    href={gridItems.buttonHref}
                                                    target={gridItems.target}
                                                    rel="noreferrer"
                                                    className="hover:text-bg50">
                                                    <div className="text-bg100">{gridItems.title}</div>

                                                <div className="uppercase text-xs text-bg200">
                                                    <Date dateString={gridItems.date} />
                                                </div>
                                                </a>
                                                </div>

                                        </div>
                                    </div>


                                </div>
                        ))}
                    </div>
                </div>
             </section>
        </div>
    )
}






