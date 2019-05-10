import React from "react"
import { mount } from "enzyme"
import toJson from 'enzyme-to-json'

import PageSnapContainer from "../pagesnap"

describe("PageSnapContainer", () => {

  beforeEach(() => {
    window.IntersectionObserver = jest.fn(function() {
      this.observe = jest.fn()
    })
  })

  it("renders correctly", () => {
    const wrapper = mount(<PageSnapContainer><div>Snap Entry 1</div><div>Snap Entry 2</div></PageSnapContainer>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
