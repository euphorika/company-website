/*
  This slider component must not include children with the overflow: hidden
  style, as Safari is not able to snap in this case
  This is especially important when using the gatsby-image component
*/

import React from "react"
import PropTypes from "prop-types"

import styles from "./slider.module.styl"

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.sliceContainer = React.createRef()

    this.state = {
      numberOfSlices: React.Children.count(this.props.children),
    }
  }

  slideActionLeft = () => {
    if (this.sliceContainer.current.scrollLeft > 0) {
      this.sliceContainer.current.scrollLeft -=
        this.sliceContainer.current.scrollWidth / this.state.numberOfSlices
    }
  }

  slideActionRight = () => {
    if (
      this.sliceContainer.current.scrollLeft <
      this.sliceContainer.current.scrollWidth
    ) {
      this.sliceContainer.current.scrollLeft +=
        this.sliceContainer.current.scrollWidth / this.state.numberOfSlices
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={styles.sliderContainer}>
        <div ref={this.sliceContainer} className={styles.images}>
          {children}
        </div>
        <div className={styles.controls}>
          <button onClick={this.slideActionLeft}>Left</button>
          <button onClick={this.slideActionRight} className={styles.right}>
            Right
          </button>
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slider
