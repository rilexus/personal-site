import * as React from "react"

const ElemContentWrapper = ({ children }) => {
  return (
    <div
      style={{
        paddingLeft: "3.2rem",
        paddingBottom: "35vh",
        maxWidth: "700px",
      }}
    >
      {children}
    </div>
  )
}
export default ElemContentWrapper;
