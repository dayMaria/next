import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useUsers() {
    const { data, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => caseStudyApi.get({ url: 'user' })
    })

    return [data ?? [], isLoading]
}