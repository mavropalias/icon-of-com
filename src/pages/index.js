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
    <Posts
      posts={data.allWordpressPost.edges}
      path={data.site.siteMetadata.postsPath}
    />
  </div>
)

const Posts = ({ posts, path }) =>
  posts.map(({ node: post }) => (
    <article key={post.id}>
      <h3 style={{ marginBottom: 0 }}>
        <Link style={{ boxShadow: 'none' }} to={`${path}/${post.slug}`}>
          <span dangerouslySetInnerHTML={{ __html: post.title }} />
        </Link>
      </h3>
      <small style={{ display: 'block', color: colors.secondary }}>
        {post.date}
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </article>
  ))

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          excerpt
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    site {
      siteMetadata {
        postsPath
      }
    }
  }
`
