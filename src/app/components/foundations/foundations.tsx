import FeatureCard, { FeatureCardProps } from "../cards/feature-card"
import { ChipSvg } from "./chip"


const FeaturesData: FeatureCardProps[] = [
    {
        title: '24x7 Support',
        description: 'We offer 24x7 support to keep your elevators running smoothly.',
        icon: <></>,
        link: '/support'
    },
    {
        title: "Low Cost",
        description: "We offer low cost services to keep your elevators running smoothly.",
        icon: <></>,
        link: '/low-cost'
    },
    {
        title: "Premium Quality",
        description: "We offer premium quality services to keep your elevators running smoothly.",
        icon: <></>,
        link: '/premium-quality'
    }


]


const Foundations = () => {
    return (
        <div className="flex flex-col gap-6">
            <ChipSvg />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-24">
                {
                    FeaturesData.map((feature, index) => {
                        return <FeatureCard key={index} {...feature} />
                    })
                }
            </div>
        </div>
    )
}

export default Foundations