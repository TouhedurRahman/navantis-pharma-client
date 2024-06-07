import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <div className="bg-white text-[#0B5F82] font-mono font-bold">
            <div
                className={`navbar z-10 px-5 lg:px-[40px] ${isScrolled ? 'fixed top-0 scroll-smooth bg-white text-[#0B5F82]' : 'bg-gray-50 text-[#0B5F82] scroll-smooth'
                    }`}
            >
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-gradient-to-b from-green-100 to-orange-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        {/***** for small screen *****/}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-[#0B5F82] rounded-b-lg w-[320px] -left-5">
                            <li>
                                <li><Link reloadDocument>ABOUT US</Link></li>
                                <ul className="p-2">
                                    <li><Link to='/about-us/company-profile' reloadDocument>COMPANY PROFILE</Link></li>
                                    <li><Link to='/about-us/leadership' reloadDocument>LEADERSHIP</Link></li>
                                    <li><Link to='/explore' reloadDocument>OUR VALUES</Link></li>
                                </ul>
                            </li>
                            <li>
                                <li><Link reloadDocument>PRODUCTS</Link></li>
                                <ul className="p-2">
                                    <li><Link to='/products/imported-products' reloadDocument>IMPORTED</Link></li>
                                    <li><Link to='/products/categories' reloadDocument>CATEGORIES</Link></li>
                                </ul>
                            </li>

                            <li>
                                <li><Link>PRODUCTS</Link></li>
                                <ul className="p-2">
                                    <li><Link to='/imported-brands' reloadDocument>FINISHED GOODS (IMPORTED BRANDS)</Link></li>
                                </ul>
                            </li>

                            <li>
                                <li><Link>MEDIA</Link></li>
                                <li><Link to='/media/news-events' reloadDocument>NEWS & EVENTS</Link></li>
                                <li><Link to='/media/advertisement' reloadDocument>ADVERTISEMENTS</Link></li>
                            </li>

                            <li>
                                <li><Link>CAREER</Link></li>
                                <li><Link to='/careers/company-career' reloadDocument>COMPANY CAREER</Link></li>
                                <li><Link to='/careers/career-opportunities' reloadDocument>CAREER OPPORTUNITIES</Link></li>
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
                                            ABOUT US
                                            <span className="text-[#0B5F82] text-xl">
                                                <TiArrowSortedDown />
                                            </span>
                                        </span>
                                        <ul className="p-2 w-[190px] absolute left-0 bg-white border border-gray-300 hidden">
                                            <li><Link to='/about-us/company-profile' className="dropdown-link" reloadDocument>COMPANY PROFILE</Link></li>
                                            <li><Link to='/about-us/leadership' className="dropdown-link" reloadDocument>LEADERSHIP</Link></li>
                                            <li><Link to='/about-us/our-values' className="dropdown-link" reloadDocument>OUR VALUES</Link></li>
                                        </ul>
                                    </div>
                                </li>
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
        </div>
    );
};

export default Navbar;