import { useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import { useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CategorizedProductcard from '../CategorizedProductcard/CategorizedProductcard';
import CategorizedProductList from '../CategorizedProductList/CategorizedProductList';
import { ImSearch } from 'react-icons/im';
import { MdGridView, MdViewList } from 'react-icons/md';
import Loader from '../../../Components/Loader/Loader';

const CategorizeProducts = () => {
    const [products, loading] = useProducts();

    const { category } = useParams();

    const categorizedProducts = products.filter(product => product.category === category);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [gridView, setGridview] = useState(false);

    const filteredProducts = categorizedProducts.filter(product =>
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
        <div>
            <div className='px-3 lg:px-5 lg:border-l-2 lg:border-[#080567]'>
                <div className='mx-3 lg:w-full lg:mx-auto'>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <div className=''>
                            {/* Search Input */}
                            <div className="flex justify-center mb-5 ounded-l-lg group">
                                <div className='flex justify-center items-center border-2 border-[#080567] p-3 rounded-l-lg bg-[#080567] text-white font-extrabold text-shadow-xl'>
                                    <ImSearch />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search products"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="border-2 border-[#080567] border-l-0 px-3 py-1 rounded-r-lg focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex justify-center lg:justify-end items-center text-3xl font-sans font-bold mb-5'>
                                <p className='text-xl flex justify-center items-center '>View</p>
                                <div className='tooltip'>
                                    <MdViewList
                                        className={`ml-2 cursor-pointer ${gridView === false ? 'text-[#FB923C]' : 'text-[#080567]'}`}
                                        onClick={() => setGridview(false)}
                                    />
                                    <span className="tooltiptext font-extralight text-xl">List View</span>
                                </div>
                                <div className='tooltip'>
                                    <MdGridView
                                        className={`ml-2 cursor-pointer ${gridView === true ? 'text-[#FB923C]' : 'text-[#080567]'}`}
                                        onClick={() => setGridview(true)}
                                    />
                                    <span className="tooltiptext font-extralight text-xl">Grid View</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        gridView
                            ?
                            <>
                                {
                                    loading
                                        ?
                                        <Loader />
                                        :
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                                            {
                                                currentProducts.map(product =>
                                                    <CategorizedProductcard
                                                        key={product._id}
                                                        product={product}
                                                    />
                                                )
                                            }
                                        </div>
                                }
                            </>
                            :
                            <>
                                {
                                    loading
                                        ?
                                        <Loader />
                                        :
                                        <div className='grid grid-cols gap-2'>
                                            {
                                                currentProducts.map(product =>
                                                    <CategorizedProductList
                                                        key={product._id}
                                                        product={product}
                                                    />
                                                )
                                            }
                                        </div>
                                }
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
                                className={`mx-1 px-3 py-1 border border-[#080567] rounded-lg shadow-lg ${currentPage === index + 1 ? ' bg-[#FB923C] text-white font-mono font-extrabold italic border-2 border-[#080567] rounded-badge' : ''
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
        </div>
    );
};

export default CategorizeProducts;