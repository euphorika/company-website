import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.styl"

const Navigation = () => (
  <nav className={styles.pageNavigation}>
    <ul>
      <li>
        <Link to="/">euphorika</Link>
      </li>
      <li>
        <Link to="/">leistungen</Link>
      </li>
      <li>
        <Link to="/">best cases</Link>
      </li>
      <li>
        <Link to="/">jobs</Link>
      </li>
      <li>
        <Link to="/">kontakt</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
