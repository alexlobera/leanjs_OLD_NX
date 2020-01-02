import React from 'react'
import { graphql } from 'gatsby'

import Image from '../../components/elements/Image'
import Layout from '../../components/layout'
import Section, { TopSection } from '../../components/layout/Section'
import { Col, Row } from '../../components/layout/Grid'
import { H2, H3, P } from '../../components/text'
import Ul, { Li } from '../../components/layout/Ul'
import { RootHeader as Header } from '../../components/layout/Header'
import Link from '../../components/navigation/Link'
import { Segment } from '../../components/elements'

const ReviewsPage = ({ data }) => (
  <Layout>
    <Header
      titleLines={['Reviews']}
      subtitle="Here’s what some of our past students say about us"
      fullHeight={false}
      paddingBottom={170}
    />
    <TopSection>
      <Segment>
        <Row>
          <Col md={10} mdOffset={1}>
            <H2>Reviews from past students</H2>
            <P>TODO</P>
          </Col>
        </Row>
      </Segment>
    </TopSection>
    {data.badges && data.badges.nodes && (
      <Section>
        <Row>
          <Col sm={12} md={10} mdOffset={1}>
            <H2>Best coding bootcamp</H2>
            <Row>
              {data.badges.nodes.map(({ name, childImageSharp }) => (
                <Col md={4} textAlign="center" pb={4}>
                  <Image
                    title={name.replace(/^\w/, c => c.toUpperCase())}
                    fluid={childImageSharp.fluid}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Section>
    )}
  </Layout>
)

export const query = graphql`
  query {
    badges: allFile(
      filter: { relativePath: { regex: "/pages/reviews/.*.png/" } }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 300) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`

export default ReviewsPage
