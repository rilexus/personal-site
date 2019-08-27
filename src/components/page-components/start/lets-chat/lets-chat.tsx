import * as React from "react"
import { CenterMargin } from "../../../center-margin/center-margin.styled"
import { ParagraphStyled } from "../../../pragraph/pragraph.style"
import MainButton from "../../../main-button/main-button"
import Align from "../../../align/align"
import { LetsChat } from "../../../../pages/contact"
import Viewport from "../../../viewport/viewport"
import styled from "styled-components"
import FadeinAnimation from "../../../../animations/fadein.acnimation"
import { useRef } from "react"
import { useIsInView } from "../../../../hooks/useIsinView"
import SlideUpAnimation from "../../../../animations/slide-up.animation"
import { useAppearFromBottom } from "../../../../hooks/useAppearFromBottom"

const Gradient = styled.div`
  position: relative;
  background: -webkit-linear-gradient(45deg, #f7f7fc, #e9f2f5);
  background: linear-gradient(45deg, #f7f7fc, #e9f2f5);
`

const LetsChatSection = () => {
  const ref = useRef()
  const inView = useAppearFromBottom(ref)
  return (
    <section>
      <FadeinAnimation duration={900} animate={inView}>
        <Gradient>
          <Viewport height={"50vh"}>
            <Align position={"center"}>
              <div
                ref={ref}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FadeinAnimation duration={900} animate={inView}>
                  <SlideUpAnimation duration={700} animate={inView} delay={200}>
                    <LetsChat>Lets Chat!</LetsChat>
                    <CenterMargin>
                      <ParagraphStyled>
                        If you have a project in mind let's chat about it. I
                        will be happy to hear your ideas and give you feedback
                        on best practices.
                      </ParagraphStyled>
                    </CenterMargin>
                    <MainButton>
                      <a href="mailto:mail@stanislavpanchenko.de">
                        mail@stanislavpanchenko.de
                      </a>
                    </MainButton>
                  </SlideUpAnimation>
                </FadeinAnimation>
              </div>
            </Align>
          </Viewport>
        </Gradient>
      </FadeinAnimation>
    </section>
  )
}

export default LetsChatSection
