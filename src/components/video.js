import React from "react"
<<<<<<< HEAD
import styles from "./video.module.styl"
import { Player } from "video-react"
=======
import { Player } from "video-react"
import styles from "./video.module.styl"
>>>>>>> 5eb1759912408f18984e089194df48bb546f0831

export default props => {
  return (
    <div className={styles.videoBackground}>
      <div className={styles.videoForeground}>
<<<<<<< HEAD
        <Player
          autoPlay
          muted
          loop
          className={styles.videoBg}
        >
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          Sorry... Your browser doesn't seem to support this video format.
=======
        <Player autoPlay muted loop className={styles.videoBg}>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
>>>>>>> 5eb1759912408f18984e089194df48bb546f0831
        </Player>
      </div>
    </div>
  )
}
