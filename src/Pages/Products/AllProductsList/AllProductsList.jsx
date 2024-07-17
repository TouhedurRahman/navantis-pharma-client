import { useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import { ImSearch } from 'react-icons/im';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Loader from '../../../Components/Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

const AllProductsList = () => {
    const [products, loading] = useProducts();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.forSearch.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const productsPerPage = 6;

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

    return (
        <>
            <div className='mx-3'>
                <div className='mx-3 mt-20 md:mt-0 lg:w-full lg:mx-auto'>
                    <div>
                        {/* Search Input */}
                        <div className="flex justify-center mb-5 rounded-l-lg group">
                            <div className='flex justify-center items-center border-2 border-[#0B5F82] p-3 rounded-l-lg bg-[#0B5F82] text-white font-extrabold text-shadow-xl'>
                                <ImSearch />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products"
                                value={searchTerm}
                                onChange={handleSearch}
                                className="border-2 border-[#0B5F82] border-l-0 px-3 py-1 rounded-r-lg focus:outline-none"
                            />
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
                                <div className="grid grid-cols md:grid-cols-2 gap-4 md:gap-2">
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

                    {/* Pagination */}
                    <div className="flex justify-center my-10">
                        <button
                            className={`mx-1 px-3 py-1 shadow-lg  rounded-lg ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                            onClick={() => changePage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <span className='flex justify-between items-center'>
                                <FaChevronLeft className='mr-2' /> Previous
                            </span>
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`mx-1 px-3 py-1 border border-[#0B5F82] rounded-lg shadow-lg ${currentPage === index + 1 ? ' bg-[#FB923C] text-white font-mono font-extrabold italic border-2 border-[#0B5F82] rounded-badge' : ''
                                    }`}
                                onClick={() => changePage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className={`mx-1 px-3 py-1 shadow-lg rounded-lg  ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                            onClick={() => changePage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <span className='flex justify-between items-center'>
                                Next <FaChevronRight className='ml-2' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProductsList;