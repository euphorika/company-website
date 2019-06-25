import React from "react"
import renderer from "react-test-renderer"

import NavigationEntry from "../navigation-entry"

describe("NavigationEntry", () => {
  it("renders span correctly", () => {
    const onClickHandlerDummy = () => {}
    const tree = renderer
      .create(<NavigationEntry
        linkTo="/"
        currentPathName="/"
        name="Home"
        onClickHandler={onClickHandlerDummy}
      />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders link correctly", () => {
    const onClickHandlerDummy = () => {}
    const tree = renderer
      .create(<NavigationEntry
        linkTo="/"
        currentPathName="/path/"
        name="Not Home"
        onClickHandler={onClickHandlerDummy}
      />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
