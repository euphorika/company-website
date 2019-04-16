import React from "react"

const defaultState = {
  navigationVisibleOnMobile: false,
  headerFontColor: "",
  toggleMobileNavigation: () => {},
  setHeaderFontColor: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    navigationVisibleOnMobile: false,
    headerFontColor: "",
  }

  toggleMobileNavigation = () => {
    this.setState({
      navigationVisibleOnMobile: !this.state.navigationVisibleOnMobile,
    })
  }

  setHeaderFontColor = fontColor => {
    this.setState({
      headerFontColor: fontColor,
    })
  }

  render() {
    const { children } = this.props
    const { navigationVisibleOnMobile, headerFontColor } = this.state

    return (
      <ThemeContext.Provider
        value={{
          navigationVisibleOnMobile,
          headerFontColor,
          toggleMobileNavigation: this.toggleMobileNavigation,
          setHeaderFontColor: this.setHeaderFontColor,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
