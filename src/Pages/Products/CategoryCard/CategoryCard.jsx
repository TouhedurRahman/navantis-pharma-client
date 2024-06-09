import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/products/category/${category.category}`} className='text-center cursor-pointer hover:text-white'>
            <div className="category-card w-full shadow-xl">
                <figure><img className="w-full h-48 rounded-lg" src={category.imageURL} alt="Loading..." /></figure>
                <div className="card-body">
                    <h2 className="font-bold">
                        {
                            category.name
                        }
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;