import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"

import PageSnapLayout from "../components/pagesnap-layout"
import FullPage from "../components/fullpage"
import Image from "../components/image"
import Video from "../components/video"
import ScrollingText from "../components/scrollingtext"
import ScrollingTextBlock from "../components/scrollingtext-block"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      teaser: allFile(
        filter: { sourceInstanceName: { eq: "home-fullpage" } }
        sort: { order: ASC, fields: relativePath }
      ) {
        edges {
          node {
            relativePath
            childMdx {
              frontmatter {
                title
                headerFontColor
                backgroundColor
                image
                alt
                poster
                video
              }
              code {
                body
              }
            }
          }
        }
      }
      text: allFile(
        filter: { sourceInstanceName: { eq: "home-scrollingtext" } }
        sort: { order: ASC, fields: relativePath }
      ) {
        edges {
          node {
            relativePath
            childMdx {
              frontmatter {
                title
              }
              code {
                body
              }
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

  const renderBackground = (frontmatter, body) => {
    if (frontmatter.image) {
      return (
        <Image
          fluid={data[frontmatter.image].childImageSharp.fluid}
          title={frontmatter.title}
          alt={frontmatter.alt}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </Image>
      )
    }

    return (
      <Video video={frontmatter.video} poster={frontmatter.poster}>
        <MDXRenderer>{body}</MDXRenderer>
      </Video>
    )
  }

  return (
    <PageSnapLayout seoTitle="Home">
      {data.teaser.edges.map((value, key) => (
        <FullPage
          key={key}
          {...(!!value.node.childMdx.frontmatter.headerFontColor
            ? {
                headerFontColor:
                  value.node.childMdx.frontmatter.headerFontColor,
              }
            : {})}
          {...(!!value.node.childMdx.frontmatter.backgroundColor
            ? {
                backgroundColor:
                  value.node.childMdx.frontmatter.backgroundColor,
              }
            : {})}
        >
          {renderBackground(
            value.node.childMdx.frontmatter,
            value.node.childMdx.code.body
          )}
        </FullPage>
      ))}
      <FullPage headerFontColor="#000" backgroundColor="#fff">
        <ScrollingText title="Texseite">
          {data.text.edges.map((value, key) => (
            <ScrollingTextBlock
              key={key}
              title={value.node.childMdx.frontmatter.title}
            >
              <MDXRenderer>{value.node.childMdx.code.body}</MDXRenderer>
            </ScrollingTextBlock>
          ))}
        </ScrollingText>
      </FullPage>
    </PageSnapLayout>
  )
}

export default IndexPage
