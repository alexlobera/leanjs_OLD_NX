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
import { Image } from '../../components/elements'
import Card from '../../components/elements/Card'
import Box from '../../components/layout/Box'

const Blog = ({ data, path }) => {
  const locations = data.allMarkdownRemark.edges || []

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
            bgImageName={'locations'}
          />
          <TopSection>
            <Row>
              {locations.map(({ node: location }) => (
                <Col lg={4} key={location.fields.slug}>
                  {/* <Segment pt={0} pb={0} mb={5}>  */}
                  <Card small variant="secondary" mb={5}>
                    <Link
                      to={`${location.fields.slug}`}
                      className="location-summary"
                    >
                      <Image
                        fluid={
                          location.frontmatter.listImageSrc.childImageSharp
                            .fluid
                        }
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
                    {/* </Segment> */}
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
            listImageSrc {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
