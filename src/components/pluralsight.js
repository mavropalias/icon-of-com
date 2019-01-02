import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { rhythm, colors } from '../utils/typography'

const Pluralsight = () => (
  <StaticQuery
    query={query}
    render={data => (
      <React.Fragment>
        <h4>
          <a href="https://app.pluralsight.com/profile/kostas-mavropalias">
            My Pluralsight skills:
          </a>
        </h4>
        <Skills>
          {data.allPluralsightSkill.edges.map(edge => (
            <Skill skill={edge.node} key={edge.node.id} />
          ))}
        </Skills>
      </React.Fragment>
    )}
  />
)

const Skills = styled.section`
  display: grid;
  grid-gap: 16px 16px;
  margin-bottom: ${rhythm(1)};
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`

const Skill = ({ skill }) => {
  const percent = Math.round(skill.percentile)

  return (
    <StyledSkill>
      <SkillImage src={skill.thumbnailUrl} />
      <SkillTitle>{skill.title}</SkillTitle>
      <SkillLevel>
        {skill.level} {skill.score}
      </SkillLevel>
      <SkillPercentile>{`${percent}th percentile`}</SkillPercentile>
    </StyledSkill>
  )
}

const StyledSkill = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  line-height: 13px;
  border: 1px solid rgb(165, 219, 237);
  border-image: linear-gradient(-45deg, #3023ae, rgb(165, 219, 237)) 1;
  padding: 8px;
`

const SkillImage = styled.img`
  margin: 0;
  width: 64px;
  height: 64px;
`

const SkillTitle = styled.span`
  display: block;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
`

const SkillLevel = styled.span`
  margin: 4px 0 2px;
`

const SkillPercentile = styled.span`
  color: ${colors.secondary};
`

const query = graphql`
  query {
    allPluralsightSkill {
      edges {
        node {
          id
          title
          score
          level
          percentile
          dateCompleted
          thumbnailUrl
        }
      }
    }
  }
`

export default Pluralsight
