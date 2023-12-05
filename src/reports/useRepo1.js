import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useRepo1(idTypeEvidence) {
    const { data, isLoading } = useQuery({
        queryKey: ['repo1', idTypeEvidence],
        queryFn: () => caseStudyApi.get({ url: `case-study/reporte1/${idTypeEvidence}` })
    })
    return [data ?? [], isLoading]
}