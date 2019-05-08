import React from "react"
import PropTypes from "prop-types"

import ThemeContext from "../context/ThemeContext"

import styles from "./pagesnap.module.styl"

class PageSnapContainer extends React.Component {
  constructor(props) {
    super(props)

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
            })
            //this.snapContainer.scrollTo(0, this.state.childrenOffset[this.state.index])
            //console.log(this.state.childrenOffset[this.state.index])
            //console.log(ReactDOM.findDOMNode(this.state.children[1]))
            // Scrollrichtung bestimmen
            // Edgecase prüfen
            // Child DomNode finden
            // Offset bestimmen scrollTo offset
            this.setState({
              lastScrollY:
                currentScrollPositionY < 0 ? 0 : currentScrollPositionY,
            })
          }
        }
        this.startSnapMode()
      })
    }

    this.state = {
      index: 0,
      lastScrollY: 0,
      children: React.Children.toArray(this.props.children),
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
