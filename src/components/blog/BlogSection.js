import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import PostCard from 'src/components/blog/PostCard'
import { Link } from 'src/components/navigation'
import Flex from 'src/components/layout/Flex'

export const query = graphql`
  fragment PostListInformation on MarkdownRemark {
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
`

const BlogSection = ({ posts }) => {
  if (!posts || !posts.length) {
    return null
  }
  return (
    <Section>
      <Row>
        <Col lg={11}>
          <Flex>
            <H2>Related blogs</H2>
            <Link className="articles-summary" ml="auto" mt={3} to="/blog">
              See all blogs
            </Link>
          </Flex>
        </Col>
      </Row>
      <Row>
        {posts.map(({ node: post }) => (
          <Col md={4} key={post.fields.slug}>
            <PostCard small post={post} />
          </Col>
        ))}
      </Row>
    </Section>
  )
}

export const BlogSectionQuery = ({}) => (
  <StaticQuery
    query={graphql`
      query getPosts($limit: Int = 3) {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              contentType: { eq: "blog" }
              tags: { in: ["react", "beginner"], nin: "advanced" }
            }
          }
          sort: { fields: [frontmatter___order], order: DESC }
          limit: $limit
        ) {
          edges {
            node {
              ...PostListInformation
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMarkdownRemark.edges.slice(0, 3)

      return <BlogSection posts={posts} />
    }}
  />
)

export default BlogSection
