import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, slug }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const twitterCard = slug ? 'summary_large_image' : 'summary'

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              { name: `description`, content: metaDescription },
              { name: `author`, content: 'kostas' },
              {
                property: `og:url`,
                content: `${data.site.siteMetadata.siteUrl}${slug}`
              },
              { property: `og:title`, content: title },
              { property: `og:description`, content: metaDescription },
              { property: `og:type`, content: `website` },
              { name: `twitter:card`, content: twitterCard },
              {
                name: `twitter:creator`,
                content: `@${data.site.siteMetadata.social.twitter}`
              },
              {
                name: `twitter:site`,
                content: `@${data.site.siteMetadata.social.twitter}`
              },
              { name: `twitter:title`, content: title },
              { name: `twitter:description`, content: metaDescription }
            ]
              .concat(
                slug
                  ? [
                      {
                        name: 'twitter-image',
                        content: `${
                          data.site.siteMetadata.siteUrlHttp
                        }${slug}twitter-card.jpg`
                      },
                      { name: 'og:image:type', content: 'image/jpeg' },
                      {
                        name: 'og:image',
                        content: `${
                          data.site.siteMetadata.siteUrlHttp
                        }${slug}twitter-card.jpg`
                      },
                      {
                        name: 'og:image:secure_url',
                        content: `${
                          data.site.siteMetadata.siteUrl
                        }${slug}twitter-card.jpg`
                      }
                    ]
                  : []
              )
              .concat(
                keywords.length > 0
                  ? { name: `keywords`, content: keywords.join(`, `) }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        siteUrlHttp
        social {
          twitter
        }
      }
    }
  }
`
