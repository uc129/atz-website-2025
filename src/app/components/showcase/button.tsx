import DarkButton from "../form-components/buttons/button-dark"
import LightButton from "../form-components/buttons/light-button"




export const ShowcaseButton = () => {

    return (
        <div className="flex flex-col justify-center items-center">
            <p className='text-center text-2xl lg:max-w-[80%] mx-auto my-6'>For performance, efficiency and customer experience.
                ATZ Elevators is trusted by some of the biggest names in the real-estate industry
            </p>
            <DarkButton label="View the ATZ Showcase" className="w-fit" />
        </div>
    )
}
