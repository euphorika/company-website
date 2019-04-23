import React from "react"
import PropTypes from "prop-types"

import styles from "./scrollingtext.module.styl"

const ScrollingText = ({ children, title }) => (
  <section className={styles.scrollingTextContainer}>
    <div className={styles.title}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
    <div className={styles.body}>{children}</div>
  </section>
)

ScrollingText.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default ScrollingText
