import * as React from "react"
import Layout from "../components/layout/layout"
import useWindowDimensions from "../hooks/useWindowDimensions"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Opacity from "../components/opacity/opacity"
import Viewport from "../components/viewport/viewport"
import Sticky from "../components/sticky/sticky"
import Align from "../components/align/align"
import AppearAnimation from "../animations/appear.animation"
import PageHeroTitle from "../components/page-hero-title/page-hero-title"
import { HeroHeadline } from "../components/hero-headline/hero-headline"
import { HeroSubtitle } from "../components/hero-subtitle/hero-subtitle.styled"
import { CenterMargin } from "../components/center-margin/center-margin.styled"
import { IntroText } from "../components/intro-text/intro-text.styled"
import ScrollDownIcon from "../components/ScrollDownIcon/scroll-down-icon"
import ServicesList from "../components/page-components/start/services-list/services-list"
import TechList from "../components/page-components/start/tech-list/tech-list"
import LetsChatSection from "../components/page-components/start/lets-chat/lets-chat"
import StartPageFooter from "../components/page-components/start/footer/start-page-footer"
import styled from "styled-components"
import {
  EasingFunctionNames,
  useMapScrollToValue,
} from "../hooks/useMapedValue"
import HeroBackground from "../components/page-components/start/hero-background/hero-background"
import PageTitle from "../components/page-title/page-title"
import { useEffect } from "react"
import { SchemaOrg } from "../components/schema-org/SchemaOrg"

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

function printFace() {
  console.log(
    "─────────▄▄───────────────────▄▄──\n" +
      "──────────▀█───────────────────▀█─\n" +
      "──────────▄█───────────────────▄█─\n" +
      "──█████████▀───────────█████████▀─\n" +
      "───▄██████▄─────────────▄██████▄──\n" +
      "─▄██▀────▀██▄─────────▄██▀────▀██▄\n" +
      "─██────────██─────────██────────██\n" +
      "─██───██───██─────────██───██───██\n" +
      "─██────────██─────────██────────██\n" +
      "──██▄────▄██───────────██▄────▄██─\n" +
      "───▀██████▀─────────────▀██████▀──\n" +
      "──────────────────────────────────\n" +
      "──────────────────────────────────\n" +
      "──────────────────────────────────\n" +
      "───────────█████████████──────────\n" +
      "──────────────────────────────────\n" +
      "──────────────────────────────────"
  )
  console.log("%cSTOP LURKING!", "color:red; font-size:2rem; font-weight:bold;")
  console.log(
    "%cIf you like to know how i have build this awesome website, drop me a message.",
    "color:blue; font-size:.8rem;"
  )
}

const PERSONAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  url: "http://www.stanislavpanchenko.de",
  name: "Stanislav Panchenko",
  familyName: "Panchenko",
  gender: "male",
  birthDate: "03/13/1992",
  jobTitle: "Software Engineer",
  knowsLanguage: [
    {
      "@type": "Language",
      name: "German",
    },
    {
      "@type": "Language",
      name: "Russian",
    },
    {
      "@type": "Language",
      name: "English",
    },
  ],
  affiliation: {
    "@type": "Organization",
    brand: {
      "@type": "Brand",
      description: "",
      name: "Prym",
      url: "https://prym.de/",
      logo:
        "https://center-smart-services.com/wp-content/uploads/sites/9/2017/11/prym_logo.png",
    },
  },
  image: {
    "@type": "ImageObject",
    thumbnail:
      "https://avatars1.githubusercontent.com/u/28537457?s=460&u=46c3ae998f6493ecc346c45209f8762e0856d41f&v=4",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Germany",
  },
}

const IndexPage = () => {
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
                        <HeroHeadline fontSize={"7rem"}>UX&UI</HeroHeadline>
                      </PageHeroTitle>
                    </AppearAnimation>
                    <AppearAnimation duration={1000} delay={1400}>
                      <HeroSubtitle>unique web solutions</HeroSubtitle>
                    </AppearAnimation>
                    <AppearAnimation duration={1000} delay={1800}>
                      <CenterMargin>
                        <IntroText>
                          Every business has its unique features, story and
                          products and technology should support and enhance it.
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

export default IndexPage
