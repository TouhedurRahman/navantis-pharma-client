import { useQuery } from "@tanstack/react-query";

const useLatestProducts = () => {
    const { data: latestProducts = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['latestProducts'],
        queryFn: async () => {
            const url = 'https://navantis-pharma-server.vercel.app/latest-products';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [latestProducts, loading, refetch];
};

export default useLatestProducts;