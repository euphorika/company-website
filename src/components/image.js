import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import PropTypes from "prop-types"

import styles from "./image.module.styl"

const Image = ({ fluid, title, alt, children }) => {
  const titleElement = title ? <h2 className={styles.title}>{title}</h2> : null
  const body = children ? <div className={styles.body}>{children}</div> : null

  return (
    <div className={styles.imageContainer}>
      {titleElement}
      {body}
      <Img
        fluid={fluid}
        style={{ height: "100%" }}
        objectFit="cover"
        objectPosition="30% 50%"
        alt={alt}
      />
    </div>
  )
}

Image.defaultProps = {
  title: "",
  alt: "",
}

Image.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
}

export default Image
