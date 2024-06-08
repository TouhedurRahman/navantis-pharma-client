import Banner from "../Banner/Banner";
import ExploreHome from "../ExploreHome/ExploreHome";
import OurObjective from "../OurObjective/OurObjective";
import WelcomeHome from "../WelcomeHome/WelcomeHome";


const Home = () => {
    return (
        <div>
            <Banner />
            <WelcomeHome />
            <ExploreHome />
            <OurObjective />
        </div>
    );
};

export default Home;