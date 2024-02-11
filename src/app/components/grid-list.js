import gridListItems from "@/app/data/gridListItems";

export default function GridList(props) {

    return (
        <div className="md:px-12 px-6 pt-12">
            <section  className="max-w-8xl mx-auto">
                <div>
                    <div className='font-raleway text-4xl text-platinum-200  '>
                        All industries
                    </div>
                </div>
            </section>
            <section>
                <div  className="pt-4">
                    <div className="grid xl:grid-cols-1 max-w-8xl mx-auto">
                        {gridListItems
                            .filter(filteredItem => filteredItem.type === props.type)
                            .sort((a, b) => {
                                if (a.id < b.id) {
                                    return -1
                                } else {
                                    return 1
                                }
                            })
                            .map(gridListItems => (

                                <div key={gridListItems.id} className="">

                                    <div className="group">
                                        {/* Add overlay or other elements for click effect */}
                                        <div className="flex items-center justify-center">

                                            <div className="w-full py-2">
                                                <span>
                                                    <div className="text-platinum-200">{gridListItems.title}</div>
                                                    <div className="text-platinum-300">{gridListItems.description}</div>
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






