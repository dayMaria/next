import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useAllCaseStudy() {
    const { data, isLoading } = useQuery({
        queryKey: ['allcasesstudy'],
        queryFn: () => caseStudyApi.get({ url: 'case-study/all' })
    })
    return [data ?? [], isLoading]
}