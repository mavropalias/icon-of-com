import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

const Page = ({ data }) => (
  <div>
    <SEO
      title="Projects"
      keywords={[
        `kostas mavropalias`,
        `software engineering`,
        `deep learning`,
        `user experience`,
        `cyberpsychology`
      ]}
    />
    <span>Projects</span>
  </div>
)

export default Page

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
