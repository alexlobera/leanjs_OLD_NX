import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import { Col, Row } from '../../components/layout/Grid'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb, Link } from '../../components/navigation'
import { TopSection } from '../../components/layout/Section'
import { H3, P } from '../../components/text'
import { Image } from '../../components/elements'
import Card from '../../components/elements/Card'
import Box from '../../components/layout/Box'
import Flex from '../../components/layout/Flex'
import { titleCase } from '../../components/utils/text'

const Partners = ({ data, path }) => {
  const partners = data.allSanityPartner.nodes

  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Breadcrumb
            path={[{ to: '/', label: 'Home' }, { to: path, label: `Partners` }]}
          />
          <Header
            titleLines={['Partners']}
            subtitle="Conferences, learn-to-code schools, and venues"
            fullHeight={false}
            bgImageName="partners"
            paddingBottom={170}
          />
          <TopSection>
            <Row>
              {partners.map(
                ({ name, slug, website, type, description, logo }) => {
                  const fluid =
                    logo &&
                    logo.asset &&
                    logo.asset.localFile &&
                    logo.asset.localFile.childImageSharp &&
                    logo.asset.localFile.childImageSharp.fluid

                  return (
                    <Col lg={4} key={slug}>
                      <Card small variant="secondary" mb={5}>
                        <Image fluid={fluid} alt={name} mb={0} />
                        <Box p={2}>
                          <H3>{name}</H3>
                          <P>{description}</P>
                          <Flex>
                            <Link to={website}>Visit website</Link>
                            <Box ml="auto">{titleCase(type)} partner</Box>
                          </Flex>
                        </Box>
                      </Card>
                    </Col>
                  )
                }
              )}
            </Row>
          </TopSection>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query partnersQuery {
    allSanityPartner(sort: { fields: [order], order: [ASC] }) {
      nodes {
        name
        slug {
          current
        }
        website
        description
        type
        logo {
          asset {
            localFile(width: 500) {
              childImageSharp {
                fluid {
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

export default Partners
