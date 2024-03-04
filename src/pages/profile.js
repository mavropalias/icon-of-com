import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { colors, rhythm } from '../utils/typography'

import SEO from '../components/seo'

const SEO_KEYWORDS = [
  `kostas mavropalias`,
  `software engineering`,
  `deep learning`,
  `user experience`,
  `cyberpsychology`
]

const Page = ({ data }) => (
  <React.Fragment>
    <SEO title="Kostas Mavropalias Profile" keywords={SEO_KEYWORDS} />
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
      I am a professional full-stack Software Engineer with 20+ years of
      experience, including 8+ years of leadership experience, 10+ years of UX
      experience, product management, and many years of working with globally
      distributed teams.
    </AboutParagraph>
    <AboutParagraph>
      I am a published author with numerous open source projects used by
      thousands of users.
    </AboutParagraph>
    <AboutParagraph>
      My work has been featured on multiple online & print publications, such as{' '}
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
      .
    </AboutParagraph>
    <AboutParagraph>
      I have a track record of superior product delivery. I am a life-long
      learner, driven, excellent communicator, team player, and a user advocate.
      I am highly technical, possess strong computer science fundamentals, and
      can drive the overall technology strategy to support long-term strategic
      goals. I have strong leadership skills, can own technical architecture
      discussions and lead technical decisions for an engineering organization,
      and am comfortable collaborating with cross-functional teams.
    </AboutParagraph>

    <AboutParagraph>
      I have a BSc in Computer Science, MSc in Cyberpsychology, and certificates
      in areas such as Deep Learning, Data Science, Databases, and Web
      Accessibility.
    </AboutParagraph>
    <Footer>
      <em>Kostas Mavropalias, MSc. Ireland.</em>
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
  max-width: ${rhythm(24)};

  ${MIN_MOBILE_MEDIA_QUERY} {
    margin-bottom: 0;
    padding: 0 ${rhythm(3 / 4)};
  }
`

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 256, height: 256, quality: 50) {
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
