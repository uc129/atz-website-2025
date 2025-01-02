
'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";


export type SmallCardsProps = {
    title: string,
    description: string,
    link?: string,
    classNames?: string
    features?: string[]
}


const SmallCards = (props: SmallCardsProps) => {

    const router = useRouter();
    const [showFeatures, setShowFeatures] = useState(false);

    const handleLink = () => {
        router.push(props.link!);
    }
    const handleFeatures = () => {
        setShowFeatures(!showFeatures);
    }


    return (
        <div onClick={props.link ? handleLink : handleFeatures} className={`wrapper border-[1px] 
         border-gray-200 transition-all duration-200 hover:border-gray-600 
         shadow-md rounded-md p-4 cursor-pointer ${props.classNames}`}>
            <div>
                <h5>{props.title}</h5>
                <p className="text-gray">{props.description}</p>
            </div>
            {props.features &&
                showFeatures &&
                <div>
                    <ul className="list-disc list-inside">
                        {props.features.map((feature, index) => {
                            return (
                                <li key={index}>{feature}</li>
                            )
                        })}
                    </ul>

                </div>
            }

        </div>
    )





}

export default SmallCards;