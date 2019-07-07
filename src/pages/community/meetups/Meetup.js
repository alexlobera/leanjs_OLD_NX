import React from 'react'
import { Match } from '@reach/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Markdown from 'markdown-to-jsx'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import { TopSection } from 'src/components/layout/Section'
import { Ul, Li } from 'src/components/layout/Ul'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H2Ref, H3, H4, H5, P, Span } from 'src/components/text'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { UpcomingTrainingSection } from 'src/components/training'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { MEETUP } from 'src/config/data'
import { MEETUP_PATH } from './index'

const Meetup = () => (
  <Match path={MEETUP_PATH}>
    {({ match }) => {
      const id = match && match.id

      return (
        <Layout>
          {({ trainings, trainingError, trainingLoading }) => (
            <Query query={MEETUP_QUERY} variables={{ id }}>
              {({ loading, error, data }) => {
                const training = data.event || {}
                training.type = MEETUP
                const { city, title, description } = training
                const excerpt =
                  description &&
                  description.substr(0, description.lastIndexOf(' ', 120)) +
                    '...'
                const defaultMetaText = 'Meetup by React GraphQL Academy'

                return (
                  <>
                    <Helmet
                      title={title}
                      meta={[
                        {
                          name: 'description',
                          content: excerpt,
                        },
                      ]}
                    >
                      <meta
                        property="og:title"
                        content={title || defaultMetaText}
                      />
                      <meta
                        property="og:description"
                        content={excerpt || defaultMetaText}
                      />
                      <meta property="og:type" content="article" />
                      <meta name="twitter:card" content="summary" />
                      <meta name="twitter:site" content="@reactgqlacademy" />
                      <meta
                        name="twitter:title"
                        content={title || defaultMetaText}
                      />
                      <meta
                        name="twitter:description"
                        content={excerpt || defaultMetaText}
                      />
                      <meta name="twitter:creator" content="@reactgqlacademy" />
                    </Helmet>
                    <Breadcrumb
                      path={[
                        { to: '/', label: 'Home' },
                        { to: '/community', label: 'Community' },
                        { to: '/community/meetups/', label: 'Meetups' },
                        {
                          to: `/community/meetups/${id}`,
                          label: `${title}`,
                        },
                      ]}
                    />
                    <Header
                      titleLines={[title || '...loading']}
                      links={[
                        { text: 'Meetup Details', to: '#details' },
                        { text: 'Buy tickets', to: '#pricing' },
                      ]}
                      training={training}
                      showInfoBox={true}
                      type={MEETUP}
                      className="meetup-details-clicks"
                    />
                    <TopSection xsBgDark>
                      <Grid>
                        <Card bg="dark">
                          <Row>
                            <Col md={6} lg={4} lgOffset={1}>
                              <H2Ref>
                                Meetup details
                                <Link to="#details" name="details">
                                  #
                                </Link>
                              </H2Ref>
                              <Markdown
                                options={{
                                  overrides: {
                                    h2: H2,
                                    h3: H3,
                                    h4: H4,
                                    h5: H5,
                                    p: P,
                                    a: Link,
                                    ul: Ul,
                                    li: Li,
                                    span: Span,
                                  },
                                }}
                              >
                                {description || ''}
                              </Markdown>
                              <hr />
                              <Link
                                to={`https://www.meetup.com/JavaScript-${city}/`}
                              >
                                JavaScript {city}
                              </Link>
                            </Col>
                            <Col md={6} lg={5} lgOffset={1}>
                              <PaymentSection
                                training={training}
                                trainingError={error}
                                trainingLoading={loading}
                              />
                            </Col>
                          </Row>
                        </Card>
                      </Grid>
                    </TopSection>
                    <UpcomingTrainingSection trainings={trainings} />
                  </>
                )
              }}
            </Query>
          )}
        </Layout>
      )
    }}
  </Match>
)

const MEETUP_QUERY = gql`
  query meetup($id: ID!) {
    event(id: $id) {
      id
      title
      price
      city
      currency
      description
      address
      venueName
      mapUrl
      utcOffset
      startDate
      endDate
      ticketsLeft
    }
  }
`

export default Meetup
