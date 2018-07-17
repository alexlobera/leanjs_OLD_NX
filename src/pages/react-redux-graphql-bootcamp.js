import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H1, H2, H3 } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import AttendedBySection from '../components/training/AttendedBySection'
import Ul, { Li } from '../components/Layout/Ul'
import ContactForm from '../components/form/Contact'
import AttendeeQuote from '../components/training/AttendeeQuote'
import AttendedBy from '../components/training/AttendedBy'
import Video from '../components/elements/Video'

const Bootcamp = () => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={3} md={6}>
            <H1>1-week React Redux GraphQL Bootcamp</H1>
            <H2>
              In 7 days, expert coaches and mentors will work alongside you to
              master the React ecosystem so you return to work as a React
              specialist
            </H2>
            <P style={{ textAlign: 'center' }}>
              <LinkButton
                extraLarge
                to="/react-redux-graphql-bootcamp-london"
                children="Next bootcamp: 20th Aug, London"
              />
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <H1>Upcoming bootcamps</H1>
        <Row>
          <Col md={6}>
            <Row>
              <Col xs={5}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={7}>
                London, UK
                <P>20-27, August 2018</P>
                <LinkButton
                  to="/react-redux-graphql-bootcamp-london"
                  children="London Bootcamp"
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={5}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={7}>
                Lisbon district, Portugal
                <P>7-13, October 2018</P>
                <LinkButton
                  to="/react-redux-graphql-bootcamp-lisbon"
                  children="Lisbon Bootcamp"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
    {/* <AttendedBySection videoUrl="https://www.youtube.com/embed/yGwmF4AT1Fg" /> */}
    <Section color="lightGrey">
      {/* <AttendedBy /> */}
      <Grid>
        <Row>
          <Col md={6}>
            <H2>Developers from all these companies have trusted us</H2>
            <Row>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
              <Col xs={6}>
                <ImagePlaceholder width="100%" />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Video
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/yGwmF4AT1Fg"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Col>
        </Row>
        <AttendeeQuote
          style={{ marginTop: '20px' }}
          quote="Best training ever! lorem "
          fullname="Joe Foo s sss sss 2"
          job="CTO2"
          company="ASOS.com"
        />
      </Grid>
    </Section>
    <Section>
      <Grid>
        <H1>Is this bootcamp right for me?</H1>
        <Row>
          <Col xs={5}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={7}>
            <Ul>
              <Li>
                Master React very quickly, get up to speed in{' '}
                <strong>one week of intense hands-on training</strong>.
              </Li>
              <Li>
                Perfect for <strong>professional developers</strong> who are
                familiar with good programming practices. This is NOT a
                learn-to-code bootcamp.
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
          <Link to="/">Next bootcamps</Link>
          <br />{' '}
          <strong>
            Where does this link go? should we say "Next bootcamp" and redirect
            the user to the next bootcamp landing page?
          </strong>
        </P>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <CurriculumBootcamp />
      </Grid>
    </Section>
    <Section>
      <Grid>
        <ContactForm />
      </Grid>
    </Section>
  </div>
)

export default Bootcamp
