import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Location } from "@reach/router"

import "./navigation-entry.module.styl"

const NavigationEntry = ({ linkTo, name, onClickHandler }) => {
  const renderEntry = name => <span>{name}</span>

  const renderLinkEntry = (linkTo, name, onClickHandler) => (
    <Link onClick={onClickHandler} to={linkTo}>
      {name}
    </Link>
  )

  return (
    <Location>
      {({ location }) => {
        if (linkTo === location.pathname) {
          return renderEntry(name)
        }

        return renderLinkEntry(linkTo, name, onClickHandler)
      }}
    </Location>
  )
}

NavigationEntry.propTypes = {
  linkTo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
}

export default NavigationEntry
