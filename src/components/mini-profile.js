import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { rhythm } from '../utils/typography'

const MiniProfile = ({ pic, map }) => (
  <Section>
    <ProfileImage fixed={pic} />
    <About />
    <ProfileMap fixed={map} />
  </Section>
)

const Section = styled.section`
  margin-bottom: ${rhythm(2)};

  ${MIN_MOBILE_MEDIA_QUERY} {
    display: flex;
    flex-direction: row;
  }
`

const ProfileImage = styled(Img)`
  margin: 0 ${rhythm(1 / 2)} ${rhythm(1 / 8)} 0;
  flex-shrink: 0;
  float: left;
  border-radius: 100%;

  ${MIN_MOBILE_MEDIA_QUERY} {
    border-radius: 0;
    margin: 0 ${rhythm(1)} ${rhythm(1 / 2)} 0;
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
    margin-right: ${rhythm(1)};
  }
`

export default MiniProfile
