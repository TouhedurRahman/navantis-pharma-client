import BannerPicText from "../../../Components/BannerPicText/BannerPicText";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const WhoWeAre = () => {
    const contents = [
        {
            _id: 1,
            title: "Our Mission",
            descrption: "Navantis Pharma Limited is dedicated to enhancing the health and well-being of our customers by providing top-quality derma skincare products. We aim to make premium skincare solutions accessible to everyone across Bangladesh. Our mission is to deliver effective and safe products that meet the highest standards of dermatological care, ensuring our customers receive the best possible treatment for their skin concerns.",
            imageURL: "https://i.ibb.co/Zm2XnWX/mission.jpg",
            flexprop: "reverse"
        },
        {
            _id: 2,
            title: "Our Vision",
            descrption: "We aspire to be the leading provider of dermatological solutions in Bangladesh, known for our innovation, superior quality, and unwavering commitment to customer satisfaction. Our vision is to continuously advance in the field of skincare, bringing the latest and most effective products to our customers. We aim to build a brand synonymous with trust, excellence, and reliability in the skincare industry.",
            imageURL: "https://i.ibb.co/cv3Kz8F/vision.jpg",
            flexprop: "no-reverse"
        },
        {
            _id: 3,
            title: "Our History",
            descrption: "Since our founding, we have partnered with renowned international brands like Bionike to bring cutting-edge skincare products to the Bangladeshi market. Our history is marked by a commitment to excellence and effective results. Over the years, we have built a strong reputation for quality and innovation, ensuring our customers have access to the best skincare solutions available globally.",
            imageURL: "https://i.ibb.co/0CTtj39/history.jpg",
            flexprop: "reverse"
        },
        {
            _id: 5,
            title: "Our Team",
            descrption: "Our dedicated team of professionals is passionate about skincare and committed to delivering exceptional service and support. We ensure that our customers’ skincare needs are met with expertise, care, and personalized attention. Our team is continuously trained and updated with the latest advancements in dermatological science, enabling us to provide informed and effective solutions for our customers.",
            imageURL: "https://i.ibb.co/BgHPJX5/team.jpg",
            flexprop: "no-reverse"
        }
    ]

    return (
        <div>
            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <BannerPicText
                    img={"https://i.ibb.co/0YCg0K4/who-we-are.jpg"}
                    title={"Who We Are"}
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
                to={"Who We Are"}
            ></LocationFooter>
        </div>
    );
};

export default WhoWeAre;