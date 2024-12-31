'use client';
import Image from "next/image";
import DarkButton from "../components/form-components/buttons/button-dark";
import { IoIosArrowBack } from "react-icons/io";
import { Testimonials } from "../components/testimonials/testimonials";
import LightButton from "../components/form-components/buttons/light-button";




export default function AboutPage() {



    return (
        <section className="">
            <div>
                <div className="text-center">
                    <h1 className="">
                        Start your project with Atz Elevators
                    </h1>
                    <p className="text-gray">
                        Go from idea to launch in record time with Atz Elevators.
                        Our team of experts will help you build a product that will delight your users and help you achieve your business goals.
                    </p>
                </div>
                <div>
                    <Image src="/images/atz-elevators.jpg" alt="ATZ Elevators" width={1920} height={1080} className="my-12" />
                    <div className="flex justify-center items-center space-x-4">
                        <DarkButton label="Get a Quote" icon={<IoIosArrowBack className="rotate-180" />} onClick={() => { }} className="" />
                    </div>
                </div>

                <div className="flex flex-col  items-center  my-12 border-[1px] p-4 rounded-xl border-gray-200 hover:border-gray-500">
                    <Image src="/images/atz-elevators.jpg" alt="ATZ Elevators" width={80} height={80} className="" />

                    <h2 className="text-center">
                        Our Mission
                    </h2>

                </div>
                <div>
                    <ul className="flex flex-col space-y-4 ">
                        <li>
                            <h3>
                                Build the best products
                            </h3>
                            <p>
                                We believe in building the best products for our clients. We work closely with you to understand your needs and deliver a product that will delight your
                                users.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Deliver on time
                            </h3>
                            <p>
                                We understand the importance of delivering on time. We work hard to ensure that your project is completed on time and within budget.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Provide excellent support
                            </h3>
                            <p>
                                We provide excellent support to all our clients. We are always available to help you with any questions or concerns you may have.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Help you achieve your goals
                            </h3>
                            <p>
                                We are committed to helping you achieve your business goals. We work with you to understand your goals and deliver a product that will help you achieve them.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="my-12">
                    <Testimonials />
                </div>
                <div className="flex flex-col space-y-4">
                    <p>
                        Get in touch with us to start your project today. We would love to hear from you.
                    </p>
                    <DarkButton label="Contact Us" onClick={() => { }} className="" />
                </div>
            </div>
        </section >
    )

}