import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { colors, rhythm } from '../utils/typography'

import SEO from '../components/seo'
import Pluralsight from '../components/pluralsight'

const SEO_KEYWORDS = [
  `kostas mavropalias`,
  `software engineering`,
  `deep learning`,
  `user experience`,
  `cyberpsychology`
]

const Page = ({ data }) => (
  <React.Fragment>
    <SEO title="Profile" keywords={SEO_KEYWORDS} />
    <ProfileImage
      title={data.site.siteMetadata.author}
      alt={`Photo of ${data.site.siteMetadata.author}`}
      fixed={data.avatar.childImageSharp.fixed}
    />
    <About />
  </React.Fragment>
)

const ProfileImage = styled(Img)`
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  margin: 0 0 16px 0;
  flex-shrink: 0;

  ${MIN_MOBILE_MEDIA_QUERY} {
    float: left;
    margin: 0 32px 16px 0;
  }
`

const About = () => (
  <React.Fragment>
    <AboutParagraph>
      I have 18 years of hands-on experience developing complex web & mobile
      applications from the ground up, leading teams and delivering successful
      products.
    </AboutParagraph>
    <AboutParagraph>
      I am a{' '}
      <a href="https://www.amazon.co.uk/gp/product/toc/1848721668/">
        published author
      </a>
      , work on numerous personal projects and maintain an active interest in
      new and emerging technologies.
    </AboutParagraph>
    <AboutParagraph>
      My work has been featured on{' '}
      <a href="http://lifehacker.com/5700199/penguspy-is-a-database-chock-full-of-games-for-linux">
        Lifehacker
      </a>
      ,{' '}
      <a href="https://www.adweek.com/socialtimes/social-media-research-project-calls-for-participants/3/">
        Social Times
      </a>
      ,{' '}
      <a href="http://kotaku.com/5700996/own-linux-you-can-play-all-these-games">
        Kotaku
      </a>
      , Tekzilla ,{' '}
      <a href="http://www.jupiterbroadcasting.com/2936/ubuntu-1010-review-las-s14e01/">
        The Linux Action Show
      </a>{' '}
      and{' '}
      <a href="https://www.amazon.co.uk/dp/B00OL40268">
        The Web Designer’s Idea Book
      </a>
      , among other online and print publications.
    </AboutParagraph>
    <AboutParagraph>
      I am a passionate life-long learner and continually strive to expand and
      deepen my knowledge in software engineering, artificial intelligence and
      other fields. I hold a BSc in Computer Science, MSc in Cyberpsychology and{' '}
      <a href="https://www.linkedin.com/in/mavropalias/">certificates</a> in
      areas such as Deep Learning, Data Science, MongoDB, Machine Learning,
      Ethereum and Web Accessibility.
    </AboutParagraph>
    <Pluralsight />
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
  </React.Fragment>
)

const AboutParagraph = styled.p`
  max-width: ${rhythm(24)};

  ${MIN_MOBILE_MEDIA_QUERY} {
    padding: 0 ${rhythm(3 / 4)};
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
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Page
