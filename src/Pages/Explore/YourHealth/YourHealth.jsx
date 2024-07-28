import BannerPicText from "../../../Components/BannerPicText/BannerPicText";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const YourHealth = () => {
    const contents = [
        {
            _id: 1,
            title: "Preventive Care",
            descrption: "At Navantis Pharma Limited, we believe in the power of preventive care. Our products are designed to not only address existing skin issues but also to prevent future problems. By incorporating advanced ingredients and cutting-edge formulations, we help our customers maintain healthy skin and avoid potential dermatological issues. Our focus on preventive care means providing solutions that keep your skin in its best condition, reducing the need for more intensive treatments down the line.",
            imageURL: "https://i.ibb.co/MZtNsVF/Preventive-Care.jpg",
            flexprop: "reverse"
        },
        {
            _id: 2,
            title: "Holistic Wellness",
            descrption: "We understand that skin health is a vital part of overall well-being. Our approach to skincare is holistic, taking into account the various factors that contribute to healthy skin. We promote products that not only enhance skin appearance but also support its natural functions and resilience. By considering the broader aspects of wellness, we help our customers achieve balanced, radiant skin that reflects their inner health.",
            imageURL: "https://i.ibb.co/GP6fGVS/Holistic-Wellness.jpg",
            flexprop: "no-reverse"
        },
        {
            _id: 3,
            title: "Personalized Solutions",
            descrption: "Your skin is unique, and so are its needs. Navantis Pharma Limited offers personalized skincare solutions tailored to individual skin types and concerns. Our range of products is designed to cater to diverse needs, ensuring that every customer finds the right match for their skin. By providing personalized solutions, we ensure optimal results and satisfaction, helping you achieve your healthiest skin ever.",
            imageURL: "https://i.ibb.co/r6BSx5L/Personalized-Solutions.jpg",
            flexprop: "reverse"
        },
        {
            _id: 4,
            title: "Education and Awareness",
            descrption: "We are committed to educating our customers about the best practices in skincare. Through informative content, workshops, and one-on-one consultations, we empower you with the knowledge needed to take control of your skin health. Understanding the science behind our products and how to use them effectively helps you make informed decisions and achieve the best possible outcomes for your skin.",
            imageURL: "https://i.ibb.co/HV04kL7/Education-and-Awareness.jpg",
            flexprop: "no-reverse"
        },
        {
            _id: 5,
            title: "Support and Care",
            descrption: "Navantis Pharma Limited goes beyond providing products; we offer ongoing support and care. Our dedicated customer service team is always available to assist with any questions or concerns, ensuring you have the guidance you need on your skincare journey. By offering continuous support, we build lasting relationships with our customers, fostering trust and confidence in our brand and products.",
            imageURL: "https://i.ibb.co/7g3bTfM/Support-and-Care.jpg",
            flexprop: "reverse"
        }
    ]

    return (
        <div>
            <div className='mx-3 lg:w-[90%] lg:mx-auto mt-20 mb-10'>
                <BannerPicText
                    img={"https://i.ibb.co/YdyXsKx/health.jpg"}
                    title={"Your Health"}
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
                to={"Your Health"}
            ></LocationFooter>
        </div>
    );
};

export default YourHealth;