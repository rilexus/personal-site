import * as React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import PageTitle from "../../components/page-title/page-title"
import Align from "../../components/align/align"
import Layout from "../../components/layout/layout"

const Index = () => {
  return (
    <div>
      <SEO title="Index" />
      <Header />
      <PageTitle title={"Index"} />
      <Layout>
        <Align position={"left"}>spme</Align>
      </Layout>
    </div>
  )
}

export default Index
