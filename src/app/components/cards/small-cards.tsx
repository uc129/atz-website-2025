
'use client'
import { useRouter } from "next/navigation";


export type SmallCardsProps = {
    title: string,
    description: string,
    link?: string,
    classNames?: string
}


const SmallCards = (props: SmallCardsProps) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(props.link!);
    }


    return (
        <div onClick={props.link ? handleClick : () => { }} className={`wrapper border-[1px] 
         border-gray-200 transition-all duration-200 hover:border-gray-600 
         shadow-md rounded-md p-4 ${props.classNames}`}>
            <div>
                <h5>{props.title}</h5>
                <p className="text-gray">{props.description}</p>
            </div>

        </div>
    )





}

export default SmallCards;