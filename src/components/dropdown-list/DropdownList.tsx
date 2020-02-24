import * as React from "react"
import { DropdownListContextProvider } from "./DropdownListContext"

const DropdownList = ({ children }) => {
  return (
    <DropdownListContextProvider value={{}}>
      <ul>{children}</ul>
    </DropdownListContextProvider>
  )
}

export default DropdownList
