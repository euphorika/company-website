import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSnapContainer from "../components/pagesnap"
import FullPage from "../components/fullpage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageSnapContainer>
      <FullPage>FullPage 1</FullPage>
      <FullPage>FullPage 2</FullPage>
      <FullPage>FullPage 3</FullPage>
    </PageSnapContainer>
  </Layout>
)

export default IndexPage
