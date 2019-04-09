import React from "react"
import PropTypes from "prop-types"

import styles from "./fullpage.module.styl"

const FullPage = ({ children }) => (
  <div className={styles.fullPage}>{children}</div>
)

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullPage
