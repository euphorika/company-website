import React from "react"
import { Link } from "gatsby"
import styles from "./simplepage.module.styl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = () => (
  <Layout>
    <SEO title="Impressum" />
    <h1>Impressum</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Impressum
