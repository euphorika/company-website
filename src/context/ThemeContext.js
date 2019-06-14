import React from "react"

const defaultState = {
  navigationVisibleOnMobile: false,
  headerFontColor: "",
  tileBackgroundColor: "",
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
    supportsScrollSnap: false,
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

  render() {
    const { children } = this.props
    const {
      navigationVisibleOnMobile,
      headerFontColor,
      tileBackgroundColor,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          navigationVisibleOnMobile,
          headerFontColor,
          tileBackgroundColor,
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
