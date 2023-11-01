import {useCallback} from "react";

import {useDocumentationApi} from "./http-client-hooks";

/**
 * Download from MinIO the file with key is -objName- and rename it to -as-
 * @returns {(objName: string, as: string) => Promise.<File>} The download funtion
 */
export function useDownload() {
  const api = useDocumentationApi()
  const download = useCallback(async (objName, as) => {
    const blob = await api.get({
      responseType: "blob",
      url: `minio/${objName}`
    })
    const file = new File([blob], as)
    return file
  }, [api])
  return download
}

/**
 * Upload -file- to MinIO with key -fileName-
 * @returns {(file: File, fileName: string) => Promise.<void>}
 */
export function useUpload() {
  const api = useDocumentationApi()
  const upload = useCallback((file, fileName) => api.post({
    data: {
      file
    },
    hasFiles: true,
    responseType: null,
    url: `minio/${fileName}`
  }), [api])
  return upload
}
