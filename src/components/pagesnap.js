import React from "react"
import PropTypes from "prop-types"
import ScrollSnap from "scroll-snap"

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
      this.calculateIndex(
        this.state.containerHeight,
        this.snapContainer.current.scrollTop
      )
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

  calculateIndex = (windowHeight, scrollTop) => {
    this.setState({
      index: Math.ceil(scrollTop / windowHeight),
    })
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

PageSnapContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageSnapContainer
