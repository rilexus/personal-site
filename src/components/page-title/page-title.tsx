import * as React from "react"
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"
import BlurBackground from "../blur-background/blur-background"
import useScrollPosition from "../../hooks/useScrollPosition"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import Opacity from "../opacity/opacity"
import { useMappedValue } from "../../hooks/useMapedValue"

interface PageTitlePropsI {
  title: string
}
const Style = styled.div<{ opacity: number }>`
  font-size: 1.3rem;
  opacity: ${({ opacity }) => {
    console.log("opacity: ", opacity)
    return opacity || 0
  }};
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
  padding: 15px 0 0 0;
  letter-spacing: 0.011em;
`
const PageTitle = ({ title }: PageTitlePropsI) => {
  // const scrollPos = useScrollPosition();
  const windowDimension = useWindowDimensions()
  const mappedOPacity = useMappedValue(
    0,
    1,
    windowDimension.height,
    windowDimension.height * 2
  )
  return (
    <Style key={"page-title"} opacity={mappedOPacity}>
      <BlurBackground blur={20} backgroundColor={"#ffffffb3"}>
        <TitleStyled>{title}</TitleStyled>
      </BlurBackground>
    </Style>
  )
}

export default PageTitle
