import React from 'react'
import { Element, scroller } from 'react-scroll'
import moment from 'moment'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { H2Ref, H2, P, H3 } from '../components/text'
import {
  Link,
  DEFAULT_SCROLL_OFFSET,
  Tabs,
  TabList,
  TabItem,
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
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
import {
 Tick
} from '../components/icons'
import { getURLParameter } from '../components/utils/url'
import {
  selectFirstTraining,
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  PART_TIME,
  REACT_NATIVE
} from '../config/data'

const trainingBootcamp = selectFirstTraining(REACT_BOOTCAMP)
const trainingPartTime = selectFirstTraining(PART_TIME)
const trainingAdvanced = selectFirstTraining(ADVANCED_REACT)

class Curriculum extends React.Component {
  state = {
    active: REACT_BOOTCAMP,
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
            offset: DEFAULT_SCROLL_OFFSET,
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
            { text: 'Differences in our courses ', to: '#differences' },
            { text: 'Full curriculums', to: '#curriculum' },
          ]}
          bgImg="full-time"
        />
        <TopSection>
          <Grid>
            <CallToActionNextTrainings left trainings={[trainingBootcamp]} />
            <Card border="shadow">
              <Row>
                <Col lg={10} lgOffset={1}>
                  <H2Ref>
                    Our courses - what are the differences?{' '}
                    <Link to="#differences" name="differences">
                      #
                    </Link>
                  </H2Ref>
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
              <Row>
              <Col lg={10} lgOffset={1}>
              <Table>
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>One week bootcamp</Th>
                    <Th>Advanced bootcamp</Th>
                    <Th>Native training</Th>
                    <Th>Part time course</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>ES6</Td>
                    <Td><Tick type={REACT_BOOTCAMP}/></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td><Tick type={PART_TIME}/></Td>
                  </Tr>
                  <Tr>
                    <Td>Routing in React</Td>
                    <Td><Tick type={REACT_BOOTCAMP}/></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td><Tick type={PART_TIME}/></Td>
                  </Tr>
                  <Tr>
                    <Td>Forms and authentication</Td>
                    <Td><Tick type={REACT_BOOTCAMP}/></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td><Tick type={PART_TIME}/></Td>
                  </Tr>
                  <Tr>
                    <Td>Testing in React</Td>
                    <Td><Tick type={REACT_BOOTCAMP}/></Td>
                    <Td><Tick type={ADVANCED_REACT}/></Td>
                    <Td></Td>
                    <Td><Tick type={PART_TIME}/></Td>
                  </Tr>
                  <Tr>
                    <Td>GraphQL</Td>
                    <Td><Tick type={REACT_BOOTCAMP}/></Td>
                    <Td><Tick type={ADVANCED_REACT}/></Td>
                    <Td></Td>
                    <Td><Tick type={PART_TIME}/></Td>
                  </Tr>
                  <Tr>
                    <Td>Adv. React patterns</Td>
                    <Td><Tick type={REACT_BOOTCAMP}/></Td>
                    <Td><Tick type={ADVANCED_REACT}/></Td>
                    <Td></Td>
                    <Td><Tick type={PART_TIME}/></Td>
                  </Tr>
                  <Tr>
                    <Td>Animations</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td><Tick type={REACT_NATIVE}/></Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Gestures</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td><Tick type={REACT_NATIVE}/></Td>
                    <Td></Td>
                  </Tr>
                </Tbody>
              </Table>

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
                <H2>Choose a curriculum:</H2>
                <Tabs onChange={this.setActive} active={this.state.active}>
                  <TabList>
                    <TabItem name={REACT_BOOTCAMP}>
                      React 1-week bootcamp
                    </TabItem>
                    <TabItem name={ADVANCED_REACT}>
                      Advanced React bootcamp
                    </TabItem>
                    <TabItem name={REACT_NATIVE}>
                      React Native bootcamp
                    </TabItem>
                    <TabItem name={PART_TIME}>Part-time course</TabItem>
                  </TabList>
                  <TabContent>
                    <ContentItem name={REACT_BOOTCAMP}>
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
                            react-apollo
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
                        <Li>
                          Understand how to use GraphQL on the client-side to
                          improve your React apps development and performance
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
                              <Link to="#day1">
                                Day 1 (half day): React 101 and JS fundamentals
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#day2">
                                Day 2: ES6 & ESNEXT, Thinking in React, Routing
                                & Data Fetching
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#day3">
                                Day 3: Forms, Authentication, Styling in React
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#day4">
                                Day 4: Redux, and Testing Principles
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#day5">
                                Day 5: FP & advanced React patterns I, GraphQL,
                                Server-side rendering
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#day6">
                                Day 6: Testing in React, Advanced React patterns
                                II, FP & advanced Redux
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#day7">Day 7: </Link>
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
                            showLinkToCurriculum={false}
                            list={true}
                            marketingCard={
                              <MarketingCard
                                text={`Next React bootcamp starts on ${moment(
                                  trainingBootcamp.dateStartsOn
                                ).format('D MMM, YYYY')} in ${
                                  trainingBootcamp.city
                                }`}
                                to={trainingBootcamp.pathUrl}
                                buttonText="Next React bootcamp >>"
                              />
                            }
                          />
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={ADVANCED_REACT}>
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
                        <Li>
                          Understand how to use GraphQL on the client-side to
                          improve your React apps development and performance
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
                                text={`Next advanced React bootcamp starts on ${moment(
                                  trainingAdvanced.dateStartsOn
                                ).format('D MMM, YYYY')} in ${
                                  trainingAdvanced.city
                                }`}
                                to={trainingAdvanced.pathUrl}
                                buttonText="Next advanced React bootcamp >>"
                              />
                            }
                          />
                        </Col>
                      </Row>
                    </ContentItem>
                    <ContentItem name={REACT_NATIVE}>
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

                    <ContentItem name={PART_TIME}>
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
                            react, react-router, redux, react-redux, storybook,
                            styled-components, jest
                          </code>
                        </Li>
                        <Li>
                          Understand the fundamentals of unit testing and how to
                          apply it to JavaScript
                        </Li>
                        <Li>
                          Learn some of the best practices for building
                          real-world production-ready React applications
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
                              <Link to="#session1">Session 1: ES6</Link>
                            </Li>
                            <Li>
                              <Link to="#session2">
                                Session 2: Thinking in React
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session3">
                                Session 3: Routing & Data Fetching
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session4">
                                Session 4: Forms & Auth
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session5">
                                Session 5: Recap React Fundamentals
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session6">
                                Session 6: Styling in React
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session7">
                                Session 7: Introduction to Redux
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session8">
                                Session 8: Introduction to Testing in JS
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session9">
                                Session 9: Advanced React Patterns
                              </Link>
                            </Li>
                            <Li>
                              <Link to="#session10">
                                Session 10: React mini
                              </Link>
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
                                text={`Next React part-time course starts on ${moment(
                                  trainingPartTime.dateStartsOn
                                ).format('D MMM, YYYY')} in ${
                                  trainingPartTime.city
                                }`}
                                to={trainingPartTime.pathUrl}
                                buttonText="Next React part-time >>"
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
