import React from "react"
import styles from "./video.module.styl"
import { Player } from "video-react"

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
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          Sorry... Your browser doesn't seem to support this video format.
        </Player>
      </div>
    </div>
  )
}
