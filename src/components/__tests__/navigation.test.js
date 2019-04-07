import React from "react"
import renderer from "react-test-renderer"

import Navigation from "../navigation"

describe("Navigation", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Navigation fontColor="inherit" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
