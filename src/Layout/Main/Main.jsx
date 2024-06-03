import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="font-quicksand">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;