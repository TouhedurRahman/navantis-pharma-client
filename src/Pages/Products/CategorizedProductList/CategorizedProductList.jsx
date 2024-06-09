import { Link } from 'react-router-dom';

const CategorizedProductList = ({ product }) => {
    return (
        <Link to={`/products/${product.category}/${product._id}`}>
            <div className='py-2 flex justify-start items-center bg-base-100 hover:bg-gradient-to-r from-green-200 to-orange-100 hover:text-[#0B5F82] border-2 hover:border-[#0B5F82] shadow-xl shadow-orange-50 hover:shadow-green-50 rounded-lg'>
                <div className='lg:mx-1 h-24 w-36 flex justify-center items-center'>
                    <img
                        src={product.imageURL}
                        className='h-24 w-36'
                        alt="Loading..."
                    />
                </div>
                <div className='lg:mx-1'>
                    <p className="font-bold">
                        {product.name}
                    </p>
                    <p className="font-bold">
                        {(product.subtitle).toUpperCase()}
                    </p>
                    <p>{product.usage}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategorizedProductList;