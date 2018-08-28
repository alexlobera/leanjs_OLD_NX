import React from 'react'
import { Element, scroller } from 'react-scroll'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { H2Ref, H2, P, H3 } from '../components/text'
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
  CurriculumAdvancedReact,
  MarketingCard,
} from '../components/curriculum'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'
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

const LinkScroll = props => (
  <DefaultLinkScroll {...props} smooth={true} duration={500} />
)

const TAB_REACT_BOOTCAMP = 'react-bootcamp'
const TAB_REACT_NATIVE = 'react-native'
const TAB_PART_TIME = 'part-time'
const TAB_ADVANCED_REACT = 'advanced-react'

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
          links={[
            { text: 'Differences in our courses ', to: 'differences' },
            { text: 'Full curriculums', to: 'curriculum' },
          ]}
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
                    Bootcamps/part-time courses - what's the difference?{' '}
                    <Link to="#differences" name="differences">
                      #
                    </Link>
                  </H2Ref>
                </Col>
              </Row>
              <Row>
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
                      onClick={() => this.setActive(TAB_ADVANCED_REACT)}
                      to="curriculum"
                    >
                      See React Native curriculum
                    </LinkScroll>
                  </P>
                  <H3>Advanced React bootcamp</H3>
                  <P>
                    Our Advanced React bootcamp is the quickest way to go from
                    React developer to senior React developer.
                  </P>
                  <P>
                    <LinkScroll
                      onClick={() => this.setActive(TAB_ADVANCED_REACT)}
                      to="curriculum"
                    >
                      See Advanced React curriculum
                    </LinkScroll>
                  </P>
                  <H3>React part-time course</H3>
                  <P>
                    The part-time course has a condensed version of the React
                    bootcamp curriculum by excluding the advanced sections.
                    Ideal for those who value flexible learning and can’t miss a
                    day at work.
                  </P>
                  <P>
                    <LinkScroll
                      onClick={() => this.setActive(TAB_PART_TIME)}
                      to="curriculum"
                    >
                      See React part-time course curriculum
                    </LinkScroll>
                  </P>
                </Col>
                <Col md={3} mdOffset={1}>
                  <Image
                    style={{ marginBottom: '36px' }}
                    src={CURRICULUM_FULL_TRAINING_IMG}
                    width="100%"
                  />
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
                <Element name="curriculum" />
                <P>Choose a curriculum:</P>
                <Tabs onChange={this.setActive} active={this.state.active}>
                  <TabList>
                    <TabItem name={TAB_REACT_BOOTCAMP}>
                      React 1-week bootcamp
                    </TabItem>
                    <TabItem name={TAB_ADVANCED_REACT}>
                      Advanced React bootcamp
                    </TabItem>
                    <TabItem name={TAB_REACT_NATIVE}>
                      React Native bootcamp
                    </TabItem>
                    <TabItem name={TAB_PART_TIME}>Part-time course</TabItem>
                  </TabList>
                  <TabContent>
                    <ContentItem name={TAB_REACT_BOOTCAMP}>
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
                            react, react-router, styled-components, storybook,
                            redux, react-redux, redux-saga, reselect, graphql,
                            apollo-client
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
                                Day 4: FP & advanced React patterns I, GraphQL,
                                Server-side rendering
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="day5">
                                Day 5: Testing in React, Advanced React patterns
                                II, FP & advanced Redux
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
                            marketingCard={
                              <MarketingCard
                                text="Next React bootcamp starts on October 7th, 2018 in Lisbon"
                                to="/react-redux-graphql-bootcamp-lisbon"
                                buttonText="Next bootcamp >>"
                              />
                            }
                          />
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={TAB_ADVANCED_REACT}>
                      <H2>Advanced React bootcamp curriculum</H2>
                      <P>
                        <strong>
                          On completion of the advanced React bootcamp each
                          student will:
                        </strong>
                      </P>
                      <Ul>
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
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          <CurriculumAdvancedReact
                            showToggle={false}
                            showTitle={false}
                            list={true}
                            marketingCard={
                              <MarketingCard
                                text="Next Advanced React bootcamp starts on August 23th, 2018 in London"
                                to="/advanced-react-redux-graphql-bootcamp-london"
                                buttonText="Next Advanced React bootcamp >>"
                              />
                            }
                          />
                        </Col>
                      </Row>
                    </ContentItem>
                    <ContentItem name={TAB_REACT_NATIVE}>
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
                                Session 9: Advanced React Patterns
                              </LinkScroll>
                            </Li>
                            <Li>
                              <LinkScroll to="session10">
                                Session 10: React mini hackathon
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
                            marketingCard={
                              <MarketingCard
                                text="Next part-time course starts on Oct 16nd, 2018 in London"
                                to="/react-redux-training-london"
                                buttonText="Next part-time >>"
                              />
                            }
                          />
                        </Col>
                      </Row>
                    </ContentItem>
                  </TabContent>
                </Tabs>
              </Col>
            </Row>
          </Grid>
        </Section>
        <UpcomingTrainingSection />
      </React.Fragment>
    )
  }
}

export default Curriculum
