const OurValues = () => {
    const values = [
        {
            _id: 1,
            title: "Quality",
            description: "Quality is the cornerstone of our operations. We are committed to delivering superior skincare products that meet the highest standards of safety and efficacy. Our rigorous quality control processes encompass every stage, from sourcing premium ingredients to manufacturing and distribution. By adhering to international regulatory standards and continuously improving our practices, we ensure that our customers receive only the best. Quality at Navantis Pharma means excellence you can trust."
        },
        {
            _id: 2,
            title: "Knowledge",
            description: "Knowledge drives our success in the skincare industry. Our team of experts stays at the forefront of dermatological science, continually expanding their understanding of skin health and innovative treatments. Through ongoing research, training, and collaboration with leading global partners like Bionike, we ensure our products are based on the latest scientific advancements. This commitment to knowledge empowers us to provide cutting-edge skincare solutions that truly benefit our customers."
        },
        {
            _id: 3,
            title: "Responsibility",
            description: "Responsibility is at the heart of everything we do. We are dedicated to ethical business practices, environmental sustainability, and social accountability. Our commitment extends from ensuring the safety and efficacy of our skincare products to supporting the well-being of our employees and communities. By adhering to stringent regulatory standards and fostering a culture of integrity, we strive to make a positive impact and build trust with our customers and partners."
        }
    ]

    return (
        <div>
            <div className='px-1 lg:px-5 lg:border-l-2 lg:border-[#0B5F82]'>
                <div data-aos="fade-down" data-aos-duration="2000">
                    <div className='mt-10 lg:mt-0 text-center md:text-left'>
                        <p className='text-xl  font-sans font-extralight'>
                            OUR
                        </p>
                        <p className='text-2xl text-[#0B5F82] font-serif font-extrabold'>
                            VALUES
                        </p>
                        <hr className='mt-3 w-36 mx-auto lg:mx-0 border-2 border-[#FB923C] rounded' />
                    </div>

                    <div className='mt-5' data-aos="fade-left" data-aos-duration="2000">
                        <div>
                            {
                                values.map(value => (
                                    <div
                                        key={value._id}
                                        className='mb-10'
                                    >
                                        <p className='text-3xl text-[#0B5F82] font-serif font-extrabold'>{value.title}</p>
                                        <p className='text-gray-700 text-justify'>{value.description}</p>
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

export default OurValues;