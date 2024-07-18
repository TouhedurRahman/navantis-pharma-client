import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import useOnlyCategories from '../../Hooks/useOnlyCategories';
import BannerPicText from '../../Components/BannerPicText/BannerPicText';
import LocationFooter from '../../Components/LocationFooter/LocationFooter';
import { FaArrowRight } from 'react-icons/fa';
import AllProductsList from '../../Pages/Products/AllProductsList/AllProductsList';

const Products = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('all');
    const [onlyCategories] = useOnlyCategories();
    const { category } = useParams();

    useEffect(() => {
        if (location.pathname.includes(`/products/category/${category}`)) {
            setSelected(category);
        } else {
            setSelected('all');
        }
    }, [location.pathname, category]);

    const handleSelection = (selection) => {
        setSelected(selection);
    }

    return (
        <div>
            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-36'>
                <BannerPicText
                    img={"https://i.ibb.co/py72B1t/imported-product.jpg"}
                    title={"Imported Products"}
                ></BannerPicText>

                <div className='mb-5'>
                    <div className=' pb-10 flex flex-col-reverse lg:flex-row justify-between items-center'>
                        <p className='text-xl font-bold'>
                            Category
                        </p>
                        <Link
                            to='/products'
                            className="my-5 flex justify-start items-center space-x-4"
                        >
                            <span className="font-bold hover:link">
                                View All Products
                            </span>
                            <span className="mx-2 text-[#0B5F82]">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start items-start'>
                        <div className="w-full md:w-[30%] lg:mt-16">
                            <div className='flex justify-start items-start'>
                                <ul className='w-[85%] mx-auto lg:w-full grid grid-cols-3 lg:grid-cols-1 gap-3'>
                                    {
                                        onlyCategories.map(onlyCategory => (
                                            <Link
                                                key={onlyCategory.category}
                                                to={`/products/category/${onlyCategory.category}`}
                                            >
                                                <li
                                                    className={`mb-3 cursor-pointer inline-block ${selected === onlyCategory.category && 'text-[#0B5F82] font-bold border-b-2 border-[#0B5F82]'}`}
                                                    onClick={() => handleSelection(onlyCategory.category)}
                                                >
                                                    <div className='flex justify-start items-center'>
                                                        {onlyCategory.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                    </div>
                                                </li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='w-full'>
                            {
                                location.pathname.includes(`/products/category/${category}`)
                                    ?
                                    <>
                                        <Outlet />
                                    </>
                                    :
                                    <>
                                        <AllProductsList />
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={`Products / ${category ? `${category}` : "All"}`}
            ></LocationFooter>
        </div>
    );
};

export default Products;