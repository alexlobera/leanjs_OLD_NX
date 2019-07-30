import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import { Col, Row } from '../../components/layout/Grid'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb } from '../../components/navigation'
import { TopSection } from '../../components/layout/Section'
import { H3 } from '../../components/text'
import { Link } from '../../components/navigation'
import { Card, Image } from '../../components/elements'
import Box from '../../components/layout/Box'

const Blog = ({ data, path }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: path, label: `Locations` },
            ]}
          />
          <Header
            titleLines={['Locations']}
            subtitle="Find out what events we run in each city"
            fullHeight={false}
            paddingBottom={170}
          />
          <TopSection>
            <Row>
              {posts.map(({ node: location }) => (
                <Col lg={4} key={location.fields.slug}>
                  <Card py={0} mb={5}>
                    <Link
                      to={`${location.fields.slug}`}
                      className="location-summary"
                    >
                      <Image
                        src={location.frontmatter.imageUrl}
                        alt={location.frontmatter.city}
                        mb={0}
                      />
                    </Link>
                    <Box p={3}>
                      <Link
                        to={`${location.fields.slug}`}
                        className="location-summary"
                      >
                        <H3>{location.frontmatter.city}</H3>
                      </Link>
                    </Box>
                  </Card>
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
  query locationSummery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/locations/" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            city
          }
        }
      }
    }
  }
`

export default Blog
