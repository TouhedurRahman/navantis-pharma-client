import { Link } from "react-router-dom";

const CategorizedProductcard = ({ product }) => {
    return (
        <Link to={`/products/${product.category}/${product._id}`}>
            <div className="w-full bg-base-100 hover:bg-gradient-to-r from-green-200 to-orange-100 hover:text-[#0B5F82] border-2 hover:border-[#0B5F82] shadow-xl shadow-orange-50 hover:shadow-green-50 rounded-lg">
                <figure className="bg-white">
                    <img
                        src={product.imageURL}
                        className="w-full h-72 flex justify-center items-center"
                        alt="Loading..."
                    />
                </figure>
                <div>
                    <div className="mx-3">
                        <div className="h-[150px] flex flex-col justify-center items-start">
                            <p className="font-bold">
                                {product.name}
                            </p>
                            <p className="font-bold">
                                {(product.subtitle).toUpperCase()}
                            </p>
                        </div>
                        <div className="h-[30px] flex justify-start items-start">
                            <p>
                                {product.usage.slice(0, 18)}...<span className='hover:link text-blue-800 font-bold'>more</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-3 bg-[#0B5F82] text-white">
                    <p className="font-extralight font-mono">Find More</p>
                </div>
            </div>
        </Link>
    );
};

export default CategorizedProductcard;