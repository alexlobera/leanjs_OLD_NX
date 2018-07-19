import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Card from '../components/layout/Card'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H2Ref, H3 } from '../components/text'
import Ul, { Li } from '../components/Layout/Ul'
import ContactForm from '../components/form/Contact'
import AttendeeQuote from '../components/training/AttendeeQuote'
import AttendedBy from '../components/training/AttendedBy'
import Video from '../components/elements/Video'
import { Trainline, ASOS, ABInBev, Blockchain } from '../components/logos'
import { CurriculumPartTime } from '../components/curriculum'

const PartTime = () => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={3} md={6}>
            <H1>6-week part-time React Redux GraphQL course</H1>
            <H2>
              Expert coaches and mentors will work alongside you to master the
              React ecosystem witout having to leave 1 day of work
            </H2>
            <P style={{ textAlign: 'center' }}>
              <LinkButton
                extraLarge
                to="/react-redux-training-london"
                children="Next part-time course"
              />
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col md={6}>
            <H2>Developers from all these companies have trusted us</H2>
            <Row>
              <Col xs={12} md={6}>
                <Trainline />
              </Col>
              <Col xs={12} md={6}>
                <Blockchain />
              </Col>
              <Col xs={12} md={6} style={{ paddingTop: '55px' }}>
                <ASOS />
              </Col>
              <Col
                xs={12}
                md={6}
                style={{ paddingTop: '35px', paddingBottom: '15px' }}
              >
                <ABInBev />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Video
              height="315"
              src="https://www.youtube.com/embed/yvROXLQ1jHg"
            />
          </Col>
        </Row>
        <AttendeeQuote
          style={{ marginTop: '20px' }}
          quote="The ReactJS Academy part time course really worked for me. I needed to
          learn React but flexibility around my schedule was super important -
          not only that, it was great fun!"
          fullname="Horacio Voelcker"
          job="Front End Contractor"
          company="Prev. RBS"
        />
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <H2>Is this React part-time course right for me?</H2>
        <Row>
          <Col xs={5}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={7}>
            <Ul>
              <Li>
                <strong>Continue working</strong>, don't miss a single precious
                day of your developer time with your company or clients.
              </Li>
              <Li>
                Perfect for <strong>professional developers</strong> who are
                familiar with good programming practices. This is NOT a
                learn-to-code course.
              </Li>
              <Li>
                Learn how to <strong>build production ready</strong> React
                applications.
              </Li>
              <Li>
                Discuss <strong>real-world projects</strong> to learn best
                practices for building scalable React applications.
              </Li>
              <Li>
                Our team is expert practicioners working with React every single
                day - <strong>not just teaching</strong>
              </Li>
              <Li>
                Carefully designed curriculum and teaching material. Our{' '}
                <strong>team of coaches</strong> have been teaching and
                improving it since early 2016.
              </Li>
            </Ul>
          </Col>
        </Row>
        <P align="center">
          <a href="#next-part-time-courses">Next part-time courses</a>
        </P>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <CurriculumPartTime />
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <H2Ref>
          Upcoming React part-time courses{' '}
          <a name="next-part-time-courses" href="#next-part-time-courses">
            #
          </a>
        </H2Ref>
        <Row>
          <Col md={6}>
            <Row>
              <Col xs={5}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={7}>
                London, UK
                <P>Oct 2nd to Nov 8th, 2018</P>
                <LinkButton
                  to="/react-redux-training-london"
                  children="London part-time"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <ContactForm />
      </Grid>
    </Section>
  </div>
)

export default PartTime
