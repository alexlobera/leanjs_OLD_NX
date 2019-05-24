import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { H3, P } from '../../components/text'
import Header from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb, Link } from '../../components/navigation'
import { Card, Image } from '../../components/elements'
import { TopSection } from '../../components/layout/Section'
import { formatPostTitle } from '../../templates/blog-post'

const CardText = styled.div`
  padding: 18px;
`

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Breadcrumb
            path={[{ to: '/', label: 'Home' }, { to: `/blog/`, label: `Blog` }]}
          />
          <Header
            titleLines={['Blog']}
            subtitle="Insights into the world of React GraphQL Academy"
            fullHeight={false}
            paddingBottom={170}
          />
          <TopSection>
            <Grid>
              <React.Fragment>
                <Row>
                  {posts.map(({ node: post }) => (
                    <Col lg={4} key={post.fields.slug}>
                      <Card border="shadow" padding={false} bottom={36}>
                        <Link to={`${post.fields.slug}`}>
                          <Image
                            src={post.frontmatter.imageUrl}
                            alt={formatPostTitle(post.frontmatter.title)}
                          />
                        </Link>
                        <CardText>
                          <Link to={`${post.fields.slug}`}>
                            <H3>{formatPostTitle(post.frontmatter.title)}</H3>
                          </Link>
                          <P>{post.excerpt}</P>
                          <P>
                            <Link to={`${post.fields.slug}`}>Read more</Link>
                          </P>
                        </CardText>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </React.Fragment>
            </Grid>
          </TopSection>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(/blog/|/react/|/graphql/)/" } } }
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
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
