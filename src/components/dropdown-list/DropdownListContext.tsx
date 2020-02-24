import { createContext, useContext } from "react"

const DropdownListContext = createContext({})
export const DropdownListContextProvider = DropdownListContext.Provider
const DropdownListContextConsumer = DropdownListContext.Consumer

export const useDropdownListContext = () => {
  return useContext(DropdownListContext)
}
