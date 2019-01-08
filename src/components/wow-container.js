import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import Stars from './stars'

const WowContainer = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <StyledWowContainer>
        {children}
        <BackgroundImage fluid={data.background.childImageSharp.fluid} />
        <Stars />
      </StyledWowContainer>
    )}
  />
)

const StyledWowContainer = styled.section`
  background: linear-gradient(135deg, #3023ae, #c86dd7);
  margin: 64px -16px;
  padding: 32px 16px;
  color: white;
  position: relative;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  ${MIN_MOBILE_MEDIA_QUERY} {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
    margin-left: -32px;
    margin-right: -32px;
    padding: 32px;

    &:hover {
      transform: translate(0, -2px);
      box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
    }
  }
`

const BackgroundImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: lighten;
  pointer-events: none;
`

const query = graphql`
  query {
    background: file(relativePath: { eq: "cosmos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 990, quality: 30) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default WowContainer
