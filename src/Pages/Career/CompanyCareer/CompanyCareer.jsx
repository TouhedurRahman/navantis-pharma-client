const CompanyCareer = () => {
    return (
        <div className="m-5 mt-0 flex flex-col-reverse md:flex-row-reverse lg:justify-between items-center rounded-lg">
            <div className="w-full md:w-1/2 pt-5 md:pl-5 lg:pl-10 flex flex-col justify-center items-start">
                <p className="mb-3 font-bold text-2xl">
                    Why join with us
                </p>
                <p className="mb-3 text-justify text-sm">
                    We offer dynamic career opportunities for individuals passionate about skincare and innovation. Our supportive and inclusive work environment encourages professional growth and development. Employees have access to continuous training, mentorship, and the chance to work with industry-leading products and experts. We value talent, dedication, and creativity, providing a platform for employees to excel and contribute to our mission of delivering exceptional skincare solutions. Join us and grow your career with Navantis Pharma.
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:rounded-r-lg">
                <img
                    src="https://i.ibb.co.com/F5G0DxD/CAREERS-HAND-SHAKE.jpg"
                    className="w-full h-full rounded-lg"
                    alt="Loading"
                />
            </div>
        </div>
    );
};

export default CompanyCareer;