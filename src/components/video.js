import React from "react"
import { Player } from "video-react"
import styles from "./video.module.styl"

export default props => {
  return (
    <div className={styles.videoBackground}>
      <div className={styles.videoForeground}>
        <Player autoPlay muted loop className={styles.videoBg}>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      </div>
    </div>
  )
}
