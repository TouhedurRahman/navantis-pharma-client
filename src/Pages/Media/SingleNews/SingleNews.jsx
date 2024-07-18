import { Link, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { FaArrowRight } from "react-icons/fa";
import useEvents from "../../../Hooks/useEvents";
import ShareSocialMedia from "../../../Components/ShareSocialMedia/ShareSocialMedia";
import LocationFooter from "../../../Components/LocationFooter/LocationFooter";

const SingleNews = () => {
    const [events, loading] = useEvents();

    const { id } = useParams();
    const url = location.pathname;

    const event = events.find(event => event._id == id);

    return (
        <div>
            <div className='mx-3 lg:w-[75%] lg:mx-auto my-20'>
                <div>
                    {
                        loading
                            ?
                            <Loader />
                            :
                            <>

                                <div className="flex flex-col-reverse md:flex-row-reverse lg:justify-between items-start rounded-lg">
                                    <div className="w-full md:w-1/2 pt-10 lg:pt-0 md:ms-10 flex flex-col justify-start items-start">
                                        <div className="mb-2">
                                            <p className='text-2xl text-[#0B5F82] font-extrabold'>
                                                {event.title}
                                            </p>
                                            <p className='text-xl font-sans font-extralight'>
                                                {event.date}
                                            </p>
                                        </div>
                                        <div className="w-full">
                                            <div className="flex justify-center items-center mb-10">
                                                <hr className='mt-3 w-full border border-gray-200' />
                                            </div>
                                            <p className="text-justify mb-10">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:rounded-r-lg">
                                        <img
                                            src={event.imageURL}
                                            className="w-full h-full lg:h-96 rounded-lg"
                                            alt="Loading"
                                        />
                                    </div>
                                </div>
                            </>
                    }
                </div>
                <div className="mb-10">
                    <ShareSocialMedia
                        url={url}
                    ></ShareSocialMedia>
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
                                            events.slice(0, 3).map(event => (
                                                <>
                                                    <div className="border-t-2 border-gray-500 ">
                                                        <div>
                                                            <p className="mt-5 mb-2 text-sm">
                                                                {
                                                                    event.date
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
                                                                <span className="mx-2 text-[#0B5F82]" >
                                                                    <FaArrowRight />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                    <div className="border-t-2 border-gray-500 pt-10">
                                        <Link
                                            to='/news-room'
                                            className="mt-10 border border-black px-5 py-2 text-black p-2 text-xs hover:bg-[#E0E8F8] hover:border-transparent"
                                        >
                                            View All
                                        </Link>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
            <LocationFooter
                from={"Home"}
                to={loading ? "" : `${event.title}`}
            ></LocationFooter>
        </div >
    );
};

export default SingleNews;