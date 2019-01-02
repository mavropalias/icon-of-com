import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { colors } from '../utils/typography'

const BlogPosts = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <StyledH2>Blog</StyledH2>
        {data.allMarkdownRemark.edges.map(({ node: post }, index) => {
          return index > 2 ? (
            <BlogPostSmall post={post} key={post.id} />
          ) : (
            <BlogPost post={post} key={post.id} />
          )
        })}
      </Container>
    )}
  />
)

const Container = styled.section``

const StyledH2 = styled.h2`
  margin: 0 0 32px;
  padding: 0;
  font-size: 32px;
  line-height: 32px;
  color: ${colors.secondary};
`

const StyledBlogPost = styled.article`
  margin: 0 0 32px;

  ${MIN_MOBILE_MEDIA_QUERY} {
    margin: 0 112px 32px;
  }
`

const StyledBlogPostSmall = styled.article`
  ${MIN_MOBILE_MEDIA_QUERY} {
    margin: 0 112px 0;
  }
`

const BlogPostTitle = styled(Link)`
  margin: 0 0 4px;
  padding: 0;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  box-shadow: none;
  display: block;

  &:hover {
    box-shadow: none;
  }
`

const BlogPostTitleSmall = styled(Link)`
  margin: 0 0 4px;
  padding: 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  box-shadow: none;
`

const BlogPostMeta = styled.small`
  color: ${colors.secondary};
  display: block;
  font-size: 13px;
  line-height: 13px;
`

const BlogPostMetaSmall = styled.small`
  color: ${colors.secondary};
  font-size: 13px;
  line-height: 13px;
  margin-left: 8px;
`

const BlogPostSpoiler = styled.div`
  font-size: 16px;
`

const BlogPost = ({ post }) => (
  <StyledBlogPost key={post.fields.slug}>
    <BlogPostTitle
      to={post.fields.slug}
      dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
    />
    <BlogPostMeta>
      {post.frontmatter.date}, {post.timeToRead} min read
    </BlogPostMeta>
    <BlogPostSpoiler
      dangerouslySetInnerHTML={{ __html: post.frontmatter.spoiler }}
    />
  </StyledBlogPost>
)

const BlogPostSmall = ({ post }) => (
  <StyledBlogPostSmall key={post.fields.slug}>
    <BlogPostTitleSmall
      to={post.fields.slug}
      dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
    />
    <BlogPostMetaSmall>{post.timeToRead} min read</BlogPostMetaSmall>
  </StyledBlogPostSmall>
)

const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
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

export default BlogPosts
