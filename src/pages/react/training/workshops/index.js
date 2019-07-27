import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import Link from 'src/components/navigation/Link'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H4, H5, Span } from 'src/components/text'
import {
  UpcomingTrainingSection,
  TrainingCard,
  selectUpcomingTrainings,
} from 'src/components/training'
import Header from 'src/components/layout/Header'
import { Card, Newsletter } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { LIGHT_BLUE } from '../../../../config/styles'
import { REACT_WORKSHOP, ONE_DAY_WORKSHOP } from '../../../../config/data'
import { DEFAULT_VAT_RATE } from '../../../../config'
import formatPrice from 'src/components/utils/currency'
import { createSocialMetas, formatUTC } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'React Workshops | React GraphQL Academy',
  description:
    'Interested in React workshops? React GraphQL Academy offers specialist React workshops, focussing on one specific part of the React ecosystm. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const waitListURL = '/react/training/workshops/interest-form/'
const waitlistWorkshops = [
  {
    title: 'Design Systems in React Workshop',
    description:
      'Learn how to build a Design System in React to simplify design and development while ensuring consistent brand experiences, at scale.',
    to: waitListURL,
  },
  {
    title: 'React Hooks & Suspense',
    description: 'Learn 2 of the newest and most exciting features in React',
    to: waitListURL,
  },
  {
    title: 'React Native',
    description: 'Build upon your React knowledge and create great native apps',
    to: waitListURL,
  },
]

const Workshops = () => (
  <Layout>
    {({ trainings }) => {
      const reactWorkshops = selectUpcomingTrainings({
        trainings,
        types: [REACT_WORKSHOP, ONE_DAY_WORKSHOP],
      })
      const allWorkshops = [...reactWorkshops, ...waitlistWorkshops]
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
                to: '/react',
                label: 'React',
              },
              {
                to: '/react/training/',
                label: 'Training',
              },
              {
                to: '/react/training/workshops',
                label: 'Workshops',
              },
            ]}
          />
          <Header
            titleLines={['1-day React Workshops']}
            subtitle="Intense, 1-day workshops that focusses on one specific part of React - all delivered by industry experts"
          />
          <TopSection marginTop={`-250`}>
            <Grid>
              <Card>
                <Row>
                  <Col md={10} mdOffset={1}>
                    <H2>Which 1-day React training are you looking for?</H2>
                    <Row>
                      {allWorkshops.map(workshop => {
                        let to,
                          buttonText,
                          variant,
                          title,
                          description,
                          price,
                          currency,
                          city,
                          startDate,
                          utcOffset
                        if (workshop.toPath) {
                          title =
                            workshop &&
                            workshop.training &&
                            workshop.training.description &&
                            workshop.training.description.title

                          description =
                            workshop &&
                            workshop.training &&
                            workshop.training.description &&
                            workshop.training.description.objectives

                          price = workshop && workshop.price

                          currency = workshop && workshop.currency
                          city = workshop && workshop.city
                          startDate = workshop && workshop.startDate
                          utcOffset = workshop && workshop.utcOffset
                          to = workshop.toPath
                          buttonText = 'Find out more'
                          variant = 'primary'
                        } else {
                          title = workshop.title
                          description = workshop.description
                          currency = 'gdp'
                          to = workshop.to
                          buttonText = 'Join Waitlist'
                          variant = 'secondary'
                        }

                        return (
                          <Col sm={6} md={4}>
                            <TrainingCard borderColor={LIGHT_BLUE}>
                              <Link underline={false} to={to}>
                                <H4>{title}</H4>
                              </Link>
                              {startDate && (
                                <H5 mb={1}>
                                  {`${city} ${formatUTC(
                                    startDate,
                                    utcOffset,
                                    'D MMM'
                                  )}`}
                                </H5>
                              )}
                              <H5>
                                {price ? (
                                  <Span>
                                    {formatPrice(
                                      currency,
                                      price,
                                      DEFAULT_VAT_RATE
                                    )}{' '}
                                    Incl VAT
                                  </Span>
                                ) : (
                                  'Coming soon'
                                )}
                              </H5>
                              <P>{description}</P>
                              <LinkButton
                                className="workshop-cta"
                                variant={variant}
                                to={to}
                              >
                                {buttonText}
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

export default Workshops
