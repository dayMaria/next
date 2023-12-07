import { useQuery } from "react-query";
import { caseStudyApi } from "../common/http/apis";

export default function useVisualizar(iduser) {
    const { data, isLoading } = useQuery({
        queryKey: ['visualizarEC', iduser],
        queryFn: () => caseStudyApi.get({ url: `case-study/members/${iduser}` })
    });
    return [data ?? [], isLoading];
}