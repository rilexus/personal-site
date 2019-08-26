import * as React from "react"
import Align from "../components/align/align"
import PageTitle from "../components/page-title/page-title"
import SEO from "../components/seo"
import Viewport from "../components/viewport/viewport"
import Sticky from "../components/sticky/sticky"
import { useMappedValue } from "../hooks/useMapedValue"
import Opacity from "../components/opacity/opacity"
import useWindowDimensions from "../hooks/useWindowDimensions"
import Layout from "../components/layout/layout"
import Header, { HeaderType } from "../components/header/header"
import ServicesList from "../components/page-components/start/services-list/services-list"
import AppearAnimation from "../animations/appear.animation"
import { ParagraphStyled } from "../components/pragraph/pragraph.style"
import StartPageFooter from "../components/page-components/start/footer/start-page-footer"
import useScrollPosition from "../hooks/useScrollPosition"

const StartPage = () => {
  const windowDimensions = useWindowDimensions()
  const scrollPosition = useScrollPosition()
  const mappedOpacityValue = useMappedValue(
    1,
    0,
    350,
    windowDimensions.height * 2
  )
  // const mappedScaleValue = useMappedValue(1, 4, 350, windowDimensions.height)
  return (
    <div>
      <SEO title="Home" />
      <Header type={HeaderType.white} />

      <Layout>
        <section>
          <Viewport height={"300vh"}>
            <Sticky top={"200px"}>
              <Align position={"center"}>
                <Opacity opacity={mappedOpacityValue}>
                  <AppearAnimation duration={1000} delay={700}>
                    <PageTitle
                      url={
                        "https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif"
                      }
                    >
                      <div>
                        Unique <br /> Web Solutions
                      </div>
                    </PageTitle>
                  </AppearAnimation>
                  <AppearAnimation duration={1000} delay={1200}>
                    <div
                      style={{
                        margin: "0 auto",
                        maxWidth: "670px",
                      }}
                    >
                      <ParagraphStyled>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo, ratione, reiciendis. Amet animi at
                        culpa cupiditate, debitis dicta dolorem esse iste,
                        nesciunt nihil omnis provident quae quaerat, soluta
                        ullam vero?
                      </ParagraphStyled>
                    </div>
                  </AppearAnimation>
                </Opacity>
              </Align>
            </Sticky>
          </Viewport>
        </section>
        <ServicesList />
      </Layout>
      <StartPageFooter />
    </div>
  )
}
export default StartPage
