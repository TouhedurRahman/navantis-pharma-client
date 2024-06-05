const CompanyCareer = () => {
    return (
        <div>
            <div className='px-3 lg:px-5 mt-10 lg:mt-0 lg:border-l-2 lg:border-[#0B5F82]'>
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
                    <div className='lg:w-1/2'>
                        <div className="text-center lg:text-left">
                            <p className='text-xl font-sans font-extralight'>
                                WHY
                            </p>
                            <p className='text-2xl text-[#0B5F82] font-serif font-extrabold'>
                                JOIN WITH US?
                            </p>
                            <div className="flex justify-center items-center lg:justify-start lg:items-start">
                                <hr className='mt-3 w-36 border-2 border-[#FB923C] rounded' />
                            </div>
                        </div>
                        <p className='text-justify mt-3'>
                            We offer dynamic career opportunities for individuals passionate about skincare and innovation. Our supportive and inclusive work environment encourages professional growth and development. Employees have access to continuous training, mentorship, and the chance to work with industry-leading products and experts. We value talent, dedication, and creativity, providing a platform for employees to excel and contribute to our mission of delivering exceptional skincare solutions. Join us and grow your career with Navantis Pharma.
                        </p>
                    </div>
                    <div className='lg:w-1/2 flex justify-center items-center m-2'>
                        <img
                            className='w-full h-72'
                            src="https://i.ibb.co/SKHxBjk/we-are-hiring-digital-collage.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCareer;