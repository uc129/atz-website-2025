'use client'
import DarkButton from "../form-components/buttons/button-dark";
import LightButton from "../form-components/buttons/light-button";
import { ElevatorCabin } from "./cabin";
import ATZLandingGrid from "./landing-grid";



const HeroSection = () => {



    return (
        <section className="w-[80%] mx-auto   py-20 relative "
        // style={{ backgroundImage: "url('/atz-landing-grid.svg" }}
        >
            <div className="absolute top-0 left-0 w-full h-full">
                {/* <ATZLandingGrid /> */}
                {/* <ElevatorCabin /> */}
            </div>

            <div className="flex *:w-full flex-col gap-2 justify-center items-center min-h-[40vh]  *:py-8 ">

                <h1 className="text-5xl lg:text-8xl font-bold text-center">The Elevators Company for India.</h1>

                <p className="lg:text-body-large text-center w-[80%] px-2 lg:px-32 xl:px-44  text-gray">
                    Used by some of the world's largest real estate companies,
                    ATZ enables you to create  <span className="text-foreground font-semibold">high-quality experiences</span> with the power of ATZ Services.
                </p>

                <div className="flex gap-4  justify-center">
                    <DarkButton label="Get Started" onClick={() => { }} />
                    <LightButton label="Learn More" onClick={() => { }} />
                </div>
                <div className="-mt-12 text-gray">
                    <p className="text-center">Keeping the world in motion...</p>
                </div>




            </div>
        </section>
    )

}

export default HeroSection;