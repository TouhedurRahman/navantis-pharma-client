const ExploreHome = () => {
    const contents = [
        {
            _id: 1,
            img: "https://i.ibb.co/DKkk4tm/health-cycle.jpg",
            title: "Health",
            subtitle: "Safeguarded through our unwavering commitment to excellence."
        },
        {
            _id: 2,
            img: "https://i.ibb.co/vmKwpT0/happiness-family.jpg",
            title: "Happiness",
            subtitle: "Where well-being begins with a confident and vibrant smile."
        },
        {
            _id: 3,
            img: "https://i.ibb.co/pfSPzJB/beauty-face.jpg",
            title: "Beauty",
            subtitle: "Unfolds through innovation, progress, and boundless possibilities."
        }
    ]

    return (
        <div className="px-3 lg:px-10 my-5 mt-24 mb-10">
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                <div className="lg:w-full text-center ">
                    <h1 className="text-3xl font-bold text-[#0B5F82]"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span>Explore Navantis</span>
                        <div className='flex justify-center items-center'>
                            <hr className='mt-3 w-36 border-2 border-[#FB923C] rounded' />
                        </div>
                    </h1>
                    <p className='my-5 text-center' data-aos="fade-left" data-aos-duration="2000">
                        Explore the World of Skincare with Navantis Pharma Limited. Dive into our curated collection of articles, guides, and expert tips to unlock the secrets of radiant, healthy skin. Discover the latest trends, innovations, and insights that empower you to make informed choices for your skincare journey. From personalized routines to industry breakthroughs, navigate through our Explore section and embark on a transformative experience towards your best skin yet.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                        {
                            contents.map(content => (
                                <div key={content._id}>
                                    <div className="card bg-base-100 shadow-xl image-full">
                                        <figure><img src={content.img} alt="Shoes" /></figure>
                                        <div className="card-body flex flex-col justify-center items-center my-auto">
                                            <h2 className="text-white text-3xl">{content.title}</h2>
                                            <p>{content.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreHome;