import gridListItems from "@/app/data/gridListItems";

export default function GridList(props) {

    let filteredItem = gridListItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <div className="xl:px-12 px-6">
            <section>
                <div  className="pt-4">
                    <div className="grid xl:grid-cols-1 max-w-8xl mx-auto">
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
                                        {/* Add overlay or other elements for click effect */}
                                        <div className="flex items-center justify-center">

                                            <div className="w-full py-2">
                                                <div>
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
                                                </div>
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






