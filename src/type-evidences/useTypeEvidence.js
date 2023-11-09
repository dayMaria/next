import { useQuery } from "react-query"
import { caseStudyApi } from "../common/http/apis"
export default function useTypeEvidence() {
    const { data, isLoading } = useQuery({
        queryKey: ['typeEvidences'],
        queryFn: () => caseStudyApi.get({ url: 'typeEvidence' })
    })

    return [data ?? [], isLoading]
}