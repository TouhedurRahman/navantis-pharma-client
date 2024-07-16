import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import ImportedBrands from "../../Pages/Partner/ImportedBrands/ImportedBrands";
import AboutUs from "../../Layout/AboutUs/AboutUs";
import CompanyProfile from "../../Pages/AboutUs/CompanyProfile/CompanyProfile";
import Leadership from "../../Pages/AboutUs/Leadership/Leadership";
import OurValues from "../../Pages/AboutUs/OurValues/OurValues";
import Career from "../../Layout/Career/Career";
import CompanyCareer from "../../Pages/Career/CompanyCareer/CompanyCareer";
import CareerOpportunities from "../../Pages/Career/CareerOpportunities/CareerOpportunities";
import MyJob from "../../Pages/Career/MyJob/MyJob";
import Media from "../../Layout/Media/Media";
import Advertisements from "../../Pages/Media/Advertisements/Advertisements";
import NewsAndEvets from "../../Pages/Media/NewsAndEvets/NewsAndEvets";
import SingleEvent from "../../Pages/Media/SingleEvent/SingleEvent";
import Products from "../../Layout/Products/Products";
import ImportedProducts from "../../Pages/Products/ImportedProducts/ImportedProducts";
import Categories from "../../Pages/Products/Categories/Categories";
import CategorizeProducts from "../../Pages/Products/CategorizeProducts/CategorizeProducts";
import SingleProduct from "../../Pages/Products/SingleProduct/SingleProduct";
import WhoWeAre from "../../Pages/Explore/WhoWeAre/WhoWeAre";
import OurQuality from "../../Pages/Explore/OurQuality/OurQuality";
import YourHealth from "../../Pages/Explore/YourHealth/YourHealth";

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
                path: "/about-us",
                element: <AboutUs />,
                children: [
                    {
                        path: "company-profile",
                        element: <CompanyProfile />
                    },
                    {
                        path: "leadership",
                        element: <Leadership />
                    },
                    {
                        path: "our-values",
                        element: <OurValues />
                    },
                ]
            },
            {
                path: '/products',
                element: <Products />,
                children: [
                    {
                        path: 'imported-products',
                        element: <ImportedProducts />
                    },
                    {
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        path: 'category/:category',
                        element: <CategorizeProducts />
                    }
                ]
            },
            {
                path: '/products/:categoty/:id',
                element: <SingleProduct />
            },
            {
                path: '/imported-brands',
                element: <ImportedBrands />
            },
            {
                path: "/media",
                element: <Media />,
                children: [
                    {
                        path: "news-events",
                        element: <NewsAndEvets />
                    },
                    {
                        path: "advertisements",
                        element: <Advertisements />
                    }

                ]
            },
            {
                path: "news-events/event/:id",
                element: <SingleEvent />
            },
            {
                path: "/careers",
                element: <Career />,
                children: [
                    {
                        path: "company-career",
                        element: <CompanyCareer />
                    },
                    {
                        path: "career-opportunities",
                        element: <CareerOpportunities />
                    },
                ]
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