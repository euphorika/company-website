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
    }
  }

  componentDidMount() {
    const snapConfig = {
      scrollSnapDestination: "0% 100%", // scroll-snap-destination css property
      scrollTimeout: 100, // time in ms after which scrolling is considered finished
      scrollTime: 150, // time in ms for the smooth snap
    }

    const callback = () => {
      console.log("snap")
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

PageSnapContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageSnapContainer
