import { useQuery } from "react-query"
import { caseStudyApi } from "../common/http/apis"

export default function useContexts() {
    const { data, isLoading } = useQuery({
        queryKey: ['contexts'],
        queryFn: () => caseStudyApi.get({ url: 'context' })
    })

    return [data ?? [], isLoading]
}