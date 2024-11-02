import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import './Navbar.css';

const Navbar = () => {
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
            setIsScrolled(scrollTop > 0);
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
                    event.stopPropagation(); // Prevent details from closing
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
        const maxHeight = 80; // Max height in vh
        const minHeight = 13; // Height to fit only the search bar
        const itemHeight = 6; // Height per item in vh

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
        <div className="bg-white text-gray-700 font-bold">
            <div
                className={`navbar z-10 px-5 lg:px-[5%] ${isScrolled ? 'fixed top-0 scroll-smooth bg-white text-gray-700' : 'text-gray-700 scroll-smooth bg-white'
                    }`}
            >
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="lg:hidden p-2 rounded-md inline-block"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/***** for small screen *****/}
                        <ul
                            tabIndex={0}
                            className="dropdown-content mt-3 z-10 p-4 shadow-lg bg-white text-gray-700 w-[280px] -left-5 right-0 mx-auto rounded-r-lg space-y-4"
                        >
                            <li>
                                <Link to='/products' className={`py-2 hover:text-gray-700 text-sm ${location.pathname === '/products' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`} reloadDocument>PRODUCTS</Link>
                            </li>
                            <li>
                                <Link to='/our-partner' className={`py-2 hover:text-gray-700 text-sm ${location.pathname === '/our-partner' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`} reloadDocument>PARTNER</Link>
                            </li>
                            <li>
                                <Link to='/news-room' className={`py-2 hover:text-gray-700 text-sm ${location.pathname === '/news-room' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`} reloadDocument>NEWS ROOM</Link>
                            </li>
                            <li>
                                <Link to='/careers' className={`py-2 hover:text-gray-700 text-sm ${location.pathname === '/careers' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`} reloadDocument>CAREERS</Link>
                            </li>
                            <li><Link to='/contact-us' className={`py-2 hover:text-gray-700 text-sm ${location.pathname === '/contact-us' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`} reloadDocument>CONTACT US</Link></li>
                        </ul>
                    </div>
                    <div className="ml-3 w-full flex justify-between items-center lg:hidden">
                        <Link to="/">
                            <div>
                                <img
                                    src="https://i.ibb.co.com/744CD9s/navantis-374151.png"
                                    className="w-[155px] h-[32px]"
                                />
                            </div>
                        </Link>

                        {/* search icon */}
                        <div className="flex justify-end items-center">
                            <div
                                className="bg-transparent border-none shadow-none inline-block"
                                onClick={() => document.getElementById('search_modal').showModal()}
                            >
                                <ImSearch
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/***** for large screen *****/}
                <div className="navbar-center hidden lg:flex justify-between items-center w-full">
                    <div>
                        <Link to="/">
                            <div>
                                <img
                                    src="https://i.ibb.co.com/744CD9s/navantis-374151.png"
                                    className="w-[155px] h-[32px]"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-end items-center">
                        <div>
                            <ul className="menu-horizontal z-10">
                                <li>
                                    <Link to='/products' className={`mx-3 hover:text-gray-700 inline-block text-sm ${location.pathname === '/products' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`}>PRODUCTS</Link>
                                </li>
                                <li>
                                    <Link to='/our-partner' className={`mx-3 hover:text-gray-700 inline-block text-sm ${location.pathname === '/our-partner' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`}>PARTNER</Link>
                                </li>
                                <li>
                                    <Link to='/news-room' className={`mx-3 hover:text-gray-700 inline-block text-sm ${location.pathname === '/news-room' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`}>NEWS ROOM</Link>
                                </li>
                                <li>
                                    <Link to='/careers' className={`mx-3 hover:text-gray-700 inline-block text-sm ${location.pathname === '/careers' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`}>CAREERS</Link>
                                </li>
                                <li>
                                    <Link to='/contact-us' className={`mx-3 hover:text-gray-700 inline-block text-sm ${location.pathname === '/contact-us' ? 'text-gray-700 font-bold border-b-2 border-gray-700' : ''}`}>CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="ml-4 bg-transparent border-none shadow-none inline-block"
                            onClick={() => document.getElementById('search_modal').showModal()}
                        >
                            <ImSearch
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/***** modal for search results *****/}
            <dialog id="search_modal" className="modal">
                <div
                    id="modal_box"
                    ref={modalBoxRef}
                    className="modal-box bg-gray-50 rounded-lg shadow-xl overflow-y-auto transition-all duration-500 ease-in-out"
                >
                    <div>
                        <div className="flex justify-center">
                            <div className='flex justify-center items-center border-2 border-gray-700 p-3 rounded-l-lg bg-gray-700 text-white font-extrabold text-shadow-xl'>
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
                                className="border-2 border-gray-700 border-r-0 px-3 py-2 focus:outline-none focus:ring-gray-700 transition duration-300"
                            />
                            <div className='flex justify-center items-center bg-white border-2 border-gray-700 border-l-0 p-3 rounded-r-lg text-gray-700 font-extrabold text-shadow-xl '>
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
                                <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded mt-2 z-10 text-gray-700 font-normal">
                                    <ul className="divide-y divide-gray-700">
                                        {searchResults.map((product, index) => (
                                            <>
                                                <Link to={`/products/${product.category}/${product._id}`}>
                                                    <li
                                                        key={product.id}
                                                        className={`py-2 px-3 cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'bg-gray-700 text-white font-bold' : 'hover:bg-gray-700 hover:text-white hover:font-bold'
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

export default Navbar;