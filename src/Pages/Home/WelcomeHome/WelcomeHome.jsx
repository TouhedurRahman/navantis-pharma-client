import { Link } from 'react-router-dom';
import { SiWelcometothejungle } from 'react-icons/si';
import ReactPlayer from 'react-player/youtube';
import './WelcomeHome.css';

const WelcomeHome = () => {
    return (
        <div className='my-10'>
            <div className="container flex justify-center absolute">
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center'>
                <div className='w-full flex flex-col justify-start items-center lg:items-start px-3 lg:px-10'>
                    <p className='flex justify-center items-center text-4xl text-[#0B5F82] font-serif font-bold mt-5 lg:mt-0'>
                        <SiWelcometothejungle /> elcome Voice
                    </p>
                    <p className='my-5 text-justify font-bold'>
                        Your trusted partner in healthcare solutions across Bangladesh! We take immense pride in importing high-quality medicines from around the globe to ensure the well-being of our communities. With a commitment to excellence and innovation, we strive to deliver top-notch pharmaceutical products that meet the diverse needs of our customers. At Navantis, we envision a healthier future for all, and we look forward to serving you with integrity, dedication, and compassion. Together, let's embark on a journey towards enhanced health and vitality. Welcome aboard!
                    </p>
                    <Link to='/about-us'>
                        <button className='welcomebtn'>
                            Read More
                        </button>
                    </Link>
                </div>

                <div className='w-full flex justify-center px-3 lg:px-10 lg:justify-end items-center rounded-lg'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=KflOfLuOPpI'
                        controls={true}
                        loop={true}
                    />
                </div>
            </div>
        </div >
    );
};

export default WelcomeHome;