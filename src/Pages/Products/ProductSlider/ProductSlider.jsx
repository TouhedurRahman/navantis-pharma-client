import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="h-48 flex justify-start items-center border border-gray-500">
            <div className="w-[30%] flex justify-center items-center">
                <img
                    src={product.imageURL}
                    alt="Loading..."
                    className="h-[36] pl-2"
                />
            </div>
            <div className="w-[70%] h-[36] mx-3 py-3">
                <p className="font-bold">
                    {product.forSearch}
                </p>
                <div className="flex justify-end items-center">
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