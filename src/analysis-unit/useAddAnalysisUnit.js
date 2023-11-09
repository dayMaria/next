import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useAddContext() {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Creando unidad de análisis', severity: 'info' })
            return caseStudyApi.post({ data, url: 'analysis-unit' })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo crear la unidad de análisis', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se creo la unidad de análisis', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['analysisUnits'] })
        }
    })
    return [mutateAsync, isLoading]
}