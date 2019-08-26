import * as React from "react"
import styled from "styled-components"
import Layout from "../../../layout/layout"
import { ParagraphStyled } from "../../../pragraph/pragraph.style"
import { useRef } from "react"
import AppearAnimation from "../../../../animations/appear.animation"
import { useAppearedInView } from "../../../../hooks/useAppearedInView"
import Viewport from "../../../viewport/viewport"
import { useIsInView } from "../../../../hooks/useIsinView"

const Background = styled.div<{ opacity?: number }>`
  background-color: #fbfcfd;
  opacity: ${({ opacity }) => opacity | 1};
  padding-top: 20vh;
  padding-bottom: 20vh;
`
const Greeting = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0 0 5px;
`
const Exlpination = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
`
interface StartPageFooterPropsI {}
const StartPageFooter = ({  }: StartPageFooterPropsI) => {
  return (
    <section>
      <Background>
        <Layout>
          <div
            style={{
              //padding: "50vh",
              margin: "0 auto",
              maxWidth: "670px",
            }}
          >
            <Greeting>Hi! I’m Stanislav,</Greeting>
            <Exlpination>
              Stanislav Panchenko and I’m crazy about web design and UX/XD. I’m
              currently studying Computer Science in Aachen, Germany and work as
              a frontend developer.
            </Exlpination>
            <ParagraphStyled>
              <span>
                I’m always excited to start new projects! If you have ideas,
                let’s chat about it. Drop me a message and let’s create awesome
                sites.
              </span>
            </ParagraphStyled>
          </div>
        </Layout>
      </Background>
    </section>
  )
}

export default StartPageFooter
