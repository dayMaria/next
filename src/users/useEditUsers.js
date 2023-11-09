import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useEditContext(id) {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Editando usuario', severity: 'info' })
            return caseStudyApi.put({ data, url: `user/${id}` })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo editar el usuario', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se edito el usuario', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['users'] })
        }
    })
    return [mutateAsync, isLoading]
}