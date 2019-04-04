import PropTypes from "prop-types"
import React from "react"

import ThemeContext from "../context/ThemeContext"
import Navigation from "./navigation"

import styles from "./header.module.styl"

const Header = ({ siteTitle }) => (
  <header className={styles.siteHeader}>
    <ThemeContext.Consumer>
      {theme => (
        <div
          className={styles.logo}
          onClick={theme.toggleMobileNavigation}
          role="button"
        >
          {siteTitle}
        </div>
      )}
    </ThemeContext.Consumer>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
