import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import ThemeContext from "../context/ThemeContext"

import ClosingX from "./closing-x"

import styles from "./navigation.module.styl"

const Navigation = ({ fontColor }) => (
  <ThemeContext.Consumer>
    {theme => {
      const toggleVisibilityClass = theme.navigationVisibleOnMobile
        ? ` ${styles.visibleOnMobile}`
        : ""
      const backgroundColor = theme.tileBackgroundColor

      return (
        <div className={`${styles.pageNavigation}${toggleVisibilityClass}`}>
          <Helmet>
            <style type="text/css">{`
              .${styles.pageNavigation} {
                background-color: ${backgroundColor}
              }
              .${styles.pageNavigation} ul .${styles.entry} a,
              .${styles.closeNavigation} {
                color: ${fontColor}
              }
            `}</style>
          </Helmet>
          <nav>
            <ul>
              <li className={styles.entry}>
                <Link onClick={theme.toggleMobileNavigation} to="/">
                  Euphorika
                </Link>
              </li>
              <li className={styles.entry}>
                <Link onClick={theme.toggleMobileNavigation} to="/service/">
                  Leistungen
                </Link>
              </li>
              <li className={styles.entry}>
                <Link onClick={theme.toggleMobileNavigation} to="/best-cases/">
                  Best Cases
                </Link>
              </li>
              <li className={styles.entry}>
                <Link onClick={theme.toggleMobileNavigation} to="/jobs/">
                  Jobs
                </Link>
              </li>
              <li className={styles.entry}>
                <Link onClick={theme.toggleMobileNavigation} to="/contact/">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={styles.closeNavigation}
            onClick={theme.toggleMobileNavigation}
            role="button"
          >
            <ClosingX color={fontColor} />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navigation

Navigation.propTypes = {
  fontColor: PropTypes.string.isRequired,
}
