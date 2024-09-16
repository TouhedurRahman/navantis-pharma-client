import './CareerCardList.css';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

const CareerCardList = ({ career }) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center p-3  bg-base-100 hover:text-gray-700 border-b-2 shadow-xl shadow-orange-50 hover:shadow-green-50'>
            <div>
                <p className='ml-2 font-sans font-2xl font-bold'>
                    {career.designation}
                </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-end items-center'>
                <div className='flex flex-col justify-end items-center lg:items-end my-4 md:my-0'>
                    <p className='ml-2'>
                        {career.department}
                    </p>
                    <p className='ml-2 flex justify-end items-center'>
                        {career.location}
                        <span>
                            <MdLocationOn className='ml-1' />
                        </span>
                    </p>
                </div>
                <div className='w-36 flex justify-center items-center ml-1 hover:link'>
                    <Link
                        to={`/jobs/${career._id}`}
                        className="my-5 flex justify-start items-center space-x-2"
                    >
                        <span className="font-bold hover:link">
                            More Details
                        </span>
                        <span className="text-gray-700">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CareerCardList;