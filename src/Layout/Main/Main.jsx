import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";


const Main = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="font-quicksand">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;