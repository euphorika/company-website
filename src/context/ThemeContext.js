import React from "react"

const defaultState = {
  navigationVisibleOnMobile: false,
  toggleMobileNavigation: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    navigationVisibleOnMobile: false,
  }

  toggleMobileNavigation = () => {
    this.setState({
      navigationVisibleOnMobile: !this.state.navigationVisibleOnMobile,
    })
  }

  render() {
    const { children } = this.props
    const { navigationVisibleOnMobile } = this.state

    return (
      <ThemeContext.Provider
        value={{
          navigationVisibleOnMobile,
          toggleMobileNavigation: this.toggleMobileNavigation,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
