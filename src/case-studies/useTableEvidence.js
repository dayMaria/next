import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useTableEvidence(idcaseStudy, idcontext, idanalysisUnit) {
    const { data, isLoading } = useQuery({
        queryKey: ['tableEvidence', idcaseStudy, idcontext, idanalysisUnit],
        queryFn: () => caseStudyApi.get({ url: `case-study/tableEvidence/${idcaseStudy}/${idcontext}/${idanalysisUnit}` })
    });
    return [data ?? [], isLoading];
}