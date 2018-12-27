module.exports = {
  siteMetadata: {
    title: `IconOf.com`,
    subtitle: '',
    author: `Kostas Mavropalias`,
    description: `My thoughts on Software Engineering, Deep Learning, User Experience & Cyberpsychology.`,
    social: {
      twitter: `https://twitter.com/mavropalias`,
      github: `https://github.com/mavropalias`
    }
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: 'iconof.com/blog',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://iconof.com',
          replacementUrl: 'https://iconof.com'
        },
        concurrentRequests: 10,
        includedRoutes: [
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          '/*/*/comments'
        ],
        excludedRoutes: ['/*/*/posts/1456'],
        normalizer: function({ entities }) {
          return entities
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IconOf.com`,
        short_name: `IconOf.Com`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#B3213D`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
}
