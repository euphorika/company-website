import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'

import ClosingX from "../closing-x"

describe("ClosingX", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ClosingX color="#fff" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
