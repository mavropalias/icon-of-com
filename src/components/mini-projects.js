import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import cosmos from '../../content/assets/cosmos.jpg'

const MiniProjects = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
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
  background: linear-gradient(135deg, #3023ae, #c86dd7), url(${cosmos});
  background-blend-mode: lighten;
  background-position: center;
  background-size: cover;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 64px;
  padding: 32px 16px;
  color: white;
  position: relative;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  ${MIN_MOBILE_MEDIA_QUERY} {
    margin-left: -32px;
    margin-right: -32px;
    padding: 32px;
    border-radius: 0;

    &:hover {
      margin-left: -128px;
      margin-right: -128px;
      padding: 32px 128px;
      border-radius: 4px;
    }
  }
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
  border: 1px solid rgba(255, 255, 255, 0.75);
  padding: 16px 16px 12px;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.5),
      rgba(48, 35, 174, 0.7)
    );
    border-color: transparent;
    box-shadow: 0 8px 16px rgba(48, 35, 174, 0.8);
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
  color: rgba(255, 255, 255, 0.5);
`

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
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
  margin: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.75);
  font-variant: small-caps;
`

const query = graphql`
  query {
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
