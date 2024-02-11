import gridItems from "../data/gridItems";
import Image from "next/image";


export default function GridMedia(props) {

    return (
        <div className="md:px-12 px-6 pt-12">
            <section  className="max-w-8xl mx-auto">
                <div>
                    <div className='font-raleway text-4xl text-platinum-200  '>
                        Featured industries
                    </div>
                </div>
            </section>
            <section>
                <div  className="flex pt-8">
                    <div className="grid xl:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1 max-w-8xl mx-auto">
                        {gridItems
                            .filter(filteredItem => filteredItem.type === props.type)
                            .sort((a, b) => {
                                if (a.id < b.id) {
                                    return -1
                                } else {
                                    return 1
                                }
                            })
                            .map(gridItems => (

                                <div key={gridItems.id} className="">

                                    <div className="group">
                                        <Image
                                            src={gridItems.src}
                                            alt={gridItems.alt}
                                            width={400}
                                            height={300}
                                            className="w-full h-auto transition-transform transform-gpu grayscale group-hover:grayscale-0"
                                        />
                                        {/* Add overlay or other elements for click effect */}
                                        <div className="flex items-center justify-center">

                                            <div className="w-full py-4">
                                                <span>
                                                    <div className="text-platinum-200">{gridItems.title}</div>
                                                    <div className="text-platinum-300">{gridItems.description}</div>
                                                </span>
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






