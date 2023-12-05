import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useRepo3(startYear, endYear) {
    const { data, isLoading } = useQuery({
        queryKey: ['repo3', startYear, endYear],
        queryFn: () => caseStudyApi.get({ url: `case-study/reporte3/${startYear}/${endYear}` })
    });
    return [data ?? [], isLoading];
}