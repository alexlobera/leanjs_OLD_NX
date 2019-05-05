import React from 'react'
import { withRouter } from 'react-router-dom'

import { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H3, P } from '../components/text'
import { Link } from '../components/navigation'
import { Card } from '../components/elements'
import { Button } from '../components/buttons'
import Header from '../components/layout/Header'
import {
  UpcomingTrainingSection,
  withUpcomingTrainings,
  selectUpcomingTrainings,
  selectNthTraining,
} from '../components/training'

import { REACT_BOOTCAMP } from '../config/data'
import { InputField, Form, CheckboxField } from '../components/form'
import {
  composeValidators,
  required,
  mustBeEmail,
} from '../components/form/validations'
import { aliasComponent } from '../components/utils/aliasComponent'
import { EmailInput } from '../components/form/Contact'
import { triggerSessionSubscribe } from '../api'

const NameInput = aliasComponent(InputField)

const SessionInterest = ({ trainings, history }) => {
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
    })
    history.push('/thanks-for-signing-up-for-sessions')
  }

  const upcomingBootcamps = selectUpcomingTrainings({
    trainings,
    type: REACT_BOOTCAMP,
  })
  const nextBootcamp = selectNthTraining({ trainings: upcomingBootcamps }) || {}
  return (
    <React.Fragment>
      <Header
        titleLines={['React Workshops']}
        subtitle={[
          'Join the wait and be the first to know about our upcoming 1-day workshops',
        ]}
        bgImg="training-event"
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
                        <P>Which Workshops are you interested in?</P>
                        <Row>
                          <Col xs={12} md={6}>
                            <NameInput
                              label="Your name"
                              name="name"
                              placeholder="eg. Steve Jobs"
                            />
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
                            <H3>Free learning resources</H3>
                            <P>
                              We share our learning resources{' '}
                              <strong>
                                directly from our{' '}
                                <Link to="/curriculum">
                                  <strong>curriculum</strong>
                                </Link>
                              </strong>{' '}
                              and we'd love for you to enjoy and learn from
                              them!{' '}
                            </P>
                            <CheckboxField
                              name="resources"
                              label="I want free leanring resources!"
                            />
                            <Row>
                              <Col md={3}>
                                <Button
                                  variant="primary"
                                  type="submit"
                                  disabled={!valid}
                                >
                                  Submit
                                </Button>
                              </Col>
                              <Col mdOffset={1} md={8}>
                                <P>
                                  We wont spam you as per our{' '}
                                  <Link to="/privacy-policy">
                                    Privacy Policy
                                  </Link>
                                  .
                                </P>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={12} md={6}>
                            <React.Fragment>
                              <EmailInput
                                validate={composeValidators(
                                  required,
                                  mustBeEmail
                                )}
                                label="Your best email address"
                                name="email"
                                placeholder="eg. steve@jobs.com"
                              />
                              <CheckboxField
                                name="perf"
                                label="Performance & FP in React"
                              />
                              <CheckboxField
                                name="gqlclient"
                                label="React with GraphQL client"
                              />
                              <CheckboxField
                                name="testing"
                                label="Testing in React"
                              />
                            </React.Fragment>
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
}

export default withRouter(withUpcomingTrainings()(SessionInterest))
