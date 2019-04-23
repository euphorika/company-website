import React from "react"
import PropTypes from "prop-types"

import styles from "./fullpage.module.styl"

const FullPage = ({ children, headerFontColor, backgroundColor }) => {
  const inlineStyling = {
    color: headerFontColor,
    backgroundColor,
  }

  return (
    <div className={styles.fullPage} style={inlineStyling}>
      {children}
    </div>
  )
}

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
  headerFontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

FullPage.defaultProps = {
  headerFontColor: "inherit",
  backgroundColor: "transparent",
}

export default FullPage
