import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const Leadership = () => {
    return (
        <div>
            <div className='mx-3 lg:w-[90%] lg:mx-auto mt-20 mb-36'>
                <div className="mb-36 flex flex-col-reverse md:flex-row-reverse lg:justify-start items-start rounded-lg">
                    <div className="w-full mt-10 md:mt-0 md:mx-10 lg:ml-20">
                        <div className="mb-10">
                            <p className='text-xl font-sans font-extralight'>
                                MESSAGE FROM
                            </p>
                            <p className='text-2xl text-gray-700 font-serif font-extrabold'>
                                LEADER
                            </p>
                            <div className="flex justify-center items-center">
                                <hr className='mt-3 w-full border border-gray-200 rounded' />
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-justify mb-10">
                                In our pursuit of excellence, Navantis Pharma Limited is dedicated to importing top-tier derma skincare products from abroad, ensuring every citizen of Bangladesh receives the highest standard of care. We stand firm in our commitment to quality and accessibility, ensuring that our premium skincare solutions are within reach for everyone. By fostering healthier communities across the nation, we aim to not only enhance individual well-being but also contribute to the overall health of our society. Together, let's uphold these values and continue to provide exceptional care, making a lasting impact on the lives of our customers.
                            </p>
                            <p className="font-bold text-2xl flex flex-col">
                                Ratan Banik
                                <span className="text-sm">
                                    Managing Director
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:rounded-r-lg">
                        <img
                            src="https://i.ibb.co/9GCN17N/leader-photo.jpg"
                            className="w-full h-full rounded-lg"
                            alt="Loading"
                        />
                    </div>
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={"Leadership"}
            ></LocationFooter>
        </div>
    );
};

export default Leadership;