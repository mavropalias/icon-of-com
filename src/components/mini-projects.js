import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { colors } from '../utils/typography'
import WowContainer from './wow-container'

const MiniProjects = () => (
  <StaticQuery
    query={query}
    render={data => (
      <WowContainer>
        <StyledH2>Projects</StyledH2>
        <Projects>
          {data.github.user.pinnedItems.nodes.map((repo, index) => (
            <Project repo={repo} key={index} />
          ))}
        </Projects>
      </WowContainer>
    )}
  />
)

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
    background: file(relativePath: { eq: "cosmos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 990, quality: 30) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    github {
      user(login: "mavropalias") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on GitHub_Repository {
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
  }
`

export default MiniProjects
