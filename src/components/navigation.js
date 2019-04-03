import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.styl"

const Navigation = () => (
  <nav className={styles.pageNavigation}>
    <ul>
      <li className={styles.entry}>
        <Link to="#">Euphorika</Link>
      </li>
      <li className={styles.entry}>
        <Link to="#">Leistungen</Link>
      </li>
      <li className={styles.entry}>
        <Link to="#">Best Cases</Link>
      </li>
      <li className={styles.entry}>
        <Link to="#">Jobs</Link>
      </li>
      <li className={styles.entry}>
        <Link to="#">Kontakt</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
