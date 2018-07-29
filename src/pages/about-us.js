import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H1, H2, H2Ref, H3, P } from '../components/text'
import { UpcomingBootcampsSection, AttendeeQuote } from '../components/training'
import Ul, { Li } from '../components/layout/Ul'
import Header from '../components/layout/Header'
import CallToActionRow from '../components/layout/CallToActionRow'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import { Card } from '../components/elements'
import { Blockquote } from '../components/text'
import { Image } from '../components/elements'
import {
  ALEX,
  RICHARD,
  HORACIO,
  WILL,
  ABOUT_CONTINUOUS,
  ABOUT_CORPORATE,
} from '../config/images'

const AboutUs = () => (
  <React.Fragment>
    <Header
      titleLines={['About us']}
      subtitle="Our coaches are expert, every day developers<br/> who will mentor you throughout your ReactJS<br/> journey"
      links={[
        { text: 'Coach profiles ', to: 'alex-lobera' },
        {
          text: 'Continuous coach development ',
          to: 'continuous-coach-development',
        },
        { text: 'Corporate team training', to: 'corporate-team-training' },
      ]}
      bgImg="about-us"
    />
    <TopSection>
      <Grid>
        <CallToActionRow left>
          <Col xs={12} sm={5} smOffset={1}>
            <LinkButton
              cta
              to="/react-redux-graphql-bootcamp-london"
              children="Next bootcamp: 20th August, London >>"
            />
          </Col>
        </CallToActionRow>
        <Card border="shadow">
          <Row>
            <Col lg={10} lgOffset={1}>
              <H2>Our coaches - professional developers who love to teach</H2>
              <P>
                ReactJS Academy is a <Link to="https://leanjs.com">LeanJS</Link>{' '}
                brand. LeanJS is an innovation agency focused on Lean, UX,
                JavaScript, and people.
              </P>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <Image src={ALEX} width="100%" />
          </Col>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Alex Lobera{' '}
              <a name="alex-lobera" href="#alex-lobera">
                #
              </a>
            </H2Ref>
            <H3>
              Tech Lead at <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
            <Ul inline>
              <Li>
                <Link to="https://github.com/alexlbr">GitHub</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://uk.linkedin.com/in/alexlobera">LinkedIn</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://twitter.com/alex_Lobera">Twitter</Link>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Full-stack JavaScript Developer passionate about{' '}
                <strong>
                  teaching React since{' '}
                  <Link to="https://www.meetup.com/JavaScript-London/events/230287691/">
                    May, 2016
                  </Link>
                </strong>.
              </Li>
              <Li>
                Alex holds a <strong>computer science degree</strong> and he is
                also a <strong>certified teacher</strong> in Spanish language.
              </Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/JavaScript-london/">
                  JavaScript London Meetup
                </Link>{' '}
                and other popular meetups in the EU
              </Li>
            </Ul>
            <Blockquote bg="primary">
              Teaching other developers is very rewarding. I love sharing what
              I've learned in my career to help others grow and give back. I
              think this is what really makes our industry move forward.
            </Blockquote>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Richard Moss
              <a name="richard-moss" href="#richard-moss">
                #
              </a>
            </H2Ref>
            <H3>
              Senior React Engineer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
            <Ul inline>
              <Li>
                <Link to="https://github.com/ric9176">GitHub</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://www.linkedin.com/in/richard-moss-55881b82/">
                  LinkedIn
                </Link>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Loves working with and helping others learn React, Redux and
                GraphQL.
              </Li>
              <Li>Serial entrepreneur and digital nomad</Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/JavaScript-Lisbon/">
                  JavaScript Lisbon Meetup{' '}
                </Link>
                and ReactJS Academy bootcamps
              </Li>
            </Ul>
            <Blockquote bg="primary">
              Collaboratively working with developers to help them understand
              concepts such as the functional programming paradigm helps them
              take their skills to the next level - and I learn a lot too!
            </Blockquote>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image src={RICHARD} width="100%" />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <Image src={HORACIO} width="100%" />
          </Col>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Horacio Herrera
              <a name="horacio-herrera" href="#horacio-herrera">
                #
              </a>
            </H2Ref>
            <H3>
              Designer and Developer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
            <Ul inline>
              <Li>
                <Link to="https://github.com/horacioh">GitHub</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://www.linkedin.com/in/horacioherrera/">
                  LinkedIn
                </Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://twitter.com/hhg2288">Twitter</Link>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Holds a Digital Design degree and is a self-taught Developer
              </Li>
              <Li>Working with cross-functional product teams since 2010</Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/JavaScript-Barcelona/">
                  JavaScript Barcelona Meetup
                </Link>
              </Li>
            </Ul>
            <Blockquote bg="primary">
              I love teaching and seeing other developers grow...
            </Blockquote>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Will Voelcker
              <a name="will-voelcker" href="#will-voelcker">
                #
              </a>
            </H2Ref>
            <H3>
              Senior Full-stack JavaScript Engineer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
            <Blockquote bg="primary">
              Serverless specialist at LeanJS. Will is an experienced full stack
              developer with a passion for cutting-edge stacks.
            </Blockquote>
            <Ul inline>
              <Li>
                <Link to="https://github.com/wvoelcker">GitHub</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://www.linkedin.com/in/willv/">LinkedIn</Link>
              </Li>
            </Ul>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image src={WILL} width="100%" />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <Image src={ABOUT_CONTINUOUS} width="100%" />
          </Col>
          <Col xs={12} md={6} mdOffset={1}>
            <H2Ref>
              How we continuously improve{' '}
              <a
                href="#continuous-coach-development"
                name="continuous-coach-development"
              >
                #
              </a>
            </H2Ref>
            <P>
              ReactJS Academy is made up of a{' '}
              <strong>group of developers & coaches</strong> that continuously
              strive improve their teaching skills and training material
            </P>
            <Ul>
              <Li>
                We improve the material and training resources collaboratively
                to build the most complete, progressive, and and up-to-date
                curriculum possible.
              </Li>
              <Li>
                We train together to improve our teaching skills in order to
                maximize the learning of the trainees.
              </Li>
              <Li>
                We share our expertice working at various top companies to
                create excellence in training, taking an open approach to new
                tecnologies without being prescriptive.
              </Li>
            </Ul>
            <p>
              <LinkButton
                target="_self"
                to="mailto:hello@reactjs.academy?subject=become a coach"
              >
                Become a coach
              </LinkButton>
            </p>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Card bg="darkGrey" border="shadow">
          <Row>
            <Col xs={12} md={5} mdOffset={1}>
              <Image src={ABOUT_CORPORATE} width="100%" />
            </Col>
            <Col xs={12} md={5}>
              <H2Ref>
                Corporate team training<a
                  href="#corporate-team-training"
                  name="corporate-team-training"
                >
                  #
                </a>
              </H2Ref>
              <Ul>
                <Li>Delivered at your office.</Li>
                <Li>You choose the dates.</Li>
                <Li>
                  Delivered by our parent company{' '}
                  <Link to="https://leanjs.com/training/private-react-redux-graphql-training">
                    LeanJS
                  </Link>
                </Li>
              </Ul>
              <p>
                <LinkButton
                  secondary
                  to="https://leanjs.com/training/private-react-redux-graphql-training"
                >
                  Visit LeanJS
                </LinkButton>
              </p>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingBootcampsSection />
    {/* <Section>
            <Grid>
                <Row>
                    <Col xs={12} md={5}>
                        <ImagePlaceholder />
                    </Col>
                    <Col xs={12} md={7}>
                        <H2>Adam Lancaster</H2>
                        <H3>
                            Senior Full-stack JavaScript Engineer at <Link to="https://nested.com">Nested</Link>
                        </H3>
                        <Blockquote>
                            "quote about 1) experience as dev 2) why/ motivation teaching"
                        </Blockquote>
                        <Ul>
                            <Li>
                                <Link to="https://github.com/">GitHub ???</Link>
                            </Li>
                            <Li>
                                <Link to="https://www.linkedin.com/in/adam-lancaster-9845a23a/">LinkedIn ???</Link>
                            </Li>
                        </Ul>
                    </Col>
                </Row>
            </Grid>
        </Section>
        <Section>
            <Grid>
                <Row>
                    <Col xs={12} md={7}>
                        <H2>Eva Hoffmann</H2>
                        <H3>
                           ??? at <Link to="https://sapient.com">Sapient</Link>
                        </H3>
                        <Blockquote>
                        "quote about 1) experience as dev 2) why/ motivation teaching"
                        </Blockquote>
                        <Ul>
                            <Li>
                                <Link to="https://github.com/">GitHub ??? </Link>
                            </Li>
                            <Li>
                                <Link to="https://www.linkedin.com/in/evamhoffmann/">LinkedIn</Link>
                            </Li>
                        </Ul>
                    </Col>
                    <Col xs={12} md={5}>
                        <ImagePlaceholder />
                    </Col>
                </Row>
            </Grid>
        </Section> */}
  </React.Fragment>
)

export default AboutUs
