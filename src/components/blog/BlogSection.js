import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import PostCard from 'src/components/blog/PostCard'
import { Link } from 'src/components/navigation'

const postsThatMatchAllTags = tags => ({
  node: {
    frontmatter: { tags: postTags },
  },
}) =>
  tags &&
  tags.every(constraint => postTags && postTags.some(tag => tag === constraint))

const BlogSection = ({ tags = [] }) => (
  <StaticQuery
    query={graphql`
      query getPosts($limit: Int = 1000) {
        allMarkdownRemark(
          filter: {
            fields: { slug: { regex: "/(/blog/|/react/|/graphql/)/" } }
          }
          sort: { fields: [frontmatter___order], order: DESC }
          limit: $limit
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                imageUrl
                tags
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMarkdownRemark.edges
        .filter(postsThatMatchAllTags(tags))
        .slice(0, 3)

      if (!posts || !posts.length) {
        return null
      }

      // TODO Paul style it
      return (
        <Section>
          <Grid>
            <Row>
              <Col md={10}>
                <H2>Related blogs</H2>
              </Col>
              <Col md={2}>
                <br />
                <Link to="/blog">See all blogs</Link>
              </Col>
            </Row>
            <Row>
              {posts.map(({ node: post }) => (
                <Col md={4} key={post.fields.slug}>
                  <PostCard post={post} />
                </Col>
              ))}
            </Row>
          </Grid>
        </Section>
      )
    }}
  />
)

export default BlogSection
