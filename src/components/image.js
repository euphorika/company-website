import React from "react"
import PropTypes from "prop-types"

import styles from './image.module.styl'

const Image = () => (
  <div className={styles.imageContainer}>
    Image Container
  </div>
)

Image.propTypes = {
  file: PropTypes.string.isRequired
}

export default Image
