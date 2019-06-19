import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'

import Video from "../video"

describe("Video", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Video  video="/videos/design-video.m4v" poster="/videos/design-poster.jpg" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
