import aboutItems from "../data/aboutItems";
import Link from "next/link";

export default function AboutTeam(props) {

    let filteredItem = aboutItems.filter(function (item){
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
                                className={`container mx-auto max-w-8xl flex flex-col justify-between pt-12 ${filteredItem.id % 2 === 0  ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                <div className="">
                                    <img
                                        className=""
                                        src={filteredItem.src}
                                        width={460}
                                        alt={filteredItem.alt}
                                    />
                                </div>
                                <div className={`lg:pt-0 pt-6 lg:w-5/6 w-full ${filteredItem.id % 2 === 0  ? 'lg:pr-6' : 'lg:pl-6'}`}>
                                    <div className='font-raleway text-4xl text-platinum-200 '>{filteredItem.title}</div>
                                    <div className='text-platinum-200 pt-4'>{filteredItem.description}</div>
                                </div>
                            </div>
                        </section>
                    ))}
            </section>
        </>
    )
}






