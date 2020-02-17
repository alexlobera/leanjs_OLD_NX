import React from 'react'
import { graphql } from 'gatsby'

import { Col, Row } from '../../components/layout/Grid'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb } from '../../components/navigation'
import { TopSection } from '../../components/layout/Section'
import PostCard from '../../components/blog/PostCard'
import { getPostsFromNodes } from '../../components/blog/utils'
import Input from '../../components/form/Input'
import Flex from '../../components/layout/Flex'

const Blog = ({ data, path, trainings }) => {
  const posts = getPostsFromNodes({
    markdownNodes: data.allMarkdownRemark.nodes,
    sanityNodes: data.allSanityPost.nodes,
  })

  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: path, label: `Blog` },
        ]}
      />
      <Header
        titleLines={['React and GraphQL Blog']}
        subtitle="Insights into the world of React GraphQL Academy"
        fullHeight={false}
        onThisPage={
          <Flex sx={{ alignItems: 'center', flexDirection: ['column', 'row'] }}>
            Search blogs
            <Input
              sx={{ ml: 3, width: ['100%', '400px'] }}
              placholder="Eg. styling in react"
            />
          </Flex>
        }
        sx={{ pb: 170 }}
      />
      <TopSection>
        <Row>
          {posts.map(post => (
            <Col lg={4} key={post.path}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </TopSection>
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query blogQuery {
    allSanityPost(sort: { fields: [order, publishedAt], order: [ASC, DESC] }) {
      nodes {
        title
        excerpt
        category
        mainImage {
          asset {
            localFile(width: 500, height: 333) {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        slug {
          current
        }
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "blog" } } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      nodes {
        ...MarkdownPostItemFragment
      }
    }
  }
`

export default Blog
