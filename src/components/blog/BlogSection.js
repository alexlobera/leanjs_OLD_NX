import React from 'react'

import Section from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import PostCard from 'src/components/blog/PostCard'
import { Link } from 'src/components/navigation'
import Flex from 'src/components/layout/Flex'

const BlogSection = ({ posts, title = 'Related articles' }) => {
  if (!posts || !posts.length) {
    return null
  }
  return (
    <Section>
      <Row>
        <Col lg={11}>
          <Flex>
            <H2>{title}</H2>
            <Link className="articles-summary" ml="auto" mt={3} to="/blog">
              See all blogs
            </Link>
          </Flex>
        </Col>
      </Row>
      <Row>
        {posts.slice(0, 3).map(post => (
          <Col md={4} key={post.slug}>
            <PostCard small post={post} />
          </Col>
        ))}
      </Row>
    </Section>
  )
}

export default BlogSection
