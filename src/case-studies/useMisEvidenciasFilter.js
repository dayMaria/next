import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis"
import { useUser } from "../auth/auth";

export default function useMisEvidencias() {
    const user = useUser();
    const { data, isLoading } = useQuery({
        queryKey: ['misEvidencias'],
        queryFn: () => caseStudyApi.get({ url: `case-study/misEvidencias/${user.id}` })
    })

    return [data ?? [], isLoading]
}