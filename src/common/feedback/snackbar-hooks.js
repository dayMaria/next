import {useContext} from "react";
import {SnackbarContext, SnackbarFnsContext} from "./SnackbarContext";

export function useSnackbar() {
  return useContext(SnackbarContext)
}

export function useCloseSnackbar() {
  const {close} = useContext(SnackbarFnsContext)
  return close
}

export function useOpenSnackbar() {
  const {open} = useContext(SnackbarFnsContext)
  return open
}
