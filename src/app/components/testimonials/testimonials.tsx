import TestimonialCard from "../cards/testimonial-card"

const TestimonialData = [
    {
        id: 1000,
        name: 'John Doe',
        title: 'CEO',
        org: 'XYZ Company',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tell us about yourself and we will get back to you as soon as possible.',
        image: "https://randomuser.me/api/portraits/2ekjk"
    },
    {
        id: 2000,
        name: 'Jane Doe',
        title: 'CTO',
        org: 'XYZ Company',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tell us about yourself and we will get back to you as soon as possible.',
        image: "https://randomuser.me/api/portraits/e2krjf"

    },
    {
        id: 3000,
        name: 'John Smith',
        title: 'COO',
        org: 'XYZ Company',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tell us about yourself and     we will get back to you as soon as possible.',
        image: "https://randomuser.me/api/portraits/kjenrf"

    },
]

export const Testimonials = () => {


    return (
        <div className="w-[80%] mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    TestimonialData.map((testimonial) => {
                        return (
                            <TestimonialCard key={testimonial.id} title={testimonial.name} subTitle={testimonial.title + ',' + testimonial.org}
                                description={testimonial.desc} image={testimonial.image} link="/" />
                        )
                    })
                }
            </div>
        </div>
    )


}