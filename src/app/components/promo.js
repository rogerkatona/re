"use client"; // This is a client component 👈🏽

import promoItems from "../data/promoItems";

export default function Promo(props) {

    let filteredItem = promoItems.filter(function (item){
        return item.id === props.id
    });

    return (

        <section className="pt-12 md:px-12 p-12">
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        >
                        <section className="flex flex-col md:px-0 px-12 mx-auto md:max-w-8xl bg-platinum-800">
                            <div className="px-36 py-12 text-center">
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






