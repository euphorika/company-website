import React from "react"
import renderer from "react-test-renderer"

import ScrollingTextBlock from "../scrollingtext-block"

describe("ScrollingTextBlock", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ScrollingTextBlock title="Awesome Headline">Awesome Content</ScrollingTextBlock>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
