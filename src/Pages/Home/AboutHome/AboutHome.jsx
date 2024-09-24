import { Link } from "react-router-dom";

const AboutHome = () => {
    return (
        <div className="m-5 my-36 border border-gray-500 flex flex-col-reverse md:flex-row lg:justify-between items-center rounded-lg">
            <div className="w-full md:w-1/2 p-5 flex flex-col justify-center items-start">
                <p className="mb-3 font-bold text-2xl">
                    About Us
                </p>
                <p className="mb-3 text-justify text-sm">
                    Welcome to Navantis Pharma Limited, your premier destination for cutting-edge derma skincare solutions in Bangladesh. We, Navantis Pharma Limited is a trusted name in the pharmaceutical industry, specializing in importing top-quality dermatological medicines from renowned international manufacturers.
                </p>
                <Link
                    to='/company-profile'
                    className="my-5 px-10 py-2 bg-gray-700 text-white rounded-[8px]"
                >
                    Read more
                </Link>
            </div>
            <div className="w-full md:w-1/2">
                <img
                    src="https://i.ibb.co.com/Qm5d2vG/navantis-about-us-home.jpg"
                    className="w-full h-full lg:rounded-r-lg"
                    alt="Loading"
                />
            </div>
        </div>
    );
};

export default AboutHome;