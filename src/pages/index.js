import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import MiniProfile from '../components/mini-profile'
import MiniProjects from '../components/mini-projects'
import BlogPosts from '../components/blog-posts'

const SEO_KEYWORDS = [
  `kostas mavropalias`,
  `software engineering`,
  `deep learning`,
  `user experience`,
  `cyberpsychology`
]

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Kostas Mavropalias" keywords={SEO_KEYWORDS} />
    <MiniProfile />
    <MiniProjects />
    <BlogPosts />
  </React.Fragment>
)

export default IndexPage
