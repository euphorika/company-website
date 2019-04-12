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
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PageSnapContainer>
        <FullPage>
          <Image fluid={data.example1.childImageSharp.fluid} />
        </FullPage>
        <FullPage backgroundColor="#fcc4c5">
          <Image fluid={data.example2.childImageSharp.fluid} />
        </FullPage>
        <FullPage backgroundColor="#d983c0">
          <Image fluid={data.example3.childImageSharp.fluid} />
        </FullPage>
        <FullPage backgroundColor="#c9e8fc">
          <Image fluid={data.example4.childImageSharp.fluid} />
        </FullPage>
        <FullPage backgroundColor="#00b8d2">
          <Image fluid={data.example5.childImageSharp.fluid} />
        </FullPage>
      </PageSnapContainer>
    </Layout>
  )
}

export default IndexPage
