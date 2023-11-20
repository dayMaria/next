import { useQuery } from "use-http";
import { useUser } from "../auth/auth";
import { caseStudyApi } from "../common/http/apis"

export default function useMisEvidencias() {
    const user = useUser();
    const { data, isLoading } = useQuery({
        queryKey: ['misEvidencias'],
        queryFn: () => caseStudyApi.get({ url: `case-study/misEvidencias/${user.id}` })
    })

    return [data ?? [], isLoading]
}