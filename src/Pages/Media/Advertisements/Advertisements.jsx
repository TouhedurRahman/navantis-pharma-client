import useLatestProducts from "../../../Hooks/useLatestProducts";

const Advertisements = () => {
    const [products] = useLatestProducts();

    return (
        <div className='px-1 lg:px-5 lg:border-l-2 lg:border-[#0B5F82]'>
            <div data-aos="fade-down" data-aos-duration="2000">
                <div className='mt-10 md:mt-0 text-center md:text-left'>
                    <p className='text-xl  font-sans font-extralight'>
                        OUR
                    </p>
                    <p className='text-2xl text-[#0B5F82] font-serif font-extrabold'>
                        ADVERTISEMENTS
                    </p>
                    <hr className='mt-3 w-36 mx-auto md:mx-0 border-2 border-[#FB923C] rounded' />
                </div>

                <div className='mt-5' data-aos="fade-left" data-aos-duration="2000">
                    <div>
                        <div
                            className="hero h-[300px] hidden lg:block"
                            style={{ backgroundImage: 'url(https://i.ibb.co/gM2kKm2/aknet-purifing-gel.jpg)' }}
                        >
                            <div className="hero-overlay bg-opacity-20"></div>
                            <div className="hero-content text-center text-black">
                            </div>
                        </div>
                        <div className='flex flex-col-reverse md:flex-row justify-between items-center pt-10 md:pt-0'>
                            <div className='p-5'>
                                <p className='text-center text-xl font-bold'>
                                    Aknet Purifying Gel
                                </p>
                                <p className='text-justify'>
                                    Scrub-effect cleanser for the deep cleansing of acne-prone, seborrheic skin. Helps to reduce hyperseborrhoea and counters the formation of comedones, leaving skin smooth, fresh and clean. The product contains biodegradable microgranules.
                                </p>
                            </div>
                            <div className='md:-mt-40 p-5 pt-0'>
                                <img
                                    className='lg:w-[1500px] lg:h-64 bg-gray-500'
                                    src="https://i.ibb.co/pfSPzJB/beauty-face.jpg" alt="Loading..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg rounded-lg">
                        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Latest Products</h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.slice(0, 3).map(ad => (
                                <div key={ad._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img src={ad.imageURL} alt={ad.imageURL} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {ad.forSearch.slice(0, 10)}...
                                        </h2>
                                        <p className="mt-2 h-16 text-gray-600">
                                            {ad.description.slice(0, 30)}...
                                        </p>
                                        <a href={`/products/acne/${ad._id}`} className="mt-4 block text-indigo-500 hover:underline">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisements;