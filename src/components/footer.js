import { Link } from "gatsby"
import React from "react"

import styles from "./footer.module.styl"

const Footer = () => (
  <footer class={styles.pageFooter}>
    <ul>
      <li>
        <Link to="/impressum/">Impressum</Link>
      </li>
      <li>
        <Link to="/datenschutz/">Datenschutz</Link>
      </li>
    </ul>
  </footer>
)

export default Footer
