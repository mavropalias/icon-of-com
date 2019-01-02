import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, pageContext }) => (
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
        <Header
          title={data.site.siteMetadata.title}
          useBlogLayout={pageContext.layout === 'blog'}
        />
        {children}
        <Footer />
      </div>
    )}
  />
)

export default Layout
