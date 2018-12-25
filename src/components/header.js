import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { rhythm, colors } from '../utils/typography'
import logo from '../images/logo.svg'

const AppHeader = ({ title }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { author, description } = data.site.siteMetadata
      const fixed = data.avatar.childImageSharp.fixed

      return (
        <AppHeaderHtml
          title={title}
          author={author}
          logo={logo}
          description={description}
          fixed={fixed}
        />
      )
    }}
  />
)

const AppHeaderHtml = React.memo(
  ({ title, author, logo, description, fixed }) => (
    <Header to="/" title={`${title} home`}>
      <HeaderImage fixed={fixed} alt={author} />
      <HeaderMain>
        <Logo src={logo} alt="logo" />
        <Author>{author}</Author>
        <Description>{description}</Description>
      </HeaderMain>
    </Header>
  )
)

const Header = styled(Link)`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: ${rhythm(2)};
  margin-top: 0;
  box-shadow: none;

  &:hover {
    * {
      color: ${colors.accent};
    }
  }
`

const HeaderImage = styled(Img)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  border-radius: 100%;
  flex-shrink: 0;
`

const HeaderMain = styled.div`
  display: block;
`

const Logo = styled.img`
  display: block;
  height: 12px;
  margin: 0;
`

const Author = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 8px;
  line-height: 14px;
  color: ${colors.primary};
`

const Description = styled.div`
  margin-top: 4px;
  line-height: 16px;
  color: ${colors.secondary};
`

const query = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`

export default AppHeader
