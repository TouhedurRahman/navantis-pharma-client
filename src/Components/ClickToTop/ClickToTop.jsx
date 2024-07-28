import { useState, useEffect } from 'react';
import { BsFillRocketFill } from 'react-icons/bs';

const ClickToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className={`fixed bottom-4 right-4 transition-opacity duration-300 rounded-full ${isVisible ? 'opacity-100 shadow-lg shadow-blue-200' : 'opacity-0'
                }`}
        >
            <button
                className="bg-[#080567] text-white p-2 rounded-full focus:outline-none"
                onClick={scrollToTop}
            >
                <BsFillRocketFill />
            </button>
        </div>
    );
};

export default ClickToTop;