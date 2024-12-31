
export type TickerProps = {
    slides: React.ReactNode[]
}


export const Ticker = (props: TickerProps) => {

    return (
        <div>
            <div className="w-screen overflow-hidden">

                <div className="flex w-[300vw] overflow-visible ticker gap-8">
                    {props.slides}
                </div>
            </div>

        </div>
    )


}