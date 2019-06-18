import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"

import Header from "./header"
import FullpageFooter from "./fullpage-footer"
import PageSnapContainer from "./pagesnap"
import FullPage from "./fullpage"

import "./normalize.css"
import "./layout.module.styl"

const PageSnapLayout = ({ children, seoTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryPageSnap {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={seoTitle} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageSnapContainer>
        {children}
        <FullPage headerFontColor="#ffffff" backgroundColor="#00b8d2">
          <FullpageFooter />
        </FullPage>
      </PageSnapContainer>
    </>
  )
}

PageSnapLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default PageSnapLayout
