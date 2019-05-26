import React from 'react'
import { navigate } from 'gatsby'

import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H3, H4, P } from 'src/components/text'
import { Link } from 'src/components/navigation'
import { Card } from 'src/components/elements'
import { Button } from 'src/components/buttons'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'

import { REACT_BOOTCAMP } from 'src/config/data'
import { InputField, Form, CheckboxField } from 'src/components/form'
import {
  composeValidators,
  required,
  mustBeEmail,
} from 'src/components/form/validations'
import { aliasComponent } from 'src/components/utils/aliasComponent'
import { EmailInput } from 'src/components/form/Contact'
import { triggerSessionSubscribe } from 'src/api'
import { Breadcrumb } from 'src/components/navigation'

const NameInput = aliasComponent(InputField)

const SessionInterest = ({ trainings }) => (
  <Layout>
    {({ trainings }) => {
      const handleFormSubmit = ({
        name,
        email,
        fundamentals = false,
        styling = false,
        hooks = false,
        perf = false,
        gqlclient = false,
        testing = false,
        resources = false,
        native = false,
      }) => {
        triggerSessionSubscribe({
          name,
          email,
          fundamentals,
          styling,
          hooks,
          perf,
          gqlclient,
          testing,
          resources,
          native,
        })
        navigate('/thanks-for-signing-up-for-sessions')
      }

      const upcomingBootcamps = selectUpcomingTrainings({
        trainings,
        type: REACT_BOOTCAMP,
      })
      const nextBootcamp =
        selectNthTraining({ trainings: upcomingBootcamps }) || {}
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: '/react/training/workshops/interest-form',
                label: 'Interest Form',
              },
            ]}
          />
          <Header
            titleLines={['React Workshops']}
            subtitle={[
              'Join the wait and be the first to know about our upcoming 1-day workshops',
            ]}
            bgImageName={BOOTCAMP}
            training={nextBootcamp}
          />

          <TopSection marginTop={`-250`}>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col md={10} mdOffset={1}>
                    <Form
                      onSubmit={handleFormSubmit}
                      render={({ handleSubmit, valid }) => {
                        return (
                          <form onSubmit={handleSubmit}>
                            <H4>What are your details?</H4>
                            <Row>
                              <Col xs={12} md={6}>
                                <NameInput
                                  label="Your name"
                                  name="name"
                                  placeholder="eg. Steve Jobs"
                                />
                              </Col>
                              <Col xs={12} md={6}>
                                <EmailInput
                                  validate={composeValidators(
                                    required,
                                    mustBeEmail
                                  )}
                                  label="Your best email address"
                                  name="email"
                                  placeholder="eg. steve@jobs.com"
                                />
                              </Col>
                            </Row>

                            <Row>
                              <Col>
                                <H4>Which Workshops are you interested in?</H4>
                              </Col>
                              <Col xs={12} md={6}>
                                <CheckboxField
                                  name="fundamentals"
                                  label="Modern JS and React Fundamentals"
                                />
                                <CheckboxField
                                  name="styling"
                                  label="Styling in React and Design Systems"
                                />
                                <CheckboxField
                                  name="hooks"
                                  label="React Hooks & Suspense"
                                />
                                <CheckboxField
                                  name="perf"
                                  label="Performance & FP in React"
                                />
                              </Col>
                              <Col xs={12} md={6}>
                                <React.Fragment>
                                  <CheckboxField
                                    name="gqlclient"
                                    label="React with GraphQL client"
                                  />
                                  <CheckboxField
                                    name="testing"
                                    label="Testing in React"
                                  />
                                  <CheckboxField
                                    name="native"
                                    label="React Native"
                                  />
                                </React.Fragment>
                              </Col>
                            </Row>
                            <Row style={{ marginTop: '2em' }}>
                              <Col>
                                <H3>Free learning resources</H3>
                                <P>
                                  We share our learning resources{' '}
                                  <strong>
                                    directly from our{' '}
                                    <Link to="/react/curriculum">
                                      <strong>curriculum</strong>
                                    </Link>
                                  </strong>{' '}
                                  and we'd love for you to enjoy and learn from
                                  them!{' '}
                                </P>
                                <CheckboxField
                                  name="resources"
                                  label="I want free learning resources!"
                                />
                              </Col>
                            </Row>
                            <Row style={{ marginTop: '2em' }}>
                              <Col md={3}>
                                <Button
                                  block
                                  variant="primary"
                                  type="submit"
                                  disabled={!valid}
                                >
                                  Submit
                                </Button>
                              </Col>
                              <Col mdOffset={1} md={8}>
                                <P>
                                  We won't spam you as per our{' '}
                                  <Link to="/privacy-policy">
                                    Privacy Policy
                                  </Link>
                                  .
                                </P>
                              </Col>
                            </Row>
                          </form>
                        )
                      }}
                    />
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

export default SessionInterest
