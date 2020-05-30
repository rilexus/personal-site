import * as React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import PageTitle from "../../components/page-title/page-title"
import Layout from "../../components/layout/layout"

const PageTemplate = ({ title, children }) => {
  return (
    <div>
      <SEO title={title} />
      <Header />
      <PageTitle title={title} />
      <Layout>{children}</Layout>
    </div>
  )
}

export default PageTemplate
