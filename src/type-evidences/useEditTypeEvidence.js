import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useEditTypeEvidence(id) {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Editando tipo de evidencia', severity: 'info' })
            return caseStudyApi.put({ data, url: `typeEvidence/${id}` })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo editar el tipo de evidencia', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se edito el tipo de evidencia', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['typeEvidences'] })
        }
    })
    return [mutateAsync, isLoading]
}