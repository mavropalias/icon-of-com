import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import colors from './colors.js'

const theme = {
  title: 'IconOf.Com Theme',
  baseFontSize: '20px',
  baseLineHeight: 1.75,
  scaleRatio: 3,
  headerFontFamily: [
    'Monda',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  bodyColor: colors.primary,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    '.blog-article h3': {
      color: colors.secondary
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    'blockquote cite:before': {
      content: '"— "'
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1)
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    },
    'h2,h3,h4,h5,h6': {
      paddingTop: rhythm(1)
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase'
    },
    h6: {
      fontStyle: 'italic'
    },
    a: {
      boxShadow: `0 1px 0 0 ${colors.accent}`,
      color: colors.accent,
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      boxShadow: `0 2px 0 0 ${colors.accent}`
    },
    '.gatsby-resp-image-link, .gatsby-resp-image-link:hover': {
      boxShadow: 'none'
    },
    '.anchor, .anchor:hover': {
      boxShadow: 'none'
    },
    'mark,ins': {
      background: colors.accent,
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none'
    },
    figcaption: {
      fontSize: '13px',
      textAlign: 'center'
    }
  })
}

export default theme

export { colors }
