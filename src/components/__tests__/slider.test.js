import React from "react"
import renderer from "react-test-renderer"

import Slider from "../slider"

describe("Slider", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Slider>
          <img src="https://example.com/img1.jpg" />
          <img src="https://example.com/img2.jpg" />
        </Slider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
