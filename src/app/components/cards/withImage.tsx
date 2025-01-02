'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"


export type CardsWithImageProps = {
    image: string,
    alternateImage: string,
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
        <div className={`wrapper border-[1px] 
             border-gray-200 transition-all duration-300
         hover:border-gray-600 shadow-md rounded-lg p-4 cursor-pointer ${props.classNames}`}>

            <div onClick={handleClick}>

                <div className="h-[300px] flex items-center justify-center">

                    <Image src={props.image} alt="image" width={300} height={300} className={`${props.imageClasses}`} />


                </div>

                <div className="">
                    <h4 className={`text-blue`}>{props.title}</h4>
                    <p className={`text-gray`}>{props.description}</p>
                    {/* <button>{props.buttonText}</button> */}
                </div>

            </div>

        </div>
    )
}

export default CardsWithImage;