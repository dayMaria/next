import { useQuery } from "react-query"
import { caseStudyApi } from "../common/http/apis"
export default function useCaseStudies() {
    const { data, isLoading } = useQuery({
        queryKey: ['caseStudys'],
        queryFn: () => caseStudyApi.get({ url: 'case-study' })
    })

    return [data ?? [], isLoading]
}