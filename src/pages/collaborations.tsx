import * as React from "react"
import SEO from "../components/seo"
import Header from "../components/header/header"
import PageTitle from "../components/page-title/page-title"
import Layout from "../components/layout/layout"
import H1 from "../components/H1/H1"

const Collaborations = () => {
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
            </div>
          </section>
        </Layout>
      </main>
    </div>
  )
}

export default Collaborations
