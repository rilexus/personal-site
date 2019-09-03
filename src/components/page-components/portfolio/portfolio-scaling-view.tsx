import * as React from "react"
import Viewport from "../../viewport/viewport"
import Sticky from "../../sticky/sticky"
import styled from "styled-components"
import useWindowDimensions from "../../../hooks/useWindowDimensions"
import {
  EasingFunctionNames,
  useMapScrollToValue,
} from "../../../hooks/useMapedValue"
import screen_mockup_img from "./../../../images/imac_mockup.png"
import { HeroHeadline } from "../../hero-headline/hero-headline"
import PageHeroTitle from "../../page-hero-title/page-hero-title"
import FadeinAnimation from "../../../animations/fadein.acnimation"
import SlideUpAnimation from "../../../animations/slide-up.animation"
import PortfolioPageHeroTitle from "./hero/portfolio-hero-title"
import ScreenContent from "./screen-contntent/screen-contntent"

const Scale = ({ scale, children, height, width, style }) => {
  return (
    <div
      style={{
        ...style,
        transform: `scale(${scale})`,
        width: `${width}px`,
        height: `${height}px`,
        display: "inline-block",
      }}
    >
      {children}
    </div>
  )
}

const IMGFigure = styled.figure<{ url: string }>`
    background-repeat: no-repeat;
    background-image: url("${({ url }) => url}");
    position: relative;
    left: 50%;
    margin-left: -951.5px;
`

const ContentWindow = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  bottom: 321px;
  right: 40px;
`
const InnerContent = styled.div<{ url: string }>`
  position: absolute;
  width: 1813px;
  height: 1043px;

  background-color: black;
  z-index: 3;
`
const ScalingView = () => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions()
  const animationPxDistance = windowHeight * 3
  const pictureEndScaleValue = 0.5
  const pictureScalingEndPosition = windowHeight

  const pictureMappedScaleValue = useMapScrollToValue(
    1.07,
    pictureEndScaleValue,
    0,
    pictureScalingEndPosition,
    EasingFunctionNames.sineOut
  )
  return (
    <Viewport height={`${animationPxDistance}px`}>
      <Sticky top={`${0}px`} style={{ textAlign: "center" }}>
        <PortfolioPageHeroTitle />
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Scale scale={pictureMappedScaleValue}>
            <IMGFigure
              url={screen_mockup_img}
              style={{
                width: `${1903}px`,
                height: `${1412}px`,
                backgroundSize: `${1903}px ${1412}px`,
              }}
            >
              <ContentWindow>
                <InnerContent>
                  <ScreenContent />
                </InnerContent>
              </ContentWindow>
            </IMGFigure>
          </Scale>
        </div>
      </Sticky>
    </Viewport>
  )
}

export default ScalingView
