import React from "react"
import PropTypes from "prop-types"

import ThemeContext from "../context/ThemeContext"

import styles from "./pagesnap.module.styl"

class PageSnapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      lastScrollY: 0,
    }

    this.snapContainer = null

    this.setSnapContainerRef = element => {
      if (!element) {
        // https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        return
      }

      this.snapContainer = element

      this.setState({
        lastScrollY: this.snapContainer.offsetTop,
      })

      this.snapContainer.addEventListener("scroll", e => {
        if (!this.state.snapMode) {
          console.log("Just one time")
          this.startSnapMode()

          if (!this.context.supportsScrollSnap) {
            const currentScrollPositionY = e.target.scrollTop
            let indexJump = 0

            if (currentScrollPositionY > this.state.lastScrollY) {
              console.log("scrolldown")
              if (this.state.index < this.snapContainer.children.length - 1) {
                indexJump = 1
              }
            } else {
              console.log("scrollup")
              if (this.state.index > 0) {
                indexJump = -1
              }
            }

            this.setState({
              index: this.state.index + indexJump,
              lastScrollY:
                currentScrollPositionY < 0 ? 0 : currentScrollPositionY,
            })
          }
        }

        /*const ScrollingObserver = new IntersectionObserver((entry, observer) => {
          console.log(entry)
          // console.log(observer)
        })*/

        /*for(let i=0; i<this.snapContainer.children.length; i++) {
          ScrollingObserver.observe(this.snapContainer.children[i])
        }*/
      })
    }

    /*

    const fontColor = this.state.children[index].props.headerFontColor
    const backgroundColor = this.state.children[index].props.backgroundColor

    if (fontColor) {
      this.context.setHeaderFontColor(fontColor)
    }

    if (backgroundColor) {
      this.context.setTileBackgroundColor(backgroundColor)
    }

    */
  }

  startSnapMode = () => {
    this.setState({
      snapMode: true,
    })
  }

  stopSnapMode = () => {
    this.setState({
      snapMode: false,
    })
  }

  render() {
    const { children } = this.props

    if (this.snapContainer && !this.context.supportsScrollSnap) {
      console.log('Scroll Into View with Index: ' + this.state.index)
      console.log('Scroll into View with Element: ' + this.snapContainer.children[this.state.index])
      this.snapContainer.children[this.state.index].scrollIntoView()
    }

    return (
      <div ref={this.setSnapContainerRef} className={styles.pageSnapContainer}>
        {children}
      </div>
    )
  }
}

PageSnapContainer.contextType = ThemeContext

PageSnapContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageSnapContainer
