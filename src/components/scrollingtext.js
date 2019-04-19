import React from "react"
import PropTypes from "prop-types"

import styles from "./scrollingtext.module.styl"

const ScrollingText = ({ children, title }) => (
  <div className={styles.contentMain}>
    <div className={styles.columnLeft}>
      <h1 className={styles.title}>{title}</h1>
    </div>
    <div className={styles.columnRight}>{children}</div>
  </div>
)

ScrollingText.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default ScrollingText
