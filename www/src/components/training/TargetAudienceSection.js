import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import { Link } from '../navigation'
import { H3, H2Ref, P } from '../text'
import { AttendeeQuote } from '../training'

const TargetAudienceSection = () => (
  <Section>
    <Grid>
      <Row>
        <Col md={5} mdOffset={1}>
          <AttendeeQuote
            quote="[The course] has changed the way I'm going to approach things. I like the way the coaches don't spoon feed answers, which is key."
            fullname="Jim Plimmer"
            job="Developer"
            company="Conversion.com"
            youtubeId="gc4Hnb7zD5I"
          />
        </Col>
        <Col md={4} lgOffset={1}>
          <H2Ref>
            Is this React part-time training course right for me? Are you...{' '}
            <Link to="#target-audience" name="target-audience">
              #
            </Link>
          </H2Ref>
          <Ul>
            <Li>A developer with ~1 year of development under your belt?</Li>
            <Li>
              Familiar with front-end technologies like JavaScript, CSS, and
              HTML?
            </Li>
            <Li>
              Taking a step forward to become a React JS specialist, able to
              make critical decisions in the architecture of a React
              application.
            </Li>
            <Li>
              Not satisfied with online learning and it's lack of 1-on-1
              mentoring?
            </Li>
          </Ul>
          <P>
            If you've said 'yes' to these, our part-time training course could
            be for you!
          </P>
          <H3>Not for beginner devs!</H3>
          <P>
            This is not a learn-to-code course. If you want to learn to code, we
            recommend checking out{' '}
            <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
              Free Code camps
            </Link>
            .
          </P>
          <Link to="/blog/are-you-the-perfect-react-graphql-student/">
            Blog: Are YOU the Perfect React Student?
          </Link>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default TargetAudienceSection
