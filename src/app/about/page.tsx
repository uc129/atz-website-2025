'use client';
import Image from "next/image";
import DarkButton from "../components/form-components/buttons/button-dark";
import { IoIosArrowBack } from "react-icons/io";
import { Testimonials } from "../components/testimonials/testimonials";
import { ImageWithSubtitle } from "../components/custom-image/image-with-subtitle";



export default function AboutPage() {



    return (
        <section className="">
            <div className="flex flex-col gap-12">
                {/* Story */}
                <div className="flex flex-col gap-4">

                    <h1 className=" sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none text-center ">
                        OUR ATZ STORY
                    </h1>
                    <div className="flex justify-between items-center gap-4 uppercase *:text-xs text-gray">
                        <p>Elevator Maintenance</p>
                        <p>Elevator Installation</p>
                        <p>Elevator Modernization</p>
                    </div>

                    <div className="grid grid-cols-3">
                        <ImageWithSubtitle src="/images/ATZ- founder.png" alt="ATZ Elevators" width={1200} subtitle="Our founder." className="" ImageClasses="" />
                        <ImageWithSubtitle src="/images/ATZ- founder.png" alt="ATZ Elevators" width={1200} subtitle="Our founder." className="" ImageClasses="" />
                        <ImageWithSubtitle src="/images/ATZ- founder.png" alt="ATZ Elevators" width={1200} subtitle="Our founder." className="" ImageClasses="" />
                    </div>

                    <p>
                        ATZ Elevators, also known as Amba Tirupati Zetetic Engg. (P) Ltd., established in 1998 in Patna, Bihar, by the visionary Late Shri Anil Kumar Jha, has been a trusted name in the elevator industry for over two decades. Our journey is rooted in innovation, excellence, and an unwavering commitment to customer safety and satisfaction. Today, ATZ Elevators stands as a premier manufacturer, delivering cutting-edge technology and exceptional engineering solutions for projects of varied scales and complexity.
                    </p>
                    <p>
                        We take pride in serving a diverse clientele across Bihar, Jharkhand, Odisha, West Bengal, and beyond. Our products are integral to some of the most iconic structures, including residential complexes, hospitals, government and public buildings, and industrial facilities.
                    </p>
                    <p>
                        Driven by a team of seasoned industry experts, we combine advanced technology with precision engineering to deliver solutions that exceed expectations. Our client-first approach ensures that every project we undertake is a testament to our unwavering focus on quality, safety, and reliability.
                    </p>

                    <h4 className="text-4xl text-center p-12">
                        "We are committed to the integrity of our products
                        and the experience they offer from the originality of our designs"
                    </h4>

                    {/* WHat we offer */}
                    <div className="flex flex-col gap-2">
                        <h3 className="">
                            What We Offer
                        </h3>

                        <p>
                            ATZ Elevators provides an extensive range of superior products and services tailored to the vertical transportation sector.
                            <span className="block">
                                Our offerings include:
                            </span>
                        </p>
                        <div>
                            <h5>  </h5>
                            <ul className="list-disc">
                                <li><h5>High-quality elevators and comprehensive elevator packages.</h5></li>
                                <li><p>Custom-designed solutions to meet unique client requirements.</p></li>
                                <li><p>End-to-end project management services.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>





                {/* Team */}
                <div>
                    <ImageWithSubtitle src="/images/team.jpg" alt="ATZ Team" width={1900} subtitle="Our team of experts." className="" ImageClasses="" />
                    <div className="flex justify-center items-center space-x-4">
                        <DarkButton label="Get a Quote" icon={<IoIosArrowBack className="rotate-180" />} onClick={() => { }} className="" />
                    </div>
                </div>

                {/* Founder */}
                <div>
                    <h1>ATZ's founder</h1>
                    <div className="flex items-end gap-4">
                        <Image src="/images/ATZ- founder.png" alt="ATZ Elevators" width={300} height={300} className="" />
                        <div>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                        </div>

                    </div>
                </div>

                {/* MD */}
                <div>
                    <h1 className="text-right">From the desk of M.D.</h1>
                    <div className="flex items-end gap-4">
                        <div>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                        </div>
                        <Image src="/images/ATZ- founder.png" alt="ATZ Elevators" width={300} height={300} className="" />


                    </div>
                </div>

                {/* Director */}
                <div>
                    <h1>ATZ's founder</h1>
                    <div className="flex items-end gap-4">
                        <Image src="/images/ATZ- founder.png" alt="ATZ Elevators" width={300} height={300} className="" />
                        <div>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                            <p className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed? Unde hic illum quia molestiae sequi exercitationem accusantium et optio. Alias libero quos asperiores tenetur provident nisi inventore doloremque consectetur!
                            </p>
                        </div>

                    </div>
                </div>

                {/* Vision */}
                <div>
                    <div className="flex flex-col  items-center  my-12 border-[1px] p-4 rounded-xl border-gray-200 hover:border-gray-500">
                        <Image src="/images/atz-elevators.jpg" alt="ATZ Elevators" width={80} height={80} className="" />
                        <h2 className="text-center">
                            Our Vision
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
                </div>


                {/* Mission */}
                <div>

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
                </div>
                {/* Start */}
                <div className="text-center">
                    <h1 className="">
                        Start your project with Atz Elevators
                    </h1>
                    <p className="text-gray">
                        Go from idea to launch in record time with Atz Elevators.
                        Our team of experts will help you build a product that will delight your users and help you achieve your business goals.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="my-12">
                    <Testimonials />
                </div>

                {/* Contact */}
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