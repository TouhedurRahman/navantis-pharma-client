import BannerPicText from "../../../Components/BannerPicText/BannerPicText";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const OurCommitment = () => {
    const contents = [
        {
            _id: 1,
            title: "Quality Assurance",
            descrption: "Navantis Pharma Limited is committed to delivering the highest quality skincare products. We adhere to rigorous quality control measures and international standards to ensure that every product we offer is safe, effective, and reliable. Our dedication to quality assurance means that our customers can trust in the consistency and excellence of our products, knowing they meet the strictest industry criteria.",
            imageURL: "https://i.ibb.co/1TCNxsq/Quality-Assurance.jpg",
            flexprop: "reverse"
        },
        {
            _id: 2,
            title: "Customer-Centric Approach",
            descrption: "Our customers are at the heart of everything we do. We prioritize understanding and meeting their needs through personalized service and support. Our customer-centric approach involves actively listening to feedback, addressing concerns, and continuously improving our products and services. By focusing on our customers' satisfaction and well-being, we aim to build lasting relationships based on trust and reliability.",
            imageURL: "https://i.ibb.co/JBv8TRQ/Customer-Centric-Approach.jpg",
            flexprop: "no-reverse"
        },
        {
            _id: 3,
            title: "Sustainability",
            descrption: "We are committed to sustainable practices in all aspects of our business. From sourcing ethically-produced ingredients to using eco-friendly packaging, we strive to minimize our environmental impact. Our commitment to sustainability extends to our manufacturing processes and corporate practices, ensuring that we contribute positively to the planet while delivering high-quality products. By choosing Navantis Pharma, customers can feel confident that they are supporting a company that values environmental stewardship.",
            imageURL: "https://i.ibb.co/rbkMrvX/Sustainability.jpg",
            flexprop: "reverse"
        },
        {
            _id: 4,
            title: "Innovation and Improvement",
            descrption: "At Navantis Pharma Limited, we are dedicated to continuous innovation and improvement. Our research and development team is constantly exploring new technologies, ingredients, and formulations to enhance our product offerings. We aim to stay at the forefront of dermatological science, bringing our customers the latest and most effective skincare solutions. Our commitment to innovation ensures that we can address emerging skincare needs and provide advanced products that deliver superior results.",
            imageURL: "https://i.ibb.co/Zfb9b5G/Innovation-and-Improvement.jpg",
            flexprop: "no-reverse"
        },
        {
            _id: 5,
            title: "Ethical Standards",
            descrption: "Integrity and ethical conduct are fundamental to our operations. We uphold the highest ethical standards in all our interactions, from our partnerships with suppliers to our relationships with customers. Transparency, honesty, and fairness guide our business practices, ensuring that we build a reputation of trust and respect in the industry. Our commitment to ethical standards ensures that we operate responsibly and maintain the trust of all our stakeholders.",
            imageURL: "https://i.ibb.co/t46xzMs/Standards.jpg",
            flexprop: "reverse"
        }
    ]

    return (
        <div>
            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <BannerPicText
                    img={"https://i.ibb.co/vsBjK18/commitment.jpg"}
                    title={"Our Commitment"}
                ></BannerPicText>
                <div>
                    {
                        contents.map(content => (
                            <>
                                <div className={`m-5 my-36 flex flex-col ${(content?.flexprop) === 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row'} lg:justify-between items-center rounded-lg`}>
                                    <div className="w-full md:w-1/2 lg:rounded-lg">
                                        <img
                                            src={content.imageURL}
                                            className="w-full h-full rounded-lg"
                                            alt="Loading..."
                                        />
                                    </div>
                                    <div className={`w-full md:w-1/2 pt-5 md:pt-0 md:p-5 ${(content?.flexprop) === 'reverse' ? 'md:me-20' : 'md:ms-20'} flex flex-col justify-center items-start`}>
                                        <p className="mb-3 font-bold text-2xl">
                                            {content.title}
                                        </p>
                                        <p className="mb-3 text-justify text-sm">
                                            {content.descrption}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={"Our Commitment"}
            ></LocationFooter>
        </div>
    );
};

export default OurCommitment;