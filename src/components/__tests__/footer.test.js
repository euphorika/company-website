import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'
import { useStaticQuery } from "gatsby"

import Footer from "../footer"

beforeEach(() => {
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        email: 'me@example.com',
        phone: '1234567-890'
      }
    }
  })
})

describe("Footer", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
