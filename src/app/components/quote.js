import quoteItems from "../data/quoteItems";


export default function Quote(props) {

    let filteredItem = quoteItems.filter(function (item){
        return item.id === props.id
    });

    return (
        <>
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        className="xl:px-12 px-6 pt-16">

                            <section className="flex flex-col justify-center items-center lg:px-0 p-6 relative lg:mx-auto lg:max-w-8xl border-2 border-platinum-200 bg-rich_black-500">
                                <div className='flex flex-shrink-0 absolute -top-10'>
                                    <img
                                        src={filteredItem.src}
                                        height={82}
                                        width={82}
                                        alt={'simple quote graphic'}
                                    />
                                </div>
                                <div className="lg:p-12 py-6">
                                    <div className='font-raleway text-4xl text-bg100 py-4 text-center'>What our customers are saying</div>
                                    <div className="text-center text-bg100 text-lg">&quot;{filteredItem.text}&quot;</div>
                                    <div className="text-center text-bg200 pt-3"> - {filteredItem.author}, {filteredItem.title}</div>
                            </div>
                        </section>
                    </div>
                ))}
        </>

    )
}






