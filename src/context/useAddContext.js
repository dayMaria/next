import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useAddContext() {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Creando contexto', severity: 'info' })
            return caseStudyApi.post({ data, url: 'context' })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo crear el contexto', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se creo el contexto', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['contexts'] })
        }
    })
    return [mutateAsync, isLoading]
}