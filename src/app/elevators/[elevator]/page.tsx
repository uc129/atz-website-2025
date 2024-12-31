'use client'
import { useParams, useRouter } from "next/navigation"
import { Elevator, ELevatorsData } from "@/app/constants/elevators-data";
import Image from "next/image";
import { useWindowSize } from "@/app/lib/windowSizeContext";
import DarkButton from "@/app/components/form-components/buttons/button-dark";
import LightButton from "@/app/components/form-components/buttons/light-button";

const ElevatorDetailPage = () => {
    const router = useRouter();

    const { elevator } = useParams();
    const title_from_params = (elevator as string).replace(/-/g, ' ');
    const data = ELevatorsData.filter((elevator) => {
        return elevator.title.toLowerCase() === title_from_params
    });
    const elevatorData = data[0] as Elevator;
    const { isMobile, isTablet, isDesktop, isLargeDesktop } = useWindowSize();
    if (!elevatorData) return router.replace('/404');


    return (
        <section className=" flex flex-col gap-6">
            <h1>{elevatorData.title}</h1>

            <p>
                {elevatorData.description}
            </p>
            <div className="flex flex-col xl:flex-row gap-8 ">
                <Image src={elevatorData.images[0]} alt={elevatorData.title} width={(!isLargeDesktop) ? 630 : 590} height={(!isLargeDesktop) ? 630 : 590} className="" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-6">
                        <Image src={elevatorData.images[1]} alt={elevatorData.title} width={320} height={320} className="" />
                        <Image src={elevatorData.images[2]} alt={elevatorData.title} width={320} height={320} className="" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <Image src={elevatorData.images[1]} alt={elevatorData.title} width={320} height={320} className="" />
                        <Image src={elevatorData.images[2]} alt={elevatorData.title} width={320} height={320} className="" />
                    </div>
                </div>
            </div>
            <p>
                starting from Rs. {elevatorData.starting_price}
            </p>
            <ul className="feature-list">
                {elevatorData.features.map((feature, index) => {
                    return (
                        <li className="feature-list-item" key={index}>
                            {feature.title} - {feature.description}
                        </li>
                    )
                })}
            </ul>

            <div className="flex items-center space-x-4">
                <DarkButton label="Get a Quote" onClick={() => { }} className="" />
                <LightButton label="Contact Us" onClick={() => { }} className="" />
            </div>




        </section>
    )

}

export default ElevatorDetailPage