import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { H2Ref, H2, P, H3, Span } from '../components/text'
import {
  Link,
  LinkScroll as DefaultLinkScroll,
  Tabs,
  TabList,
  TabItem,
  TabLabel,
  TabContent,
  ContentItem,
} from '../components/navigation'
import {
  CurriculumReactNative,
  CurriculumBootcamp,
  CurriculumPartTime,
} from '../components/curriculum'
import Header from '../components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
} from '../components/training'
import { Card } from '../components/elements'
import CallToActionRow from '../components/layout/CallToActionRow'
import { Image } from '../components/elements'
import {
  NotBegginersIcon,
  RunFastIcon,
  TargetIcon,
  TickBadgeIcon,
  BulletIcon,
  PeopleNetWorkIcon,
} from '../components/icons'
import { getURLParameter } from '../components/utils/url'
import { CURRICULUM_FULL_TRAINING_IMG } from '../config/images'
import { CALLTOACTIONRED } from '../config/styles'
import { SCREEN_XS_MAX, SCREEN_SM_MIN } from '../components/utils'

const LinkScroll = props => (
  <DefaultLinkScroll {...props} smooth={true} duration={500} />
)

const TAB_REACT_BOOTCAMP = 'react-bootcamp'
const TAB_REACT_NATIVE = 'react-native'
const TAB_PART_TIME = 'part-time'

const CardTraining = styled.div`
  margin-top: 36px;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 8px 0;
    }
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    padding: 50px 8px;
    border: solid 4px ${CALLTOACTIONRED};
    margin-bottom: 72px;
    position: relative;
    text-align: center;
  }
`
const BottomCallToActionRow = styled(Row)`
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-top: 16px;
    a {
      display: block;
      margin: 8px 0;
    }
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    text-align: center;
    position: absolute;
    bottom: -26px;
    left: 0;
    width: 100%;
  }
`
class Curriculum extends React.Component {
  state = {
    active: TAB_REACT_BOOTCAMP,
  }

  componentDidMount() {
    const defaultTab = getURLParameter('tab')
    const defaultSection = getURLParameter('section')
    if (defaultTab || defaultSection) {
      this.setActive(defaultTab)
      setTimeout(
        () =>
          scroller.scrollTo(defaultSection || 'curriculum', {
            smooth: true,
            duration: 500,
          }),
        200
      )
    }
  }

  setActive = active => {
    this.setState({ active })
  }

  render() {
    return (
      <React.Fragment>
        <Header
          titleLines={['Full ReactJS Academy curriculum']}
          subtitle="We're proud to say that our curriculum is the most<br />complete and up-to-date on the market - there really is<br />nowhere better to learn React."
          bgImg="full-time"
        />
        <TopSection>
          <Grid>
            <CallToActionRow left>
              <Col xs={12} sm={5} smOffset={1}>
                <LinkButton
                  cta
                  to="/react-redux-graphql-bootcamp-london"
                  children="Next React Bootcamp: 20-25 Aug, London >>"
                />
              </Col>
            </CallToActionRow>
            <Card border="shadow">
              <Row>
                <Col lg={10} lgOffset={1}>
                  <H2Ref>
                    Bootcamps/part-time course - what's the difference?{' '}
                    <Link to="#difference" name="difference">
                      #
                    </Link>
                  </H2Ref>
                </Col>
              </Row>
              <Row>
                <Col md={3} mdOffset={1}>
                  <Image
                    style={{ marginBottom: '36px' }}
                    src={CURRICULUM_FULL_TRAINING_IMG}
                    width="100%"
                  />
                </Col>
                <Col md={6} mdOffset={1}>
                  <H3>React bootcamp</H3>
                  <P>
                    Our React bootcamp has the most complete curriculum on the
                    market, with a syllabus that covers:
                  </P>
                  <Ul>
                    <Li>Server-side rendering</Li>
                    <Li>Advanced React patterns</Li>
                    <Li>Advanced Redux</Li>
                    <Li>Functional programming</Li>
                    <Li>Hackathon to consolidate knowleadge</Li>
                  </Ul>
                  <P>
                    <LinkScroll
                      onClick={() => this.setActive(TAB_REACT_BOOTCAMP)}
                      to="curriculum"
                    >
                      See React bootcamp curriculum
                    </LinkScroll>
                  </P>
                  <H3>React Native bootcamp</H3>
                  <P>
                    Our React Native bootcamp is the smoothest transition
                    between React and Native.
                  </P>
                  <Ul>
                    <Li>React Native foundation</Li>
                    <Li>Native animations</Li>
                    <Li>Gestures</Li>
                  </Ul>
                  <P>
                    <LinkScroll
                      onClick={() => this.setActive(TAB_REACT_NATIVE)}
                      to="curriculum"
                    >
                      See React Native curriculum
                    </LinkScroll>
                  </P>
                  <H3>React part-time course</H3>
                  <P>
                    The part-time course has a condensed version of the React
                    bootcamp curriculum, ideal for those who value flexible
                    learning and can’t miss a day at work.
                  </P>
                  <P>
                    <LinkScroll
                      onClick={() => this.setActive(TAB_PART_TIME)}
                      to="curriculum"
                    >
                      See React part-time course curriculum
                    </LinkScroll>
                  </P>
                  <H3>With all courses you will:</H3>
                  <Ul>
                    <Li>Build production ready React applications</Li>
                    <Li>Discuss real-world projects</Li>
                    <Li>Learn best practices</Li>
                    <Li>Be mentored by the our expert coaches</Li>
                    <Li>Join our alumni community</Li>
                    <Li>Stay ahead in modern development</Li>
                  </Ul>
                </Col>
              </Row>
            </Card>
          </Grid>
        </TopSection>
        <Section>
          <Grid>
            <Row>
              <Col lg={10} lgOffset={1}>
                <Tabs onChange={this.setActive} active={this.state.active}>
                  <TabList>
                    <TabLabel>Choose a curriculum:</TabLabel>
                    <TabItem name={TAB_REACT_BOOTCAMP}>
                      React 1-week bootcamp
                    </TabItem>
                    <TabItem name={TAB_REACT_NATIVE}>
                      React Native bootcamp
                    </TabItem>
                    <TabItem name={TAB_PART_TIME}>Part-time course</TabItem>
                  </TabList>
                  <TabContent>
                    <ContentItem name={TAB_REACT_BOOTCAMP}>
                      <Element name="curriculum" />
                      <H2>React 1-week bootcamp curriculum</H2>
                      <P>
                        <strong>
                          On completion of the React bootcamp each student will:
                        </strong>
                      </P>
                      <Ul>
                        <Li>
                          Understand the core principles and libraries of the
                          React ecosystem{' '}
                          <code>
                            react, react-router, redux, react-redux, graphql,
                            apollo-client, styled-components
                          </code>
                        </Li>
                        <Li>
                          Be able to develop and test complex and reliable React
                          applications: <code>enzyme, jest</code>
                        </Li>
                        <Li>
                          Comprehend modern front-end JavaScript:{' '}
                          <code>Functional Programming, Webpack</code>
                        </Li>
                        <Li>
                          Understand the best practices and patterns for
                          building real-world production-ready React
                          applications
                        </Li>
                      </Ul>
                      <Row>
                        <Col md={2}>
                          <Ul inline>
                            <Li>Jump to:</Li>
                          </Ul>
                        </Col>
                        <Col md={10}>
                          <Ul unstyled>
                            <Li>
                              <LinkScroll to="day1">
                                Day 1: ES6 & ESNEXT, Thinking in React, Routing
                                & Data Fetching
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="day2">
                                Day 2: Forms, Authentication, Styling in React
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="day3">
                                Day 3: Redux, and Testing Principles
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="day4">
                                Day 4: Functional Programming, Advanced Patterns
                                I, GraphQL, and Advanced Redux
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="day5">
                                Day 5: Testing in React, Advanced React Patterns
                                II, Server-side Rendering
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="day6">
                                Day 6: Hackathon
                              </LinkScroll>
                            </Li>
                          </Ul>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          <CurriculumBootcamp
                            showToggle={false}
                            showTitle={false}
                            list={true}
                          />
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={TAB_REACT_NATIVE}>
                      <Element name="curriculum" />
                      <H2>React Native bootcamp curriculum</H2>
                      <P>
                        <strong>
                          On completion of the React Native bootcamp each
                          student will:
                        </strong>
                      </P>
                      <Ul>
                        <Li>
                          Understand the core user interactions in React Native
                        </Li>
                        <Li>
                          Be able to create reusable and maintanable React
                          Native UI
                        </Li>
                        <Li>
                          Understand the best practices and patterns for
                          building real-world production-ready React Native
                          applications
                        </Li>
                      </Ul>

                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          <CurriculumReactNative
                            showToggle={false}
                            showTitle={false}
                            list={true}
                          />
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={TAB_PART_TIME}>
                      <Element name="curriculum" />
                      <H2>React part-time course curriculum</H2>
                      <P>
                        <strong>
                          On completion of the React bootcamp each student will:
                        </strong>
                      </P>
                      <Ul>
                        <Li>
                          Understand the core principles and libraries of the
                          React ecosystem{' '}
                          <code>
                            react, react-router, redux, react-redux, graphql,
                            apollo-client, styled-components
                          </code>
                        </Li>
                        <Li>
                          Be able to develop and test complex and reliable React
                          applications: <code>enzyme, jest</code>
                        </Li>
                        <Li>
                          Understand some of the best practices and patterns for
                          building real-world production-ready React
                          applications
                        </Li>
                      </Ul>
                      <Row>
                        <Col md={2}>
                          <Ul inline>
                            <Li>Jump to:</Li>
                          </Ul>
                        </Col>
                        <Col md={10}>
                          <Ul unstyled>
                            <Li>
                              <LinkScroll to="session1">
                                Session 1: ES6
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session2">
                                Session 2: Thinking in React
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session3">
                                Session 3: Routing & Data Fetching
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session4">
                                Session 4: Forms & Auth
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session5">
                                Session 5: Recap React Fundamentals
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session6">
                                Session 6: Styling in React
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session7">
                                Session 7: Introduction to Redux
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session8">
                                Session 8: Introduction to Testing in JS
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session9">
                                Session 9: Testing in React
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session10">
                                Session 10: Advanced React Patterns
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session11">
                                Session 11: GraphQL & Apollo Client
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session12">
                                Session 12: React mini hackathon
                              </LinkScroll>
                            </Li>
                          </Ul>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          <CurriculumPartTime
                            showToggle={false}
                            showTitle={false}
                            list={true}
                          />
                        </Col>
                      </Row>
                    </ContentItem>
                  </TabContent>
                </Tabs>
                <CardTraining>
                  <Span>
                    Whether you need rapid, flexible or React Native training,
                    we’ve got it covered….
                  </Span>
                  <BottomCallToActionRow>
                    <Col md={4}>
                      <LinkButton
                        cta
                        to="/react-redux-graphql-bootcamp"
                        children="React bootcamp >>"
                      />
                    </Col>
                    <Col md={4}>
                      <LinkButton
                        to="/react-native-bootcamp"
                        children="React Native training >>"
                      />
                    </Col>
                    <Col md={4}>
                      <LinkButton
                        to="/react-redux-graphql-part-time-course"
                        children="Part-time course >>"
                      />
                    </Col>
                  </BottomCallToActionRow>
                </CardTraining>
              </Col>
            </Row>
          </Grid>
        </Section>
      </React.Fragment>
    )
  }
}

export default Curriculum
