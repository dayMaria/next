

import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useRepo2() {
    const { data, isLoading } = useQuery({
        queryKey: ['repo2'],
        queryFn: () => caseStudyApi.get({ url: `case-study/repo/reporte2` })
    });

    return [data ?? [], isLoading];
}