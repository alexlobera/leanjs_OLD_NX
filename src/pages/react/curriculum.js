import React from 'react'
import { Element, scroller } from 'react-scroll'
import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { Table, Thead, Tbody, Tr, Th, Td } from 'src/components/table'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import Ul, { Li } from 'src/components/layout/Ul'
import { H2Ref, H2, P, H4, H5 } from 'src/components/text'
import LinkButton from 'src/components/buttons/LinkButton'
import {
  Link,
  DEFAULT_SCROLL_OFFSET,
  DEFAULT_SCROLL_DURATION,
} from 'src/components/navigation'
import {
  Tabs,
  TabList,
  TabItem,
  TabContent,
  ContentItem,
} from 'src/components/layout/Tabs'
import {
  CurriculumReactNative,
  CurriculumBootcamp,
  CurriculumPartTime,
  CurriculumAdvancedReact,
  MarketingCard,
} from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  TrainingCard,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import CallToActionNextTrainings from 'src/components/layout/CallToActionNextTrainings'
import { Tick } from 'src/components/icons'
import { getURLParameter } from 'src/components/utils/url'
import { formatUTC } from 'src/components/utils'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  PART_TIME,
  REACT_NATIVE,
} from 'src/config/data'
import { LIST_LAYOUT } from 'src/components/curriculum/selectCurriculumLayout'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_BLUE_DARK } from '../../config/styles'

class ReactCurriculum extends React.Component {
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
    return (
      <Layout>
        {({ trainings }) => {
          const trainingBootcamp = selectNthTraining({
            trainings,
            type: REACT_BOOTCAMP,
          })
          const trainingPartTime = selectNthTraining({
            trainings,
            type: PART_TIME,
          })
          const trainingAdvanced = selectNthTraining({
            trainings,
            type: ADVANCED_REACT,
          })
          return (
            <React.Fragment>
              <Breadcrumb
                path={[
                  { to: '/', label: 'Home' },
                  {
                    to: '/react',
                    label: 'React',
                  },
                  {
                    to: '/react/curriculum',
                    label: 'Curriculum',
                  },
                ]}
              />
              <Header
                titleLines={['React curriculum']}
                subtitle="We're proud to say that our curriculum is the most<br />complete and up-to-date on the market - there really is<br />nowhere better to learn React."
                links={[
                  { text: 'Differences in our courses ', to: '#differences' },
                  { text: 'Full curriculums', to: '#curriculum' },
                ]}
                bgImageName={BOOTCAMP}
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
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={10} lgOffset={1}>
                        <Table>
                          <Thead>
                            <Tr>
                              <Th />
                              <Th type={REACT_BOOTCAMP}>React Bootcamp</Th>
                              <Th type={ADVANCED_REACT}>Advanced React</Th>
                              <Th type={PART_TIME}>Part Time </Th>
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
                            </Tr>
                            <Tr>
                              <Td>Testing</Td>
                              <Td>
                                <Tick type={REACT_BOOTCAMP} />
                              </Td>
                              <Td>
                                <Tick type={ADVANCED_REACT} />
                              </Td>
                              <Td>
                                <Tick type={PART_TIME} />
                              </Td>
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
                            </Tr>
                            <Tr>
                              <Td>React Patterns and Perf</Td>
                              <Td>
                                <Tick type={REACT_BOOTCAMP} />
                              </Td>
                              <Td>
                                <Tick type={ADVANCED_REACT} />
                              </Td>
                              <Td />
                            </Tr>
                            <Tr>
                              <Td />
                              <Td>
                                <LinkButton
                                  variant="secondary"
                                  to="/react/training/bootcamp"
                                >
                                  React Bootcamp
                                </LinkButton>
                              </Td>
                              <Td>
                                <LinkButton
                                  variant="secondary"
                                  to="/react/training/advanced"
                                >
                                  Advanced React
                                </LinkButton>
                              </Td>
                              <Td>
                                <LinkButton
                                  variant="secondary"
                                  to="/react/training/part-time-course/"
                                >
                                  Part Time
                                </LinkButton>
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                        <Row>
                          <Col md={12}>
                            <H5>Also available...</H5>
                          </Col>
                          <Col md={6}>
                            <TrainingCard borderColor={REACT_BLUE_DARK}>
                              <H4>Corporate training</H4>
                              <P>
                                Private team training, located in your offices
                                anywhere in the world.
                              </P>
                              <Link to="/react/training/corporate">
                                Find Out More
                              </Link>
                            </TrainingCard>
                          </Col>
                          <Col md={6}>
                            <TrainingCard borderColor={REACT_BLUE_DARK}>
                              <H4>1 Day Workshops</H4>
                              <P>
                                Instense training focussing on specific parts of
                                our React curriculum.
                              </P>
                              <Link
                                variant="secondary"
                                to="/react/training/workshops"
                              >
                                Find Out More
                              </Link>
                            </TrainingCard>
                          </Col>
                        </Row>
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
                      <Tabs
                        onChange={this.setActive}
                        active={this.state.active}
                      >
                        <TabList>
                          <TabItem name={REACT_BOOTCAMP}>
                            React Bootcamp
                          </TabItem>
                          <TabItem name={ADVANCED_REACT}>
                            Advanced React
                          </TabItem>
                          <TabItem name={PART_TIME}>Part-time Course</TabItem>
                        </TabList>
                        <TabContent>
                          <ContentItem name={REACT_BOOTCAMP}>
                            <P>
                              <strong>
                                On completion of the React Bootcamp each student
                                will:
                              </strong>
                            </P>
                            <Ul>
                              <Li>
                                Understand the core principles and libraries to
                                build production-ready React applications using:{' '}
                                <code>
                                  react, react-router, styled-components,
                                  styled-system, storybook, redux, react-redux,
                                  react-apollo, TypeScript
                                </code>
                              </Li>
                              <Li>
                                Be able to develop and test complex and reliable
                                React applications: <code>enzyme, jest</code>
                              </Li>
                              <Li>
                                Comprehend modern front-end JavaScript:{' '}
                                <code>Functional Programming, Webpack</code>
                              </Li>
                              <Li>
                                Understand the best practices and patterns for
                                building real-world performant React
                                applications
                              </Li>
                              <Li>
                                Not sure if our trainings are right for you?
                                Read our blog{' '}
                                <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                                  <strong>
                                    Are YOU the Perfect React GraphQL Student?
                                  </strong>
                                </Link>
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
                                    marketingCard={
                                      <MarketingCard
                                        heading="Next React Bootcamp"
                                        text={`Take your career to the next level and master React in just a few days!`}
                                        to={trainingBootcamp.toPath}
                                        buttonText={`${
                                          trainingBootcamp.city
                                        } React Bootcamp, ${formatUTC(
                                          trainingBootcamp.startDate,
                                          trainingBootcamp.utcOffset,
                                          'D MMM'
                                        )}  `}
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
                                On completion of the Advanced React Training
                                each student will:
                              </strong>
                            </P>
                            <Ul>
                              <Li>
                                Be able to develop and test complex and reliable
                                React applications: <code>enzyme, jest</code>
                              </Li>
                              <Li>
                                Comprehend modern front-end JavaScript:{' '}
                                <code>Functional Programming, Webpack</code>
                              </Li>
                              <Li>
                                Understand the best practices and patterns for
                                building real-world performant React
                                applications
                              </Li>
                              <Li>
                                Not sure if our trainings are right for you?
                                Read our blog{' '}
                                <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                                  <strong>
                                    Are YOU the Perfect React GraphQL Student?
                                  </strong>
                                </Link>
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
                                        text={`You can master Advanced React - in just 3 days!`}
                                        to={trainingAdvanced.toPath}
                                        buttonText={`${
                                          trainingAdvanced.city
                                        } React Advanced, ${formatUTC(
                                          trainingAdvanced.startDate,
                                          trainingAdvanced.utcOffset,
                                          'D MMM'
                                        )}  `}
                                      />
                                    }
                                  />
                                )}
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
                                Understand the core user interactions in React
                                Native
                              </Li>
                              <Li>
                                Be able to create reusable and maintanable React
                                Native UI
                              </Li>
                              <Li>
                                Understand the best practices and patterns for
                                building real-world performant React Native
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
                                On completion of the React Bootcamp each student
                                will:
                              </strong>
                            </P>
                            <Ul>
                              <Li>
                                Understand the core principles and libraries of
                                the React ecosystem{' '}
                                <code>
                                  react, react-router, redux, react-redux,
                                  storybook, styled-components, jest
                                </code>
                              </Li>
                              <Li>
                                Understand the fundamentals of unit testing and
                                how to apply it to JavaScript
                              </Li>
                              <Li>
                                Learn some of the best practices for building
                                real-world performant React applications
                              </Li>
                              <Li>
                                Not sure if our trainings are right for you?
                                Read our blog{' '}
                                <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                                  <strong>
                                    Are YOU the Perfect React GraphQL Student?
                                  </strong>
                                </Link>
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
                                        text={`Next React part-time course starts on ${formatUTC(
                                          trainingPartTime.startDate,
                                          trainingPartTime.utcOffset,
                                          'D MMM'
                                        )} in ${trainingPartTime.city}`}
                                        to={trainingPartTime.toPath}
                                        buttonText={`${
                                          trainingPartTime.city
                                        } React part-time ${formatUTC(
                                          trainingPartTime.startDate,
                                          trainingPartTime.utcOffset,
                                          'D MMM'
                                        )}  `}
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
        }}
      </Layout>
    )
  }
}

export default ReactCurriculum
