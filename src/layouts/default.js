import React from "react"
import Layout from "../components/layout"

import styles from "./default.module.styl"

const DefaultLayout = ({ children }) => (
  <Layout>
    <div className={styles.default}>{children}</div>
  </Layout>
)

export default DefaultLayout
