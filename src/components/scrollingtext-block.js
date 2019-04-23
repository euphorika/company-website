import React from "react"
import PropTypes from "prop-types"

import styles from "./scrollingtext-block.module.styl"

const ScrollingTextBlock = ({ children, title }) => (
  <div className={styles.scrollingTextBlockContainer}>
    <h3 dangerouslySetInnerHTML={{ __html: title }} />
    {children}
  </div>
)

ScrollingTextBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default ScrollingTextBlock
