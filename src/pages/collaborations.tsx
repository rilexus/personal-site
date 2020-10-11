import * as React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header/header"
import PageTitle from "../components/page-title/page-title"
import Layout from "../components/layout/layout"
import H1 from "../components/H1/H1"
import DropdownList from "../components/dropdown-list/DropdownList"
import DunckelfeldListElement from "../page-components/collaborations/DunckelfeldListElement"
import AmbientListElement from "../page-components/collaborations/AmbientListElement"
import AvengaListElement from "../page-components/collaborations/AvengaListElement"
import SnapbusListElement from "../page-components/collaborations/SnabbusListElement"
import PrymListElement from "../page-components/collaborations/PrymListElement"

const Collaborations = ({ data }) => {
  const prym_logo = data.prym_logo.childImageSharp.fluid.src || ""
  const dunckelfeld_logo = data.dunkelfeld_logo.childImageSharp.fluid.src || ""
  const ambient_innovation_logo =
    data.ambient_innovation_logo.childImageSharp.fluid.src || ""
  const avenga_logo = data.avenga_logo.childImageSharp.fluid.src || ""
  const snapbus_logo = data.snapbus_logo.childImageSharp.fluid.src || ""

  return (
    <div>
      <SEO title="Collaborations" />
      <Header />
      <PageTitle title={"Collaborations"} />
      <main>
        <Layout>
          <section>
            <div
              style={{
                marginTop: "20vh",
              }}
            >
              <H1>Collaborations</H1>

              <DropdownList>
                <PrymListElement imgSrc={prym_logo} />
                <DunckelfeldListElement imgSrc={dunckelfeld_logo} />
                <AmbientListElement imgSrc={ambient_innovation_logo} />
                <AvengaListElement imgSrc={avenga_logo} />
                <SnapbusListElement imgSrc={snapbus_logo} />
              </DropdownList>
            </div>
          </section>
        </Layout>
      </main>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    prym_logo: file(relativePath: { eq: "prym_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    dunkelfeld_logo: file(relativePath: { eq: "dunckelfeld-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    avenga_logo: file(relativePath: { eq: "avenga_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ambient_innovation_logo: file(
      relativePath: { eq: "ambient_innovation_logo.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    snapbus_logo: file(relativePath: { eq: "snapbus_logo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Collaborations
