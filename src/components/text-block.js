import React from "react"
import PropTypes from "prop-types"

import styles from "./text-block.module.styl"

const TextBlock = ({ title, children }) => (
  <section className={styles.textBlockContainer}>
    <h1 dangerouslySetInnerHTML={{ __html: title }} />
    <div className={styles.body}>{children}</div>
  </section>
)

TextBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default TextBlock
