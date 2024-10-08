import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import useOnlyCategories from '../../Hooks/useOnlyCategories';
import LocationFooter from '../../Components/LocationFooter/LocationFooter';
import { FaArrowRight } from 'react-icons/fa';
import AllProductsList from '../../Pages/Products/AllProductsList/AllProductsList';
import BannerOnlyText from '../../Components/BannerOnlyText/BannerOnlyText';

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
            <BannerOnlyText
                title={"Products"}
            ></BannerOnlyText>
            <div className='mx-3 lg:w-[90%] lg:mx-auto mb-36'>
                <div className='mb-5'>
                    <div className=' pb-10 flex flex-col-reverse  md:flex-row justify-between items-center'>
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
                            <span className="mx-2 text-gray-700">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start items-start'>
                        <div className="w-full md:w-[20%] lg:mt-16">
                            <div className='flex justify-start items-start'>
                                <ul className='w-[85%] mx-auto lg:w-full grid grid-cols-3 md:grid-cols-1 gap-3'>
                                    {
                                        onlyCategories.map(onlyCategory => (
                                            <Link
                                                key={onlyCategory.category}
                                                to={`/products/category/${onlyCategory.category}`}
                                            >
                                                <li
                                                    className={`mb-3 cursor-pointer inline-block ${selected === onlyCategory.category && 'text-gray-700 font-bold border-b-2 border-gray-700'}`}
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