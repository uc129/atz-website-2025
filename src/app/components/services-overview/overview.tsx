import SmallCards, { SmallCardsProps } from "../cards/small-cards";
import CardsWithImage, { CardsWithImageProps } from "../cards/withImage";


const largeCardsData: CardsWithImageProps[] = [
    {
        title: "Elevator Maintenance",
        description: "We offer a range of maintenance services to keep your elevators running smoothly.",
        // buttonText: "Learn More", 
        link: "services//elevator-maintenance",
        image: "/icons/elevator-maintenance.svg",
        alternateImage: "/icons/elevator-maintenance-light.svg"

    },
    {
        title: "Elevator Installation",
        description: "We offer a range of installation services to meet your needs.",
        // buttonText: "Learn More",
        link: "/services/elevator-installation",
        image: "/icons/elevator-installation.svg",
        alternateImage: "/icons/elevator-installation-light.svg"

    },
    {
        title: "Elevator Modernization",
        description: "Modernize your elevators to improve safety, reliability, and energy efficiency.",
        // buttonText: "Learn More",
        link: "/services/elevator-repair",
        image: "/icons/elevator-repair.svg",
        alternateImage: "/icons/elevator-repair-light.svg"

    },



]

const smallCardsData: SmallCardsProps[] = [
    {
        title: 'Elevator Optimizations',
        description: 'Optimize your elevators to improve safety, reliability, and energy efficiency.',
        features: ['Safety', 'Reliability', 'Energy Efficiency']
    },
    {
        title: 'Elevator Repairs',
        description: 'We offer a range of repair services to keep your elevators running smoothly.',
        features: ['Safety', 'Reliability', 'Energy Efficiency']

    },
    {
        title: 'Elevator Inspections',
        description: 'We offer a range of inspection services to keep your elevators running smoothly.',
        features: ['Safety', 'Reliability', 'Energy Efficiency']
    },
    {
        title: 'Elevator Upgrades',
        description: 'We offer a range of upgrade services to keep your elevators running smoothly.',
        features: ['Safety', 'Reliability', 'Energy Efficiency']
    },
    {
        title: 'Elevator Safety',
        description: 'We offer a range of safety services to keep your elevators running smoothly.',
        features: ['Safety', 'Reliability', 'Energy Efficiency']
    },
    {
        title: 'Elevator Compliance',
        description: 'We offer a range of compliance services to keep your elevators running smoothly.',
        features: ['Safety', 'Reliability', 'Energy Efficiency']
    }

]


const ServicesOverview = () => {




    return (
        <section className="">

            <div className="flex flex-col gap-12">

                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-teal">ATZ Elevators <span>?</span></h2>
                    <p>Everything you need to run your elevators at peak performance.</p>
                </div>


                <div key={123456} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">

                    <CardsWithImage key={largeCardsData[0].link} {...largeCardsData[0]} imageClasses="scale-[72%]" />
                    <CardsWithImage key={largeCardsData[1].link} {...largeCardsData[1]} imageClasses="scale-[60%]" />
                    <CardsWithImage key={largeCardsData[2].link} {...largeCardsData[2]} imageClasses="scale-[70%]" />


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