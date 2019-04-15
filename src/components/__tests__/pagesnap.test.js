import React from "react"
import { mount } from "enzyme"
import toJson from 'enzyme-to-json'

import PageSnapContainer from "../pagesnap"

describe("PageSnapContainer", () => {
  it("renders correctly", () => {
    const wrapper = mount(<PageSnapContainer><div>Snap Entry 1</div><div>Snap Entry 2</div></PageSnapContainer>)
    expect(wrapper).toMatchSnapshot()
  })
})
