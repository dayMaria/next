import { useContext } from "react";
import { SnackbarContext, SnackbarFnsContext } from "./SnackbarContext";

export function useSnackbar() {
  return useContext(SnackbarContext)
}

export function useSnackbarFns() {
  return useContext(SnackbarFnsContext);
}
