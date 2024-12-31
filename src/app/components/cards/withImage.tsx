'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"


export type CardsWithImageProps = {
    image: string,
    title: string,
    description: string,
    // buttonText: string,
    link: string
    classNames?: string
    imageClasses?: string

}

const CardsWithImage = (props: CardsWithImageProps) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(props.link)
    }

    return (
        <div className={`wrapper border-[1px] bg-[#0f0f0f]  border-gray-200 transition-all duration-200 hover:border-gray-600 shadow-md rounded-md p-4 ${props.classNames}`}>

            <div onClick={handleClick}>

                <div className="h-[300px] flex items-center justify-center">
                    <Image src={props.image} alt="image" width={300} height={300} className={`${props.imageClasses}`} />
                </div>

                <div className="">
                    <h5>{props.title}</h5>
                    <p className="text-gray">{props.description}</p>
                    {/* <button>{props.buttonText}</button> */}
                </div>

            </div>

        </div>
    )
}

export default CardsWithImage;