import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from '../utils/typography'

import Navigation from './navigation'
import logo from '../../content/assets/logo.svg'

const Header = ({ title, useBlogLayout }) => (
  <StaticQuery
    query={query}
    render={data => {
      const htmlProps = {
        author: data.site.siteMetadata.author,
        description: data.site.siteMetadata.description,
        blogDescription: data.site.siteMetadata.blogDescription,
        fixed: data.avatar.childImageSharp.fixed,
        useBlogLayout,
        logo,
        title
      }

      return <AppHeaderHtml {...htmlProps} />
    }}
  />
)

const AppHeaderHtml = ({
  title,
  author,
  logo,
  description,
  blogDescription,
  fixed,
  useBlogLayout
}) => (
  <HeaderHtml>
    <Main to="/" title={`${title} home`}>
      {useBlogLayout && <ProfileImage fixed={fixed} alt={author} />}
      <Banner>
        <Logo src={logo} alt="logo" />
        <Author>{author}</Author>
        <Description>
          {useBlogLayout ? blogDescription : description}
        </Description>
      </Banner>
    </Main>
    {!useBlogLayout && <Navigation />}
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
  flex-shrink: 0;
  width: 54px;
  height: 54px;
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
        fixed(width: 54, height: 54) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        blogDescription
      }
    }
  }
`

export default Header
