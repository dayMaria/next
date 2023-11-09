import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";

export default function useEditAnalysisUnit(id) {
    const snackbar = useSnackbarFns()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: data => {
            snackbar.open({ message: 'Editando unidad de análisis', severity: 'info' })
            return caseStudyApi.put({ data, url: `analysis-unit/${id}` })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo editar la unidad de análisis', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Se edito la unidad de análisis', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['analysisUnits'] })
        }
    })
    return [mutateAsync, isLoading]
}