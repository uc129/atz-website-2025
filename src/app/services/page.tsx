


export default function ServicesPage() {

    return (
        <section className="flex flex-col gap-12 ">

            <div className=''>
                <h2>Services</h2>
                <h5>
                    Providing best in class services to our clients.
                </h5>
            </div>

            <div className=" border-y-[1px] border-gray-900 py-4 ">

                <h4>What services we provide?</h4>

                <ul className="flex flex-col gap-4 my-4">
                    <li>
                        <h6>Elevator Installation</h6>
                        <p>
                            We provide elevator installation services to our clients. Our team of experts will help you install your elevator in record time.
                        </p>
                    </li>
                    <li>
                        <h6>Escalator Installation</h6>
                        <p>
                            We provide escalator installation services to our clients. Our team of experts will help you install your escalator in record time.
                        </p>
                    </li>
                    <li>
                        <h6>Elevator Maintenance</h6>
                        <p>
                            We provide elevator maintenance services to our clients. Our team of experts will help you maintain your elevator in top condition.
                        </p>
                    </li>
                    <li>
                        <h6>Escalator Maintenance</h6>
                        <p>
                            We provide escalator maintenance services to our clients. Our team of experts will help you maintain your escalator in top condition.
                        </p>

                    </li>


                </ul>
            </div>
        </section>
    )
}