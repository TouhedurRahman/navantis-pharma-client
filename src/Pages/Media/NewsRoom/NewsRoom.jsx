import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loader from "../../../Components/Loader/Loader";
import useEvents from "../../../Hooks/useEvents";
import BannerOnlyText from "../../../Components/BannerOnlyText/BannerOnlyText";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const NewsRoom = () => {
    const [events, loading] = useEvents();

    return (
        <div>
            <div className="w-[93%] lg:w-[90%] mx-auto">
                <BannerOnlyText
                    title={"News Room"}
                ></BannerOnlyText>
                <div className="mb-36">
                    {
                        loading
                            ?
                            <>
                                <Loader />
                            </>
                            :
                            <>
                                <div>
                                    <p className="text-sm">
                                        Latest press release
                                    </p>
                                </div>
                                <div>
                                    {
                                        events.slice(0, 1).map(event => (
                                            <>
                                                <div className="p-5 bg-[#F8F8F8]">
                                                    <div>
                                                        <p className=" mb-2 text-sm">
                                                            {
                                                                new Date(event.date).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric',
                                                                })
                                                            }
                                                        </p>
                                                        <p className="text-sm">
                                                            PRESS RELEASE
                                                        </p>
                                                        <p className="my-5 text-2xl font-bold">
                                                            {
                                                                event.title
                                                            }
                                                        </p>
                                                        <hr className="border border-gray-200 mb-10" />
                                                        {/* <Link
                                                        to='/about-us/leadership'
                                                        className="my-5 flex justify-start items-center  space-x-4 text-sm"
                                                    >
                                                        <span className="font-bold hover:link">
                                                            Read the event
                                                        </span>
                                                        <span className="mx-2 text-[#080567]" >
                                                            <FaArrowRight />
                                                        </span>
                                                    </Link> */}
                                                        <Link
                                                            to={`/event/${event._id}`}
                                                            className="mt-10 border border-black px-5 py-2 text-black p-2 text-xs hover:bg-[#E0E8F8] hover:border-transparent"
                                                        >
                                                            Read More
                                                        </Link>
                                                    </div>
                                                    <div>

                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </>
                    }
                </div>
                <div className="mb-36">
                    {
                        loading
                            ?
                            <>
                                <Loader />
                            </>
                            :
                            <>
                                <div>
                                    <div>
                                        <p className="mb-5 text-[20px]">
                                            Latest press releases and news stories
                                        </p>
                                    </div>
                                    <div>
                                        {
                                            events.map(event => (
                                                <>
                                                    <div className="border-t-2 border-gray-500 ">
                                                        <div>
                                                            <p className="mt-5 mb-2 text-sm">
                                                                {
                                                                    new Date(event.date).toLocaleDateString('en-US', {
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric',
                                                                    })
                                                                }
                                                            </p>
                                                            <p className="mb-5 text-2xl font-bold">
                                                                {
                                                                    event.title
                                                                }
                                                            </p>
                                                            <Link
                                                                to={`/event/${event._id}`}
                                                                className="my-5 flex justify-start items-center space-x-4 text-sm"
                                                            >
                                                                <span className="font-bold hover:link">
                                                                    Read the event
                                                                </span>
                                                                <span className="mx-2 text-[#080567]" >
                                                                    <FaArrowRight />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={"News Room"}
            ></LocationFooter>
        </div>
    );
};

export default NewsRoom;