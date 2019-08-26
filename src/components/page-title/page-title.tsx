import * as React from "react"
import { PageTitleStyled } from "./page-title.style"
import { ReactNode } from "react"

interface PageTitlePropsI {
  url: string
  children: ReactNode
}
const PageTitle = ({ url, children }: PageTitlePropsI) => {
  return <PageTitleStyled url={url}>{children}</PageTitleStyled>
}
export default PageTitle
