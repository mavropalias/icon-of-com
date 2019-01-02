import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, pageContext }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <Header
          title={data.site.siteMetadata.title}
          useBlogLayout={pageContext.layout === 'blog'}
        />
        {children}
        <Footer />
      </Container>
    )}
  />
)

const Container = styled.div`
  margin: 0 auto;
  max-width: 990px;
  padding: 32px 16px;

  ${MIN_MOBILE_MEDIA_QUERY} {
    padding: 64px 32px;
  }
`

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
