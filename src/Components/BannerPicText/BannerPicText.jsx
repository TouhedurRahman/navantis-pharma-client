const BannerPicText = ({ img, title }) => {
    return (
        <div className="mt-20 mb-36 flex flex-col-reverse md:flex-row-reverse lg:justify-between items-center rounded-lg">
            <div className="w-full md:w-1/2 p-5 flex justify-center items-center">
                <p className="font-bold text-5xl text-center">
                    {title}
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:rounded-r-lg">
                <img
                    src={img}
                    className="w-full h-full rounded-lg"
                    alt="Loading"
                />
            </div>
        </div>
    );
};

export default BannerPicText;