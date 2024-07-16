import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ValueHome = () => {
    return (
        <div className="m-5 my-36 flex flex-col-reverse md:flex-row lg:justify-between items-center rounded-lg">
            <div className="w-full md:w-1/2 p-5 flex flex-col justify-center items-start">
                <p className="mb-3 font-bold text-2xl">
                    Our values
                </p>
                <p className="mb-3 text-justify text-sm">
                    Quality is the cornerstone of our operations. We are committed to delivering superior skincare products that meet the highest standards of safety and efficacy. Our rigorous quality control processes encompass every stage, from sourcing premium ingredients to manufacturing and distribution. By adhering to international regulatory standards and continuously improving our practices, we ensure that our customers receive only the best. Quality at Navantis Pharma means excellence you can trust.
                </p>
                <Link
                    to='/our-values'
                    className="my-5 flex justify-start items-center space-x-4"
                >
                    <span className="font-bold hover:link">
                        Read more about our values
                    </span>
                    <span className="mx-2 text-[#0B5F82]" >
                        <FaArrowRight />
                    </span>
                </Link>
            </div>
            <div className="w-full md:w-1/2 lg:rounded-lg">
                <img
                    src="https://i.ibb.co/xjjqCsV/our-value.jpg"
                    className="w-full h-full rounded-lg"
                    alt="loading..."
                />
            </div>
        </div>
    );
};

export default ValueHome;