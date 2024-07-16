import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import { TiArrowSortedDown } from "react-icons/ti";
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
            const scrolled = scrollTop > 0;
            setIsScrolled(scrolled);
        };
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Filter products based on search term
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

        // Cleanup event listeners on component unmount
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
        <div className="bg-white text-[#0B5F82] font-mono font-bold">
            <div
                className={`navbar z-10 px-5 lg:px-[40px] ${isScrolled ? 'fixed top-0 scroll-smooth bg-white text-[#0B5F82]' : 'bg-gray-50 text-[#0B5F82] scroll-smooth'
                    }`}
            >
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-white shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        {/***** for small screen *****/}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 px-3 shadow bg-white text-[#0B5F82] rounded-b-lg w-[320px] -left-5">
                            <li>
                                <li>PRODUCTS</li>
                                <ul className="p-2">
                                    <li><Link to='/products/imported-products' reloadDocument>IMPORTED</Link></li>
                                    <li><Link to='/products/categories' reloadDocument>CATEGORIES</Link></li>
                                </ul>
                            </li>

                            <li>
                                <li>PARTNER</li>
                                <ul className="p-2">
                                    <li><Link to='/imported-brands' reloadDocument>FINISHED GOODS (IMPORTED BRANDS)</Link></li>
                                </ul>
                            </li>

                            <li>
                                <li>MEDIA</li>
                                <ul>
                                    <li><Link to='/media/news-events' reloadDocument>NEWS & EVENTS</Link></li>
                                    <li><Link to='/media/advertisements' reloadDocument>ADVERTISEMENTS</Link></li>
                                </ul>
                            </li>

                            <li>
                                <li>CAREER</li>
                                <ul>
                                    <li><Link to='/careers/company-career' reloadDocument>COMPANY CAREER</Link></li>
                                    <li><Link to='/careers/career-opportunities' reloadDocument>CAREER OPPORTUNITIES</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/contact-us' reloadDocument>CONTACT US</Link></li>
                        </ul>
                    </div>
                    <div className="ml-3 w-full flex justify-between items-center lg:hidden">
                        <Link to="/">
                            <div>
                                <img
                                    src="https://i.ibb.co/WHdtY9y/Logo-Navantis.png"
                                    className="w-[150px] lg:w-[180px] h-[40px]"
                                />
                            </div>
                        </Link>

                        {/* search icon */}
                        <div className="flex justify-end items-center">
                            <div
                                className="flex justify-center items-center btn bg-transparent border-none"
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
                                    src="https://i.ibb.co/WHdtY9y/Logo-Navantis.png"
                                    className="w-[150px] lg:w-[180px] h-[40px]"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-end items-center">
                        <div>
                            <ul className="menu menu-horizontal z-10">
                                <li className="relative">
                                    <div className="group">
                                        <span className="cursor-pointer flex justify-center items-center">
                                            PRODUCTS
                                            <span className="text-[#0B5F82] text-xl">
                                                <TiArrowSortedDown />
                                            </span>
                                        </span>
                                        <ul className="p-2 w-[120px] absolute left-0 bg-white border border-gray-300 hidden">
                                            <li><Link to='/products/imported-products' className="dropdown-link" reloadDocument>IMPORTED</Link></li>
                                            <li><Link to='/products/categories' className="dropdown-link" reloadDocument>CATEGORIES</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="group">
                                        <span className="cursor-pointer flex justify-center items-center">
                                            PARTNER
                                            <span className="text-[#0B5F82] text-xl">
                                                <TiArrowSortedDown />
                                            </span>
                                        </span>
                                        <ul className="p-2 w-[300px] absolute left-0 bg-white border border-gray-300 hidden">
                                            <li><Link to='/imported-brands' className="dropdown-link font-normal" reloadDocument>FINISHED GOODS (IMPORTED BRANDS)</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="group">
                                        <span className="cursor-pointer  flex justify-center items-center">
                                            MEDIA
                                            <span className="text-[#0B5F82] text-xl">
                                                <TiArrowSortedDown />
                                            </span>
                                        </span>
                                        <ul className="p-2 w-[175px] absolute left-0 bg-white border border-gray-300 hidden">
                                            <li><Link to='/media/news-events' className="dropdown-link" reloadDocument>NEWS & EVENTS</Link></li>
                                            <li><Link to='/media/advertisements' className="dropdown-link" reloadDocument>ADVERTISEMENTS</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="group">
                                        <span className="cursor-pointer  flex justify-center items-center">
                                            CARRER
                                            <span className="text-[#0B5F82] text-xl">
                                                <TiArrowSortedDown />
                                            </span>
                                        </span>
                                        <ul className="p-2 w-[205px] absolute left-0 bg-white border border-gray-300 hidden">
                                            <li><Link to='/careers/company-career' className="dropdown-link" reloadDocument>COMPANY CAREER</Link></li>
                                            <li><Link to='/careers/career-opportunities' className="dropdown-link" reloadDocument>CAREER OPPORTUNITIES</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ml-3 flex justify-center items-center"><Link to='/contact-us'>CONTACT US</Link></li>
                            </ul>
                        </div>

                        {/* search icon */}
                        <div className="flex justify-end items-center">
                            <div
                                className="flex justify-center items-center btn bg-transparent border-none"
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
                            <div className='flex justify-center items-center border-2 border-[#0B5F82] p-3 rounded-l-lg bg-[#0B5F82] text-white font-extrabold text-shadow-xl'>
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
                                className="border-2 border-[#0B5F82] border-r-0 px-3 py-2 focus:outline-none focus:ring-[#0B5F82] transition duration-300"
                            />
                            <div className='flex justify-center items-center bg-white border-2 border-[#0B5F82] border-l-0 p-3 rounded-r-lg text-[#0B5F82] font-extrabold text-shadow-xl '>
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
                                    <ul className="divide-y divide-[#0B5F82]">
                                        {searchResults.map((product, index) => (
                                            <li
                                                key={product.id}
                                                className={`py-2 px-3 cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'bg-[#0B5F82] text-white font-bold' : 'hover:bg-[#0B5F82] hover:text-white hover:font-bold'
                                                    }`}
                                                onClick={() => {
                                                    handleProductClick();
                                                    document.getElementById('search_modal').close();
                                                }}
                                            >
                                                <Link to={`/products/${product.category}/${product._id}`}>
                                                    {product.forSearch}
                                                </Link>
                                            </li>
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