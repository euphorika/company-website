import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import styles from "./image.module.styl"

const Image = ({ fluid }) => (
  <div className={styles.imageContainer}>
    <Img fluid={fluid} />
  </div>
)

Image.propTypes = {
  fluid: PropTypes.object.isRequired,
}

export default Image
