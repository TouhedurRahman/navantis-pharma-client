import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="lg:w-[75%] mx-auto">
                <AboutHome />
            </div>
        </div>
    );
};

export default Home;