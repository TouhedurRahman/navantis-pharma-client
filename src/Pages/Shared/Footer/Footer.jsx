import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <div className='footer-container'>
                <div className="footer-details text-white  py-5">
                    <div className='text-center md:text-left mb-5 lg:mb-0'>
                        <div className='mb-5'>
                            <h6 className='font-bold font-mono'>ABOUT US</h6>
                            <hr className='border w-24 lg:w-full mx-auto lg:mx-0'></hr>
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <Link to='/about-us/company-profile' className='link link-hover'>Company Profile</Link>
                            <Link to='/about-us/leadership' className='link link-hover'>Leadership</Link>
                            <Link to='/about-us/our-values' className='link link-hover'>Our values</Link>
                        </div>
                    </div>
                    <div className='text-center md:text-left mb-5 lg:mb-0'>
                        <div className='mb-5'>
                            <h6 className='font-bold font-mono'>PRODUCTS</h6>
                            <hr className='border w-24 lg:w-full mx-auto lg:mx-0'></hr>
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <Link to='/products/imported-products' className='link link-hover'>Imported</Link>
                            <Link to='/products/categories' className='link link-hover'>Categories</Link>
                        </div>
                    </div>
                    <div className='text-center md:text-left mb-5 lg:mb-0'>
                        <div className='mb-5'>
                            <h6 className='font-bold font-mono'>PARTNER</h6>
                            <hr className='border w-24 lg:w-full mx-auto lg:mx-0'></hr>
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <Link to='/imported-brands' className='link link-hover w-48'>Finished Goods (Imported Brands)</Link>
                        </div>
                    </div>
                    <div className='text-center md:text-left mb-5 lg:mb-0'>
                        <div className='mb-5'>
                            <h6 className='font-bold font-mono'>MEDIA</h6>
                            <hr className='border w-24 lg:w-full mx-auto lg:mx-0'></hr>
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <Link to='/media/news-events' className='link link-hover'>News & Events</Link>
                            <Link to='/media/advertisements' className='link link-hover'>Advertisements</Link>
                        </div>
                    </div>

                    <div className='text-center md:text-left mb-5 lg:mb-0'>
                        <div className='mb-5'>
                            <h6 className='font-bold font-mono'>CAREERS</h6>
                            <hr className='border w-24 lg:w-full mx-auto lg:mx-0'></hr>
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <Link to='/careers/company-career' className='link link-hover'>Company career</Link>
                            <Link to='/careers/career-opportunities' className='link link-hover'>career Opportunities</Link>
                        </div>
                    </div>
                    <div className='text-center md:text-left mb-5 lg:mb-0'>
                        <div className='mb-5'>
                            <h6 className='font-bold font-mono'>CONTACT</h6>
                            <hr className='border w-24 lg:w-full mx-auto lg:mx-0'></hr>
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <Link to='/contact-us' className='link link-hover'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='get-touch'>
                        <div className='mb-5'>
                            <h6 className='font-bold font-mono'>FOLLOW US ON</h6>
                            <hr className='border w-24 lg:w-full mx-auto lg:mx-0'></hr>
                        </div>
                        <div className='get-touch-icons mt-5 mb-5' style={{ fontSize: "30px" }}>
                            <MdEmail style={{ cursor: "pointer" }}></MdEmail>
                            <AiFillYoutube style={{ cursor: "pointer" }}></AiFillYoutube>
                            <AiFillInstagram style={{ cursor: "pointer" }}></AiFillInstagram>
                            <FaFacebookSquare style={{ cursor: "pointer" }}></FaFacebookSquare>
                            <FaTwitterSquare style={{ cursor: "pointer" }}></FaTwitterSquare>
                            <FaWhatsappSquare style={{ cursor: "pointer" }}></FaWhatsappSquare>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center text-center bg-black text-white px-20 py-5 mx-0'>
                <p className='text-xl font-mono font-extrabold'><small>Copyright © {year} All Rights Reserved.</small></p>
                <p className='text-xl font-mono font-extrabold hidden lg:block'><small>By Navantis Pharma Limited.</small></p>
            </div>
        </>

    );
};

export default Footer;