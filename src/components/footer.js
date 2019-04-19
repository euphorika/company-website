import { Link } from "gatsby"
import React from "react"

import styles from "./footer.module.styl"

const Footer = () => (
  <footer className={styles.pageFooter}>
    <ul className={styles.legalAdvice}>
      <li>
        <Link to="/legal-notice/">Impressum</Link>
      </li>
      <li>
        <Link to="/data-protection-and-privacy/">Datenschutz</Link>
      </li>
    </ul>
  </footer>
)

export default Footer
