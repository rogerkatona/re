import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            <section className="xl:px-12 px-6">
            {filteredItem.map(filteredItem => (
                <section
                    key={filteredItem.id}
                    className="container mx-auto max-w-8xl flex items-center py-24">
                    <div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-bg100' : 'text-lightBlue.500'} font-bebasNeue md:text-7xl text-6xl uppercase`}>{filteredItem.label}</div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-bg100' : 'text-lightBlue.500'}  md:w-4/5`}>{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </section>
            </>
    )
}