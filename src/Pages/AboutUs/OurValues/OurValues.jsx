import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const OurValues = () => {
    return (
        <div>
            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-36'>
                <div className="mb-36 flex flex-col-reverse md:flex-row-reverse lg:justify-start items-start rounded-lg">
                    <div className="w-full mx-20">
                        <div className="mb-10">
                            <p className='text-xl font-sans font-extralight'>
                                OUR
                            </p>
                            <p className='text-2xl text-[#0B5F82] font-serif font-extrabold'>
                                VALUES
                            </p>
                            <div className="flex justify-center items-center">
                                <hr className='mt-3 w-full border border-gray-200 rounded' />
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-justify mb-10">
                                Our values are the cornerstone of everything we do. We believe in: <br /><br />

                                <span className="font-bold">Quality: </span>We uphold the highest standards of safety and efficacy, ensuring that every product we offer meets rigorous dermatological criteria.<br />
                                <span className="font-bold">Innovation: </span>We are committed to continuous improvement and leverage cutting-edge technology to deliver exceptional skincare solutions.<br />
                                <span className="font-bold">Integrity: </span>We operate with transparency and honesty, building trust with our customers and partners.<br />
                                <span className="font-bold">Customer Focus: </span>Your health and satisfaction are our top priorities. We strive to understand and meet your needs with personalized care and attention.<br />
                                <span className="font-bold">Sustainability: </span>We are dedicated to environmentally responsible practices, ensuring our operations and products are sustainable for future generations.<br /><br />
                                These values guide us in our mission to enhance well-being and confidence through superior skincare products, making Navantis Pharma a trusted name in the industry.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:rounded-r-lg">
                        <img
                            src="https://i.ibb.co/jLP3Y0t/value.jpg"
                            className="w-full h-full rounded-lg"
                            alt="Loading"
                        />
                    </div>
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={"Our Values"}
            ></LocationFooter>
        </div>
    );
};

export default OurValues;