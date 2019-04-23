import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'
import { useStaticQuery } from "gatsby"

import PageSnapLayout from "../pagesnap-layout"

beforeEach(() => {
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        title: `Default Starter`
      }
    }
  })
})

describe("PageSnapLayout", () => {
  it("renders correctly", () => {
    const PageSnapLayoutElement = (
      <PageSnapLayout seoTitle="SEO Title">
        <div>Children</div>
      </PageSnapLayout>
    )

    const wrapper = shallow(PageSnapLayoutElement)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
