
export type TickerProps = {
    slides: React.ReactNode[]
}


export const Ticker = (props: TickerProps) => {

    return (
        <div>
            <div className="w-screen overflow-hidden">

                <div className="flex w-[200vw] overflow-visible ticker gap-8">
                    {
                        props.slides.map((slide, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {slide}
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )


}