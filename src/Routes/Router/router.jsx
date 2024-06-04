import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import ImportedBrands from "../../Pages/Partner/ImportedBrands/ImportedBrands";
import AboutUs from "../../Layout/AboutUs/AboutUs";
import CompanyProfile from "../../Pages/AboutUs/CompanyProfile/CompanyProfile";

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
                ]
            },
            {
                path: '/imported-brands',
                element: <ImportedBrands />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            }
        ]
    },
]);