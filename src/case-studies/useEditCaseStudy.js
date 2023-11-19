import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useEditCaseStudy(idCaseStudy) {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Editando estudio de caso', severity: 'info' })
            return caseStudyApi.put({ data, url: `case-study/${idCaseStudy}` })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo editar el estudio de caso', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se edito el estudio de caso', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['caseStudys'] })
        }
    })
    return [mutateAsync, isLoading]
}