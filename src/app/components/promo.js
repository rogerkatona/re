"use client"; // This is a client component 👈🏽

import promoItems from "../data/promoItems";

export default function Promo(props) {

    let filteredItem = promoItems.filter(function (item){
        return item.id === props.id
    });

    return (

        <section className="pt-12 xl:px-12 px-6">
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        >
                        <section className="container mx-auto max-w-8xl flex items-center py-4 px-6 bg-platinum-800">
                            <div className="text-center">
                                <div className='font-bebasNeue text-3xl text-rich_black'>{filteredItem.headline}</div>
                                <div className="font-raleway text-4xl text-rich_black py-4">{filteredItem.title}</div>
                                <div className="text-rich_black text-xl pb-4">{filteredItem.text}</div>
                                <div className="text-rich_black text-xs ">{filteredItem.source}</div>
                            </div>
                        </section>
                    </div>
                ))}
        </section>

    )
}






