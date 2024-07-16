import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from '../../Pages/Shared/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import ClickToTop from '../../Components/ClickToTop/ClickToTop';


const Main = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="font-nunito">
            <Navbar />
            <Outlet />
            <Footer />
            <ClickToTop />
            <ScrollToTop />
        </div>
    );
};

export default Main;