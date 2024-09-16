import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-start items-center border border-gray-500">
            <div className="w-[100%] lg:w-[20%] h-[48] flex justify-center items-center">
                <img
                    src={product.imageURL}
                    alt="Loading..."
                />
            </div>
            <div className="lg:w-[70%] mx-2 lg:mx-3 py-5 lg:py-2">
                <p className="font-bold text-center lg:text-justify">
                    {product.forSearch}
                </p>
                <p className="text-center lg:text-justify">
                    {product.description.slice(0, 40)}... <Link to={`/products/${product.category}/${product._id}`}
                        className="text-blue-500 hover:link cursor-pointer"
                    >more</Link>
                </p>
                <div className="flex justify-center lg:justify-end items-center pt-5 lg:pt-0">
                    <Link
                        to={`/products/${product.category}/${product._id}`}
                        className="mt-2 px-5 py-2 border-2 border-gray-700 text-gray-700 rounded hover:bg-gray-700 hover:text-white hover:border-white"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;