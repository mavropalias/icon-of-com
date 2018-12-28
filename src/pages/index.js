import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

import { colors } from '../utils/typography'

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
