import React from "react"
import renderer from "react-test-renderer"

import Image from "../image"

describe("Image", () => {
  it("renders correctly", () => {
    const img = {
      aspectRatio: 1.5,
      src: 'image1.jpg',
      srcSet: 'set1, set2',
      sizes: '100vw'
    }

    const tree = renderer
      .create(<Image fluid={img} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
