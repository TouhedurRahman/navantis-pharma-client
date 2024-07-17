import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import Loader from "../../../Components/Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";

const ImportedProducts = () => {
    const [products, loading] = useProducts();

    const { category } = useParams();

    const categorizedProducts = products.filter(product => product.category === category);

    return (
        <div>
            {
                loading
                    ?
                    <>
                        <Loader />
                    </>
                    :
                    <>
                        <div className="grid grid-cols md:grid-cols-2 gap-4 md:gap-2">
                            {
                                categorizedProducts.map(product => (
                                    <ProductCard
                                        key={product._id}
                                        product={product}
                                    ></ProductCard>
                                ))
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default ImportedProducts;