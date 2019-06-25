import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import NavigationEntry from "./navigation-entry"
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
              .${styles.pageNavigation} ul .${styles.entry} span,
              .${styles.closeNavigation} {
                color: ${fontColor}
              }
            `}</style>
          </Helmet>
          <nav>
            <ul>
              <li className={styles.entry}>
                <NavigationEntry
                  linkTo="/"
                  currentPathName={window.location.pathname}
                  name="Euphorika"
                  onClickHandler={theme.resetThemeState}
                />
              </li>
              <li className={styles.entry}>
                <NavigationEntry
                  linkTo="/service/"
                  currentPathName={window.location.pathname}
                  name="Leistungen"
                  onClickHandler={theme.resetThemeState}
                />
              </li>
              <li className={styles.entry}>
                <NavigationEntry
                  linkTo="/best-cases/"
                  currentPathName={window.location.pathname}
                  name="Best Cases"
                  onClickHandler={theme.resetThemeState}
                />
              </li>
              <li className={styles.entry}>
                <NavigationEntry
                  linkTo="/jobs/"
                  currentPathName={window.location.pathname}
                  name="Jobs"
                  onClickHandler={theme.resetThemeState}
                />
              </li>
              <li className={styles.entry}>
                <NavigationEntry
                  linkTo="/contact/"
                  currentPathName={window.location.pathname}
                  name="Kontakt"
                  onClickHandler={theme.resetThemeState}
                />
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
