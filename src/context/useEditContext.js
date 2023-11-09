import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useEditContext(id) {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Editando contexto', severity: 'info' })
            return caseStudyApi.put({ data, url: `context/${id}` })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo editar el contexto', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se edito el contexto', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['contexts'] })
        }
    })
    return [mutateAsync, isLoading]
}