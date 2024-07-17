import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import CompanyProfile from "../../Pages/AboutUs/CompanyProfile/CompanyProfile";
import MyJob from "../../Pages/Career/MyJob/MyJob";
import Products from "../../Layout/Products/Products";
import ImportedProducts from "../../Pages/Products/ImportedProducts/ImportedProducts";
import SingleProduct from "../../Pages/Products/SingleProduct/SingleProduct";
import WhoWeAre from "../../Pages/Explore/WhoWeAre/WhoWeAre";
import OurQuality from "../../Pages/Explore/OurQuality/OurQuality";
import YourHealth from "../../Pages/Explore/YourHealth/YourHealth";
import OurCommitment from "../../Pages/Explore/OurCommitment/OurCommitment";
import Leadership from "../../Pages/AboutUs/Leadership/Leadership";
import OurValues from "../../Pages/AboutUs/OurValues/OurValues";
import Partner from "../../Pages/Partner/Partner/Partner";
import Careers from "../../Pages/Career/Careers/Careers";
import NewsRoom from "../../Pages/Media/NewsRoom/NewsRoom";
import SingleNews from "../../Pages/Media/SingleNews/SingleNews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/company-profile",
                element: <CompanyProfile />
            },
            {
                path: "/leadership",
                element: <Leadership />
            },
            {
                path: "/our-values",
                element: <OurValues />
            },
            {
                path: "/who-we-are",
                element: <WhoWeAre />
            },
            {
                path: "/our-quality",
                element: <OurQuality />
            },
            {
                path: "/your-health",
                element: <YourHealth />
            },
            {
                path: "/our-commitment",
                element: <OurCommitment />
            },
            {
                path: '/products',
                element: <Products />,
                children: [
                    {
                        path: 'category/:category',
                        element: <ImportedProducts />
                    }
                ]
            },
            {
                path: '/products/:categoty/:id',
                element: <SingleProduct />
            },
            {
                path: '/our-partner',
                element: <Partner />
            },
            {
                path: "/news-room",
                element: <NewsRoom />,
            },
            {
                path: '/event/:id',
                element: <SingleNews />
            },
            {
                path: "/careers",
                element: <Careers />
            },
            {
                path: "/jobs/:id",
                element: <MyJob />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
        ]
    },
]);