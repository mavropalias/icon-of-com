import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import colors from '../utils/colors'

import SEO from '../components/seo'

const SEO_KEYWORDS = [
  `kostas mavropalias`,
  `software engineering`,
  `deep learning`,
  `user experience`,
  `cyberpsychology`
]

const Page = ({ data }) => (
  <div>
    <SEO title="Profile" keywords={SEO_KEYWORDS} />
    <ProfileImage fixed={data.avatar.childImageSharp.fixed} />
    <About />
  </div>
)

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
      My work has been featured on Lifehacker, Social Times, Kotaku, Tekzilla,
      The Linux Action Show and The Web Designer’s Idea Book, among other online
      and print publications.
    </AboutParagraph>
    <AboutParagraph>
      I am a passionate life-long learner and continually strive to expand and
      deepen my knowledge in development and related fields. I hold a BSc in
      Computer Science, MSc in Cyberpsychology and certificates in areas such as
      Data Science, MongoDB, Deep Learning, Ethereum and Web Accessibility.
    </AboutParagraph>
    <AboutParagraph>
      My technical skills include expert knowledge of JavaScript (ES6 &
      TypeScript), developing SPAs in React/Angular/Backbone, native mobile apps
      in Objective-C/Swift and RESTful APIs in Node and MongoDB.
    </AboutParagraph>
    <AboutParagraph>
      I am highly creative with expert knowledge of UI design, user research,
      branding, usability, accessibility, analytics, social media, statistical
      analysis, wireframing and prototyping.
    </AboutParagraph>
    <Footer>
      <em>Kostas Mavropalias, MSc. Dublin, Ireland.</em>
    </Footer>
  </div>
)

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

export const query = graphql`
  query {
    map: file(absolutePath: { regex: "/map.png/" }) {
      childImageSharp {
        fixed(width: 313, height: 202) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Page
