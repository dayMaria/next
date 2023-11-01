import {createContext, useContext, useState} from "react"

const GenericContext = createContext()
const UpdateGenericContext = createContext()

export const GenericContextProvider = ({children, defaultValue}) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <UpdateGenericContext.Provider value={setValue}>
      <GenericContext.Provider value={value}>
        {children}
      </GenericContext.Provider>
    </UpdateGenericContext.Provider>
  )
}

export const useGenericValue = () => useContext(GenericContext)

export const useUpdateGenericValue = () => useContext(UpdateGenericContext)
