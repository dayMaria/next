import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useRepo4(id) {
    const { data, isLoading } = useQuery({
        queryKey: ['repo4', id],
        queryFn: () => caseStudyApi.get({ url: `case-study/reporte4/${id}` })
    });

    return [data ?? [], isLoading];
}