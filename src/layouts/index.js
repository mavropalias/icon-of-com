import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '990px',
          padding: '64px 32px'
        }}
      >
        <Header title={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </div>
    )}
  />
)

export default Layout
