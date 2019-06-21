import React from "react"
import PropTypes from "prop-types"

import styles from "./video.module.styl"

const Video = ({ video, poster, title, children }) => {
  const titleElement = title ? <h2 className={styles.title}>{title}</h2> : null
  const body = children ? <div className={styles.body}>{children}</div> : null

  return (
    <section className={styles.videoContainer}>
      {titleElement}
      {body}
      <div className={styles.innerContainer}>
        <video playsInline autoPlay loop muted poster={poster}>
          <source src={video} type="video/webm" />
        </video>
      </div>
    </section>
  )
}

Video.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Video
