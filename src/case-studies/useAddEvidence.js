import { useMutation } from 'react-query'
import { caseStudyApi } from '../common/http/apis'

export default function useAddEvidence() {
    const { mutateAsync, isLoading } = useMutation({
        mutationFn: ({ files, json }) => {
            const body = new FormData()
            body.append('files', files)
            body.append('dto', JSON.stringify(json))
            snackbar.open({ message: 'Subiendo evidencia', severity: 'info' })
            return fetch(`${process.env.NEXT_PUBLIC_API_URL}/case-study/register-evidence`, {
                method: 'POST',
                body
            })
        },
        onError: () => {
            snackbar.open({ message: 'No se pudo subir la evidencia', severity: 'error' })
        },
        onSuccess: () => {
            snackbar.open({ message: 'Evidencia subida exitosamente', severity: 'success' })
            queryClient.invalidateQueries({ queryKey: ['contexts'] })
        }
    })
    return [mutateAsync, isLoading]
}