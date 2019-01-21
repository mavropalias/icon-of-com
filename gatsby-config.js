require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `IconOf.com`,
    siteUrl: `https://iconof.com`,
    siteUrlHttp: `http://iconof.com`,
    author: `Kostas Mavropalias`,
    description: 'Software Engineer, Author, Cyberpsychologist',
    blogDescription: `My thoughts on Software Engineering, AI, User Experience & Cyberpsychology.`,
    social: {
      twitter: `mavropalias`,
      github: `https://github.com/mavropalias`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://iconof.us7.list-manage.com/subscribe/post?u=0dc964b01aa2ffbec3bc10172&amp;id=9a0972c8fe'
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    {
      resolve: 'gatsby-source-pluralsight',
      options: {
        username: 'kostas-mavropalias'
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 80,
              showCaptions: true,
              withWebp: true
            }
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: '100%',
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_self',
              rel: 'nofollow'
            }
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '±'
            }
          },
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                color: 'white' // black|white
              },
              meta: {
                parts: ['iconof.com'],
                color: 'white', // black|white
                size: 16 // 16|24|32|48|64
              },
              background: '#3023ae' // Background color for the card
            }
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'inverted'
            }
          }
        ]
      }
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-749229-5',
        head: true
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IconOf.com`,
        short_name: `IconOf.Com`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#B3213D`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-netlify`
  ]
}
