import { useQuery } from "react-query"
import { caseStudyApi } from "../common/http/apis"
export default function useAnalysisUnits() {
    const { data, isLoading } = useQuery({
        queryKey: ['analysisUnits'],
        queryFn: () => caseStudyApi.get({ url: 'analysis-unit' })
    })

    return [data ?? [], isLoading]
}