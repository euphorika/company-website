import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

import Layout from "../components/layout"
import TextBlock from "../components/text-block"
import SEO from "../components/seo"

const PageTemplate = ({ data: { mdx } }) => (
  <Layout>
    <SEO title={mdx.frontmatter.title} />
    <TextBlock title={mdx.frontmatter.title}>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </TextBlock>
  </Layout>
)

export default PageTemplate

export const pageTemplateQuery = graphql`
  query PageTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
