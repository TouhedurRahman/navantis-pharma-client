import { MdAlternateEmail } from 'react-icons/md';
import CoverBanner from '../../Components/CoverBanner/CoverBanner';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';

const ContactUs = () => {
    return (
        <div>
            <CoverBanner
                img={"https://i.ibb.co/80ft98k/Contact-us-banner.jpg"}
                title={"Contact Us"}
                from={"Home"}
                to={"Contact"}
            />

            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <div className='flex flex-col md:flex-row justify-center md:justify-start items-center'>
                    <div className="lg:w-1/2 avatar" data-aos-duration="2000">
                        <div className="w-96 h-96 rounded">
                            <img src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" />
                        </div>
                    </div>
                    <div className='lg:w-1/2' data-aos-duration="2000">
                        <p className='mt-3 text-2xl text-gray-600 font-bold font serif'>
                            Corporate Office
                        </p>
                        <address className='mt-3'>
                            Haque Villa, House No-4, Block-C, Road No-3, Section-1, Kolwalapara, Mirpur-01, Dhaka-1216, Dhaka, Bangladesh.
                        </address>
                        <hr className='mt-3 border border-[#0B5F82]' />

                        <p className='mt-3 text-2xl text-gray-600 font-bold font serif'>
                            Mail us at
                        </p>
                        <p className='mt-3 flex justify-start items-center'>
                            <span className='mr-2'>
                                <MdAlternateEmail />
                            </span>
                            <span>
                                info@navantispharma.com
                            </span>
                        </p>
                        <hr className='mt-3 border border-[#0B5F82]' />

                        <p className='mt-3 text-2xl text-gray-600 font-bold font serif'>
                            To reach us, please call at
                        </p>
                        <p className='mt-3 flex justify-start items-center'>
                            <span className='mr-2'>
                                <FiPhoneCall />
                            </span>
                            <span>
                                +880 1329-747657
                            </span>
                        </p>
                        <hr className='mt-3 border border-[#0B5F82]' />
                    </div>
                </div>
                <div className="my-5 flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <p className="flex justify-center items-center text-xl lg:text-2xl text-gray-600 font-bold font serif"><FaLocationDot className="mr-1" />Registered Office</p>
                        <address className="my-3 text-center">
                            59,60 North Rajashon,<br />
                            Birulia Road, Savar,<br />
                            Dhaka-1340, Bangladesh <br />
                        </address>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <p className="flex justify-center items-center text-xl lg:text-2xl text-gray-600 font-bold font serif"><FaLocationDot className="mr-1" />Distribution Office</p>
                        <address className="my-3 text-center">
                            59,60 North Rajashon,<br />
                            Birulia Road, Savar,<br />
                            Dhaka-1340, Bangladesh <br />
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;