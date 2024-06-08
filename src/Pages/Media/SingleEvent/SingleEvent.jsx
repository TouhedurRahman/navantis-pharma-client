import { useState } from 'react';
import useEvents from '../../../Hooks/useEvents';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import ShareSocialMedia from '../../../Components/ShareSocialMedia/ShareSocialMedia';
import CoverBanner from '../../../Components/CoverBanner/CoverBanner';

const SingleEvent = () => {
    const [events] = useEvents();

    const [currentPage, setCurrentPage] = useState(1);

    const { id } = useParams();

    const url = location.pathname;

    const event = events.find(event => event._id == id);

    const allOtherEvents = events.filter(event => event._id !== id);

    const eventsPerpage = 6;
    const totalPages = Math.ceil(allOtherEvents.length / eventsPerpage);

    const startIndex = (currentPage - 1) * eventsPerpage;
    const endIndex = Math.min(startIndex + eventsPerpage, allOtherEvents.length);

    const currentEvents = allOtherEvents.slice(startIndex, endIndex);

    const changePage = page => {
        setCurrentPage(page);
    }


    return (
        <div>
            <CoverBanner
                img={"https://i.ibb.co/6XJTMtb/sale-advertisement.jpg"}
                title={"Event"}
                from={"Home"}
                to={"Media"}
            />

            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <div className='flex flex-col lg:flex-row justify-between items-start'>
                    <div className='w-full lg:w-[65%] p-5 pt-0'>
                        <div className='flex justify-center items-center'>
                            <img
                                className='w-full h-96'
                                src={event?.imageURL} alt="Loading" />
                        </div>
                        <p className='text-2xl text-[#0B5F82] font-bold font-mono mt-3'>{event?.title}</p>
                        <p className='text-gray-800 mt-3 text-justify'>
                            {event?.description}
                        </p>
                        <hr className='mt-20 w-36 border-2 border-[#0B5F82] rounded' />
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-2xl font-mono font-extrabold mt-3 flex justify-start items-center'>
                                    <span className='flex justify-start items-center text-[#0B5F82] mr-3'>Last Updated: </span><span className='text-[#FB923C]'>{event?.date}</span>
                                </p>
                            </div>
                            <div>
                                <ShareSocialMedia
                                    url={url}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[35%]'>
                        <p className='bg-[#0B5F82] text-xl text-white font-extrabold py-3 pl-3'>
                            Latest Events
                        </p>
                        <div className='mt-2'>
                            {
                                currentEvents.map(otherEvent => (
                                    <Link
                                        to={`/news-events/event/${otherEvent._id}`}
                                        key={otherEvent._id}
                                        className='flex justify-start items-center  border-b-2 border-gray-300 hover:bg-gray-200 hover:border-b-0 hover:border-l-4 hover:border-[#0B5F82] hover:pl-2'
                                    >
                                        <div className='flex justify-center items-center'>
                                            <img
                                                src={otherEvent.imageURL}
                                                className='w-24 h-24'
                                                alt="Laoding..."
                                            />
                                        </div>
                                        <div className='ml-2'>
                                            <p className='text-[#0B5F82] font-semibold'>{otherEvent.title}</p>
                                            <p className='flex justify-start items-center font bold mt-2 font-mono font-thin'>More <FaArrowRight className='ml-2 text-[#FB923C]' /></p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        {/* Pagination */}
                        <div className="flex justify-end items-center">
                            <div
                                className={`mx-1 px-3 py-1 rounded-lg flex justify-center items-center ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                                onClick={() => changePage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <span className='flex justify-between items-center text-[#0B5F82]'>
                                    <BsArrowLeftCircleFill className='h-6 w-6' />
                                </span>
                            </div>
                            <div className=' flex justify-center items-center'>
                                {
                                    Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            className={`h-3 w-3 mx-1 border border-green-500 rounded-full shadow-lg ${currentPage === index + 1 ? ' bg-[#FB923C] text-white font-mono font-extrabold italic border-2 border-green-900 rounded-badge' : ''
                                                }`}
                                            onClick={() => changePage(index + 1)}
                                        >

                                        </button>
                                    ))
                                }
                            </div>
                            <div
                                className={`mx-1 px-3 py-1 rounded-lg flex justify-center items-center  ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                                onClick={() => changePage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <span className='flex justify-between items-center text-[#0B5F82]'>
                                    <BsArrowRightCircleFill className='h-6 w-6' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;