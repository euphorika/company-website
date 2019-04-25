import PropTypes from "prop-types"
import React from "react"

import ThemeContext from "../context/ThemeContext"
import Navigation from "./navigation"
import Logo from "./logo"

import styles from "./header.module.styl"

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <header className={styles.siteHeader}>
        <div
          className={styles.logo}
          onClick={theme.toggleMobileNavigation}
          role="button"
          style={{ color: theme.headerFontColor }}
        >
          <Logo title={siteTitle} color={theme.headerFontColor} />
        </div>
        <Navigation fontColor={theme.headerFontColor} />
      </header>
    )}
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
