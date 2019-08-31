import * as React from "react"
import styled from "styled-components"
import BlurBackground from "../blur-background/blur-background"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { useMappedValue } from "../../hooks/useMapedValue"

interface PageTitlePropsI {
  title: string
}
const Style = styled.div`
  font-size: 1.3rem;
  font-weight: 900;
  height: 55px;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0 25px 0 25px;
  border-bottom: 1px solid #d8d8d8;
`
const TitleStyled = styled.div`
  font-size: 21px;
  line-height: 1.14286;
  font-weight: 600;
  padding: 15px 0 0 25px;
  letter-spacing: 0.011em;
`
const PageTitle = ({ title }: PageTitlePropsI) => {
  const windowDimension = useWindowDimensions()
  const mappedOPacity = useMappedValue(
    0,
    1,
    windowDimension.height,
    windowDimension.height * 2
  )
  return (
    <Style
      key={"page-title"}
      style={{
        opacity: mappedOPacity || 0,
      }}
    >
      <BlurBackground blur={20} backgroundColor={"#ffffffb3"}>
        <TitleStyled>{title}</TitleStyled>
      </BlurBackground>
    </Style>
  )
}

export default PageTitle
