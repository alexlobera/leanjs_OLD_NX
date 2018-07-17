import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Card from '../components/layout/Card'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../components/text'
import Ul, { Li } from '../components/Layout/Ul'
import ContactForm from '../components/form/Contact'

const PartTime = () => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <H1>12 week part-time React Redux GraphQL course</H1>
        <H2>
          Expert coaches and mentors will work alongside you to master the React
          ecosystem witout having to leave 1 day of work
        </H2>
        <P>
          <LinkButton
            to="/react-redux-graphql-bootcamp"
            children="Next part-time"
          />
        </P>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <H2>Our training is attended by developers from</H2>
        <Row>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
        </Row>
      </Grid>
      <iframe
        style={{ marginTop: '30px', marginBottom: '30px', border: 0 }}
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/yGwmF4AT1Fg"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <Card width={256}>
        <Blockquote>
          The ReactJS Academy part time course really worked for me. I needed to
          learn React but flexibility around my schedule was super important -
          not only that, it was great fun!
        </Blockquote>
        <Row>
          <Col xs={5}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={5}>
            <P>
              <strong>Horacio Voelcker</strong>
            </P>
            <P>Front End Contractor</P>
            <P>Prev. RBS</P>
          </Col>
        </Row>
      </Card>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <H1>Is this part-time course right for me?</H1>
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
        </P>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <H1>The most complete curriculum</H1>
        <H2>Day 1</H2>
        <H3>ES6 & ESNEXT, React Fundamentals, React Router</H3>
        <Link to="/">Click here for more detail</Link>
        <H2>Day 2</H2>
        <H3>Forms, Authentication, Styling in React</H3>
        <Link to="/">Click here for more detail</Link>

        <H2>Day 3</H2>
        <H3>Redux, and Testing Principles</H3>
        <Link to="/">Click here for more detail</Link>

        <H2>Day 4</H2>
        <H3>
          Functional Programming, Advanced Redux, GraphQL, and Performance
          Optimizations
        </H3>
        <Link to="/">Click here for more detail</Link>

        <H2>Day 5</H2>
        <H3>
          Testing in React, Functional Programming, Advanced React Patterns,
          Server-side Rendering
        </H3>
        <Link to="/">Click here for more detail</Link>

        <H2>Day 6</H2>
        <H3>Hackathon</H3>
        <Link to="/">Click here for more detail</Link>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <H1>Upcoming part-time courses</H1>
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
