import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSnapContainer from "../components/pagesnap"
import FullPage from "../components/fullpage"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageSnapContainer>
      <FullPage>
        <Image />
      </FullPage>
      <FullPage>
        <div style={{ background: "azure", width: "100%", height: "100%" }} />
      </FullPage>
      <FullPage>
        <div
          style={{
            background: "blanchedalmond",
            width: "100%",
            height: "100%",
          }}
        />
      </FullPage>
    </PageSnapContainer>
  </Layout>
)

export default IndexPage
