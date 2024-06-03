import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoverBanner = ({ img, title, from, to }) => {
    return (
        <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center pl-3 lg:pl-[250px]">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-serif text-white font-semibold mb-2" data-aos="zoom-in" data-aos-duration="1500">
                        {title}
                    </h1>
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-1 bg-[#FB923C] mr-2"></div>
                        <div className="w-96 h-1 bg-[#FB923C]"></div>
                    </div>
                    <div className="text-white text-lg font-medium">
                        <p className="flex items-center">
                            <Link to='/' className='hover:underline transition duration-300'>
                                {from.toUpperCase()}
                            </Link>
                            <FaChevronRight className='mx-2' />
                            {to.toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverBanner;