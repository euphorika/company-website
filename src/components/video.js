import React from "react"
import PropTypes from "prop-types"

import styles from "./video.module.styl"

const Video = ({ video, poster }) => (
  <section className={styles.videoContainer}>
    <video playsInline autoPlay loop muted poster={poster}>
      <source src={video} type="video/mp4" />
    </video>
  </section>
)

Video.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default Video
