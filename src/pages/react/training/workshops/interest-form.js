import React from 'react'
import { navigate } from 'gatsby'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H3, H4, P } from 'src/components/text'
import { Link } from 'src/components/navigation'
import { Segment } from 'src/components/elements'
import { Button } from 'src/components/buttons'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'

import { REACT_BOOTCAMP, TECH_REACT } from 'src/config/data'
import { InputField, Form, CheckboxField } from 'src/components/form'
import {
  composeValidators,
  required,
  mustBeEmail,
} from 'src/components/form/validations'
import { aliasComponent } from 'src/components/utils/aliasComponent'
import { EmailInput } from 'src/components/form/Contact'
import { triggerSessionSubscribe } from 'src/api/rest'
import trackUserBehaviour, {
  FORM_SUBMIT,
} from 'src/components/utils/trackUserBehaviour'

const NameInput = aliasComponent(InputField)

const SessionInterest = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const handleFormSubmit = ({ name, email, subscriptions, resources }) => {
        triggerSessionSubscribe({
          name,
          email,
          subscriptions: Object.keys(subscriptions),
          resources,
          pathname: 'React 1 day workshops form',
        })
        trackUserBehaviour({
          event: FORM_SUBMIT,
          payload: {
            interestedInCourse: 'React',
            formType: 'Interest form',
            subject: Object.keys(subscriptions),
          },
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
          <Header
            breadcrumbPath={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: path,
                label: 'Interest Form',
              },
            ]}
            tech={TECH_REACT}
            titleLines={['React Workshops']}
            subtitle={[
              'Join the wait and be the first to know about our upcoming 1-day workshops',
            ]}
            bgImageName={BOOTCAMP}
            training={nextBootcamp}
          />

          <TopSection marginTop={`-250`}>
            <Segment>
              <Row>
                <Col md={10} mdOffset={1}>
                  <Form
                    onSubmit={handleFormSubmit}
                    render={({ handleSubmit, valid }) => {
                      return (
                        <form onSubmit={handleSubmit}>
                          <H4>
                            What are your details?
                            <a name="details" />
                          </H4>
                          <Row>
                            <Col md={6}>
                              <NameInput
                                label="Your name"
                                name="name"
                                placeholder="eg. Steve Jobs"
                              />
                            </Col>
                            <Col md={6}>
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
                            <Col md={6}>
                              <CheckboxField
                                name="subscriptions.fundamentals"
                                label="Modern JS and React Fundamentals"
                              />
                              <CheckboxField
                                name="subscriptions.styling"
                                label="Styling in React and Design Systems"
                              />
                              <CheckboxField
                                name="subscriptions.hooks"
                                label="React Hooks & Suspense"
                              />
                              <CheckboxField
                                name="subscriptions.perf"
                                label="Performance & FP in React"
                              />
                            </Col>
                            <Col md={6}>
                              <React.Fragment>
                                <CheckboxField
                                  name="subscriptions.testing"
                                  label="Testing in React"
                                />
                                <CheckboxField
                                  name="subscriptions.native"
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
                                width={1}
                                variant="primary"
                                type="submit"
                                disabled={!valid}
                              >
                                Submit
                              </Button>
                            </Col>
                            <Col mdOffset={1} md={8}>
                              <P pt={1}>
                                We won't spam you as per our{' '}
                                <Link to="/privacy-policy">Privacy Policy</Link>
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
            </Segment>
          </TopSection>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default SessionInterest
