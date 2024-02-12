import serviceItems from "../data/serviceItems";
import Link from "next/link";

export default function AboutItem(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
            <section className="xl:px-12 px-6">
                {filteredItem
                    .map(filteredItem => (
                        <section>
                            <div
                                key={filteredItem.id}
                                className={`container mx-auto max-w-8xl flex flex-col justify-between pt-12   ${filteredItem.id % 2 === 0  ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                <div className="">
                                    <img
                                        className=""
                                        src={filteredItem.src}
                                        width={2000}
                                        alt={filteredItem.alt}
                                    />
                                </div>
                                <div className={`lg:pt-0 pt-6 lg:w-5/6 w-full ${filteredItem.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                    <div className='font-bebasNeue text-4xl text-platinum-300 border-b'>{filteredItem.number}</div>
                                    <div className='font-raleway text-4xl text-platinum-200 pt-4'>{filteredItem.title}</div>
                                    <div className='text-platinum-200 pt-4'>{filteredItem.description}</div>
                                    <div className='text-platinum-200 pt-4'>{filteredItem.listTitle}</div>
                                    <ul className="text-left list-disc pt-2 text-platinum-300 pl-4 text-sm">
                                        {filteredItem.list.map((list) =>
                                            <li key={`${filteredItem.id}-${filteredItem.featuredID}`}>
                                                {list}
                                            </li>
                                        )}
                                    </ul>
                                    <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'} pt-0`}>
                                        <Link href={filteredItem.buttonHref}>
                                                <span
                                                    className="bg-newYellow.800 hover:bg-newYellow.900 hover:text-gray.100 text-xs text-gray.100 uppercase px-4 py-3 rounded-lg">
                                                    {filteredItem.buttonText}
                                                </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
            </section>
        </>
    )
}






