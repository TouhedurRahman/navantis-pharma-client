import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import './ContactUs.css';
import { useState } from 'react';
import LocationFooter from '../../Components/LocationFooter/LocationFooter';
import BannerOnlyText from '../../Components/BannerOnlyText/BannerOnlyText';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_googleCaptcha;

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const districts = [
        "Bagerhat",
        "Bandarban",
        "Barguna",
        "Barisal",
        "Bhola",
        "Bogra",
        "Brahmanbaria",
        "Chandpur",
        "Chapainawabganj",
        "Chattogram",
        "Chuadanga",
        "Comilla",
        "Cox's Bazar",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Jamalpur",
        "Jessore",
        "Jhalokati",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachhari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lakshmipur",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Munshiganj",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
    ];

    const [captchaValue, setCaptchaValue] = useState(null);

    const onCaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setCaptchaValue(value);
    };

    const onSubmit = data => {
        const newQuery = {
            name: data.fname + " " + data.lname,
            phone: data.phone,
            email: data.email,
            location: data.location,
            message: data.message
        };

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
                axios.post('https://api.navantispharma.com/queries', newQuery)
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
            <div className="w-[93%] lg:w-[75%] mx-auto">
                <BannerOnlyText
                    title={"Contact Us"}
                ></BannerOnlyText>
                <div>
                    <p>
                        NEED TO TALK TO US? WERE LISTENING.
                    </p>
                    <p className="mb-10 text-sm">
                        REPORT AN ADVERSE EVENT
                    </p>
                    <p className="mb-10 text-justify">
                        Markets worldwide may have specific processes in place to handle reports of adverse events. <br /><br />
                        To report an adverse event, personal health concerns or product quality issue, please ask your healthcare provider (ex: doctor or pharmacist) for more information and advice about adverse events or contact your local health authority.<br /><br />

                        <p className="ml-4 text-justify">
                            • For patients: if you wish to report an adverse event related to one of our products, please contact your healthcare provider. <br />
                            • For healthcare professionals: if you wish to report an adverse event related to one of our products, please follow the current regulatory procedure in force in your market.<br /><br />
                        </p>
                        Should you wish to contact one of our market offices, please select your market from the list below and select Adverse Event or Quality Issue.
                    </p>
                </div>
                <div className="w-[75%] my-10 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className=''
                    >
                        <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-black mb-1 text-sm">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("fname", { required: "Name is required" })}
                                    className="h-12 border-gray-500 bg-white border p-2 text-sm"
                                />
                                {errors.fname && <p className="text-red-500 text-sm">{errors.fname.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-black mb-1 text-sm">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("lname", { required: "Name is required" })}
                                    className="h-12 border-gray-500 bg-white border p-2 text-sm"
                                />
                                {errors.lname && <p className="text-red-500 text-sm">{errors.lname.message}</p>}
                            </div>
                        </div>

                        <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-black mb-1 text-sm">
                                    Telephone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("phone", { required: "Phone number is required" })}
                                    className="h-12 border-gray-500 bg-white border p-2 text-sm"
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-black mb-1 text-sm">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("email", { required: "Email is required" })}
                                    className="h-12 border-gray-500 bg-white border p-2 text-sm"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="mb-5 flex flex-col">
                            <label className="text-black mb-1 text-sm">
                                What is your location? <span className="text-red-500">*</span>
                            </label>
                            <select
                                {...register("location", { required: "Location is required" })}
                                className="h-12 border-gray-500 bg-white border p-2 text-sm cursor-pointer"
                            >
                                <option value="">Select District</option>
                                {
                                    districts.map((district, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={district}
                                            >
                                                {district}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                        </div>

                        <div className="mb-5 flex flex-col">
                            <label className="text-black mb-1 text-sm">
                                What is your enquiry about? <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                className="h-36 border-gray-500 bg-white border p-2 text-sm"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>

                        <div className='hidden'>
                            <ReCAPTCHA
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={onCaptchaChange}
                            />
                        </div>
                        <div className='w-full flex justify-start items-center'>
                            <button type="submit" className="border border-black px-5 py-2 text-black mt-5 p-2 rounded text-xs hover:bg-[#E0E8F8] hover:border-transparent">S E N D</button>
                        </div>
                    </form>
                </div>
                <div className="mb-10">
                    <div>
                        <p className="text-xl lg:text-2xl text-black font-bold font serif">Office</p>
                        <span className="my-3">
                            59,60 North Rajashon,<br />
                            Birulia Road, Savar,<br />
                            Dhaka-1340, Bangladesh.<br />
                        </span>
                    </div>
                    <div className="mt-5">
                        <p className="text-xl">Phone Number:</p>
                        <span className="my-3">
                            +880 1329-747657<br />
                            To know where we are located, please call us.<br />
                        </span>
                    </div>
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={"Contact Us"}
            ></LocationFooter>
        </div>
    );
};

export default ContactUs;