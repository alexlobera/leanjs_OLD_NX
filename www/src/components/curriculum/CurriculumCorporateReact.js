import React, { useState } from 'react'
import Section from './CurriculumSection'
import { H3, H2, P } from '../text'

import LinkButton from '../buttons/LinkButton'
import Card from '../elements/Card'
import Ul, { Li } from '../layout/Ul'
import Link from '../navigation/Link'
import { Col, Row } from '../layout/Grid'
import Box from '../layout/Box'
import Segment from '../elements/Segment'

import Button from 'src/components/buttons/Button'
import { Form, CheckboxField, InputField } from 'src/components/form'
import { WHITE, DARK_GREY } from '../../config/styles'
import { sendFeedback } from '../../api/rest'
import Spinner from '../form/Spinner'
import { required, mustBeEmail, composeValidators } from '../form/validations'

const validateContactMe = composeValidators(mustBeEmail, required)

function Feedback() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = async feedback => {
    if (feedback['contact-me']) {
      feedback.mention = '<@U9S7MA8KV>'
    }
    await sendFeedback({
      'feedback from': 'React Corporate Training',
      ...feedback,
    })
    setFormSubmitted(true)
  }

  return formSubmitted ? (
    <H3 sx={{ my: 3 }}>Thank's a lot for your feedback</H3>
  ) : (
    <Form
      onSubmit={handleFormSubmit}
      render={({ pristine, handleSubmit, submitting, ...rest }) => {
        return (
          <>
            <H3>Tell us about yourself</H3>
            <P>What are you mostly interested in achieving here?</P>
            <form onSubmit={handleSubmit}>
              <Ul variant="unstyled">
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="tailor-made-training"
                    label="Tailor-made training for my team"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="feedback-on-employees"
                    label="Training with final feedback on my employees"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="in-person-training-flexible-schedule"
                    label="In-person training with flexible schedule"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="remote-training-flexible-schedule"
                    label="Remote live training with flexible schedule"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="own-codebase"
                    label="Specialised training using my codebase"
                  />
                </Li>
                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="other"
                    label="Other"
                    elementOnChecked={
                      <InputField
                        validate={required}
                        name="other.expand"
                        placeholder=""
                      />
                    }
                  />
                </Li>

                <Li>
                  <CheckboxField
                    color={WHITE}
                    name="contact-me"
                    label="Contact me"
                    elementOnChecked={
                      <InputField
                        name="contact-me.email"
                        placeholder="Type your email here"
                        validate={validateContactMe}
                      />
                    }
                  />
                </Li>
                <Li>
                  <Button
                    type="submit"
                    disabled={submitting || pristine}
                    sx={{ mt: 3 }}
                  >
                    {submitting ? (
                      <Spinner color={DARK_GREY} />
                    ) : (
                      'Submit feedback'
                    )}
                  </Button>
                </Li>
              </Ul>
            </form>
          </>
        )
      }}
    />
  )
}

const CurriculumCorporateReact = () => {
  const commonProps = {
    showLinkToCurriculum: false,
    enableToggle: false,
    isOpen: false,
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H2>Remote or in-person corporate React team training</H2>
          <Box sx={{ mb: 5 }}>
            <P>
              We provide private React training for your team,{' '}
              <strong>in-person or remotely</strong>, anywhere in the world.
              Your employees can now{' '}
              <Link to="#free-trial">try the training</Link> live remotely, and
              test if it could be a good fit for them before you purchase the
              full in-person or remote package.
            </P>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={4} lgOffset={1}>
          <H3>
            Training curriculum example
            <a name="curriculum" />
          </H3>
          <Section
            {...commonProps}
            title="Day 1"
            name="day1"
            subTitle="Declarative programming, Modern JavaScript, Routing & Data Fetching"
          />
          <Section
            {...commonProps}
            title="Day 2"
            name="day2"
            subTitle="React composition model, Hooks, Forms, and Auth"
          />
          <Section
            {...commonProps}
            title="Day 3"
            name="day3"
            subTitle="Redux Fundamentals, and deployment to production"
          />
          <Section
            {...commonProps}
            title="Day 4"
            name="day 4"
            subTitle="Advanced React patterns and performance"
          />
          <Section
            {...commonProps}
            title="Day 5"
            name="day5"
            subTitle="Real-world testing in React"
          />

          <H3 sx={{ pt: 5 }}>
            Can I customize the curriculum? <a name="how-tailored" />
          </H3>
          <Card>
            Yes, you can. That being said, our proven{' '}
            <Link to="/react/curriculum/">React curriculum</Link> builds up
            progressively, and every piece of it has been carefully placed and
            tested in the right order. You can extend the Curriculum with extra
            days. If you have a particular interest, we can also adjust our
            curriculum to your specific needs to some extent.{' '}
            <Link to="#contact-us">Contact us</Link> to request a Proposal for
            details.
          </Card>
          <LinkButton variant="primary" sx={{ mt: 6 }} to="#free-trial">
            Request free trial
          </LinkButton>
        </Col>
        <Col md={5} lg={5} mdOffset={1}>
          <H3 sx={{ pt: [6, 0] }}>
            <a name="location" />
            Locations and scheduling{' '}
          </H3>
          <P>
            We run in-person private training worldwide and work around your
            schedule.
          </P>
          <P>
            Using modern education technology, our{' '}
            <strong>remote private training</strong> brings our proven
            {` `}
            <Link to="/blog/react-graphql-academy-teaching-method">
              teaching method
            </Link>{' '}
            to your distributed team/s.
          </P>
          <H3>
            <a name="pricing" />
            Pricing
          </H3>
          <P>
            For pricing information, it's best to{' '}
            <Link to="#contact-us">contact us</Link> to get a tailored quote. As
            we’re sure you understand, each training is different so we don’t
            have a fixed-price. However, the following pricing can be used as a
            guide for your budgeting purposes. These prices are based on a
            maximum of 10 participants and do not include travel expenses.
          </P>
          <Ul>
            <Li>React 5 days, £10,000 +VAT</Li>
            <Li>Advanced React 3 days, £6,000 +VAT</Li>
          </Ul>
          <Segment sx={{ mt: 6, py: 4 }} small variant="primary">
            <Feedback />
          </Segment>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default CurriculumCorporateReact
