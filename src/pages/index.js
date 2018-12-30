import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from '../components/seo'
import MiniProfile from '../components/mini-profile'
import MiniProjects from '../components/mini-projects'
import { rhythm, colors } from '../utils/typography'

const IndexPage = ({ data }) => (
  <div>
    <SEO
      title="Home"
      keywords={[
        `kostas mavropalias`,
        `software engineering`,
        `deep learning`,
        `user experience`,
        `cyberpsychology`
      ]}
    />
    <MiniProfile
      pic={data.avatar.childImageSharp.fixed}
      map={data.map.childImageSharp.fixed}
    />
    <MiniProjects />
    <Posts posts={data.allMarkdownRemark.edges} />
  </div>
)

const Posts = ({ posts }) =>
  posts.map(({ node: post }) => (
    <article key={post.fields.slug}>
      <h3 style={{ marginBottom: 0 }}>
        <Link style={{ boxShadow: 'none' }} to={post.fields.slug}>
          <span dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />
        </Link>
      </h3>
      <small style={{ display: 'block', color: colors.secondary }}>
        {post.frontmatter.date}, {post.timeToRead} min read
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.frontmatter.spoiler }} />
    </article>
  ))

export default IndexPage

export const pageQuery = graphql`
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
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`
