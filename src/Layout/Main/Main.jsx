import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet, useLocation, useParams } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from '../../Pages/Shared/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import ClickToTop from '../../Components/ClickToTop/ClickToTop';


const Main = () => {
    const { category } = useParams();
    const location = useLocation();

    useEffect(() => {
        AOS.init();
    }, []);

    const productsPage = location.pathname.includes(`/products`);
    const productsCategoryPage = location.pathname.includes(`/products/category/${category}`);

    return (
        <div className="font-nunito">
            <Navbar />
            <Outlet />
            <Footer />
            <ClickToTop />
            {
                (productsPage || productsCategoryPage)
                ||
                <ScrollToTop />
            }
        </div>
    );
};

export default Main;