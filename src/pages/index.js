import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSnapContainer from "../components/pagesnap"
import FullPage from "../components/fullpage"
import Image from "../components/image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              order
              title
              headerFontColor
              backgroundColor
              image
              alt
            }
            excerpt
          }
        }
      }
      example1: file(relativePath: { eq: "euphorika-bg-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      example2: file(relativePath: { eq: "euphorika-bg-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      example3: file(relativePath: { eq: "euphorika-bg-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      example4: file(relativePath: { eq: "euphorika-bg-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      example5: file(relativePath: { eq: "euphorika-bg-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <PageSnapContainer>
        {data.allMdx.edges.map((value, key) => (
          <FullPage
            key={key}
            {...(!!value.node.frontmatter.headerFontColor
              ? { headerFontColor: value.node.frontmatter.headerFontColor }
              : {})}
            {...(!!value.node.frontmatter.backgroundColor
              ? { backgroundColor: value.node.frontmatter.backgroundColor }
              : {})}
          >
            <Image
              fluid={data[value.node.frontmatter.image].childImageSharp.fluid}
              alt={value.node.frontmatter.alt}
            />
          </FullPage>
        ))}
      </PageSnapContainer>
    </Layout>
  )
}

export default IndexPage
