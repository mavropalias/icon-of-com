import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import logo from '../images/logo.svg'

const Header = ({ title }) => (
  <h1 style={{ ...scale(1.0), marginBottom: rhythm(1.5), marginTop: 0 }}>
    <Link
      to="/"
      title="IconOf.Com home"
      style={{
        color: `inherit`,
        textDecoration: `none`,
        boxShadow: 'none'
      }}
    >
      <span style={{ display: 'none' }}>{title}</span>
      <img
        src={logo}
        alt="logo"
        style={{ display: 'block', height: '44px', margin: 0 }}
      />
    </Link>
  </h1>
)

export default Header
