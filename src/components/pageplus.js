import React from "react"
import pageplus from "./pageplus.module.css"

export default ({ children }) => (
  <div className={pageplus.container}>{children}</div>
)
