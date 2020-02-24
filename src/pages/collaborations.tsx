import * as React from "react"
import SEO from "../components/seo"
import Header from "../components/header/header"
import PageTitle from "../components/page-title/page-title"
import Layout from "../components/layout/layout"
import H1 from "../components/H1/H1"
import DropdownList from "../components/dropdown-list/DropdownList"
import DropdownListElement from "../components/dropdown-list/dropdown-list-element/DropdownListElement"
import { graphql } from "gatsby"
import DunckelfeldListElement from "../page-components/collaborations/DunckelfeldListElement"
import ElemHeader from "../page-components/collaborations/ElementHeader"
import ElemContentWrapper from "../page-components/collaborations/ElementContentWrapper"
import AmbientListElement from "../page-components/collaborations/AmbientListElement"
import AvengaListElement from "../page-components/collaborations/AvengaListElement"
import ContentH3 from "../page-components/collaborations/ContentH3"
import { ParagraphStyled } from "../components/pragraph/pragraph.style"
import { ExternalLink } from "../components/external-link/ExternalLink"
import SnapbusListElement from "../page-components/collaborations/SnabbusListElement"

const Collaborations = ({ data }) => {
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
