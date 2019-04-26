import React from "react"
import PropTypes from "prop-types"
import ScrollSnap from "scroll-snap"

import ThemeContext from "../context/ThemeContext"

import styles from "./pagesnap.module.styl"

class PageSnapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.snapContainer = React.createRef()
    this.state = {
      snapObject: null,
      index: 0,
      children: React.Children.toArray(this.props.children),
    }
  }

  componentDidMount() {
    const snapConfig = {
      scrollSnapDestination: "0% 100%", // scroll-snap-destination css property
      scrollTimeout: 100, // time in ms after which scrolling is considered finished
      scrollTime: 150, // time in ms for the smooth snap
    }

    const callback = () => {
      const index = Math.ceil(
        this.snapContainer.current.scrollTop /
          this.snapContainer.current.offsetHeight
      )
      const fontColor = this.state.children[index].props.headerFontColor
      const backgroundColor = this.state.children[index].props.backgroundColor

      if (fontColor) {
        this.context.setHeaderFontColor(fontColor)
      }

      if (backgroundColor) {
        this.context.setTileBackgroundColor(backgroundColor)
      }
    }
    const element = this.snapContainer.current
    const snapObject = new ScrollSnap(element, snapConfig)

    snapObject.bind(callback)

    this.setState({
      snapObject: snapObject,
    })
  }

  componentWillUnmount() {
    this.state.snapObject.unbind()
  }

  render() {
    const { children } = this.props

    return (
      <div ref={this.snapContainer} className={styles.pageSnapContainer}>
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
