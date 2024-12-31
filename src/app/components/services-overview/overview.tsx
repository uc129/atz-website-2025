import SmallCards, { SmallCardsProps } from "../cards/small-cards";
import CardsWithImage, { CardsWithImageProps } from "../cards/withImage";


const largeCardsData: CardsWithImageProps[] = [
    {
        title: "Elevator Maintenance",
        description: "We offer a range of maintenance services to keep your elevators running smoothly.",
        // buttonText: "Learn More", 
        link: "/maintenance",
        image: "/icons/elevator-maintenance.svg"
    },
    {
        title: "Elevator Installation",
        description: "We offer a range of installation services to meet your needs.",
        // buttonText: "Learn More",
        link: "/installation",
        image: "/icons/elevator-installation.svg"

    },
    {
        title: "Elevator Modernization",
        description: "Modernize your elevators to improve safety, reliability, and energy efficiency.",
        // buttonText: "Learn More",
        link: "/modernization",
        image: "/icons/elevator-repair.svg"

    },



]

const smallCardsData: SmallCardsProps[] = [
    {
        title: 'Elevator Optimizations',
        description: 'Optimize your elevators to improve safety, reliability, and energy efficiency.',
        link: '/optimization'

    },
    {
        title: 'Elevator Repairs',
        description: 'We offer a range of repair services to keep your elevators running smoothly.',
        link: '/repairs'

    },
    {
        title: 'Elevator Inspections',
        description: 'We offer a range of inspection services to keep your elevators running smoothly.',
        link: '/inspections'
    },
    {
        title: 'Elevator Upgrades',
        description: 'We offer a range of upgrade services to keep your elevators running smoothly.',
        link: '/upgrades'
    },
    {
        title: 'Elevator Safety',
        description: 'We offer a range of safety services to keep your elevators running smoothly.',
        link: '/safety'
    },
    {
        title: 'Elevator Compliance',
        description: 'We offer a range of compliance services to keep your elevators running smoothly.',
        link: '/compliance'
    }

]


const ServicesOverview = () => {




    return (
        <section className="w-[80%] mx-auto my-20">

            <div className="flex flex-col gap-12">

                <div className="flex flex-col lg:grid grid-cols-8 w-[80%] mx-auto items-center lg:pl-44">
                    <h2 className="col-span-3 text-center lg:text-left">ATZ Elevator Services?</h2>
                    <p className="col-span-5 text-gray text-body-large text-center lg:text-left">
                        Everything you need to run your elevators at peak performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">

                    {
                        largeCardsData.map((card) => {
                            return (
                                <CardsWithImage {...card} imageClasses="scale-[60%]" />
                            )
                        })
                    }
                    {
                        smallCardsData.map((card) => {
                            return (
                                <SmallCards {...card} />
                            )
                        })
                    }


                </div>




            </div>

        </section>
    )
}


export default ServicesOverview;