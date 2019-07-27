import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import Link from 'src/components/navigation/Link'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H4, H5 } from 'src/components/text'
import { UpcomingTrainingSection, TrainingCard } from 'src/components/training'
import Header from 'src/components/layout/Header'
import { Card, Newsletter } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_PINK } from '../../../../config/styles'
import { createSocialMetas } from 'src/components/utils'
import { BOOTCAMP_COLLAB } from 'src/config/images'

const PROVISIONAL_WORKSHOP_PRICE = '£360 Inc VAT'

const workshops = [
  {
    title: 'GraphQL Apollo Client',
    description:
      'Create production-ready React applications with the most community-driven GraphQL client',
    to: '/graphql/training/workshops/graphql-apollo-client/london/',
  },
  {
    title: 'GraphQL Relay Modern',
    description:
      'A JavaScript framework created and used by Facebook for building data-driven React apps with GraphQL',
  },

  {
    title: 'GraphQL with Prisma',
    description:
      'Build GraphQL auto-generated and type-safe database clients. Replace traditional ORMs with Prisma',
  },
]

const metas = {
  title: 'GraphQL Workshops | React GraphQL Academy',
  description:
    'Interested in GraphQL workshops? React GraphQL Academy offers specialist GraphQL workshops, focussing on one specific part of GraphQL. Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const GraphQLWorkshops = () => (
  <Layout>
    {({ trainings }) => {
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/graphql',
                label: 'GraphQL',
              },
              {
                to: '/graphql/training/',
                label: 'Training',
              },
              {
                to: '/graphql/training/workshops',
                label: 'Workshops',
              },
            ]}
          />
          <Header
            titleLines={['GraphQL Workshops']}
            subtitle="Specialist GraphQL workshops focussing on one specific part of GraphQL - all delivered by industry experts and that lasting a maximum of 1 day."
          />
          <TopSection marginTop={`-250`}>
            <Grid>
              <Card>
                <Row>
                  <Col md={10} mdOffset={1}>
                    <H2>Which GraphQL workshop are you looking for?</H2>
                    <Row>
                      {workshops.map(workshop => {
                        let to, text, variant
                        if (workshop.to) {
                          to = workshop.to
                          text = 'Find out more'
                          variant = 'primary'
                        } else {
                          to = '/graphql/training/workshops/interest-form'
                          text = 'Join Waitlist'
                          variant = 'secondary'
                        }

                        return (
                          <Col sm={6} md={4}>
                            <TrainingCard borderColor={GRAPHQL_PINK}>
                              <Link underline={false} to={to}>
                                <H4>{workshop.title}</H4>
                              </Link>
                              <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                              <P>{workshop.description}</P>
                              <LinkButton
                                className="workshop-cta"
                                variant={variant}
                                to={to}
                              >
                                {text}
                              </LinkButton>
                            </TrainingCard>
                          </Col>
                        )
                      })}
                    </Row>
                  </Col>
                  <Col md={10} mdOffset={1}>
                    <Newsletter />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQLWorkshops
