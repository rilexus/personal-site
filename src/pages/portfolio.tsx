import * as React from "react"
import SEO from "../components/seo"
import Header from "../components/header/header"
import PageTitle from "../components/page-title/page-title"
import Viewport from "../components/viewport/viewport"
import styled from "styled-components"
import ScalingView from "../components/page-components/portfolio/portfolio-scaling-view"

const Center = styled.div`
  text-align: center;
`
const Portfolio = () => {
  return (
    <div>
      <SEO title="Portfolio" />
      <div
        style={{
          // remove header from page flow
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          // push view to the top of screen
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <Center>
          <PageTitle title={"Portfolio"} />
          <ScalingView />
          <Viewport height={"280vh"}>
            <div>ssome</div>
          </Viewport>
        </Center>
      </div>
    </div>
  )
}

export default Portfolio
