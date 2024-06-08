import { useState } from 'react';
import useEvents from '../../../Hooks/useEvents';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Events = () => {
    const [events] = useEvents();

    const [currentPage, setCurrentPage] = useState(1);

    const eventPerPage = 6;

    const totalPages = Math.ceil(events.length / eventPerPage);

    const startIndex = (currentPage - 1) * eventPerPage;
    const endIndex = Math.min(startIndex + eventPerPage, events.length);

    const currentEvents = events.slice(startIndex, endIndex);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    currentEvents.map(event => (
                        <Link to={`/news-events/event/${event._id}`} className="bg-base-100 shadow-lg rounded-lg hover:border-2 hover:border-[#0B5F82] hover:shadow-[#FB923C]" key={event.id}>
                            <figure><img
                                className='w-full h-64'
                                src={event.imageURL} alt="Loading" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">{event.title}</h2>
                                <p className='text-justify'>{event.description.slice(0, 75)}...<span className='hover:link text-blue-800 font-bold'>more</span></p>
                                <p className='text-xl font-bold text-[#FB923C] mt-5'>{event.date}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
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
    );
};

export default Events;