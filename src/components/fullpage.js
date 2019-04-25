import React from "react"
import PropTypes from "prop-types"

import styles from "./fullpage.module.styl"

const FullPage = ({ children, backgroundColor }) => {
  const inlineStyling = {
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
  backgroundColor: PropTypes.string,
}

FullPage.defaultProps = {
  backgroundColor: "transparent",
}

export default FullPage
