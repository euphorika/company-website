import React from "react"
import PropTypes from "prop-types"

import ThemeContext from "../context/ThemeContext"

import styles from "./pagesnap.module.styl"

class PageSnapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.snapContainer = React.createRef()
    this.state = {
      index: 0,
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
