import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import { Col, Row } from '../../components/layout/Grid'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb, Link } from '../../components/navigation'
import Section from '../../components/layout/Section'
import { H2, H3, P } from '../../components/text'
import { Image } from '../../components/elements'
import Card from '../../components/elements/Card'
import Box from '../../components/layout/Box'
import Flex from '../../components/layout/Flex'
import { titleCase } from '../../components/utils/text'

function getFuildLogo(logo) {
  return (
    logo &&
    logo.asset &&
    logo.asset.localFile &&
    logo.asset.localFile.childImageSharp &&
    logo.asset.localFile.childImageSharp.fluid
  )
}

const Partners = ({ data, path }) => {
  const { communityPartners, partners } = data.allSanityPartner.nodes.reduce(
    (acc, partner) => {
      if (partner.type === 'conference' || partner.type === 'community') {
        acc.communityPartners.push(partner)
      } else {
        acc.partners.push(partner)
      }

      return acc
    },
    { communityPartners: [], partners: [] }
  )

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

          <Section>
            <H2>Community Partners</H2>
            <Row>
              {communityPartners.map(({ name, logo }) => (
                <Col lg={3} key={name}>
                  <Image fluid={getFuildLogo(logo)} alt={name} mb={0} />
                </Col>
              ))}
            </Row>
          </Section>
          <Section>
            <H2>Schools and Venue Partners</H2>
            <Row>
              {partners.map(
                ({ name, slug, website, type, description, logo }) => (
                  <Col lg={4} key={slug}>
                    <Card small variant="secondary" mb={5}>
                      <Image fluid={getFuildLogo(logo)} alt={name} mb={0} />
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
              )}
            </Row>
          </Section>
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
