import React from "react"
import PropTypes from "prop-types"

const ClosingX = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.26 174.13">
    <path
      fill={color}
      d="M172.26 28.71L143.55 0 86.13 57.42 28.71 0 0 28.71l57.42 57.42L0 143.54l28.71 28.72 57.42-57.42 57.42 57.42 28.7-28.72-57.41-57.41z"
    />
  </svg>
)

ClosingX.propTypes = {
  color: PropTypes.string,
}

ClosingX.defaultProps = {
  color: "#000",
}

export default ClosingX
