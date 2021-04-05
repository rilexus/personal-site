import React, { useEffect } from "react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import {
  EasingFunctionNames,
  useMapScrollToValue,
} from "../../hooks/useMapedValue"
import SEO from "../../components/seo"
import { SchemaOrg } from "../../components/schema-org/SchemaOrg"
import Header from "../../components/header/header"
import PageTitle from "../../components/page-title/page-title"
import Opacity from "../../components/opacity/opacity"
import HeroBackground from "../../components/page-components/start/hero-background/hero-background"
import Layout from "../../components/layout/layout"
import Viewport from "../../components/viewport/viewport"
import Sticky from "../../components/sticky/sticky"
import Align from "../../components/align/align"
import AppearTransition from "../../transitions/Appear.transition"
import PageHeroTitle from "../../components/page-hero-title/page-hero-title"
import { HeroHeadline } from "../../components/hero-headline/hero-headline"
import { HeroSubtitle } from "../../components/hero-subtitle/hero-subtitle.styled"
import { CenterMargin } from "../../components/center-margin/center-margin.styled"
import { IntroText } from "../../components/intro-text/intro-text.styled"
import ScrollDownIcon from "../../components/ScrollDownIcon/scroll-down-icon"
import ServicesList from "../../components/page-components/start/services-list/services-list"
import TechList from "../../components/page-components/start/tech-list/tech-list"
import LetsChatSection from "../../components/page-components/start/lets-chat/lets-chat"
import StartPageFooter from "../../components/page-components/start/footer/start-page-footer"
import { printFace } from "./utils/print-face"
import { PERSONAL_SCHEMA } from "./schemas/personal.schema"
import styled from "styled-components"
import { Section } from "../../components/section/Section"

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

const ClipGradient = styled.h1`
  font-size: 7rem;
  margin: 0;
  margin-bottom: -0.5rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.005em;
`

const Gradient = ({ children }) => {
  const { height } = useWindowDimensions()
  const mappedGradientPosition = useMapScrollToValue(
    -100,
    100,
    0,
    height * 2 - 200,
    EasingFunctionNames.expoIn
  )

  const mappedOpacityPosition = useMapScrollToValue(
    0,
    1,
    0,
    height * 2 - 300,
    EasingFunctionNames.expoIn
  )
  return (
    <span
      style={{
        opacity: mappedOpacityPosition,
        display: "inline-block",
        WebkitTextFillColor: "transparent",
        background: `linear-gradient(119deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) ${mappedGradientPosition}%, rgba(0, 0, 0, 0) 100%)`,

        color: "transparent",
        backgroundColor: "transparent",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </span>
  )
}
const GradientTitle = ({ children }) => {
  return (
    <Gradient>
      <ClipGradient>{children}</ClipGradient>
    </Gradient>
  )
}

const Title = () => {
  const { height } = useWindowDimensions()
  const mappedOpacityValue = useMapScrollToValue(
    1,
    0,
    0,
    height * 2,
    EasingFunctionNames.expoIn
  )

  return (
    <Opacity opacity={mappedOpacityValue}>
      <AppearTransition duration={1000} delay={700}>
        <PageHeroTitle
          url={"https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif"}
        >
          <HeroHeadline fontSize={"7rem"}>UX&UI</HeroHeadline>
        </PageHeroTitle>
        <span
          style={{
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute",
          }}
        >
          <GradientTitle>UX&UI</GradientTitle>
        </span>
      </AppearTransition>
      <AppearTransition duration={1000} delay={1400}>
        <HeroSubtitle>unique web solutions</HeroSubtitle>
      </AppearTransition>
      <AppearTransition duration={1000} delay={1800}>
        <CenterMargin>
          <IntroText>
            Every business has its unique features, story and products and
            technology should support and enhance it.
          </IntroText>
        </CenterMargin>
      </AppearTransition>
    </Opacity>
  )
}

const Home = () => {
  const { height } = useWindowDimensions()
  const mappedOpacityValue = useMapScrollToValue(
    1,
    0,
    0,
    height * 2,
    EasingFunctionNames.expoIn
  )
  useEffect(() => {
    printFace()
  }, [])

  return (
    <div>
      <SEO title="Start" />
      <SchemaOrg data={PERSONAL_SCHEMA} />
      <Header />
      <PageTitle title={"Home"} />
      <Opacity opacity={mappedOpacityValue}>
        <HeroBackground />
      </Opacity>
      <main>
        <Layout>
          <Section>
            <Viewport height={"300vh"}>
              <Sticky top={"200px"}>
                <Align position={"center"}>
                  <Title />
                </Align>
              </Sticky>
              <Wrapper>
                <AppearTransition duration={1000} delay={2200}>
                  <ScrollDownIcon />
                </AppearTransition>
              </Wrapper>
            </Viewport>
          </Section>
          <ServicesList />
        </Layout>
        <TechList />
        <LetsChatSection />
        <StartPageFooter />
      </main>
    </div>
  )
}

export { Home }
