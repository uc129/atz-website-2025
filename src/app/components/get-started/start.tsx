'use client'
import DarkButton from "../form-components/buttons/button-dark"
import LightButton from "../form-components/buttons/light-button"
import { useRouter } from "next/navigation"




const StartToday = () => {

    const router = useRouter()


    return (
        <div className=" my-20 lg:max-w-[60%]">
            <div className="flex flex-col gap-4 ">
                <div className="flex gap-12">
                    <h2>Get Started Today</h2>
                    <DarkButton label="Get a quote" onClick={() => { router.push('/quote') }} />
                </div>
                <article className="flex flex-col gap-4" >
                    <p className="text-gray">Get started with ATZ Elevators today. We provide the best elevator services in India.
                        Get started with ATZ Elevators today. We provide the best elevator services in India.Get started with ATZ Elevators today. We provide the best elevator services in India.Get started with ATZ Elevators today. We provide the best elevator services in India.Get started with ATZ Elevators today. We provide the best elevator services in India. </p>

                    <p>
                        Get started with ATZ Elevators today. We provide the best elevator services in India.Get started with ATZ Elevators today. We provide the best elevator services in India.
                    </p>
                </article>

            </div>

        </div>
    )
}

export default StartToday