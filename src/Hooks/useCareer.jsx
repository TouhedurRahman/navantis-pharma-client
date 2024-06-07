import { useQuery } from '@tanstack/react-query';

const useCareer = () => {
    const { data: careers = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['careers'],
        queryFn: async () => {
            const url = '/careers.json';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [careers, loading, refetch];
};

export default useCareer;