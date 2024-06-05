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
                path: '/imported-brands',
                element: <ImportedBrands />
            },
            {
                path: "/careers",
                element: <Career />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
        ]
    },
]);