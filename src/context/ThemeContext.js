import React from "react"

const defaultState = {
  navigationVisibleOnMobile: false,
  headerFontColor: "",
  tileBackgroundColor: "",
  supportsScrollSnap: false,
  toggleMobileNavigation: () => {},
  setHeaderFontColor: () => {},
  setTileBackgroundColor: () => {},
  resetThemeState: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    navigationVisibleOnMobile: false,
    headerFontColor: "",
    tileBackgroundColor: "#fff",
  }

  resetThemeState = () => {
    this.setState({
      navigationVisibleOnMobile: false,
      headerFontColor: "",
      tileBackgroundColor: "#fff",
    })
  }

  toggleMobileNavigation = () => {
    this.setState({
      navigationVisibleOnMobile: !this.state.navigationVisibleOnMobile,
    })
  }

  setHeaderFontColor = color => {
    this.setState({
      headerFontColor: color,
    })
  }

  setTileBackgroundColor = color => {
    this.setState({
      tileBackgroundColor: color,
    })
  }

  setSupportsScrollSnap = () => {
    this.setState({
      supportsScrollSnap:
        CSS && CSS.supports && CSS.supports("scroll-snap-type", "y mandatory"),
    })
  }

  componentDidMount() {
    this.setSupportsScrollSnap()
  }

  render() {
    const { children } = this.props
    const {
      navigationVisibleOnMobile,
      headerFontColor,
      tileBackgroundColor,
      supportsScrollSnap,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          navigationVisibleOnMobile,
          headerFontColor,
          tileBackgroundColor,
          supportsScrollSnap,
          toggleMobileNavigation: this.toggleMobileNavigation,
          setHeaderFontColor: this.setHeaderFontColor,
          setTileBackgroundColor: this.setTileBackgroundColor,
          resetThemeState: this.resetThemeState,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
