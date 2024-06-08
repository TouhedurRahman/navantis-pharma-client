import Events from "../Events/Events";

const NewsAndEvets = () => {
    return (
        <div className='px-1 lg:px-5 lg:border-l-2 lg:border-[#0B5F82]'>
            <div data-aos="fade-down" data-aos-duration="2000">
                <div className='mt-10 md:mt-0 text-center md:text-left'>
                    <p className='text-xl  font-sans font-extralight'>
                        OUR
                    </p>
                    <p className='text-2xl text-[#0B5F82] font-serif font-extrabold'>
                        EVENTS & MEETINGS
                    </p>
                    <hr className='mt-3 w-36 mx-auto md:mx-0 border-2 border-[#FB923C] rounded' />
                </div>

                <div className='mt-5' data-aos="fade-left" data-aos-duration="2000">
                    <Events />
                </div>
            </div>
        </div>
    );
};

export default NewsAndEvets;