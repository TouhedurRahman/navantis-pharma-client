import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="flex justify-start items-center border border-gray-500">
            <div className="w-[20%] h-[48] flex justify-center items-center">
                <img
                    src={product.imageURL}
                    alt="Loading..."
                />
            </div>
            <div className="w-[70%] mx-3">
                <p className="font-bold">
                    {product.forSearch}
                </p>
                <p className="text-justify">
                    {product.description.slice(0, 40)}... <Link to={`/products/${product.category}/${product._id}`}
                        className="text-blue-500 hover:link cursor-pointer"
                    >more</Link>
                </p>
                <div className="flex justify-end items-center">
                    <Link
                        to={`/products/${product.category}/${product._id}`}
                        className="mt-2 px-5 py-2 border-2 border-[#080567] text-[#080567] rounded hover:bg-[#080567] hover:text-white hover:border-white"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;