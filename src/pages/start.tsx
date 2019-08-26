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
import Header from "../components/header/header"
import DevelopmentProcessList from "./start/development-process-list/development-process-list"
import HeaderLogo from "../components/header/header-logo/header-logo"
import ServicesList from "./start/services-list/services-list"

const StartPage = () => {
  const windowDimensions = useWindowDimensions()
  // const scrollPosition = useScrollPosition()
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
      <Header />

      <Layout>
        <section>
          <Viewport height={"300vh"}>
            <Sticky top={"200px"}>
              <Align position={"center"}>
                <Opacity opacity={mappedOpacityValue}>
                  <PageTitle
                    url={
                      "https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif"
                    }
                  >
                    <div
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Custom <br /> Web Development
                    </div>
                  </PageTitle>
                </Opacity>
              </Align>
            </Sticky>
          </Viewport>
        </section>
        <ServicesList />
      </Layout>
    </div>
  )
}
export default StartPage
