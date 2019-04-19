import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'
import { useStaticQuery } from "gatsby"

import Layout from "../layout"

beforeEach(() => {
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        title: `Default Starter`
      }
    }
  })
})

describe("Layout", () => {
  it("renders correctly", () => {
    const LayoutElement = (
      <Layout>
        <div>Children</div>
      </Layout>
    )

    const wrapper = shallow(LayoutElement)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
