'use client'

import Image from 'next/image'
import React from 'react'

const CustomersData = [
    {
        name: "John Doe",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "Jane Doe",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "John Smith",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "John Johnson",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "Jane Johnson",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "John Brown",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "Jane Brown",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: "John White",
        image: "https://randomuser.me/api/portraits",
    },

]


const CareSection = () => {
    return (
        <section className=' mb-12 '>
            <h1>A company that cares.</h1>
            <p>
                We are a company that cares about our customers and the environment.
                We are committed to providing the best service possible while also being environmentally friendly.
                We use sustainable materials and practices to ensure that our products are safe for you and the planet. We also give back to the community by donating a portion of our profits to local charities. When you choose us, you are choosing a company that cares.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>

                {
                    CustomersData.map((customer, index) => (
                        <div key={customer.image + index} className='flex items-center space-x-4'>
                            <Image src={customer.image} alt={customer.name} width={300} height={300} className='w-16 h-16 rounded-full' />
                            <p>{customer.name}</p>
                        </div>
                    ))
                }

            </div>

            <p className='text-center text-2xl lg:w-[50%] mx-auto my-6'>For performance, efficiency and customer experience.
                ATZ Elevators is trusted by some of the biggest names in the real-estate industry</p>
        </section>
    )
}

export default CareSection