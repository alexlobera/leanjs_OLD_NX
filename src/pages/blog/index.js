import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import { Col, Row } from '../../components/layout/Grid'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb } from '../../components/navigation'
import { TopSection } from '../../components/layout/Section'
import PostCard from '../../components/blog/PostCard'

const Blog = ({ data, path }) => {
  const sanityPosts = data.allSanityPost.nodes.map(
    ({ slug, category, mainImage, title, excerpt }) => ({
      path: `/${category}/${slug ? slug.current : ''}`,
      imageUrl:
        mainImage &&
        mainImage.asset &&
        mainImage.asset.localFile &&
        mainImage.asset.localFile.publicURL,
      title,
      excerpt,
    })
  )

  const markdownPosts = data.allMarkdownRemark.edges.map(({ node }) => ({
    path: node.fields.slug,
    imageUrl:
      node.frontmatter.imageUrl ||
      (node.frontmatter.imageSrc &&
        node.frontmatter.imageSrc.childImageSharp.fluid.src),
    title: node.frontmatter.title,
    excerpt: node.excerpt,
  }))

  const posts = [...sanityPosts, ...markdownPosts]
  console.log(posts)
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Breadcrumb
            path={[{ to: '/', label: 'Home' }, { to: path, label: `Blog` }]}
          />
          <Header
            titleLines={['Blog']}
            subtitle="Insights into the world of React GraphQL Academy"
            fullHeight={false}
            paddingBottom={170}
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
      )}
    </Layout>
  )
}

export const query = graphql`
  query blogQuery {
    allSanityPost(sort: { fields: order, order: ASC }) {
      nodes {
        title
        excerpt
        category
        mainImage {
          asset {
            localFile(width: 500, height: 333) {
              publicURL
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
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            imageUrl
            imageSrc {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
