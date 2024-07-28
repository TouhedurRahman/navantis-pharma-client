import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames"; // Import classnames

const NavbarHome = () => {
    const [products] = useProducts();
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const navigate = useNavigate();
    const modalBoxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrolled = scrollTop > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.forSearch.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
    }, [searchTerm, products]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setSearchText(e.target.value);
    };

    const handleProductClick = () => {
        setSearchTerm('');
        setSearchText('');
    };

    const location = useLocation();

    useEffect(() => {
        const closeOtherDetails = (details) => {
            const allDetails = document.querySelectorAll('details');
            allDetails.forEach(otherDetails => {
                if (otherDetails !== details) {
                    otherDetails.removeAttribute('open');
                }
            });
        };

        const detailsElements = document.querySelectorAll('details');
        detailsElements.forEach(details => {
            const links = details.querySelectorAll('.dropdown-link');
            links.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            });

            details.addEventListener('toggle', (event) => {
                if (event.target.open) {
                    closeOtherDetails(details);
                }
            });
        });

        return () => {
            detailsElements.forEach(details => {
                const links = details.querySelectorAll('.dropdown-link');
                links.forEach(link => {
                    link.removeEventListener('click', () => { });
                });
                details.removeEventListener('toggle', () => { });
            });
        };
    }, [location]);

    useEffect(() => {
        const maxHeight = 80;
        const minHeight = 13;
        const itemHeight = 6;

        const calculatedHeight = searchText.length === 0
            ? minHeight
            : Math.min(maxHeight, minHeight + searchResults.length * itemHeight);

        modalBoxRef.current.style.height = `${calculatedHeight}vh`;
    }, [searchResults, searchText]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (searchResults.length > 0) {
                if (event.key === 'ArrowDown') {
                    setSelectedIndex((prevIndex) => (prevIndex + 1) % searchResults.length);
                } else if (event.key === 'ArrowUp') {
                    setSelectedIndex((prevIndex) => (prevIndex - 1 + searchResults.length) % searchResults.length);
                } else if (event.key === 'Enter' && selectedIndex >= 0) {
                    navigate(`/products/${searchResults[selectedIndex].category}/${searchResults[selectedIndex]._id}`);
                    document.getElementById('search_modal').close();
                    setSearchTerm('');
                    setSearchText('');
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [searchResults, selectedIndex, navigate]);

    return (
        <div className="text-black font-bold">
            <div
                className={classNames(
                    "navbar z-10 px-5 lg:px-[40px] transition-all duration-300 ease-in-out",
                    {
                        "bg-transparent text-white scroll-smooth relative": !isScrolled,
                        "fixed top-0 scroll-smooth bg-white text-black shadow-lg": isScrolled,
                    }
                )}
            >
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden bg-transparent p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content mt-3 z-10 p-4 shadow-lg bg-white text-black w-[280px] -left-5 right-0 mx-auto rounded-r-lg space-y-2"
                        >
                            <li className="py-2"><Link to='/products' reloadDocument>PRODUCTS</Link></li>
                            <li className="py-2"><Link to='/our-partner' reloadDocument>PARTNER</Link></li>
                            <li className="py-2"><Link to='/news-room' reloadDocument>NEWS ROOM</Link></li>
                            <li className="py-2"><Link to='/careers' reloadDocument>CAREERS</Link></li>
                            <li className="py-2"><Link to='/contact-us' reloadDocument>CONTACT US</Link></li>
                        </ul>
                    </div>
                    <div className="ml-3 w-full flex justify-between items-center lg:hidden">
                        <Link to="/">
                            <div>
                                <img
                                    src={
                                        isScrolled
                                            ?
                                            'https://i.ibb.co/WHdtY9y/Logo-Navantis.png'
                                            :
                                            'https://i.ibb.co/pfr6VxM/Logo-Navantis-png-white.png'
                                    }
                                    className="w-[150px] lg:w-[180px] h-[40px]"
                                />
                            </div>
                        </Link>

                        <div className="flex justify-end items-center">
                            <div
                                className={`flex justify-center ${!isScrolled && 'text-white'} items-center btn bg-transparent border-none`}
                                onClick={() => document.getElementById('search_modal').showModal()}
                            >
                                <ImSearch
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex justify-between items-center w-full">
                    <div>
                        <Link to="/">
                            <div>
                                <img
                                    src={
                                        isScrolled
                                            ?
                                            'https://i.ibb.co/WHdtY9y/Logo-Navantis.png'
                                            :
                                            'https://i.ibb.co/pfr6VxM/Logo-Navantis-png-white.png'
                                    }
                                    className="w-[150px] lg:w-[180px] h-[40px]"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-end items-center">
                        <div>
                            <ul className="menu menu-horizontal z-10">
                                <li className="ml-3 flex justify-center items-center"><Link to='/products'>PRODUCTS</Link></li>
                                <li className="ml-3 flex justify-center items-center"><Link to='/our-partner'>PARTNER</Link></li>
                                <li className="ml-3 flex justify-center items-center"><Link to='/news-room'>NEWS ROOM</Link></li>
                                <li className="ml-3 flex justify-center items-center"><Link to='/careers'>CAREERS</Link></li>
                                <li className="ml-3 flex justify-center items-center"><Link to='/contact-us'>CONTACT US</Link></li>
                            </ul>
                        </div>

                        <div className="flex justify-end items-center">
                            <div
                                className={`flex justify-center ${!isScrolled && 'text-white'} items-center btn bg-transparent border-none`}
                                onClick={() => document.getElementById('search_modal').showModal()}
                            >
                                <ImSearch
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* search modal */}
            <dialog id="search_modal" className="modal">
                <div
                    id="modal_box"
                    ref={modalBoxRef}
                    className="modal-box bg-gray-50 rounded-lg shadow-xl overflow-y-auto transition-all duration-500 ease-in-out"
                >
                    <div>
                        <div className="flex justify-center">
                            <div className='flex justify-center items-center border-2 border-[#080567] p-3 rounded-l-lg bg-[#080567] text-white font-extrabold text-shadow-xl'>
                                <ImSearch />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products"
                                value={searchTerm}
                                onChange={(e) => {
                                    handleSearch(e);
                                    setSearchText(e.target.value);
                                    setSelectedIndex(-1); // Reset selection when search text changes
                                }}
                                className="border-2 border-[#080567] border-r-0 px-3 py-2 focus:outline-none focus:ring-[#080567] transition duration-300"
                            />
                            <div className='flex justify-center items-center bg-white border-2 border-[#080567] border-l-0 p-3 rounded-r-lg text-[#080567] font-extrabold text-shadow-xl '>
                                <RxCross2
                                    className="hover:text-white hover:bg-red-600 rounded-lg cursor-pointer"
                                    onClick={() => {
                                        document.getElementById('search_modal').close();
                                        setSearchTerm('');
                                        setSearchText('');
                                    }}
                                />
                            </div>
                        </div>
                        <div className="relative lg:px-3 z-10">
                            {searchResults.length > 0 && searchText !== "" && (
                                <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded mt-2 z-10 text-black font-normal">
                                    <ul className="divide-y divide-[#080567]">
                                        {searchResults.map((product, index) => (
                                            <>
                                                <Link to={`/products/${product.category}/${product._id}`}>
                                                    <li
                                                        key={product.id}
                                                        className={`py-2 px-3 cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'bg-[#080567] text-white font-bold' : 'hover:bg-[#080567] hover:text-white hover:font-bold'
                                                            }`}
                                                        onClick={() => {
                                                            handleProductClick();
                                                            document.getElementById('search_modal').close();
                                                        }}
                                                    >
                                                        {product.forSearch}
                                                    </li>
                                                </Link>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default NavbarHome;