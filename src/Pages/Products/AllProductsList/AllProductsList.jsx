import { useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import { ImSearch } from 'react-icons/im';
import Loader from '../../../Components/Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const AllProductsList = () => {
    const [products, loading] = useProducts();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [productsPerPage, setProductsPerPage] = useState(6);

    const filteredProducts = products.filter(product =>
        product.forSearch.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);

    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleProductsPerPageChange = (e) => {
        setProductsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <>
            <div className='mx-3'>
                <div className='mx-3 mt-20 md:mt-0 lg:w-full lg:mx-auto'>
                    <div className="mb-5 flex flex-col-reverse md:flex-row justify-center md:justify-end items-center">
                        <div className="mt-5 md:mt-0 hidden">
                            <label htmlFor="productsPerPage">Show</label>
                            <select
                                id="productsPerPage"
                                value={productsPerPage}
                                onChange={handleProductsPerPageChange}
                                className="border border-gray-500 rounded p-1 pointer-cursor mx-2"
                            >
                                <option value={6}>6</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                                <option value={40}>40</option>
                                <option value={50}>50</option>
                            </select>
                            <label htmlFor="productsPerPage">products per page</label>
                        </div>
                        <div>
                            {/* Search Input */}
                            <div className="flex justify-center rounded-l-lg group">
                                <div className='flex justify-center items-center border border-gray-500 border-r-0 p-3 rounded-l-full  text-black font-extrabold text-shadow-xl'>
                                    <ImSearch />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search products"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="border border-gray-500 border-l-0 px-3 py-1 rounded-r-full focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    {
                        loading
                            ?
                            <>
                                <Loader />
                            </>
                            :
                            <>
                                <div className="grid grid-cols md:grid-cols-2 gap-4">
                                    {
                                        currentProducts.map(product => (
                                            <ProductCard
                                                key={product._id}
                                                product={product}
                                            ></ProductCard>
                                        ))
                                    }
                                </div>
                            </>
                    }
                    <div className='mt-10 flex flex-col md:flex-row justify-between items-center space-y-3 lg:space-y-0'>
                        <div className='px-3'>
                            <p>
                                Page <span className='font-bold'>{currentPage}</span> out of <span className='font-bold'>{totalPages}</span>
                            </p>
                        </div>
                        {/* Pagination */}
                        <div className="flex justify-start items-center">
                            <div
                                className={`mx-1 px-3 py-1 rounded-lg flex justify-center items-center ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                                onClick={currentPage !== 1 ? () => changePage(currentPage - 1) : null}
                                aria-disabled={currentPage === 1}
                            >
                                <span className='flex justify-between items-center text-black'>
                                    <BsArrowLeftCircleFill className='h-6 w-6' />
                                </span>
                            </div>
                            <div className='flex justify-center items-center'>
                                {
                                    Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            className={`mx-1 flex justify-center items-center w-6 h-6 border border-black rounded-[4px] ${currentPage === index + 1 ? 'bg-gray-700 text-white font-mono font-extrabold italic border-2 border-green-900' : ''
                                                }`}
                                            onClick={() => changePage(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))
                                }
                            </div>
                            <div
                                className={`mx-1 px-3 py-1 rounded-[4px] flex justify-center items-center ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                                onClick={currentPage !== totalPages ? () => changePage(currentPage + 1) : null}
                                aria-disabled={currentPage === totalPages}
                            >
                                <span className='flex justify-between items-center text-black'>
                                    <BsArrowRightCircleFill className='h-6 w-6' />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProductsList;