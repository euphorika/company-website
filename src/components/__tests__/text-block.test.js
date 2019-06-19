import React from "react"
import renderer from "react-test-renderer"

import TextBlock from "../text-block"

describe("TextBlock", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TextBlock title="Awesome Headline">Awesome Content</TextBlock>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
