import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSnapContainer from "../components/pagesnap"
import FullPage from "../components/fullpage"
import Image from "../components/image"
import Slider from "../components/slider"

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

  const fullPagesConfig = [
    {
      headerFontColor: "inherit",
      backgroundColor: "",
      backgroundImage: data.example1.childImageSharp.fluid,
    },
    {
      headerFontColor: "green",
      backgroundColor: "#fcc4c5",
      backgroundImage: data.example2.childImageSharp.fluid,
    },
    {
      headerFontColor: "red",
      backgroundColor: "#d983c0",
      backgroundImage: data.example3.childImageSharp.fluid,
    },
    {
      headerFontColor: "blue",
      backgroundColor: "#c9e8fc",
      backgroundImage: data.example4.childImageSharp.fluid,
    },
    {
      headerFontColor: "aqua",
      backgroundColor: "#00b8d2",
      backgroundImage: data.example5.childImageSharp.fluid,
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <PageSnapContainer>
        {fullPagesConfig.map((value, key) => (
          <FullPage
            key={key}
            {...(!!value.headerFontColor
              ? { headerFontColor: value.headerFontColor }
              : {})}
            {...(!!value.backgroundColor
              ? { backgroundColor: value.backgroundColor }
              : {})}
          >
            <Image fluid={value.backgroundImage} />
          </FullPage>
        ))}
        <FullPage headerFontColor="inherit">
          <Slider>
            <Img fluid={data.example1.childImageSharp.fluid} />
            <Img fluid={data.example2.childImageSharp.fluid} />
            <Img fluid={data.example3.childImageSharp.fluid} />
          </Slider>
        </FullPage>
      </PageSnapContainer>
    </Layout>
  )
}

export default IndexPage
