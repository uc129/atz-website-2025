'use client'
import DarkButton from "../form-components/buttons/button-dark";
import LightButton from "../form-components/buttons/light-button";
import { useRouter } from "next/navigation";



const HeroSection = () => {

    const router = useRouter();

    return (
        <section className="my-16 lg:my-36  xl:my-44 container-center "
        // style={{ backgroundImage: "url('/atz-landing-grid.svg" }}
        >


            <div className="flex *:w-full flex-col gap-8 justify-center items-center min-h-[50vh]   ">

                <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold text-center
                text-blue
                ">
                    <span>The ELEVATORS COMPANY </span><span>for INDIA</span>
                </h1>

                <p className="lg:text-body-large text-center md:flex flex-col  text-gray container-center md:px-8 lg:px-12 xl:px-16">
                    <span className="md:px-4">Used by some of the world's largest real estate companies, </span>
                    <span>
                        ATZ enables you to create &nbsp;
                        <span className="text-teal font-semibold">
                            high-quality experiences
                        </span>
                        &nbsp;with the power of ATZ Services.
                    </span>
                </p>

                <div className="flex gap-4  justify-center">
                    <DarkButton label="Get Started" onClick={() => { router.push('/about') }} />
                    <LightButton label="Learn More" onClick={() => { router.push('/elevators') }} />
                </div>
                <div className=" text-gray">
                    <p className="text-center text-teal">Keeping the world in motion...</p>
                </div>




            </div>
        </section>
    )

}

export default HeroSection;