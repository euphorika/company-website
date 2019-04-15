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
      containerHeight: 0,
      index: 0,
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
        this.snapContainer.current.scrollTop / this.state.containerHeight
      )
      const fontColor = this.props.children[index].props.headerFontColor

      if (fontColor) {
        this.context.setHeaderFontColor(fontColor)
      }
    }
    const element = this.snapContainer.current
    const snapObject = new ScrollSnap(element, snapConfig)

    snapObject.bind(callback)

    this.setState({
      snapObject: snapObject,
      containerHeight: this.snapContainer.current.offsetHeight,
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
