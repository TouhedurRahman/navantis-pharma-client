import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { SiNamecheap } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import './ContactUs.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        const newQuery = data;

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit!"
        }).then((result) => {
            if (result.isConfirmed) {
                // get the data
                axios.post('https://navantis-pharma-server.vercel.app/queries', newQuery)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            navigate('/');
                            Swal.fire({
                                title: "Submitted!",
                                text: "We reply you as soon as possible.",
                                icon: "success"
                            });
                        }
                    });
            }
        });

    };

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
                        <p className="flex justify-center items-center text-xl lg:text-2xl text-gray-600 font-bold font serif"><FaLocationDot className="mr-1" />Warehouse Address</p>
                        <address className="my-3 text-center">
                            10/A, 4/2<br />
                            Mirpur-1<br />
                            Dhaka-1216, Bangladesh<br />
                        </address>
                    </div>
                </div>
                <div className='my-3 flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center mt-10'>
                    <div>
                        <div className=" avatar">
                            <div className="w-96 h-96 rounded">
                                <img src="https://i.ibb.co/NNPhf7w/Contact-Corner.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full mx-2'>
                        <p className='font-bold text-xl text-gray-600 text-center font-serif mb-3'>If any query feel free to knock us</p>
                        <form onSubmit={handleSubmit(onSubmit)}
                            className=''
                        >
                            <div className="mb-4 relative">
                                {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label> */}
                                <div className='relative'>
                                    <SiNamecheap className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="text"
                                        id="name"
                                        {...register("name", { required: true })}
                                        className={`mt-1 p-2 pl-10 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-50 border-2 border-[#1e1d5d] focus:outline-none focus:border-[#FB923C]`}
                                        placeholder="Your Name"
                                    />
                                </div>
                                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                            </div>
                            <div className="mb-4 relative">
                                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label> */}
                                <div className="relative">
                                    <AiOutlineMail className="absolute top-3 left-3 text-gray-400" data-aos="fade-up" />
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email", { required: true })}
                                        className={`mt-1 p-2 pl-10 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 border-2 border-[#1e1d5d] focus:outline-none focus:border-[#FB923C]`}
                                        placeholder="Your Email"

                                    />
                                </div>
                                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                            </div>
                            <div className="mb-4 relative">
                                {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label> */}
                                <div className="relative flex justify-between items-center">
                                    <AiOutlinePhone className="absolute top-3 left-3 text-gray-400" data-aos="fade-up" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        {...register("phone", { required: true })}
                                        className="mt-1 p-2 pl-10 w-full rounded-md focus:ring-indigo-500 border-2 border-[#1e1d5d] focus:outline-none focus:border-[#FB923C]"
                                        placeholder="Your Phone"
                                    />
                                </div>
                                {errors.phone && <span className="text-red-500 text-sm">Phone no. is required</span>}
                            </div>
                            <div className="mb-4">
                                {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label> */}
                                <textarea
                                    id="message"
                                    rows="4"
                                    {...register("message", { required: true })}
                                    className={`mt-1 p-2 w-full ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 border-2 border-[#1e1d5d] focus:outline-none focus:border-[#FB923C]`}
                                    placeholder="Your Message"

                                ></textarea>
                                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                            </div>
                            {/* <button
                                type="submit"
                                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            >
                                Submit
                            </button> */}
                            <div className='w-full text-center'>
                                <button className="animated-button">
                                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span className="text">Submit</span>
                                    <span className="circle"></span>
                                    <svg viewBox="0 0 24 24" className="arr-1  text-white" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;