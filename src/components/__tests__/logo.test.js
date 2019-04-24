import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'

import Logo from "../logo"

describe("Logo", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Logo title="Title" color="#fff" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
