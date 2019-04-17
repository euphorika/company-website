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
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              headerFontColor
              backgroundColor
              image
            }
            excerpt
          }
        }
      }
      example1: file(relativePath: { eq: "euphorika-bg-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example2: file(relativePath: { eq: "euphorika-bg-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example3: file(relativePath: { eq: "euphorika-bg-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example4: file(relativePath: { eq: "euphorika-bg-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example5: file(relativePath: { eq: "euphorika-bg-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
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
            />
          </FullPage>
        ))}
      </PageSnapContainer>
    </Layout>
  )
}

export default IndexPage
