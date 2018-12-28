module.exports = {
  siteMetadata: {
    title: `IconOf.com`,
    author: `Kostas Mavropalias`,
    description: `My thoughts on Software Engineering, Deep Learning, User Experience & Cyberpsychology.`,
    social: {
      twitter: `https://twitter.com/mavropalias`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-transformer-remark',
            options: {
              plugins: [
                {
                  resolve: 'gatsby-remark-embed-video',
                  options: {
                    width: '100%',
                    ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                    height: 400, // Optional: Overrides optional.ratio
                    related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                    noIframeBorder: true //Optional: Disable insertion of <style> border: 0
                  }
                }
              ]
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
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
    `gatsby-plugin-offline`
  ]
}
