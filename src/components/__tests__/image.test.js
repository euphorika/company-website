import React from "react"
import renderer from "react-test-renderer"

import Image from "../image"

describe("Image", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Image file="example-1.jpg" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
