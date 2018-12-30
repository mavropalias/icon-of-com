import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { rhythm } from '../utils/typography'

const MiniProjects = () => (
  <Container>
    <StyledH2>Projects</StyledH2>
    <Projects>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </Projects>
  </Container>
)

const Container = styled.section`
  background: linear-gradient(135deg, #3023ae, #c86dd7), url('/cosmos.png');
  background-blend-mode: lighten;
  background-position: center;
  background-size: cover;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  padding: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
  color: white;

  ${MIN_MOBILE_MEDIA_QUERY} {
    margin-left: -${rhythm(2)};
    margin-right: -${rhythm(2)};
    padding: ${rhythm(1)} ${rhythm(2)};
  }
`

const StyledH2 = styled.h2`
  margin: 0 0 ${rhythm(1)};
  padding: 0;
`

const Projects = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-gap: ${rhythm(1 / 2)} ${rhythm(1)};

  ${MIN_MOBILE_MEDIA_QUERY} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledProject = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.75);
  /* margin: 0 0 ${rhythm(1 / 2)} 0; */
  margin: 0;
  padding: ${rhythm(1 / 2)};

  ${MIN_MOBILE_MEDIA_QUERY} {
    /* margin-right: ${rhythm(1)}; */
  }
`

const Project = props => (
  <StyledProject>
    <ProjectTitle>title-name</ProjectTitle>
    <ProjectDescription>Description.</ProjectDescription>
  </StyledProject>
)

const ProjectTitle = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 16px;
  margin: 0 0 ${rhythm(1 / 4)};
  padding: 0;
  text-transform: capitalize;
`

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 16px;
`

export default MiniProjects
