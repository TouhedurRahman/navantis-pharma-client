const Leadership = () => {
    const leaderMessage = [
        {
            _id: 1,
            name: "Ratan Banik",
            designation: "Managing Director",
            message: "In our pursuit of excellence, we import top-tier derma skincare products from abroad, ensuring every citizen of Bangladesh receives the care they deserve. Let's uphold our commitment to quality and accessibility, fostering healthier communities across the nation."
        },
        {
            _id: 2,
            name: "A S M Zakaria",
            designation: "Sales Manager",
            message: "Our commitment to delivering imported derma skincare solutions across Bangladesh remains resolute. Let's harness our expertise and passion to ensure every individual benefits from our imported medicines. Together, we can elevate skincare standards nationwide, enriching lives with quality products and exceptional service."
        },
        {
            _id: 3,
            name: "Al Hasnain Jahan",
            designation: "Product Management Department",
            message: "In our PMD session, let's strategize on enhancing our imported derma skincare offerings for Bangladesh. By leveraging market insights and innovation, we'll ensure our products meet diverse needs nationwide. Together, we'll drive growth and make a meaningful impact on skincare health across the country."
        }
    ]

    return (
        <div>
            <div className='px-3 lg:px-5 lg:border-l-2 lg:border-[#0B5F82]'>
                <div data-aos="fade-down" data-aos-duration="2000">
                    <p className='text-xl font-sans font-extralight'>
                        OUR
                    </p>
                    <p className='text-2xl text-[#0B5F82] font-serif font-extrabold'>
                        LEADERSHIP
                    </p>
                    <hr className='mt-3 w-36 border-2 border-[#FB923C] rounded' />

                    <div className='mt-5' data-aos="fade-left" data-aos-duration="2000">
                        <div>
                            {
                                leaderMessage.map(leader => (
                                    <div
                                        key={leader._id}
                                        className='mb-10 border-2 border-[#0B5F82] shadow shadow-[#FB923C] rounded-lg p-5'
                                    >
                                        <p className='text-3xl text-[#0B5F82] font-serif font-extrabold'>{leader.name}</p>
                                        <p className='text-xl font-bold italic'>{leader.designation}</p>
                                        <p className='text-gray-700 text-justify'>{leader.message}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;