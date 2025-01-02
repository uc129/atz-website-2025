import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './carousel.css'

type PropType = {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    return (
        <section className="carousel">
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                    {slides.map((slide, index) => (
                        <div className="carousel__slide" key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
