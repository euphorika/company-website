import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FullPage from "../components/fullpage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <FullPage>FullPage 1</FullPage>
    <FullPage>FullPage 2</FullPage>
    <FullPage>FullPage 3</FullPage>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <Link to="/textseite/">Textseite</Link>
    </div>
  </Layout>
)

export default IndexPage
