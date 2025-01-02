import { CustomImage } from "./custom-image"



export const ImageWithSubtitle = (props: { src: string, alt: string, width: number, subtitle: string, className?: string, ImageClasses?: string }) => {
    return (
        <div className={`flex flex-col items-end ${props.className}`}>
            <CustomImage src={props.src} alt={props.alt} width={props.width} className={props.ImageClasses} />
            <p className="text-center text-sm text-gray-500 uppercase">{props.subtitle}</p>
        </div>
    )
}