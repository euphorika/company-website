import React from "react"
import renderer from "react-test-renderer"

import ScrollingText from "../scrollingtext"

describe("ScrollingText", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ScrollingText title="Awesome Headline">Awesome Content</ScrollingText>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
