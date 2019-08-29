import * as React from "react"
import Align from "../components/align/align"
import SEO from "../components/seo"
import Viewport from "../components/viewport/viewport"
import Sticky from "../components/sticky/sticky"
import { useMappedValue } from "../hooks/useMapedValue"
import Opacity from "../components/opacity/opacity"
import useWindowDimensions from "../hooks/useWindowDimensions"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import ServicesList from "../components/page-components/start/services-list/services-list"
import AppearAnimation from "../animations/appear.animation"
import StartPageFooter from "../components/page-components/start/footer/start-page-footer"
import { IntroText } from "../components/intro-text/intro-text.styled"
import { HeroHeadline } from "../components/hero-headline/hero-headline"
import { HeroSubtitle } from "../components/hero-subtitle/hero-subtitle.styled"
import PageHeroTitle from "../components/page-hero-title/page-hero-title"
import PageTitle from "../components/page-title/page-title"
import TechList from "../components/page-components/start/tech-list/tech-list"
import ScrollDownIcon from "../components/ScrollDownIcon/scroll-down-icon"
import LetsChatSection from "../components/page-components/start/lets-chat/lets-chat"
import { CenterMargin } from "../components/center-margin/center-margin.styled"
import styled from "styled-components"
import HeroBackground from "../components/page-components/start/hero-background/hero-background"

const Wrapper = styled.div`
  position: absolute;
  display: block;
  height: 60px;
  width: 35px;
  left: 50%;
  top: 70vh;
  opacity: 1;
  transition: all 0.4s;
  transform: translate(-50%, 100%);
`

const StartPage = () => {
  const windowDimensions = useWindowDimensions()
  const mappedOpacityValue = useMappedValue(
    1,
    0,
    350,
    windowDimensions.height * 2
  )
  // const mappedScaleValue = useMappedValue(1, 4, 350, windowDimensions.height)
  return (
    <div>
      <SEO title="Start" />
      <Header />
      <PageTitle title={"Home"} />
      <Opacity opacity={mappedOpacityValue}>
        <HeroBackground />
      </Opacity>
      <main>
        <Layout>
          <section>
            <Viewport height={"300vh"}>
              <Sticky top={"200px"}>
                <Align position={"center"}>
                  <Opacity opacity={mappedOpacityValue}>
                    <AppearAnimation duration={1000} delay={700}>
                      <PageHeroTitle
                        url={
                          "https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif"
                        }
                      >
                        <HeroHeadline fontSize={"7rem"}>UNIQUE</HeroHeadline>
                      </PageHeroTitle>
                    </AppearAnimation>
                    <AppearAnimation duration={1000} delay={1400}>
                      <HeroSubtitle>web development solution</HeroSubtitle>
                    </AppearAnimation>
                    <AppearAnimation duration={1000} delay={1800}>
                      <CenterMargin>
                        <IntroText>
                          Every business has its unique features, story and
                          products. Technologies should support and enhance it,
                          especially when "technolgies" presents the business to
                          loyal customers as well as to portential ones. This is
                          why I pay so much attention to understanding the
                          business design and complementing it with a web
                          solution respectively, unique solution.
                        </IntroText>
                      </CenterMargin>
                    </AppearAnimation>
                  </Opacity>
                </Align>
              </Sticky>
              <Wrapper>
                <AppearAnimation duration={1000} delay={2200}>
                  <ScrollDownIcon />
                </AppearAnimation>
              </Wrapper>
            </Viewport>
          </section>
          <ServicesList />
        </Layout>
        <TechList />
        <LetsChatSection />
        <StartPageFooter />
      </main>
    </div>
  )
}
export default StartPage
