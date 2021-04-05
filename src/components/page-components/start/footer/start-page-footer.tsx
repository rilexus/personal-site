import * as React from "react"
import styled from "styled-components"
import Layout from "../../../layout/layout"
import { ParagraphStyled } from "../../../pragraph/pragraph.style"
import { CenterMargin } from "../../../center-margin/center-margin.styled"
import { Icons } from "../../../../icons"
import { IconLink } from "../../../icon-link"
import Align from "../../../align/align"
import { Section } from "../../../section/Section"

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
const CenterIcon = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #c9c9c9;
  padding-top: 1rem;
  margin-top: 3rem;
  & a {
    margin: 0 1rem 0 1rem;
  }
`

interface StartPageFooterPropsI {}
const StartPageFooter = ({  }: StartPageFooterPropsI) => {
  return (
    <section>
      <Background>
        <Layout>
          <CenterMargin>
            <div
              style={{
                margin: "0 35px",
              }}
            >
              <Greeting>Hi! I’m Stanislav,</Greeting>
              <Exlpination>
                Stanislav Panchenko and I’m crazy about web design and UX&UI.
                I’m currently located in Aachen, Germany and work as a frontend
                developer.
              </Exlpination>
              <ParagraphStyled>
                <span>
                  I’m always excited to start new projects! If you have ideas,
                  let’s chat about it. Drop me a message and let’s create
                  awesome sites.
                </span>
              </ParagraphStyled>
              <CenterIcon>
                <IconLink
                  url={"https://www.xing.com/profile/Stanislav_Panchenko/cv"}
                >
                  {Icons.xing}
                </IconLink>
                <IconLink url={"https://github.com/rilexus"}>
                  {Icons.github}
                </IconLink>
                <IconLink url={"https://gitlab.com/stanpanchenko"}>
                  {Icons.gitlab}
                </IconLink>
                <IconLink
                  url={"https://www.linkedin.com/in/stanislav-p-98b254192/"}
                >
                  {Icons.linkedin}
                </IconLink>
              </CenterIcon>
            </div>
          </CenterMargin>
        </Layout>
      </Background>
    </section>
  )
}

export default StartPageFooter
