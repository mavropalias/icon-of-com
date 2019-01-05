import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { colors } from '../utils/typography'
import Stars from './stars'

const MiniProjects = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <BackgroundImage fluid={data.background.childImageSharp.fluid} />
        <Stars />
        <StyledH2>Projects</StyledH2>
        <Projects>
          {data.github.user.pinnedRepositories.nodes.map((repo, index) => (
            <Project repo={repo} key={index} />
          ))}
        </Projects>
      </Container>
    )}
  />
)

const Container = styled.section`
  background: linear-gradient(135deg, #3023ae, #c86dd7);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 64px;
  padding: 32px 16px;
  color: white;
  position: relative;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  ${MIN_MOBILE_MEDIA_QUERY} {
    margin-left: -32px;
    margin-right: -32px;
    padding: 32px;
    border-radius: 0;
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

const StyledH2 = styled.h2`
  margin: 0 0 32px;
  padding: 0;
  font-size: 32px;
  line-height: 32px;
  color: white;
`

const Projects = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  grid-gap: 16px 32px;
  position: relative;
  z-index: 1;

  ${MIN_MOBILE_MEDIA_QUERY} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Project = ({ repo }) => (
  <StyledProject>
    <ProjectLink href={repo.url}>
      <ProjectTitle>
        {repo.name}
        {repo.homepageUrl && (
          <ProjectHomepage>{repo.homepageUrl}</ProjectHomepage>
        )}
      </ProjectTitle>
      <ProjectDescription>{repo.description}</ProjectDescription>
      <ProjectTopics>
        {repo.repositoryTopics.nodes.map((node, index) => (
          <ProjectTopic key={index}>{node.topic.name}</ProjectTopic>
        ))}
      </ProjectTopics>
    </ProjectLink>
  </StyledProject>
)

const StyledProject = styled.li`
  margin: 0;
`

const ProjectLink = styled.a`
  display: block;
  height: 100%;
  border: 1px solid #a5dbedbf;
  box-shadow: none;
  padding: 16px 16px 12px;
  color: inherit;

  &:hover {
    background: rgb(165, 219, 237);
    border-color: transparent;
    box-shadow: 0 8px 16px rgba(48, 35, 174, 0.8);
    color: ${colors.primary};
  }
`

const ProjectTitle = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 16px;
  margin: 0 0 8px;
  padding: 0;
  text-transform: capitalize;
`

const ProjectHomepage = styled.span`
  margin-left: 8px;
  text-transform: none;
  font-weight: 400;
  color: inherit;
  opacity: 0.6;
`

const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
`

const ProjectTopics = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`

const ProjectTopic = styled.li`
  margin: 0;
  font-size: 13px;
  line-height: 13px;
  margin: 0 8px 4px 0;
  opacity: 0.75;
  font-variant: small-caps;
`

const query = graphql`
  query {
    background: file(absolutePath: { regex: "/cosmos.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 990) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    github {
      user(login: "mavropalias") {
        pinnedRepositories(first: 6) {
          nodes {
            name
            description
            homepageUrl
            url
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export default MiniProjects
