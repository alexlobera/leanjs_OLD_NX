import React from 'react'
import { Element, scroller } from 'react-scroll'
import moment from 'moment'
import { Table, Thead, Tbody, Tr, Th, Td } from '../components/table'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { H2Ref, H2, P, H3, H4 } from '../components/text'
import LinkButton from '../components/buttons/LinkButton'
import {
  Link,
  DEFAULT_SCROLL_OFFSET,
  DEFAULT_SCROLL_DURATION,
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
  CurriculumGraphQL,
  MarketingCard,
} from '../components/curriculum'
import Header from '../components/layout/Header'
import {
  UpcomingTrainingSection,
  withUpcomingTrainings,
  selectUpcomingTrainings,
  selectNthTraining,
} from '../components/training'
import { Card } from '../components/elements'
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
import { Tick } from '../components/icons'
import { getURLParameter } from '../components/utils/url'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  PART_TIME,
  REACT_NATIVE,
  GRAPHQL_BOOTCAMP,
} from '../config/data'
import { LIST_LAYOUT } from '../components/curriculum/selectCurriculumLayout'

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
            duration: DEFAULT_SCROLL_DURATION,
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
    const { trainings } = this.props
    const trainingBootcamp = selectNthTraining({
      trainings,
      type: REACT_BOOTCAMP,
    })
    const trainingPartTime = selectNthTraining({ trainings, type: PART_TIME })
    const trainingAdvanced = selectNthTraining({
      trainings,
      type: ADVANCED_REACT,
    })
    console.log('trainingBootcamp', trainingBootcamp)
    console.log('trainingPartTime', trainingPartTime)
    console.log('trainingAdvanced', trainingAdvanced)

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
            <CallToActionNextTrainings
              left
              trainings={trainingBootcamp ? [trainingBootcamp] : []}
            />
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
                    <Li>
                      Discuss real-world projects with experienced developers
                    </Li>
                    <Li>Learn best practices</Li>
                    <Li>Be mentored by our expert coaches</Li>
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
                        <Th />
                        <Th type={REACT_BOOTCAMP}>
                          React
                          <br /> Bootcamp
                        </Th>
                        <Th type={ADVANCED_REACT}>Advanced React Bootcamp</Th>
                        <Th type={PART_TIME}>Part time course</Th>
                        <Th type={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</Th>
                        <Th type={REACT_NATIVE}>React Native training</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>ES6</Td>
                        <Td>
                          <Tick type={REACT_BOOTCAMP} />
                        </Td>
                        <Td />
                        <Td>
                          <Tick type={PART_TIME} />
                        </Td>
                        <Td />
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>Routing and Forms</Td>
                        <Td>
                          <Tick type={REACT_BOOTCAMP} />
                        </Td>
                        <Td />
                        <Td>
                          <Tick type={PART_TIME} />
                        </Td>
                        <Td />
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>Redux</Td>
                        <Td>
                          <Tick type={REACT_BOOTCAMP} />
                        </Td>
                        <Td />
                        <Td>
                          <Tick type={PART_TIME} />
                        </Td>
                        <Td />
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>Testing</Td>
                        <Td>
                          <Tick type={REACT_BOOTCAMP} />
                        </Td>
                        <Td />
                        <Td>
                          <Tick type={PART_TIME} />
                        </Td>
                        <Td />
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>Advanced Testing</Td>
                        <Td>
                          <Tick type={REACT_BOOTCAMP} />
                        </Td>
                        <Td>
                          <Tick type={ADVANCED_REACT} />
                        </Td>
                        <Td />
                        <Td>
                          <Tick type={GRAPHQL_BOOTCAMP} />
                        </Td>
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>GraphQL client</Td>
                        <Td>
                          <Tick type={REACT_BOOTCAMP} />
                        </Td>
                        <Td>
                          <Tick type={ADVANCED_REACT} />
                        </Td>
                        <Td>
                          <Tick type={PART_TIME} />
                        </Td>
                        <Td>
                          <Tick type={GRAPHQL_BOOTCAMP} />
                        </Td>
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>Advanced GraphQL client</Td>
                        <Td />
                        <Td />
                        <Td />
                        <Td>
                          <Tick type={GRAPHQL_BOOTCAMP} />
                        </Td>
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>GraphQL Server</Td>
                        <Td />
                        <Td />
                        <Td />
                        <Td>
                          <Tick type={GRAPHQL_BOOTCAMP} />
                        </Td>
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>Advanced React</Td>
                        <Td>
                          <Tick type={REACT_BOOTCAMP} />
                        </Td>
                        <Td>
                          <Tick type={ADVANCED_REACT} />
                        </Td>
                        <Td />
                        <Td />
                        <Td />
                      </Tr>
                      <Tr>
                        <Td>Animations & Gestures</Td>
                        <Td />
                        <Td />
                        <Td />
                        <Td />
                        <Td>
                          <Tick type={REACT_NATIVE} />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td />
                        <Td>
                          <LinkButton
                            secondary
                            to="/react-redux-graphql-bootcamp"
                          >
                            React Bootcamp
                          </LinkButton>
                        </Td>
                        <Td>
                          <LinkButton
                            secondary
                            to="/advanced-react-redux-graphql-bootcamp"
                          >
                            Advanced React
                          </LinkButton>
                        </Td>
                        <Td>
                          <LinkButton
                            secondary
                            to="/react-redux-graphql-part-time-course"
                          >
                            Part Time
                          </LinkButton>
                        </Td>
                        <Td>
                          <LinkButton secondary to="/graphql-bootcamp">
                            GraphQL Bootcamp
                          </LinkButton>
                        </Td>
                        <Td>
                          <LinkButton secondary to="/react-native-bootcamp">
                            React Native
                          </LinkButton>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <MarketingCard
                    heading="Looking for training for your whole team?"
                    text="Private team training, located in your offices anywhere in the world, based on our proven curriculum for React and GraphQL."
                    to="/corporate-team-training/"
                    buttonText="Corporate Team Training"
                  />
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
                    <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
                    <TabItem name={ADVANCED_REACT}>
                      Advanced React Bootcamp
                    </TabItem>
                    <TabItem name={PART_TIME}>Part-time Course</TabItem>
                    <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
                    <TabItem name={REACT_NATIVE}>React Native Training</TabItem>
                  </TabList>
                  <TabContent>
                    <ContentItem name={REACT_BOOTCAMP}>
                      <P>
                        <strong>
                          On completion of the React Bootcamp each student will:
                        </strong>
                      </P>
                      <Ul>
                        <Li>
                          Understand the core principles and libraries to build
                          production-ready React applications using:{' '}
                          <code>
                            react, react-router, styled-components,
                            styled-system, storybook, redux, react-redux,
                            graphql, react-apollo, TypeScript
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
                      <H4>Full course curriculum:</H4>
                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          {trainingBootcamp && (
                            <CurriculumBootcamp
                              layout={LIST_LAYOUT}
                              enableToggle={true}
                              showTitle={false}
                              showLinkToCurriculum={false}
                              layout={LIST_LAYOUT}
                              marketingCard={
                                <MarketingCard
                                  heading="Next React Bootcamp"
                                  text={`Take your career to the next level and master React in just 1 week!`}
                                  to={trainingBootcamp.toPath}
                                  buttonText={`${
                                    trainingBootcamp.city
                                  } React Bootcamp, ${moment(
                                    trainingBootcamp.startDate
                                  ).format('MMM DD')}  `}
                                />
                              }
                            />
                          )}
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={ADVANCED_REACT}>
                      <P>
                        <strong>
                          On completion of the Advanced React Bootcamp each
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
                      <H4>Full course curriculum:</H4>
                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          {trainingAdvanced && (
                            <CurriculumAdvancedReact
                              enableToggle={true}
                              showTitle={false}
                              layout={LIST_LAYOUT}
                              showLinkToCurriculum={false}
                              marketingCard={
                                <MarketingCard
                                  heading="Next React Advanced Training"
                                  text={`You can master Advanced React, Redux, and GraphQL - in just 3 days!`}
                                  to={trainingAdvanced.pathUrl}
                                  buttonText={`${
                                    trainingAdvanced.city
                                  } React Advanced, ${moment(
                                    trainingAdvanced.startDate
                                  ).format('MMM DD')}  `}
                                />
                              }
                            />
                          )}
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={GRAPHQL_BOOTCAMP}>
                      <P>
                        <strong>
                          On completion of the GraphQL Bootcamp each student
                          will:
                        </strong>
                      </P>
                      <Ul>
                        <Li>
                          Understand how to build a production-ready GraphQL API
                          using Nodejs
                        </Li>
                        <Li>
                          Learn how to wrap an existent REST API with GraphQL
                        </Li>
                        <Li>
                          Comprehend how to connect GraphQL to different data
                          sources like MongoDB
                        </Li>
                        <Li>
                          Understand the best practices to leverage GraphQL in
                          React in real-world production-ready complex
                          applications
                        </Li>
                      </Ul>
                      <H4>Full course curriculum:</H4>
                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          <CurriculumGraphQL
                            enableToggle={true}
                            showTitle={false}
                            layout={LIST_LAYOUT}
                          />
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={REACT_NATIVE}>
                      <P>
                        <strong>
                          On completion of the React Native training each
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
                      <H4>Full course curriculum:</H4>
                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          <CurriculumReactNative
                            enableToggle={true}
                            showTitle={false}
                            layout={LIST_LAYOUT}
                          />
                        </Col>
                      </Row>
                    </ContentItem>

                    <ContentItem name={PART_TIME}>
                      <P>
                        <strong>
                          On completion of the React Bootcamp each student will:
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
                      <H4>Full course curriculum:</H4>

                      <Row>
                        <Col lg={1} lgOffset={1} />
                        <Col lg={9}>
                          <CurriculumPartTime
                            enableToggle={true}
                            showTitle={false}
                            layout={LIST_LAYOUT}
                            marketingCard={
                              trainingPartTime && (
                                <MarketingCard
                                  heading="Next React Part time Training"
                                  text={`Next React part-time course starts on ${moment(
                                    trainingPartTime.startDate
                                  ).format('MMM DD')} in ${
                                    trainingPartTime.city
                                  }`}
                                  to={trainingPartTime.toPath}
                                  buttonText={`${
                                    trainingPartTime.city
                                  } React part-time ${moment(
                                    trainingPartTime.startDate
                                  ).format('MMM DD')}  `}
                                />
                              )
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
        <UpcomingTrainingSection trainings={trainings} />
      </React.Fragment>
    )
  }
}

export default withUpcomingTrainings()(Curriculum)
