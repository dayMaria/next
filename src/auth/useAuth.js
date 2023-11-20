import { useMutation, useQueryClient } from "react-query";
import { useSnackbarFns } from "../common/feedback/snackbar-hooks";
import { caseStudyApi } from "../common/http/apis";
import { useReducer } from "react";

export default function useAuth() {
    const snackbar = useSnackbarFns()
    const [loading, toggleLoading] = useReducer(state => !state, false)

    const login = data => {
        toggleLoading()
        return caseStudyApi.post({ data, url: 'user/userLogin', responseType: 'json' })
            .catch(() => {
                snackbar.open({ message: 'Credenciales incorrectas', severity: 'error' })
            })
            .finally(toggleLoading)
    }

    return [login, loading]
}