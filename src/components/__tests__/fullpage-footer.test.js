import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import FullpageFooter from "../fullpage-footer"

describe("FullpageFooter", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<FullpageFooter />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
