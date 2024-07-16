import BannerOnlyText from "../../../Components/BannerOnlyText/BannerOnlyText";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";
import CareerOpportunities from "../CareerOpportunities/CareerOpportunities";
import CompanyCareer from "../CompanyCareer/CompanyCareer";


const Careers = () => {
    return (
        <div>
            <div className="w-[93%] lg:w-[75%] mx-auto">
                <BannerOnlyText
                    title={"Careers"}
                ></BannerOnlyText>
                <div className="mb-36">
                    <CompanyCareer />
                </div>
                <div className="mb-36">
                    <CareerOpportunities />
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={"Carrers"}
            ></LocationFooter>
        </div>
    );
};

export default Careers;