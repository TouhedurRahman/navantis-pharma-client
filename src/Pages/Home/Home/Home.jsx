import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import LeadershipHome from "../LeadershipHome/LeadershipHome";
import MoreHome from "../MoreHome/MoreHome";
import ProgressHome from "../ProgressHome/ProgressHome";
import ValueHome from "../ValueHome/ValueHome";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="lg:w-[75%] mx-auto">
                <AboutHome />
                <LeadershipHome />
                <ValueHome />
                <MoreHome />
                <ProgressHome />
            </div>
        </div>
    );
};

export default Home;