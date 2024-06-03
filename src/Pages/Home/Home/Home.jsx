import Banner from "../Banner/Banner";
import ExploreHome from "../ExploreHome/ExploreHome";
import ImportedHome from "../ImportedHome/ImportedHome";
import WelcomeHome from "../WelcomeHome/WelcomeHome";


const Home = () => {
    return (
        <div>
            <Banner />
            <WelcomeHome />
            <ExploreHome />
            <ImportedHome />
        </div>
    );
};

export default Home;