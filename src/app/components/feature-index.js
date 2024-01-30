import serviceItems from "../data/serviceItems";
import Link from "next/link";
import Date from "@/app/components/date";

export default function FeatureIndex(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.featured === props.featured
    });

    return (
        <>
                {filteredItem
                    .filter(filteredItem => filteredItem.type === props.type)
                    .map(filteredItem => (

                        <section
                            key={filteredItem.id}
                            className="md:px-12 px-6 pt-12 bg-platinum-900">

                            <div className={`flex flex-col max-w-8xl mx-auto ${filteredItem.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className=''>
                                    <img
                                        src={filteredItem.src}
                                        width={2000}
                                        alt={'Featured service'}
                                    />
                                </div>
                                <div className={`lg:pt-0 pt-12 lg:w-5/6 w-full ${filteredItem.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                    <div className="">
                                        <div className='text-platinum-200 '>
                                            <Link href={filteredItem.featuredHREF}>
                                                <span className=' hover:text-platinum-100 hover:underline uppercase text-xs'>{filteredItem.featuredURL}</span>
                                            </Link>
                                        </div>
                                        <div className='font-bebasNeue text-3xl text-platinum-200'>
                                            {filteredItem.featuredHeader}
                                        </div>
                                        <div className='font-raleway text-4xl text-platinum-100 py-4'>
                                            {filteredItem.title}
                                        </div>
                                        <div className="uppercase text-xs text-platinum-300">
                                            <Date dateString={filteredItem.date} />
                                        </div>
                                        <div className='text-platinum-200 text-lg pb-6'>{filteredItem.description}</div>
                                        <div className="flex flex-row">
                                            <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'}  pr-2`}>
                                                <a
                                                    target={"_blank"}
                                                    href={filteredItem.featuredHREF}>
                                                    <button className="hover:bg-yellow600 hover:text-bg500 text-xs text-yellow500 uppercase px-4 py-3 border border-b-alabaster-400 rounded-lg">
                                                        {filteredItem.featuredButtonLabel}
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="">
                                                <Link href={filteredItem.buttonHref}>
                                                    <button className="hover:bg-platinum-100 hover:text-platinum text-xs text-platinum-100 uppercase px-4 py-3 border border-platinum-100 rounded-lg">
                                                        {filteredItem.buttonText}
                                                    </button>
                                                </Link>
                                            </div>
                                         </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    ))}
        </>
    )
}






