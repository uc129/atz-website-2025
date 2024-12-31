
'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";


export type TestimonialCardProps = {
    title: string,
    subTitle?: string,
    description: string,
    link?: string,
    classNames?: string
    image: string
}


const TestimonialCard = (props: TestimonialCardProps) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(props.link!);
    }


    return (
        <div onClick={props.link ? handleClick : () => { }} className={`wrapper border-[1px] 
         border-gray-200 transition-all duration-200 hover:border-gray-600 
         shadow-md rounded-md p-4 flex flex-col gap-4 *:flex *:flex-col *:gap-4
          ${props.classNames}`}>
            <div>
                {/* <h5>{props.title}</h5> */}
                <p className="">"{props.description}"</p>
            </div>

            <div>
                <Image src={props.image} alt="Testimonial" width={50} height={50} />
                <p className="text-xs">{props.subTitle}</p>
            </div>

        </div>
    )





}

export default TestimonialCard;