import React from "react"
import renderer from "react-test-renderer"

import PageSnapContainer from "../pagesnap"

describe("PageSnapContainer", () => {
  it.skip("renders correctly", () => {
    const tree = renderer
      .create(<PageSnapContainer><div>Snap Entry 1</div><div>Snap Entry 2</div></PageSnapContainer>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
