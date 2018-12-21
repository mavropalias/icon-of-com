const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allWordpressPost {
              edges {
                node {
                  id
                  slug
                  title
                  content
                  excerpt
                  date(formatString: "MMMM DD, YYYY")
                  modified
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allWordpressPost.edges

        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.slug,
            component: blogPost,
            context: {
              slug: post.node.slug,
              id: post.node.id,
              previous,
              next
            }
          })
        })
      })
    )
  })
}
