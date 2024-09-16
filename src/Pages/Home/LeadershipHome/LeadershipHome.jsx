import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const LeadershipHome = () => {
    return (
        <div className="m-5 my-36 flex flex-col md:flex-row lg:justify-between items-center rounded-lg">
            <div className="w-full md:w-1/2 lg:rounded-lg">
                <img
                    src="https://i.ibb.co/xzWQHCW/leadership-board.jpg"
                    className="w-full h-full rounded-lg"
                    alt=""
                />
            </div>
            <div className="w-full md:w-1/2 pt-5 lg:p-5 lg:pr-0 md:ml-5 lg:ml-0 flex flex-col justify-center items-start">
                <p className="mb-3 font-bold text-2xl">
                    Leadership
                </p>
                <p className="mb-3 text-justify text-sm">
                    In our pursuit of excellence, we import top-tier derma skincare products from abroad, ensuring every citizen of Bangladesh receives the care they deserve. Lets uphold our commitment to quality and accessibility, fostering healthier communities across the nation.
                </p>
                <Link
                    to='/leadership'
                    className="my-5 flex justify-start items-center space-x-4"
                >
                    <span className="font-bold hover:link">
                        Read more about our leadership
                    </span>
                    <span className="mx-2 text-gray-700">
                        <FaArrowRight />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default LeadershipHome;