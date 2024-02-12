import gridItems from "../data/gridItems";
import Image from "next/image";


export default function GridMedia(props) {

    let filteredItem = gridItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <div className="xl:px-12 px-6">

            <section>
                <div  className="flex pt-8">
                    <div className="grid xl:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1 max-w-8xl mx-auto">
                        {filteredItem
                            .sort((a, b) => {
                                if (a.id < b.id) {
                                    return -1
                                } else {
                                    return 1
                                }
                            })
                            .map(filteredItem => (

                                <div key={filteredItem.id} className="">

                                    <div className="group">
                                        <Image
                                            src={filteredItem.src}
                                            alt={filteredItem.alt}
                                            width={400}
                                            height={300}
                                            className="w-full h-auto transition-transform transform-gpu grayscale group-hover:grayscale-0"
                                        />
                                        {/* Add overlay or other elements for click effect */}
                                        <div className="flex items-center justify-center">

                                            <div className="w-full py-4">
                                                <span>
                                                    <div className="text-platinum-200">{filteredItem.title}</div>
                                                    <div className={`${filteredItem.isListActive === 'true'  ? 'hidden' : 'block'}  pr-2`}>
                                                        <div className="text-platinum-300">{filteredItem.description}</div>
                                                    </div>
                                                    <div className={`${filteredItem.isListActive === 'true'  ? 'block' : 'hidden'}  pr-2`}>
                                                        <ul className="text-left list-disc pt-2 text-platinum-300 pl-4">
                                                            {filteredItem.list.map((list) =>
                                                                <li key={`${filteredItem.id}-${filteredItem.featuredID}`}>
                                                                    {list}
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
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






