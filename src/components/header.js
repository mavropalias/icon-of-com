import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {
  MOBILE_MEDIA_QUERY,
  MIN_MOBILE_MEDIA_QUERY
} from 'typography-breakpoint-constants'
import { rhythm, colors } from '../utils/typography'

import logo from '../../content/assets/logo.svg'

const AppHeader = ({ title }) => (
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
  <Header>
    <Main to="/" title={`${title} home`}>
      <ProfileImage fixed={fixed} alt={author} />
      <Banner>
        <Logo src={logo} alt="logo" />
        <Author>{author}</Author>
        <Description>{description}</Description>
      </Banner>
    </Main>
    <Navigation />
  </Header>
)

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: ${rhythm(2)};
`

const Navigation = () => (
  <Nav>
    <Menu>
      <MenuItem>
        <MenuItemLink to="/" activeClassName="active">
          Home
        </MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink to="/profile" activeClassName="active">
          Profile
        </MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink to="/projects" activeClassName="active">
          Projects
        </MenuItemLink>
      </MenuItem>
    </Menu>
    <SocialLinks>
      <SocialLink href="https://twitter.com/mavropalias">Twitter</SocialLink>
      <SocialLink href="https://github.com/mavropalias">Github</SocialLink>
      <SocialLink href="https://www.linkedin.com/in/mavropalias/">
        LinkedIn
      </SocialLink>
      <SocialLink href="https://stackoverflow.com/story/mavropalias">
        Story
      </SocialLink>
    </SocialLinks>
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  text-align: center;

  ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  margin: 0;
`

const MenuItem = styled.li`
  margin: 0;

  &:first-child {
    border-left: 1px solid ${colors.secondary};
  }
  &:last-child {
    border-right: 1px solid ${colors.secondary};
  }

  ${MOBILE_MEDIA_QUERY} {
    flex: 1;
  }
`

const MenuItemLink = styled(Link)`
  display: block;
  box-shadow: none;
  padding: 8px 16px;
  color: ${colors.primary};

  &.active {
    background-color: ${colors.primary};
    color: white;
  }

  &:hover {
    box-shadow: none;
    cursor: default;

    &:not(.active) {
      cursor: pointer;
    }
  }
`

const SocialLinks = styled.aside`
  display: flex;

  ${MOBILE_MEDIA_QUERY} {
    margin-top: 16px;
  }
`

const SocialLink = styled.a`
  display: inline-block;
  box-shadow: none;
  padding: 8px 8px;
  color: ${colors.secondary};

  &:hover {
    box-shadow: none;
    color: ${colors.primary};
  }

  ${MIN_MOBILE_MEDIA_QUERY} {
    &:first-child {
      border-left: 1px solid ${colors.lightGray};
    }
    &:last-child {
      border-right: 1px solid ${colors.lightGray};
    }
  }

  ${MOBILE_MEDIA_QUERY} {
    flex: 1;
  }
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
  margin-right: ${rhythm(1 / 2)};
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
