import * as React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import { useState } from "react"
import { ParagraphStyled } from "../../../pragraph/pragraph.style"
import { CenterMargin } from "../../../center-margin/center-margin.styled"
import Align from "../../../align/align"
import { TechIntro } from "./components/tech-info/tech-info"
import {
  techIcons,
  TechScrollView,
} from "./components/tech-scroll-view/tech-scroll-view"

const Section = styled.section`
  padding-bottom: 10vh;
  padding-top: 10vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`

const TechWrapper = styled.div`
  text-align: center;
`

const FadeInAnimation = posed.div({
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: () => ({
      opacity: { duration: 700 },
    }),
  },
  exit: {
    opacity: 0,
    transition: () => ({
      opacity: { duration: 70 },
    }),
  },
})

export default function TechList(props) {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const currIconInfo = [techIcons[hoveredIndex]]
  return (
    <Section>
      <TechWrapper>
        <TechIntro />
        <TechScrollView onMouseOver={setHoveredIndex} />

        <CenterMargin>
          <div
            style={{
              margin: "0 35px",
            }}
          >
            <Align position={"center"}>
              <PoseGroup animateOnMount enterPose={"enter"}>
                {currIconInfo.map(({ name, desc }, idx) => (
                  <FadeInAnimation key={`curr-icon-${name}`}>
                    <h3>{name}</h3>
                    <ParagraphStyled
                      style={{
                        height: "200px",
                      }}
                    >
                      {desc}
                    </ParagraphStyled>
                  </FadeInAnimation>
                ))}
              </PoseGroup>
            </Align>
          </div>
        </CenterMargin>
      </TechWrapper>
    </Section>
  )
}
