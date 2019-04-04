import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.styl"

const Header = ({ siteTitle }) => (
  <header className={styles.siteHeader}>
    <div className={styles.headerContainer}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={styles.headerLink}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
