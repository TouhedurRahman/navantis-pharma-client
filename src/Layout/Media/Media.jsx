import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import CoverBanner from '../../Components/CoverBanner/CoverBanner';

const Media = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (location.pathname.includes('/media/news-events')) {
            setSelected('news-events');
        } else if (location.pathname.includes('/media/advertisements')) {
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
                    location.pathname.includes('/media/news-events')
                        ?
                        "News and Events"
                        :
                        "Advertisements"
                }
                from={"Home"}
                to={"Media"}
            />

            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <div className='flex flex-col lg:flex-row justify-start items-start'>
                    <div className='w-full lg:w-[30%] pr-2'>
                        <div className='flex justify-center items-start'>
                            <ul>
                                <Link to="/media/news-events">
                                    <li
                                        className={`mb-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "news-events" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("news-events")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />News & Events
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/media/advertisements">
                                    <li
                                        className={`my-3 border-2 border-[#0B5F82] hover:border-orange-400 p-3 rounded-lg ${selected === "advertisements" && 'bg-[#0B5F82] text-white font-bold'}`}
                                        onClick={() => handleSelection("advertisements")}
                                    >
                                        <div className='flex justify-start items-center'>
                                            <FaChevronRight className='mr-2' />Advertisements
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

export default Media;