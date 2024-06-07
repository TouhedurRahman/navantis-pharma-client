import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import CoverBanner from '../../Components/CoverBanner/CoverBanner';

const AboutUs = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (location.pathname.includes('/about-us/company-profile')) {
            setSelected('company-profile');
        } else if (location.pathname.includes('/about-us/leadership')) {
            setSelected('leadership');
        } else if (location.pathname.includes('/about-us/our-values')) {
            setSelected('our-values');
        }
    }, [location.pathname]);

    const handleSelection = (selection) => {
        setSelected(selection);
    };

    return (
        <div>
            <CoverBanner
                img={"https://i.ibb.co/jgGWgz9/Home-Banner-Medicine.jpg"}
                title={"About Us"}
                from={"Home"}
                to={"About Us"}
            />

            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <div className='flex flex-col lg:flex-row justify-start items-start'>
                    <div className='w-full lg:w-[30%] pr-2'>
                        <div className='flex justify-center items-start'>
                            <ul>
                                <Link to="/about-us/company-profile">
                                    <li
                                        className={`mb-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "company-profile" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("company-profile")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Company Profile
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/about-us/leadership">
                                    <li
                                        className={`my-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "leadership" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("leadership")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Leadership
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/about-us/our-values">
                                    <li
                                        className={`my-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "our-values" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("our-values")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Our Values
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

export default AboutUs;