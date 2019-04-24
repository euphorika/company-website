import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import ThemeContext from "../context/ThemeContext"

import styles from "./navigation.module.styl"

const Navigation = ({ fontColor }) => (
  <ThemeContext.Consumer>
    {theme => {
      const toggleVisibilityClass = theme.navigationVisibleOnMobile
        ? ` ${styles.visibleOnMobile}`
        : ""

      return (
        <div className={`${styles.pageNavigation}${toggleVisibilityClass}`}>
          <Helmet>
            <style type="text/css">{`
              .${styles.pageNavigation} ul .${styles.entry} a,
              .${styles.closeNavigation} {
                color: ${fontColor}
              }
            `}</style>
          </Helmet>
          <nav>
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
          <div
            className={styles.closeNavigation}
            onClick={theme.toggleMobileNavigation}
            role="button"
          >
            X
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
