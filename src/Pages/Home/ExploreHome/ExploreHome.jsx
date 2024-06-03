import { Link } from 'react-router-dom';
import './ExploreHome.css'

const ExploreHome = () => {
    return (
        <div className="px-3 lg:px-10 my-5 mb-10 lg:mb-0">
            <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
                <div className="lg:w-[90%]">
                    <h1 className="flex justify-start items-center text-3xl font-bold text-[#0B5F82]"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <span className="avatar w-8 h-16 rounded">
                            <img src="https://i.ibb.co/4d7LsvY/navantis-3d-logo.gif" className="w-full h-full object-cover" alt="Avatar Image" />
                        </span>
                        <span>Explore</span>
                    </h1>
                    <p className='my-5 text-justify' data-aos="fade-left" data-aos-duration="2000">
                        Explore the World of Skincare with Navantis Pharma Limited. Dive into our curated collection of articles, guides, and expert tips to unlock the secrets of radiant, healthy skin. Discover the latest trends, innovations, and insights that empower you to make informed choices for your skincare journey. From personalized routines to industry breakthroughs, navigate through our Explore section and embark on a transformative experience towards your best skin yet.
                    </p>
                    <Link to="/explore" className='lg:text-center'>
                        <button className='explorebtn'>
                            Explore More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExploreHome;