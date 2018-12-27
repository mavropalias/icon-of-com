import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import { Link, graphql } from 'gatsby'

// import Bio from '../components/bio'
import SEO from '../components/seo'
import { rhythm, scale, colors } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const slug = this.props.data.wordpressPost.slug

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function() {
          this.page.url = `https://iconof.com/blog/${slug}`
        }
      })
    } else {
      window.disqus_config = function() {
        this.page.url = `https://iconof.com/blog/${slug}`
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
    const post = this.props.data.wordpressPost

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

        <div id="disqus_thread" />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
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
