import BannerPicText from "../../../Components/BannerPicText/BannerPicText";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const CompanyProfile = () => {
    return (
        <div>
            <div className='mx-3 lg:w-[90%] lg:mx-auto mt-20 mb-36'>
                <BannerPicText
                    img={"https://i.ibb.co/VvqHdnV/company-profile.jpg"}
                    title={"Company Profile"}
                ></BannerPicText>
                <div data-aos="fade-down" data-aos-duration="2000">
                    <div className="mb-10">
                        <div className="text-center">
                            <p className='text-xl font-sans font-extralight'>
                                ABOUT
                            </p>
                            <p className='text-2xl text-[#080567] font-serif font-extrabold'>
                                NAVANTIS PHARMA LIMITED
                            </p>
                            <div className="flex justify-center items-center">
                                <hr className='mt-3 w-full border border-gray-200 rounded' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5' data-aos="fade-left" data-aos-duration="2000">
                        <p className='text-justify font-normal'>
                            Welcome to Navantis Pharma Limited, your premier destination for cutting-edge derma skincare solutions in Bangladesh. We started our company in 2019 as <b>RB Pharma Distributor</b> then in 2024 for expanding our business. We shifted as <b>Navantis Pharma Limited</b> has swiftly emerged as a trusted name in the pharmaceutical industry, specializing in importing top-quality dermatological medicines from renowned international manufacturers.
                            At Navantis Pharma Limited, our mission is simple yet profound: to revolutionize skincare by bringing advanced treatments and therapies to the fingertips of every individual across Bangladesh. We understand the importance of effective skincare in enhancing confidence and overall well-being, which is why we tirelessly strive to procure and deliver only the finest products available globally. <br /><br />
                            Our commitment to excellence extends beyond mere transactions; it permeates every aspect of our operations. From rigorous product selection processes to stringent quality control measures, we leave no stone unturned in ensuring that each medicine we import meets the highest standards of efficacy and safety. Our team of experts meticulously evaluates each product to guarantee optimal performance and compatibility with diverse skin types and conditions. <br /><br />
                            Navantis Pharma Limited takes great pride in its robust marketing and distribution network, which spans across the length and breadth of Bangladesh. Through strategic partnerships and collaborations, we ensure seamless access to our skincare solutions in even the most remote regions, empowering individuals to take control of their skin health. <br /><br />
                            Beyond business, Navantis Pharma Limited is driven by a genuine passion for making a positive impact on society. We believe that everyone deserves access to quality skincare, regardless of their geographical location or socioeconomic status. As such, we actively engage in corporate social responsibility initiatives aimed at promoting skin health awareness and providing support to underserved communities.
                            In essence, Navantis Pharma Limited is not just a skincare company; we are a beacon of hope and confidence for countless individuals seeking transformative dermatological solutions. Join us in our journey towards healthier, happier skin, and discover the Navantis Pharma Limited difference today.
                        </p>
                    </div>
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={"Company Profile"}
            ></LocationFooter>
        </div>
    );
};

export default CompanyProfile;