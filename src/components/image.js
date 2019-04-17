import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import PropTypes from "prop-types"

import styles from "./image.module.styl"

const Image = ({ fluid, alt }) => (
  <div className={styles.imageContainer}>
    <Img
      fluid={fluid}
      style={{ height: "100%" }}
      objectFit="cover"
      objectPosition="30% 50%"
      alt={alt}
    />
  </div>
)

Image.defaultProps = {
  alt: "",
}

Image.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string,
}

export default Image
