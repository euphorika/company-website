import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

import ThemeContext from "../context/ThemeContext"
import Navigation from "./navigation"

import styles from "./header.module.styl"

const Header = ({ siteTitle, fontColor }) => (
  <header className={styles.siteHeader}>
    <Helmet>
      <style type="text/css">{`
        .${styles.siteHeader} .${styles.logo} {
          color: ${fontColor}
        }
      `}</style>
    </Helmet>
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
    <Navigation fontColor={fontColor} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  fontColor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  fontColor: "inherit",
}

export default Header
