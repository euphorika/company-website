import React from "react"
import PropTypes from "prop-types"

import ThemeContext from "../context/ThemeContext"

import styles from "./pagesnap.module.styl"

class PageSnapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.scrollDirection = null
    this.activePageIndex = 0
    this.snapContainer = React.createRef()
  }

  componentDidMount() {
    const ScrollingObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio === 1) {
            const fontColor = entry.target.dataset.color
            const backgroundColor = entry.target.dataset.backgroundColor

            if (fontColor) {
              this.context.setHeaderFontColor(fontColor)
            }

            if (backgroundColor) {
              this.context.setTileBackgroundColor(backgroundColor)
            }

            this.registerScrollEventListener()
          }
        })
      },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    )

    for (let i = 0; i < this.snapContainer.current.children.length; i++) {
      ScrollingObserver.observe(this.snapContainer.current.children[i])
    }

    document.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") {
        this.unRegisterScrollEventListener()
        this.scrollToNextPage()
      }

      if (e.key === "ArrowUp") {
        this.unRegisterScrollEventListener()
        this.scrollToPreviousPage()
      }
    })

    if (
      window.CSS &&
      window.CSS.supports &&
      !window.CSS.supports("scroll-snap-type", "y mandatory")
    ) {
      window.addEventListener("wheel", e => {
        if (e.deltaY > 0) {
          this.scrollDirection = "down"
        }

        if (e.deltaY < 0) {
          this.scrollDirection = "up"
        }
      })
    }
  }

  registerScrollEventListener() {
    if (
      CSS &&
      CSS.supports &&
      !CSS.supports("scroll-snap-type", "y mandatory")
    ) {
      this.snapContainer.current.addEventListener("scroll", this.paging)
    }
  }

  unRegisterScrollEventListener() {
    this.snapContainer.current.removeEventListener("scroll", this.paging)
  }

  scrollToNextPage() {
    const nextPageIndex =
      this.activePageIndex < this.snapContainer.current.children.length - 1
        ? ++this.activePageIndex
        : this.activePageIndex

    this.snapContainer.current.children[nextPageIndex].scrollIntoView()
  }

  scrollToPreviousPage() {
    const previousPageIndex =
      this.activePageIndex > 0 ? --this.activePageIndex : this.activePageIndex

    this.snapContainer.current.children[previousPageIndex].scrollIntoView()
  }

  paging = () => {
    this.unRegisterScrollEventListener()

    setTimeout(() => {
      if (this.scrollDirection === "down") {
        this.scrollToNextPage()
      }
      if (this.scrollDirection === "up") {
        this.scrollToPreviousPage()
      }
    }, 100) // I don't know why?
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
