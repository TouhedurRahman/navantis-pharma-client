import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import CoverBanner from '../../Components/CoverBanner/CoverBanner';

const Products = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('');
    const { category } = useParams();

    useEffect(() => {
        if (location.pathname.includes('/products/imported-products')) {
            setSelected('imported-products');
        } else if (location.pathname.includes('/products/categories')) {
            setSelected('advertisements');
        }
    }, [location.pathname]);

    const handleSelection = (selection) => {
        setSelected(selection);
    }

    return (
        <div>
            <CoverBanner
                img={"https://i.ibb.co/jgGWgz9/Home-Banner-Medicine.jpg"}
                title={
                    location.pathname.includes('/products/imported-products')
                        ?
                        "Imported Products"
                        :
                        (
                            location.pathname.includes('/products/categories')
                                ?
                                "Categories"
                                :
                                `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
                        )

                }
                from={"Home"}
                to={"Products"}
            />

            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <div className='flex flex-col lg:flex-row justify-start items-start'>
                    <div className='w-full lg:w-[30%] pr-2'>
                        <div className='flex justify-center items-start'>
                            <ul>
                                <Link to="/products/imported-products">
                                    <li
                                        className={`mb-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "imported-products" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("imported-products")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Imported Products
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/products/categories">
                                    <li
                                        className={`my-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "categories" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("categories")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Categories
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-[70%] mb-10 px-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;