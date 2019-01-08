import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import NewsletterSignup from '../components/newsletter-signup'
import { rhythm, scale, colors } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const slug = this.props.data.markdownRemark.fields.slug

    // TODO: remove 'blog' from Discus uri
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function() {
          this.page.url = `https://iconof.com/blog${slug}`
        }
      })
    } else {
      window.disqus_config = function() {
        this.page.url = `https://iconof.com/blog${slug}`
      }
      ;(function() {
        // DON'T EDIT BELOW THIS LINE
        var d = document,
          s = d.createElement('script')
        s.src = 'https://iconofcom.disqus.com/embed.js'
        s.setAttribute('data-timestamp', +new Date())
        ;(d.head || d.body).appendChild(s)
      })()
    }
  }

  render() {
    const post = this.props.data.markdownRemark

    return (
      <div style={{ margin: `0 auto`, maxWidth: rhythm(24) }}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <h1 dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            color: colors.secondary
          }}
        >
          {post.frontmatter.date}, {post.timeToRead} min read
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a href={`https://twitter.com/search?q=iconof.com${post.fields.slug}`}>
          Discuss on Twitter
        </a>
        <NewsletterSignup />
        <div id="disqus_thread" style={{ marginTop: '64px' }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
    }
  }
`
