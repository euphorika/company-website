import React from "react"
import renderer from "react-test-renderer"
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

    const tree = renderer
      .create(LayoutElement)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
