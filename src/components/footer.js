import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./footer.module.styl"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          phone
        }
      }
    }
  `)

  return (
    <footer className={styles.pageFooter}>
      <div className={styles.contactInformation}>
        <ul>
          <li>
            <strong>{data.site.siteMetadata.phone}</strong>
          </li>
          <li>
            <strong>
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
              </a>
            </strong>
          </li>
        </ul>
      </div>
      <ul className={styles.legalAdvice}>
        <li>
          <Link to="/legal-notice/">Impressum</Link>
        </li>
        <li>
          <Link to="/data-protection-and-privacy/">Datenschutz</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
