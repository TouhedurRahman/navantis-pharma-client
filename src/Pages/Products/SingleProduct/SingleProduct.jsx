import { useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import { useParams } from 'react-router-dom';
import ShareSocialMedia from '../../../Components/ShareSocialMedia/ShareSocialMedia';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';
import { FaCircleLeft, FaCircleRight } from 'react-icons/fa6';
import Loader from '../../../Components/Loader/Loader';
import LocationFooter from '../../../Components/LocationFooter/LocationFooter';
import ProductCard from '../ProductCard/ProductCard';

const SingleProduct = () => {
    const [products, loading] = useProducts();
    const { id } = useParams();
    const product = products.find(product => product._id == id);
    const url = location.pathname;
    const similerProducts = products.filter(similerProduct =>
        (similerProduct.category === product.category) &&
        (similerProduct._id !== product._id)
    );
    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper) swiper.slideNext();
    };

    const goPrev = () => {
        if (swiper) swiper.slidePrev();
    };

    return (
        <div>
            <div className='mx-3 lg:w-[90%] lg:mx-auto my-20'>
                {
                    loading
                        ?
                        <Loader />
                        :
                        <>
                            <div className='flex flex-col lg:flex-row justify-between items-start'>
                                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                                    <div className="avatar">
                                        <div className="w-full h-96 rounded">
                                            <img
                                                src={product?.imageURL}
                                                alt={product?.name}
                                                className='rounded-lg'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full pt-10 lg:pt-0 lg:w-1/2'>
                                    <p className='text-2xl font-mono font-extrabold'>
                                        {product?.name}
                                    </p>
                                    <p className='text-xl font-mono mt-2'>
                                        {product?.subtitle && <p>{product?.subtitle}</p>}
                                    </p>
                                    <p className='my-2 border-y-2 border-y-gray-700 py-3'>
                                        {product?.usage}
                                    </p>
                                    <p className='text-xl font-bold'>
                                        Description
                                    </p>
                                    <p className='text-justify'>
                                        {product?.description.split('. ').map((line, index) => (
                                            <p key={index} className="list-disc pl-4 text-justify">
                                                • {line}{index === product.description.split('. ').length - 1 ? '' : '.'}
                                            </p>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <p className='text-2xl font-mono font-bold'>
                                    Apply
                                </p>
                                <p className='pl-4 pt-2'>
                                    {product?.apply.split('. ').map((line, index) => (
                                        <p key={index} className="list-disc pl-4 text-justify">
                                            • {line}{index === product.apply.split('. ').length - 1 ? '' : '.'}
                                        </p>
                                    ))}
                                </p>
                            </div>
                            <ShareSocialMedia url={url} />
                        </>
                }
                <div className='mt-10'>
                    {similerProducts.length > 0 && (
                        <>
                            <h2 className="pt-2 text-2xl font-bold relative">
                                Related Products
                            </h2>
                            <div className='w-full'>
                                <hr className="border-gray-500 border-b" />
                            </div>
                            <div className='flex justify-between items-center my-5'>
                                <button onClick={goPrev} className="mr-4 text-gray-700">
                                    <FaCircleLeft size={32} />
                                </button>
                                <Swiper
                                    spaceBetween={30}
                                    pagination={{ clickable: true }}
                                    // modules={[Pagination]}
                                    className="mySwiper"
                                    onSwiper={setSwiper}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: similerProducts.length > 1 ? 2 : 1,
                                        },
                                        1024: {
                                            slidesPerView: similerProducts.length > 2 ? 2 : similerProducts.length,
                                        },
                                    }}
                                >
                                    <div className='mx-2 mb-10'>
                                        {similerProducts.map(product => (
                                            <SwiperSlide key={product._id}>
                                                <ProductCard key={product._id} product={product} />
                                            </SwiperSlide>
                                        ))}
                                    </div>
                                </Swiper>
                                <button onClick={goNext} className="ml-4 text-gray-700">
                                    <FaCircleRight size={32} />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={
                    `Product / ${loading
                        ?
                        ""
                        :
                        `${product.forSearch}`
                    }`
                }
            ></LocationFooter>
        </div>
    );
};

export default SingleProduct;