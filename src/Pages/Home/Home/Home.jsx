import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import LeadershipHome from "../LeadershipHome/LeadershipHome";
import ValueHome from "../ValueHome/ValueHome";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="lg:w-[75%] mx-auto">
                <AboutHome />
                <LeadershipHome />
                <ValueHome />
            </div>
        </div>
    );
};

export default Home;