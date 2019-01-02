import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import {
  MOBILE_MEDIA_QUERY,
  MIN_MOBILE_MEDIA_QUERY
} from 'typography-breakpoint-constants'
import { colors } from '../utils/typography'

const Navigation = ({ compact }) => (
  <Nav className={compact && 'compact'}>
    <Menu>
      <MenuItem>
        <MenuItemLink to="/" activeClassName="active">
          Home
        </MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink to="/profile/" activeClassName="active">
          Profile
        </MenuItemLink>
      </MenuItem>
    </Menu>
    {!compact && (
      <SocialLinks>
        <SocialLink href="https://twitter.com/mavropalias">Twitter</SocialLink>
        <SocialLink href="https://github.com/mavropalias">Github</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/mavropalias/">
          LinkedIn
        </SocialLink>
      </SocialLinks>
    )}
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

  &.compact {
    justify-content: center;
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
  padding: 8px 16px;
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

export default Navigation
