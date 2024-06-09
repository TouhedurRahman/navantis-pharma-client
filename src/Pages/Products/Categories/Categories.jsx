import useCategories from '../../../Hooks/useCategories';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
    const [categories] = useCategories();

    return (
        <div>
            <div className='px-3 mt-10 md:mt-0 lg:px-5 lg:border-l-2 lg:border-[#0B5F82]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 mx-2 mb-10'>
                    {
                        categories.map(category => <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;