import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./navigation-link.module.styl"

const NavigationEntry = ({ linkTo, currentPathName, name, onClickHandler }) => {
  const renderEntry = name => <span>{name}</span>

  const renderLinkEntry = (linkTo, name, onClickHandler) => (
    <Link onClick={onClickHandler} to={linkTo}>
      {name}
    </Link>
  )

  if (linkTo === currentPathName) {
    return renderEntry(name)
  }

  return renderLinkEntry(linkTo, name, onClickHandler)
}

NavigationEntry.propTypes = {
  linkTo: PropTypes.string.isRequired,
  currentPathName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
}

export default NavigationEntry
