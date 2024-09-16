import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoreHome = () => {
    const contents = [
        {
            _id: 1,
            title: "Who We Are",
            description: "A leading derma company in Bangladesh, partners with Bionike to bring high-quality Italian skincare products to customers nationwide.",
            imageURL: "https://i.ibb.co/0YCg0K4/who-we-are.jpg",
            to: "/who-we-are"
        },
        {
            _id: 2,
            title: "Our Quality",
            description: "Our commitment to quality ensures that every Bionike product we offer meets the highest standards of safety, efficacy, and dermatological excellence.",
            imageURL: "https://i.ibb.co/njfTP2Q/our-quality.jpg",
            to: "/our-quality"
        },
        {
            _id: 3,
            title: "Your Health",
            description: "Your health is our priority, and we strive to provide top-notch dermatological solutions for a healthier, more confident you.",
            imageURL: "https://i.ibb.co/YdyXsKx/health.jpg",
            to: "/your-health"
        },
        {
            _id: 4,
            title: "Our Commitment",
            description: "Our commitment is to deliver exceptional skincare products and services that enhance the well-being and confidence of our customers.",
            imageURL: "https://i.ibb.co/vsBjK18/commitment.jpg",
            to: "/our-commitment"
        }
    ]

    return (
        <div className='m-5 my-36'>
            <div>
                <p className="mb-3 font-bold text-2xl">
                    Explore
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    contents.map(content => (
                        <>
                            <div className="border border-gray-500 rounded-lg">
                                <div className="mb-5">
                                    <img
                                        src={content.imageURL}
                                        alt="Loading..."
                                        className="w-full h-full rounded-t-lg"
                                    />
                                </div>
                                <div className="px-3">
                                    <p className="mb-5 font-bold">
                                        {
                                            content.title
                                        }
                                    </p>
                                    <p className="mb-10 text-justify">
                                        {
                                            content.description.slice(0, 90)
                                        }...
                                    </p>
                                    <Link
                                        to={content.to}
                                        className="my-5 flex justify-start items-center space-x-4"
                                    >
                                        <span className="font-bold hover:link">
                                            Read more
                                        </span>
                                        <span className="mx-2 text-gray-700" >
                                            <FaArrowRight />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default MoreHome;