import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import AppHeader from '../components/header'

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
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <AppHeader title={data.site.siteMetadata.title} />
        {children}
      </div>
    )}
  />
)

export default Layout
