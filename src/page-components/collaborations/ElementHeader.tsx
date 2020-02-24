import * as React from "react"

const ElemHeader = ({ children }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        height: "35vh",
        paddingLeft: "3rem",
      }}
    >
      {children}
    </div>
  )
}
export default ElemHeader;
