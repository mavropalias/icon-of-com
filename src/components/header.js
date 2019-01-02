import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from '../utils/typography'

import Navigation from './navigation'
import logo from '../../content/assets/logo.svg'

const Header = ({ title }) => (
  <StaticQuery
    query={query}
    render={data => {
      const htmlProps = {
        author: data.site.siteMetadata.author,
        description: data.site.siteMetadata.description,
        fixed: data.avatar.childImageSharp.fixed,
        logo,
        title
      }

      return <AppHeaderHtml {...htmlProps} />
    }}
  />
)

const AppHeaderHtml = ({ title, author, logo, description, fixed }) => (
  <HeaderHtml>
    <Main to="/" title={`${title} home`}>
      <ProfileImage fixed={fixed} alt={author} />
      <Banner>
        <Logo src={logo} alt="logo" />
        <Author>{author}</Author>
        <Description>{description}</Description>
      </Banner>
    </Main>
    <Navigation />
  </HeaderHtml>
)

const HeaderHtml = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`

const Main = styled(Link)`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  margin-top: 0;
  box-shadow: none !important;

  &:hover {
    * {
      color: ${colors.accent};
    }
  }
`

const ProfileImage = styled(Img)`
  margin-right: 16px;
  margin-bottom: 0;
  border-radius: 100%;
  flex-shrink: 0;
  display: none !important;
`

const Banner = styled.div`
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
          ...GatsbyImageSharpFixed_withWebp
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

export default Header
