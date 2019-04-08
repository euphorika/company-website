import React from "react"
import renderer from "react-test-renderer"

import FullPage from "../fullpage"

describe("FullPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<FullPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
