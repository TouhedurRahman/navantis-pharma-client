import useCareer from '../../../Hooks/useCareers';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import CoverBanner from '../../../Components/CoverBanner/CoverBanner';
import axios from 'axios';
import Loader from '../../../Components/Loader/Loader';

const MyJob = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [careers, loading] = useCareer();
    const { id } = useParams();

    const navigate = useNavigate();

    const job = careers.find(career => career._id == id);

    const onSubmit = data => {
        const newApplication = {
            designation: job.designation,
            department: job.department,
            name: data.name,
            email: data.email,
            phone: data.phone,
            coverLetter: data.coverLetter,
            cvLink: data.link,
            jobLocation: job.location
        }

        let timerInterval;
        Swal.fire({
            title: "Submitting...",
            html: "Application submitting in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Data Saved to DB*/
            axios.post('https://navantis-pharma-server.vercel.app/applications', newApplication)
                .then(data => {
                    if (data.data.insertedId) {
                        reset();
                        navigate('/');

                        // successfull submission alert
                        if (result.dismiss === Swal.DismissReason.timer) {
                            Swal.fire({
                                // position: "top-end",
                                icon: "success",
                                title: "Application Submission Successful!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    }
                });
        });
    };

    return (
        <>
            <CoverBanner
                img={"https://i.ibb.co/jgGWgz9/Home-Banner-Medicine.jpg"}
                title={"My Jobs"}
                from={"Home"}
                to={"My Job"}
            />
            {
                loading
                    ?
                    <Loader />
                    :
                    <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10 font-rubik'>
                        <div className='text-center mt-5 mb-20 text-3xl font-sans font-bold'>
                            <p>
                                {job.designation}
                            </p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-start'>
                            <div className='w-full lg:w-1/2 p-2'>
                                <div className='mb-10'>
                                    <p className='text-xl font-sans'>
                                        <span className='font-bold'>
                                            Department:
                                        </span>
                                        <span className='ml-1'>
                                            {job.department}
                                        </span>
                                    </p>
                                    <p className='text-xl font-sans'>
                                        <span className='font-bold'>
                                            Job Location:
                                        </span>
                                        <span className='ml-1'>
                                            {job.location}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <div className='my-5'>
                                        <p className='text-2xl font-bold'>
                                            Job Outline:
                                        </p>
                                        <p className='text-justify'>
                                            {
                                                job?.outline.split('. ').map((line, index) =>
                                                    <p key={index} className="list-disc pl-5 text-justify">
                                                        • {line}{index === job.outline.split('. ').length - 1 ? '' : '.'}
                                                    </p>
                                                )
                                            }
                                        </p>
                                    </div>
                                    <div className='my-5'>
                                        <p className='text-2xl font-bold'>
                                            Duties and Responsibilities:
                                        </p>
                                        <p className='text-justify'>
                                            {
                                                job?.responsibilities.split('. ').map((line, index) =>
                                                    <p key={index} className="list-disc pl-5 text-justify">
                                                        • {line}{index === job.responsibilities.split('. ').length - 1 ? '' : '.'}
                                                    </p>
                                                )
                                            }
                                        </p>
                                    </div>
                                    <div className='my-5'>
                                        <p className='text-2xl font-bold'>
                                            Minimum Requirements:
                                        </p>
                                        <p className='text-justify'>
                                            {
                                                job?.requirements.split('. ').map((line, index) =>
                                                    <p key={index} className="list-disc pl-5 text-justify">
                                                        • {line}{index === job.requirements.split('. ').length - 1 ? '' : '.'}
                                                    </p>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 p-2 border-2 shadow-lg mx-3'>
                                <div className='pb-5 text-2xl font-bold mx-3'>
                                    <p>
                                        Apply for this position
                                    </p>
                                </div>
                                <div className='mx-3'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='flex flex-col justify-center items-start'>
                                            <label className='text-xl font-bold my-3'>
                                                Name <span className='text-red-600 font-bold'>*</span>
                                            </label>
                                            <input
                                                placeholder='Full name (As per NID)'
                                                {...register('name', { required: 'Name is required' })}
                                                className='w-full h-12 border-2 rounded-full px-3'
                                            />
                                            {errors.name && <p className='text-red-600 font-mono font-thin'>{errors.name.message}</p>}
                                        </div>

                                        <div className='flex flex-col justify-center items-start'>
                                            <label className='text-xl font-bold my-3'>
                                                Email  <span className='text-red-600 font-bold'>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder='user@email.com'
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                                        message: 'Invalid email address'
                                                    }
                                                })}
                                                className='w-full h-12 border-2 rounded-full px-3'
                                            />
                                            {errors.email && <p className='text-red-600 font-mono font-thin'>{errors.email.message}</p>}
                                        </div>

                                        <div className='flex flex-col justify-center items-start'>
                                            <label className='text-xl font-bold my-3'>
                                                Phone  <span className='text-red-600 font-bold'>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder='01XXXXXXXXX'
                                                {...register('phone', {
                                                    required: 'Phone number is required',
                                                })}
                                                className='w-full h-12 border-2 rounded-full px-3'
                                            />
                                            {errors.phone && <p className='text-red-600 font-mono font-thin'>{errors.phone.message}</p>}
                                        </div>

                                        <div className='flex flex-col justify-center items-start'>
                                            <label className='text-xl font-bold my-3'>
                                                Cover Letter  <span className='text-red-600 font-bold'>*</span>
                                            </label>
                                            <textarea
                                                placeholder='Cover Letter'
                                                {...register('coverLetter', { required: 'Cover letter is required' })}
                                                className='w-full h-36 border-2 rounded-lg px-3 text-justify'

                                            />
                                            {errors.coverLetter && <p className='text-red-600 font-mono font-thin'>{errors.coverLetter.message}</p>}
                                        </div>

                                        {/* <div className='flex flex-col justify-center items-start'>
                                    <label className='text-xl font-bold my-3'>
                                        Upload CV/Resume  <span className='text-red-600 font-bold'>*</span>
                                    </label>
                                    <input
                                        type="file"
                                        {...register('resume', { required: 'CV/Resume is required' })}
                                        className="file-input file-input-bordered w-full"
                                    />
                                    {errors.resume && <p className='text-red-600 font-mono font-thin'>{errors.resume.message}</p>}
                                </div> */}

                                        <div className='flex flex-col justify-center items-start'>
                                            <label className='text-xl font-bold my-3'>
                                                Link CV/Resume <span className='text-red-600 font-bold'>*</span>
                                            </label>
                                            <input
                                                type='link'
                                                placeholder='CV/Resume Link only'
                                                {...register('link', { required: 'Only CV/Resume Link is required' })}
                                                className='w-full h-12 border-2 rounded-full px-3'
                                            />
                                            {errors.link && <p className='text-red-600 font-mono font-thin'>{errors.link.message}</p>}
                                        </div>

                                        <div className='flex flex-col justify-center items-start mt-3'>
                                            <label className='mt-3 text-justify'>
                                                <input
                                                    type="checkbox"
                                                    {...register('terms', { required: 'You must agree to the terms and conditions' })}
                                                    className="mr-2"
                                                />
                                                By using this form you agree with the storage and handling of your data by this website.<span className='text-red-600 font-bold'>*</span>
                                            </label>
                                            {errors.terms && <p className='text-red-600 font-mono font-thin'>{errors.terms.message}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            className='w-36 h-16 my-10 bg-[#FB923C] text-2xl text-black font-bold py-2 px-4 rounded-full'
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default MyJob;