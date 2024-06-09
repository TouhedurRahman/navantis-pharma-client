import { useState, useEffect } from 'react';

const Banner = () => {
    const images = [
        {
            _id: 1,
            title: "Health",
            subtitle: "Your Health Our Properties",
            img: "https://i.ibb.co/SrrbYrt/health.jpg"
        },
        {
            _id: 2,
            title: "Happiness",
            subtitle: "Healthy Smile Healthy Life",
            img: "https://i.ibb.co/PMtKmhT/happiness.jpg"
        },
        {
            _id: 3,
            title: "Beauty",
            subtitle: "Clear Skin, Clear Confidence",
            img: "https://i.ibb.co/kMz5wr4/beauty.jpg"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image) => (
                    <div key={image._id} className="w-full flex-shrink-0 relative">
                        <img
                            src={image.img}
                            alt={`Slide ${image._id}`}
                            className="object-cover"
                            data-aos="fade-right"
                        />
                        <div
                            className='absolute inset-0 right-[120px] flex items-center justify-end'
                            data-aos="fade-left"
                        >
                            <div className='flex flex-col justify-center items-end bg-white py-60 px-20 opacity-50'>
                                <div className='text-center flex flex-col justify-center items-center'>
                                    <p className='font-quicksand text-transparent text-4xl font-bold z-1'>
                                        {image.title}
                                    </p>
                                    <hr className='mt-3 w-36 border-2 border-[#FB923C] rounded' />
                                    <p className='mt-10'>
                                        {image.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className='absolute inset-0 right-[120px] flex items-center justify-end'
                            data-aos="fade-left"
                        >
                            <div className='flex flex-col justify-center items-end py-60 px-20'>
                                <div className='text-center flex flex-col justify-center items-center'>
                                    <p className='font-quicksand text-4xl font-bold'>
                                        {image.title}
                                    </p>
                                    <hr className='mt-3 w-36 border-2 border-[#FB923C] rounded' />
                                    <p className='mt-10'>
                                        {image.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-50">
                <button
                    onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                    className="bg-gray-800 text-white p-2 rounded-full"
                >
                    &#10094;
                </button>
                <button
                    onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                    className="bg-gray-800 text-white p-2 rounded-full"
                >
                    &#10095;
                </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full ${currentIndex === index ? 'bg-[#FB923C] w-24' : 'bg-white w-8'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;