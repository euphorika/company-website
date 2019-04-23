import React from "react"
import { Player } from "video-react"
import Styles from "./video.module.styl"
import { Link } from "gatsby"

export default props => {
  return (
    <div className={styles.videoBackground}>
      <div className={styles.videoForeground}>
        <Player
          autoPlay
          muted
          loop
          className={styles.videoBg}
        >
          <source src="../videos/sample-video.mp4" />
        </Player>
      </div>
    </div>
  )
}
