import React from 'react'
import { Link, graphql } from 'gatsby'

// import Bio from '../components/bio'
import SEO from '../components/seo'
import { rhythm, scale, colors } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <SEO title={post.title} description={post.excerpt} />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            color: colors.secondary
          }}
        >
          {post.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        {/* <Bio /> */}

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(id: { eq: $id }) {
      id
      slug
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
