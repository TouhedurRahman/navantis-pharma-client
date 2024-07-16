import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProgressHome = () => {
    return (
        <div className="m-5 my-36 flex flex-col md:flex-row lg:justify-between items-center rounded-lg">
            <div className="w-full md:w-1/2 lg:rounded-lg">
                <img
                    src="https://i.ibb.co/51s10sq/Pursue-Progress.jpg"
                    className="w-full h-full rounded-lg"
                    alt="Loading..."
                />
            </div>
            <div className="w-full md:w-1/2 p-5 flex flex-col justify-center items-start">
                <p className="mb-3 font-bold text-2xl">
                    Pursue Progress - Discover Extraordinary
                </p>
                <p className="mb-3 text-justify text-sm">
                    We are dedicated to continuous innovation and excellence. Our partnership with Bionike allows us to bring you cutting-edge skincare products that adhere to the highest standards of dermatological science. Experience the extraordinary with our premium solutions, crafted to enhance your well-being and confidence. Discover a new level of care with Navantis Pharma, where progress meets perfection.
                </p>
                <Link
                    to='/careers'
                    className="my-5 flex justify-start items-center space-x-4"
                >
                    <span className="font-bold hover:link">
                        Explore Career Opportunities
                    </span>
                    <span className="mx-2 text-[#0B5F82]" >
                        <FaExternalLinkAlt />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ProgressHome;