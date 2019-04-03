import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/simplepage.module.styl"

const Datenschutz = () => (
  <Layout>
    <SEO title="Datenschutz" />
    <h1>Lorem ipsum </h1>
    <h2>1. Lorem ipsum </h2>
    <h3>Lorem ipsum </h3>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>

    <h3>Lorem ipsum dolor sit amet</h3>
    <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr?</h4>

    <div className={styles.address}>
      <div className={styles.company}>
        Lorem ipsum
      </div>
      <div className={styles.street}>Lorem ipsum</div>
      <div className={styles.street}>Lorem ipsum</div>
      <div className={styles.tel}>Lorem ipsum</div>
      <div className={styles.email}>Lorem ipsum</div>
    </div>
    <h4>Lorem ipsum</h4>
    <p>Lorem ipsum</p>
    <div className={styles.responsible}>Lorem ipsum</div>
    <div className={styles.tel}>Lorem ipsum</div>
    <div className={styles.email}>Lorem ipsum </div>
  </Layout>
)

export default Datenschutz
