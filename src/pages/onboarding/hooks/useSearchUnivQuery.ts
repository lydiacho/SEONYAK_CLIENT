import { useQuery } from '@tanstack/react-query';
import { univNameAxios } from '../apis/searchAxios';

const useSearchUnivQuery = (univName: string) => {
  const { data } = useQuery({ queryKey: ['univ', univName], queryFn: () => univNameAxios(univName) });
  return data?.data.data.univSearchResult;
};

export default useSearchUnivQuery;
