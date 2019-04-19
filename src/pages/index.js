import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"

import PageSnapLayout from "../components/pagesnap-layout"
import FullPage from "../components/fullpage"
import Image from "../components/image"
import ScrollingText from "../components/scrollingtext"

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
            code {
              body
            }
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
    <PageSnapLayout title="Home">
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
            title={value.node.frontmatter.title}
            alt={value.node.frontmatter.alt}
          >
            <MDXRenderer>{value.node.code.body}</MDXRenderer>
          </Image>
        </FullPage>
      ))}
      <FullPage headerFontColor="#000" backgroundColor="#fff">
        <ScrollingText title="Texseite">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </ScrollingText>
      </FullPage>
    </PageSnapLayout>
  )
}

export default IndexPage
