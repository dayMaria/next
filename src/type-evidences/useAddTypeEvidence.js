import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useAddTypeEvidence() {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Creando tipo de evidencia', severity: 'info' })
            return caseStudyApi.post({ data, url: 'typeEvidence' })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo crear el tipo de evidencia', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se creo el tipo de evidencia', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['typeEvidences'] })
        }
    })
    return [mutateAsync, isLoading]
}