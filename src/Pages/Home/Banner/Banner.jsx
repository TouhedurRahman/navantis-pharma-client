import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <div className="hero h-[400px] font" style={{ backgroundImage: `url("https://i.ibb.co/jgGWgz9/Home-Banner-Medicine.jpg")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content">
                    <div className="text-center">
                        <h1 className="mb-5 text-4xl text-white font-bold" data-aos="fade-right" data-aos-duration="2000">
                            Navantis Pharma Limited
                        </h1>
                        <p className="mb-5 text-2xl font-bold text-white">Health • Happiness • Beauty</p>

                        <Link style={{ '--clr': '#FB923C' }} className="button" href="#">
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>

                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Explore All
                        </Link>
                    </div>
                </div>
            </div>
            <Marquee className="w-[80%] text-xl font-bold italic banner-marquee">
                ** Navantis pharma for your better Health, Happiness and Beauty **
            </Marquee>
        </>
    );
};

export default Banner;