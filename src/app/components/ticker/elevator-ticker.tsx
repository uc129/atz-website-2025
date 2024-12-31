import { CustomImage } from "../custom-image/custom-image"
import { Ticker } from "./ticker"
import Image from "next/image"


const slides = [
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,
    <CustomImage src="https://picsum.photos/400" alt="elevator-1" width={300} className="w-44" />,

]

export const ElevatorTicker = () => {
    return <Ticker slides={slides} />
}