import { randomUUID } from "crypto";

// manual passenger elevator,
// automatic passenger elevator,
// freight elevator,
// home elevator,
// hospital elevator,
// machine room less elevator,
// gearless elevator,
// capsule elevator,
// hydraulic elevator,
// dumbwaiter elevator


export type Customer = {
    name: string,
    review: string,
    rating: number
}

export type Elevator = {
    title: string,
    description: string,
    images: string[],
    customers: Customer[],
    starting_price: number,
    rating: number,
    reviews: number,
    features: {
        title: string,
        description: string
    }[],
    specifications: {
        title: string,
        description: string
    }[]
}


export const ELevatorsData: Elevator[] = [
    {

        title: 'Manual Door Passenger Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/manual-1.jpg', '/assets/images/manual-2.jpg', '/assets/images/manual-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Automatic Door Passenger Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/automatic-1.jpg', '/assets/images/automatic-2.jpg', '/assets/images/automatic-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Freight Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/freight-1.jpg', '/assets/images/freight-2.jpg', '/assets/images/freight-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Home Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/home-1.jpg', '/assets/images/home-2.jpg', '/assets/images/home-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Hospital Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/hospital-1.jpg', '/assets/images/hospital-2.jpg', '/assets/images/hospital-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2 ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Machine Room Less Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/machine-room-1.jpg', '/assets/images/machine-room-2.jpg', '/assets/images/machine-room-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Gearless Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/gearless-1.jpg', '/assets/images/gearless-2.jpg', '/assets/images/gearless-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'


            },]
    },
    {

        title: 'Capsule Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/capsule-1.jpg', '/assets/images/capsule-2.jpg', '/assets/images/capsule-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Hydraulic Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/hydraulic-1.jpg', '/assets/images/hydraulic-2.jpg', '/assets/images/hydraulic-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    },
    {

        title: 'Dumbwaiter Elevator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis. ',
        images: ['/assets/images/dumbwaiter-1.jpg', '/assets/images/dumbwaiter-2.jpg', '/assets/images/dumbwaiter-3.jpg'],
        starting_price: 10000,
        rating: 4.5,
        reviews: 10,
        customers: [
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'Jane Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
            {

                name: 'John Doe',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.',
                rating: 4.5,
            },
        ],
        features: [
            {

                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Feature 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
        specifications: [
            {

                title: 'Specification 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
            {

                title: 'Specification 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis.'
            },
        ],
    }

]