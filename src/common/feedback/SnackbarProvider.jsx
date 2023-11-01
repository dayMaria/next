import {useMemo, useState} from "react";
import SnackbarConsumer from "./SnackbarConsumer";

import {SnackbarContext, SnackbarFnsContext} from "./SnackbarContext"

const closeConfig = {
  message: "",
  open: false,
  severity: "info"
}

export default function SnackbarProvider({children}) {
  const [config, setConfig] = useState(closeConfig)
  const fns = useMemo(() => ({
    close: () => setConfig(c => ({...c, open: false})),
    open: ({message, severity}) => setConfig({message, open: true, severity})
  }))

  return (
    <SnackbarFnsContext.Provider value={fns}>
      <SnackbarContext.Provider value={config}>
        {children}
        <SnackbarConsumer />
      </SnackbarContext.Provider>
    </SnackbarFnsContext.Provider>
  )
}
