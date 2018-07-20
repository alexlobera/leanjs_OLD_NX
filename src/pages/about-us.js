import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Card from '../components/layout/Card'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H1, H2, H2Ref, H3 } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import ContactForm from '../components/form/Contact'
import Video from '../components/elements/Video'
import { Blockquote } from '../../node_modules/glamorous'

const AboutUs = () => (
  <div>
    <Section>
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={2} md={8}>
            <H1>About us</H1>
            <Ul inline>
              <Li>
                <a href="#coach-profiles">Coach profiles</a>
              </Li>
              <Li>|</Li>
              <Li>
                <a href="#continuous-coach-development">
                  Continuous coach development
                </a>
              </Li>
              <Li>|</Li>
              <Li>
                <a href="#corporate-training">Corporate team training</a>
              </Li>
            </Ul>
            <H2>
              Our coaches are expert, every day developers who will mentor you
              throughout your ReactJS Academy journey
            </H2>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid style={{ textAlign: 'center' }}>
        <H2>Our core coaches - professional developers who love to teach</H2>
        <H3>
          Our core coaches are the builders behind{' '}
          <Link to="https://leanjs.com">LeanJS</Link> - working developers who
          are React ecoysystem
        </H3>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <H2Ref>
              Alex Lobera{' '}
              <a name="coach-profiles" href="#coaches-profile">
                #
              </a>
            </H2Ref>
            <H3>
              Tech Lead at <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
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
            <Blockquote>
              "Teaching other developers is super rewarding. I love sharing what
              I've learned in my career to help others grow and give back. I
              think is what really makes our industry move forward."
            </Blockquote>
            <Ul inline>
              <Li>
                <Link to="https://github.com/alexlbr">GitHub profile</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://uk.linkedin.com/in/alexlobera">
                  LinkedIn profile
                </Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://twitter.com/alex_Lobera">Twitter</Link>
              </Li>
            </Ul>
          </Col>
          <Col xs={12} md={5}>
            <ImagePlaceholder />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <ImagePlaceholder />
          </Col>
          <Col xs={12} md={7}>
            <H2>Richard Moss</H2>
            <H3>
              Senior React Engineer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
            <Blockquote>
              Collaboratively working with developers to help them understand
              concepts such as the functional programming paradigm helps them
              take their skills to the next level - and I learn a lot too!
            </Blockquote>
            <Ul inline>
              <Li>
                <Link to="https://www.linkedin.com/in/richard-moss-55881b82/">
                  GitHub profile
                </Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://github.com/ric9176">LinkedIn profile</Link>
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
            <H2>Horacio Herrera</H2>
            <H3>
              Designer and Developer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
            <Ul>
              <Li>
                Holds a Digital Design degree and is a self-taught Developer
              </Li>
              <Li>Works with cross-functional product teams since 2010</Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/JavaScript-Barcelona/">
                  JavaScript Barcelona Meetup
                </Link>
              </Li>
            </Ul>
            <Blockquote>
              "I love teaching and see other developers grow... "
            </Blockquote>
            <Ul inline>
              <Li>
                <Link to="https://github.com/horacioh">GitHub profile</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://www.linkedin.com/in/horacioherrera/">
                  LinkedIn profile
                </Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://twitter.com/hhg2288">Twitter</Link>
              </Li>
            </Ul>
          </Col>
          <Col xs={12} md={5}>
            <ImagePlaceholder />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <ImagePlaceholder />
          </Col>
          <Col xs={12} md={7}>
            <H2>Will Voelcker</H2>
            <H3>
              Senior Full-stack JavaScript Engineer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </H3>
            <Blockquote>
              Collaboratively working with developers to help them understand
              concepts such as the functional programming paradigm helps them
              take their skills to the next level - and I learn a lot too!
            </Blockquote>
            <Ul inline>
              <Li>
                <Link to="https://github.com/wvoelcker">GitHub profile</Link>
              </Li>
              <Li>|</Li>
              <Li>
                <Link to="https://www.linkedin.com/in/willv/">
                  LinkedIn profile
                </Link>
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
            <H2Ref>
              How we continuously improve{' '}
              <a
                href="#continuous-coach-development"
                name="continuous-coach-development"
              >
                #
              </a>
            </H2Ref>
            <p>
              ReactJS Academy is made of a{' '}
              <strong>group of developers & teachers</strong> that continuously
              improve their teaching skills and training material
            </p>
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
                We share our expertice working at different top companies to
                create the best training, as well as the less opinionated as
                possible.
              </Li>
            </Ul>
            <p>
              <LinkButton
                target="_self"
                extraLarge
                to="mailto:hello@leanjs.com?subject=become a coach"
              >
                Become a coach
              </LinkButton>
            </p>
          </Col>
          <Col xs={12} md={5}>
            <ImagePlaceholder />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <ImagePlaceholder />
          </Col>
          <Col xs={12} md={7}>
            <H2Ref>
              Corporate team training<a
                href="#corporate-training"
                name="corporate-training"
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
                extraLarge
                to="https://leanjs.com/training/private-react-redux-graphql-training"
              >
                Visit LeanJS
              </LinkButton>
            </p>
          </Col>
        </Row>
      </Grid>
    </Section>

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
                                <Link to="https://github.com/">GitHub profile ???</Link>
                            </Li>
                            <Li>
                                <Link to="https://www.linkedin.com/in/adam-lancaster-9845a23a/">LinkedIn profile ???</Link>
                            </Li>
                        </Ul>
                    </Col>
                </Row>
            </Grid>
        </Section>
        <Section color="lightGrey">
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
                                <Link to="https://github.com/">GitHub profile ??? </Link>
                            </Li>
                            <Li>
                                <Link to="https://www.linkedin.com/in/evamhoffmann/">LinkedIn profile</Link>
                            </Li>
                        </Ul>
                    </Col>
                    <Col xs={12} md={5}>
                        <ImagePlaceholder />
                    </Col>
                </Row>
            </Grid>
        </Section> */}
  </div>
)

export default AboutUs
