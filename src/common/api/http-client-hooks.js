import {useContext} from "react";

import HttpClientContext from "./HttpClientContext";

/**
 *
 * @returns {import('./http').HttpClient}
 */
export function useDocumentationApi() {
  const {documentation} = useContext(HttpClientContext)
  return documentation
}
