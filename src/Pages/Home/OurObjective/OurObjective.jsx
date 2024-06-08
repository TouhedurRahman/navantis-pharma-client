const OurObjective = () => {
    const contents = [
        {
            _id: 1,
            title: "Innovation",
            subtitle: "Innovision Is The Key To Improveing Healthcare. Navantis Pharma Limited Is Working Towords Advancement In High-Quality Healthcare. We Belive In Raising The Bar Each Time."
        },
        {
            _id: 2,
            title: "Vision",
            subtitle: "We Aim To Lead Globally In Pharmaceutical Innovation, Shaping A Healthier Future Through Breakthroughs, Integrity, And Sustainability, Enhancing Lives Worldwide."
        },
        {
            _id: 3,
            title: "Quality",
            subtitle: "Navantis Pharma Limited Upholds The Highest Quality Standards In Pharmaceutical Research, Development, And Distribution, Ensuring Excellence In Every Product And Service."
        },
        {
            _id: 3,
            title: "Career",
            subtitle: "At Navantis Pharma Limited, We Offer Dynamic Career Opportunities In Pharmaceutical Research, Development, And Distribution. Join Us In Shaping The Future Of Healthcare."
        }
    ]

    return (
        <div className="px-3 lg:px-10 my-5 mt-24 mb-10">
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                <div className="lg:w-full lg:text-center ">
                    <h1 className="text-3xl font-bold text-[#0B5F82]"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span>Our Objective</span>
                        <div className='flex justify-center items-center'>
                            <hr className='mt-3 w-36 border-2 border-[#FB923C] rounded' />
                        </div>
                    </h1>
                    <p className='my-5 text-center' data-aos="fade-left" data-aos-duration="2000">
                        Our objective is to revolutionize skincare in Bangladesh by providing innovative, high-quality products sourced from leading global partners like Bionike. We aim to enhance the well-being and confidence of our customers through effective dermatological solutions. Our commitment extends to maintaining rigorous quality standards, fostering a culture of continuous improvement, and upholding ethical business practices. By achieving these goals, we strive to be the preferred choice for skincare solutions nationwide.
                    </p>
                </div>
            </div>
            <div>
                {
                    contents.map(content => (
                        <div key={content._id}>
                            <div className="collapse collapse-plus border-b-2 rounded-none">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    {content.title}
                                </div>
                                <div className="collapse-content">
                                    <p>{content.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default OurObjective;