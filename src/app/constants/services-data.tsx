import { randomUUID } from "crypto";

export type Customer = {
    name: string,
    review: string
}

export type Service = {
    title: string,
    description: string,
    images: string[],
    customers: Customer[],
    starting_price: number,
    average_duration_days?: number,
    frequency?: string[],
    rating: number,
    reviews: number
}

//Elevator Installation
//Escalator Installation
//Elevator Maintenance
//Escalator Maintenance
//Elevator Repair
//Escalator Repair
//Elevator Modernization
//Escalator Modernization


export const ServicesData: Service[] = [
    {
        title: 'Elevator Installation',
        description: 'We provide elevator installation services to our clients. Our team of experts will help you install your elevator in record time.',
        images: ['/images/elevator-installation-1.jpg', '/images/elevator-installation-2.jpg', '/images/elevator-installation-3.jpg'],
        customers: [
            {
                name: 'John Doe',
                review: 'I am very happy with the elevator installation services provided by ATZ Elevators. The team was very professional and completed the installation on time.'
            },
            {
                name: 'Jane Doe',
                review: 'I am very happy with the elevator installation services provided by ATZ Elevators. The team was very professional and completed the installation on time.'
            }

        ],
        starting_price: 10000,
        average_duration_days: 30,
        rating: 4.5,
        reviews: 100
    },
    {
        title: 'Escalator Installation',
        description: 'We provide escalator installation services to our clients. Our team of experts will help you install your escalator in record time.',
        images: ['/images/escalator-installation-1.jpg', '/images/escalator-installation-2.jpg', '/images/escalator-installation-3.jpg'],
        customers: [
            {
                name: 'John Doe',
                review: 'I am very happy with the escalator installation services provided by ATZ Elevators. The team was very professional and completed the installation on time.'
            },
            {

                name: 'Jane Doe',
                review: 'I am very happy with the escalator installation services provided by ATZ Elevators. The team was very professional and completed the installation on time.'
            }

        ],
        starting_price: 10000,
        average_duration_days: 30,
        rating: 4.5,
        reviews: 100
    },
    {

        title: 'Elevator Maintenance',
        description: 'We provide elevator maintenance services to our clients. Our team of experts will help you maintain your elevator in top condition.',
        images: ['/images/elevator-maintenance-1.jpg', '/images/elevator-maintenance-2.jpg', '/images/elevator-maintenance-3.jpg'],
        customers: [
            {

                name: 'John Doe',
                review: 'I am very happy with the elevator maintenance services provided by ATZ Elevators. The team was very professional and completed the maintenance on time.'
            },
            {

                name: 'Jane Doe',
                review: 'I am very happy with the elevator maintenance services provided by ATZ Elevators. The team was very professional and completed the maintenance on time.'
            }

        ],
        starting_price: 10000,
        frequency: ['monthly', 'quarterly', 'half-yearly', 'annually'],
        rating: 4.5,
        reviews: 100
    },
    {

        title: 'Escalator Maintenance',
        description: 'We provide escalator maintenance services to our clients. Our team of experts will help you maintain your escalator in top condition.',
        images: ['/images/escalator-maintenance-1.jpg', '/images/escalator-maintenance-2.jpg',],
        customers: [
            {

                name: 'John Doe',
                review: 'I am very happy with the escalator maintenance services provided by ATZ Elevators. The team was very professional and completed the maintenance on time.'
            },
            {

                name: 'Jane Doe',
                review: 'I am very happy with the escalator maintenance services provided by ATZ Elevators. The team was very professional and completed the maintenance on time.'
            }

        ],
        starting_price: 10000,
        frequency: ['monthly', 'quarterly', 'half-yearly', 'annually'],
        rating: 4.5,
        reviews: 100
    },
    {

        title: 'Elevator Repair',
        description: 'We provide elevator repair services to our clients. Our team of experts will help you repair your elevator in record time.',
        images: ['/images/elevator-repair-1.jpg', '/images/elevator-repair-2.jpg', '/images/elevator-repair-3.jpg'],
        customers: [
            {

                name: 'John Doe',
                review: 'I am very happy with the elevator repair services provided by ATZ Elevators. The team was very professional and completed the repair on time.'
            },
            {

                name: 'Jane Doe',
                review: 'I am very happy with the elevator repair services provided by ATZ Elevators. The team was very professional and completed the repair on time.'
            }

        ],
        starting_price: 10000,
        rating: 4.5,
        reviews: 100
    },
    {

        title: 'Escalator Repair',
        description: 'We provide escalator repair services to our clients. Our team of experts will help you repair your escalator in record time.',
        images: ['/images/escalator-repair-1.jpg', '/images/escalator-repair-2.jpg', '/images/escalator-repair-3.jpg'],
        customers: [
            {

                name: 'John Doe',
                review: 'I am very happy with the escalator repair services provided by ATZ Elevators. The team was very professional and completed the repair on time.'
            },
            {

                name: 'Jane Doe',
                review: 'I am very happy with the escalator repair services provided by ATZ Elevators. The team was very professional and completed the repair on time.'
            }

        ],
        starting_price: 10000,
        rating: 4.5,
        reviews: 100
    },
    {

        title: 'Elevator Modernization',
        description: 'We provide elevator modernization services to our clients. Our team of experts will help you modernize your elevator in record time.',
        images: ['/images/elevator-modernization-1.jpg', '/images/elevator-modernization-2.jpg', '/images/elevator-modernization-3.jpg'],
        customers: [
            {

                name: 'John Doe',
                review: 'I am very happy with the elevator modernization services provided by ATZ Elevators. The team was very professional and completed the modernization on time.'
            },
            {

                name: 'Jane Doe',
                review: 'I am very happy with the elevator modernization services provided by ATZ Elevators. The team was very professional and completed the modernization on time.'
            },

        ],
        starting_price: 10000,
        rating: 4.5,
        reviews: 100
    }
]