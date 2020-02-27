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
import {
  getPostsFromNodes,
  findIndexFromTagName,
  sortingPostsByTag,
} from '../../components/blog/utils'
import Input from '../../components/form/Input'
import Flex from '../../components/layout/Flex'
import Span from '../../components/text/Span'
import Segment from '../../components/elements/Segment'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_API_KEY
)

const algoliaPostsIndex = client.initIndex('Posts')
const FEATURED_TAG = 'featured-blog-page-'

// TODO memoize getPostsInitialState
function getPostsInitialState(data) {
  const nonFeaturedSanityPosts = (data.allSanityPost.nodes || []).filter(
    post => !post.tags.reduce(findIndexFromTagName(FEATURED_TAG), null)
  )
  const featuredSanityPosts = data.featuredSanityPosts.nodes || []

  featuredSanityPosts.sort(sortingPostsByTag(FEATURED_TAG))

  return getPostsFromNodes({
    markdownNodes: data.allMarkdownRemark.nodes,
    sanityNodes: [...featuredSanityPosts, ...nonFeaturedSanityPosts],
  })
}

const Blog = ({ data, path, trainings }) => {
  const [searchTerm, setSearchTerm] = useState()
  const postsInitialState = getPostsInitialState(data)
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
          <Flex box="label" sx={{ alignItems: 'center' }}>
            <SearchIcon sx={{ mr: 2 }} />
            <Span sx={{ display: ['none', 'inline-block'] }}>Search blogs</Span>
            <Input
              sx={{ ml: 3, width: ['auto !important', '400px !important'] }}
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
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  fragment SanityPostBlogPage on SanityPost {
    title
    excerpt
    category
    tags {
      name
    }
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
  query blogQuery {
    allSanityPost(
      #   TODO negative regular expession is not working, it should be fixed and remove filtering in the component
      #   filter: {
      #     tags: {
      #       elemMatch: { name: { regex: "/^((?!featured-blog-page-).)*$/" } }
      #     }
      #   }
      sort: { fields: [publishedAt], order: [DESC] }
    ) {
      nodes {
        ...SanityPostBlogPage
      }
    }

    featuredSanityPosts: allSanityPost(
      filter: {
        tags: { elemMatch: { name: { glob: "featured-blog-page-*" } } }
      }
    ) {
      nodes {
        ...SanityPostBlogPage
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
