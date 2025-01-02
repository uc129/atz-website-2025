'use client'

import Image from 'next/image'
import React from 'react'

const ClientData = [
    {
        name: "Client 1",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 2",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 3",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 4",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 5",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 6",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 7",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 8",
        image: "https://picsum.photos/200",
    },
    {
        name: "Client 9",
        image: "https://picsum.photos/200",
    },

]


const CareSection = () => {
    return (
        <section className=' mb-12 lg:max-w-[60%] '>
            <div className=' '>
                <h1>A company that cares.</h1>
                <p>
                    We are a company that cares about our customers and the environment.
                    We are committed to providing the best service possible while also being environmentally friendly.
                    We use sustainable materials and practices to ensure that our products are safe for you and the planet. We also give back to the community by donating a portion of our profits to local charities. When you choose us, you are choosing a company that cares.
                </p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>

                {
                    ClientData.map((customer, index) => (
                        <div key={customer.image + index} className='flex items-end space-x-4'>
                            <Image src={customer.image} alt={customer.name} width={300} height={300} className='w-16 h-16 rounded-full' />
                        </div>
                    ))
                }

            </div>

        </section>

    )
}

export default CareSection