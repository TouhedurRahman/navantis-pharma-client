import BannerPicText from "../../../Components/BannerPicText/BannerPicText";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const OurQuality = () => {
    const contents = [
        {
            _id: 1,
            title: "Product Safety",
            descrption: "At Navantis Pharma Limited, product safety is our top priority. We rigorously test all our skincare products to ensure they meet the highest safety standards. Each product undergoes comprehensive assessments for skin compatibility and is free from harmful chemicals, allergens, and irritants. Our commitment to safety is reflected in our meticulous quality control processes and adherence to international regulatory standards. By prioritizing safety, we provide our customers with peace of mind, knowing that our products are not only effective but also safe for everyday use, regardless of skin type or sensitivity.",
            imageURL: "https://i.ibb.co/KKFfFHr/product-safety.jpg",
            flexprop: "reverse"
        },
        {
            _id: 2,
            title: "Efficiancy",
            descrption: "We ensure that every product we offer delivers on its promises through extensive research and clinical testing. Our team of experts works tirelessly to verify the effectiveness of our skincare solutions, using advanced methodologies and real-world evaluations. We invest in cutting-edge technology and partner with leading dermatologists to develop products that provide tangible, lasting results. Our dedication to efficacy means our customers can trust that our products will deliver noticeable improvements in their skin health and appearance, helping them achieve their skincare goals with confidence.",
            imageURL: "https://i.ibb.co/FqsxshJ/Efficacy.jpg",
            flexprop: "no-reverse"
        },
        {
            _id: 3,
            title: "Innovation",
            descrption: "Innovation is at the heart of our product development. We constantly seek out the latest advancements in dermatological science to create cutting-edge skincare solutions. Our R&D team is dedicated to exploring new technologies, ingredients, and formulations to keep our product line at the forefront of the industry. By embracing innovation, we ensure that our customers have access to the most advanced and effective skincare solutions available. This commitment to continuous improvement allows us to address emerging skincare concerns and meet the evolving needs of our customers with state-of-the-art products.",
            imageURL: "https://i.ibb.co/VgzT7zx/Innovation.jpg",
            flexprop: "reverse"
        },
        {
            _id: 4,
            title: "Ingredient Integrity",
            descrption: "We source only the highest-quality ingredients for our skincare products. Our stringent selection process ensures that each ingredient is safe, effective, and ethically sourced. We prioritize natural and sustainable ingredients, avoiding harmful chemicals and unnecessary additives. Our commitment to ingredient integrity means we are transparent about what goes into our products, allowing customers to make informed choices. By maintaining these high standards, we provide products that not only deliver excellent results but also support overall skin health and well-being.",
            imageURL: "https://i.ibb.co/wYGhDH1/Ingredient-Integrity.jpg",
            flexprop: "no-reverse"
        },
        {
            _id: 5,
            title: "Customer Satisfaction",
            descrption: "Customer satisfaction drives our quality standards. We listen to our customers' feedback and continuously improve our products based on their needs and preferences. Our customer-centric approach involves regular surveys, focus groups, and direct interactions to understand and anticipate customer expectations. We strive to exceed these expectations by offering exceptional products and responsive customer service. Our commitment to customer satisfaction ensures that every product we offer meets the highest standards of quality and effectiveness, building lasting trust and loyalty with our customers.",
            imageURL: "https://i.ibb.co/MVF6s4s/Customer-Satisfaction.jpg",
            flexprop: "reverse"
        }
    ]

    return (
        <div>
            <div className='mx-3 lg:w-[90%] lg:mx-auto mt-20 mb-10'>
                <BannerPicText
                    img={"https://i.ibb.co/njfTP2Q/our-quality.jpg"}
                    title={"Our Quality"}
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
                to={"Our Quality"}
            ></LocationFooter>
        </div>
    );
};

export default OurQuality;