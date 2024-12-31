
export type TickerProps = {
    slides: React.ReactNode[]
}


export const Ticker = (props: TickerProps) => {

    return (
        <div>
            <div className="ticker">
                <div className="flex gap-4 ticker-viewport w-[200vw]">
                    {props.slides.map((slide, index) => {
                        return (
                            <div key={index + index}>
                                {slide}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )


}