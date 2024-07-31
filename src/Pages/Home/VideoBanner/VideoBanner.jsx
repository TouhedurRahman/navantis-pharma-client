const VideoBanner = () => {
    return (
        <div className="w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src='/home-bnanner-video.mp4'
                autoPlay
                loop
                muted
            ></video>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-start justify-center">
                <div className="text-center text-white my-auto lg:mt-24">
                    <h1 className="text-2xl lg:text-5xl font-bold">N A V A N T I S</h1>
                    {/* <p>Health ● Happiness ● Beauty</p> */}
                    <div className="mt-36 lg:text-[55px]">
                        <p >Healing from Nature's Heart <br /> Beauty with Every Touch</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoBanner;