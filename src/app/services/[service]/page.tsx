'use client'

import Image from 'next/image'
import { ServicesData } from '@/app/constants/services-data'
import { useParams, useRouter } from 'next/navigation'

export default function ServicePage() {

    const { service } = useParams();
    const router = useRouter();

    const title_from_params = (service as string).replace(/-/g, ' ');
    const data = ServicesData.filter((service) => {
        return service.title.toLowerCase() === title_from_params
    });
    const serviceData = data[0];
    if (!serviceData) return router.replace('/404');

    return (
        <section className=" flex flex-col gap-6 ">
            <div className=''>
                <div>
                    <h1>{serviceData.title}</h1>
                    <h5>
                        {serviceData.description}
                    </h5>
                </div>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <Image src={serviceData.images[0]} alt={serviceData.title} width={430} height={430} className="" />
                        <Image src={serviceData.images[1]} alt={serviceData.title} width={430} height={430} className="" />
                    </div>
                </div>
                <div>
                    <p>{serviceData.frequency && <span>Service frequency- {serviceData.frequency.join('/')}</span>}</p>
                    <p>{serviceData.average_duration_days}</p>
                </div>
                <div>
                    <p>Rated: {serviceData.rating}</p>
                </div>
                <div>
                    {serviceData.customers.map((customer, index) => {
                        return (
                            <div key={index}>
                                <h6>{customer.name}</h6>
                                <p>{customer.review}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <p>starting at Rs.{Math.floor(serviceData.starting_price / 12)}/month </p>
                </div>
            </div>
        </section>
    )
}