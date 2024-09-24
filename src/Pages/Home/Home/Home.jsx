import Navbar from "../../Shared/Navbar/Navbar";
import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import LeadershipHome from "../LeadershipHome/LeadershipHome";
import MoreHome from "../MoreHome/MoreHome";
import NavbarHome from "../NavbarHome/NavbarHome";
import ProgressHome from "../ProgressHome/ProgressHome";
import StillImgBanner from "../StillImgBanner/StillImgBanner";
import ValueHome from "../ValueHome/ValueHome";
import VideoBanner from "../VideoBanner/VideoBanner";


const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <NavbarHome /> */}
            <Banner />
            {/* <VideoBanner /> */}
            {/* <StillImgBanner /> */}
            <div className="lg:w-[90%] mx-auto">
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