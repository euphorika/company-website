import React from "react"
import PropTypes from "prop-types"

import ThemeContext from "../context/ThemeContext"

import styles from "./pagesnap.module.styl"

class PageSnapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.snapContainer = React.createRef()
  }

  componentDidMount() {
    const ScrollingObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0.9) {
            const fontColor = entry.target.dataset.color
            const backgroundColor = entry.target.dataset.backgroundColor

            if (fontColor) {
              this.context.setHeaderFontColor(fontColor)
            }

            if (backgroundColor) {
              this.context.setTileBackgroundColor(backgroundColor)
            }
          }
        })
      },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    )

    for (let i = 0; i < this.snapContainer.current.children.length; i++) {
      ScrollingObserver.observe(this.snapContainer.current.children[i])
    }
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
