import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import CoverBanner from '../../Components/CoverBanner/CoverBanner';

const Career = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (location.pathname.includes('/careers/company-career')) {
            setSelected('career');
        } else if (location.pathname.includes('/careers/career-opportunities')) {
            setSelected('opportunities');
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
                    location.pathname.includes('/careers/company-career')
                        ?
                        "Company Career"
                        :
                        "Career Opportunities"
                }
                from={"Home"}
                to={"Career"}
            />

            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <div className='flex flex-col lg:flex-row justify-start items-start'>
                    <div className='w-full lg:w-[30%] pr-2'>
                        <div className='flex justify-center items-start'>
                            <ul>
                                <Link to="/careers/company-career">
                                    <li
                                        className={`mb-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "career" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("career")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Company Career
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/careers/career-opportunities">
                                    <li
                                        className={`my-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "opportunities" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("opportunities")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Career Opportunities
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

export default Career;