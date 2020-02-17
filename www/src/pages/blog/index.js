import React, { useState } from 'react'
import { graphql } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'

import SearchIcon from '../../components/icons/SearchIcon'
import { Col, Row } from '../../components/layout/Grid'
import { H3 } from '../../components/text/H'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb } from '../../components/navigation'
import { TopSection } from '../../components/layout/Section'
import PostCard from '../../components/blog/PostCard'
import { getPostsFromNodes } from '../../components/blog/utils'
import Input from '../../components/form/Input'
import Flex from '../../components/layout/Flex'
import Segment from '../../components/elements/Segment'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_API_KEY
)

const algoliaPostsIndex = client.initIndex('Posts')

const Blog = ({ data, path, trainings }) => {
  const [searchTerm, setSearchTerm] = useState()
  const postsInitialState = getPostsFromNodes({
    markdownNodes: data.allMarkdownRemark.nodes,
    sanityNodes: data.allSanityPost.nodes,
  })
  const [posts, setPosts] = useState(postsInitialState)

  const searchPosts = e => {
    const term = e.target.value
    if (!term) {
      setPosts(postsInitialState)
    } else {
      algoliaPostsIndex.search(term).then(results => {
        setSearchTerm(term)
        setPosts(results.hits)
      })
    }
  }

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
            <SearchIcon sx={{ mr: 2 }} /> Search blogs
            <Input
              sx={{ ml: 3, width: ['100%', '400px'] }}
              placholder="Eg. styling in react"
              onChange={searchPosts}
            />
          </Flex>
        }
        sx={{ pb: 170 }}
      />

      <TopSection>
        {posts.length ? (
          <Row>
            {posts.map(post => (
              <Col lg={4} key={post.path}>
                <PostCard post={post} />
              </Col>
            ))}
          </Row>
        ) : (
          <Segment>
            <Row>
              <Col md={10} mdOffset={1}>
                <H3>
                  Sorry there are no results for the search term: {searchTerm}
                </H3>
              </Col>
            </Row>
          </Segment>
        )}
      </TopSection>
      {/* <TopSection>
        <Row>
          {posts.map(post => (
            <Col lg={4} key={post.path}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </TopSection> */}
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
