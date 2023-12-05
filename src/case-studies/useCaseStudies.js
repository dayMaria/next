import { useQuery } from "react-query"
import { caseStudyApi } from "../common/http/apis"
import { useUser } from "../auth/auth";
export default function useCaseStudies() {
    const user = useUser();
    const { data, isLoading } = useQuery({
        queryKey: ['caseStudys'],
        queryFn: () => caseStudyApi.get({ url: `case-study?user=${user.id}` })
    })

    return [data ?? [], isLoading]
}