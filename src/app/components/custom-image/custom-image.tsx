import Image from "next/image"


export const CustomImage = (props: { src: string, alt: string, width: number, className?: string }) => {
    return <Image src={props.src} alt={props.alt} width={props.width} height={props.width / 2}
        className={` w-full h-auto pointer-events-none select-none ${props.className}`} />

}