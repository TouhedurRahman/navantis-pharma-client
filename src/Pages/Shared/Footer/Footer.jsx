import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="bg-[#F8F8F8]">
            <div className="py-10 flex flex-col justify-center items-center">
                <p className="mb-2 text-2xl">
                    STAY CONNECTED
                </p>
                <p className="text-sm">
                    Follow us on Social Media for current news and patients stories
                </p>
                <div className='get-touch-icons mt-5 flex justify-center items-center space-x-4' style={{ fontSize: "30px" }}>
                    <AiFillInstagram style={{ cursor: "pointer" }}></AiFillInstagram>
                    <FaFacebookSquare style={{ cursor: "pointer" }}></FaFacebookSquare>
                    <FaTwitterSquare style={{ cursor: "pointer" }}></FaTwitterSquare>
                </div>
            </div>
            <div className="flex justify-center md:justify-between items-center pb-2 px-2 text-[12px] font-bold">
                <div>
                    <p className='text-sm'><small>Copyright © {year} by Navantis Pharma Ltd.</small></p>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to='/company-profile' className="hover:link">
                        COMPANY PROFILE
                    </Link>
                    <Link to='/products' className="hover:link">
                        IMPORTED PRODUCTS
                    </Link>
                    <Link to='/careers' className="hover:link">
                        CAREERS
                    </Link>
                </div>
            </div>
            <div>
                <div className="avatar">
                    <div className="w-[480px] lg:w-[1500px] h-[140px] rounded mx-auto">
                        <img
                            src="https://i.ibb.co/qJCyH3h/bottom-icons-footer.png"
                            alt="Loading..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;