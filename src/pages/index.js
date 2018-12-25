import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { colors } from '../utils/typography'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Posts posts={data.allWordpressPost.edges} />
  </Layout>
)

const Posts = ({ posts }) =>
  posts.map(({ node: post }) => (
    <article key={post.id}>
      <h3 style={{ marginBottom: 0 }}>
        <Link style={{ boxShadow: 'none' }} to={post.slug}>
          <span dangerouslySetInnerHTML={{ __html: post.title }} />
        </Link>
      </h3>
      <small style={{ display: 'block', color: colors.secondary }}>
        {post.date}
      </small>
      <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
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
          content
          excerpt
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
