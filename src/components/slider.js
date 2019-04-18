import React from "react"
import PropTypes from "prop-types"

import styles from "./slider.module.styl"

const Slider = ({ children }) => (
  <div className={styles.sliderContainer}>
    <div className={styles.images}>{children}</div>
    <div className={styles.controls}>
      <button>Left</button>
      <button>Right</button>
    </div>
  </div>
)

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slider
