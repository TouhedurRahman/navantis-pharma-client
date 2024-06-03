import CountUp from "react-countup";

const ImportedHome = () => {
    return (
        <div className="mb-10 px-3 lg:px-10 flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full flex justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <div
                        className="w-[300px] h-[300px] mask mask-hexagon bg-green-100 rounded-full flex justify-center items-center text-black font-bold"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <span className='flex justify-center items-center py-auto my-auto'>
                            <span className='flex flex-col justify-center items-center'>
                                <span>
                                    Products
                                </span>
                                <span className='text-5xl'>
                                    <CountUp
                                        end={37}
                                        duration={10}
                                        separator=","
                                        className="font-bold text-center"
                                        style={{ fontSize: "100px" }}
                                    />
                                </span>
                                <span>
                                    Imported
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <img src="https://i.ibb.co/Jyk902N/bionike-logo.png" alt="Loading..." />
            </div>
        </div>
    );
};

export default ImportedHome;