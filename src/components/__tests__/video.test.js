import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'

import Video from "../video"

describe("Video", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Video  video="/videos/diver.mp4" poster="/videos/diver.jpg" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
