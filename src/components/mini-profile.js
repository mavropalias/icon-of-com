import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import colors from '../utils/colors'

const MiniProfile = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Section>
        <ProfileImage fixed={data.avatar.childImageSharp.fixed} />
        <About />
        <ProfileMap fixed={data.map.childImageSharp.fixed} />
      </Section>
    )}
  />
)

const Section = styled.section`
  margin-bottom: 64px;

  ${MIN_MOBILE_MEDIA_QUERY} {
    display: flex;
    flex-direction: row;
  }
`

const ProfileImage = styled(Img)`
  margin: 0 16px 4px 0;
  flex-shrink: 0;
  float: left;
  border-radius: 100%;

  ${MIN_MOBILE_MEDIA_QUERY} {
    border-radius: 0;
    margin: 0 32px 16px 0;
    float: none;
  }
`

const About = () => (
  <div>
    <AboutParagraph>
      I have 18 years of hands-on experience developing complex web & mobile
      applications from the ground up, leading teams and delivering successful
      products.
    </AboutParagraph>
    <AboutParagraph>
      I am a published author, work on numerous personal projects and maintain
      an active interest in new and emerging technologies.
    </AboutParagraph>
    <AboutParagraph>
      IconOf.Com is my mote of dust in the virtual cosmos, exploring modern
      software engineering and the cyberpsychology of human–computer
      interactions.
    </AboutParagraph>
    <Footer>
      <em>Kostas Mavropalias, MSc</em>
      <StyledLink to="/profile/">Full profile</StyledLink>
    </Footer>
  </div>
)

const ProfileMap = styled(Img)`
  flex-shrink: 0;
  margin: 0 auto;
  display: block !important;
`

const AboutParagraph = styled.p`
  max-width: 450px;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 16px;

  ${MIN_MOBILE_MEDIA_QUERY} {
    margin-right: 32px;
  }
`

const Footer = styled.footer`
  font-size: 14px;
  line-height: 14px;
  color: ${colors.secondary};
  margin-bottom: 32px;

  ${MIN_MOBILE_MEDIA_QUERY} {
    margin-bottom: 0;
  }
`

const StyledLink = styled(Link)`
  color: ${colors.secondary};
  margin-left: 16px;
  box-shadow: 0 1px 0 0 ${colors.secondary};
`

const query = graphql`
  query {
    map: file(absolutePath: { regex: "/map.png/" }) {
      childImageSharp {
        fixed(width: 313, height: 202) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default MiniProfile
