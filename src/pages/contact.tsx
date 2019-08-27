import * as React from "react"
import { HeroHeadline } from "../components/hero-headline/hero-headline"
import PageHeroTitle from "../components/page-hero-title/page-hero-title"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import Align from "../components/align/align"
import PageTitle from "../components/page-title/page-title"
import SEO from "../components/seo"
import posed, { PoseGroup } from "react-pose"
import MainButton from "../components/main-button/main-button"
import styled from "styled-components"
import { ParagraphStyled } from "../components/pragraph/pragraph.style"
import { CenterMargin } from "../components/center-margin/center-margin.styled"

export const LetsChat = styled.div`
  font-size: 2.24rem;
  line-height: 0.9;
  margin: 0 0 3vh 0;
  font-weight: 900;
  color: #111;
`

const GrowAnimation = posed.div({
  init: {
    opacity: 0,
    scale: 0.6,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: ({ duration }) => ({
      opacity: { duration },
      scale: { duration },
    }),
  },
})

const Contact = () => {
  return (
    <div>
      <SEO title="Contact" />
      <Header />
      <PageTitle title={"Contact"} />
      <Layout>
        <Align position={"center"}>
          <div
            style={{
              marginTop: "10vh",
            }}
          >
            <PoseGroup animateOnMount exitPose={"enter"}>
              <GrowAnimation key={"grow-animation"} duration={900}>
                <PageHeroTitle
                  url={
                    "https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif"
                  }
                >
                  <HeroHeadline fontSize={"6rem"}>MAIL ME</HeroHeadline>
                </PageHeroTitle>
              </GrowAnimation>
            </PoseGroup>
          </div>
          <PoseGroup animateOnMount exitPose={"enter"}>
            <GrowAnimation key={"grow-animation-button"} duration={700}>
              <div
                style={{
                  marginTop: "10vh",
                }}
              >
                <LetsChat>Lets Chat!</LetsChat>
                <CenterMargin>
                  <ParagraphStyled>
                    If you have a project in mind let's chat about it. I will be
                    happy to hear your ideas and give you feedback on best
                    practices.
                  </ParagraphStyled>
                </CenterMargin>
                <MainButton>
                  <a href="mailto:mail@stanislavpanchenko.de">
                    mail@stanislavpanchenko.de
                  </a>
                </MainButton>
              </div>
            </GrowAnimation>
          </PoseGroup>
        </Align>
      </Layout>
    </div>
  )
}

export default Contact
