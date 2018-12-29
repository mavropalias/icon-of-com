import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that does not exist... <Link to="/">go home</Link>.
    </p>
  </div>
)

export default NotFoundPage
