import { Link } from 'react-router-dom';

const CategorizedProductList = ({ product }) => {
    return (
        <Link to={`/products/${product.category}/${product._id}`}>
            <div className='py-2 flex justify-start items-center hover:text-gray-700 border-2 hover:shadow-gray-700 shadow'>
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