import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";
import { useUser } from "../auth/auth";

export default function useAddCaseStudy() {
    const snackbar = useSnackbarFns()
    const user = useUser();
    const queryClient = useQueryClient()

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Creando estudio de caso', severity: 'info' })
            return caseStudyApi.post({ data: { ...data, user: user.id }, url: `case-study` })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo crear el estudio de caso', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Estudio de caso creado exitosamente', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['caseStudys'] })
        }
    })
    return [mutateAsync, isLoading]
}