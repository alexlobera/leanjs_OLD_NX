import React from 'react'
import { Element, scroller } from 'react-scroll'
import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { Table, Thead, Tbody, Tr, Th, Td } from 'src/components/table'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
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
import CurriculumReactFundamentals from 'src/components/curriculum/CurriculumReactFundamentals'
import CurriculumReactBootcamp from 'src/components/curriculum/CurriculumReactBootcamp'
import CurriculumPartTime from 'src/components/curriculum/CurriculumPartTime'
import CurriculumAdvancedReact from 'src/components/curriculum/CurriculumAdvancedReact'
import MarketingCard from 'src/components/curriculum/MarketingCard'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { Tick } from 'src/components/icons'
import { getURLParameter } from 'src/components/utils/url'
import { formatUTC } from 'src/components/utils'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  PART_TIME,
  REACT_FUNDAMENTALS,
} from 'src/config/data'
import { LIST_LAYOUT } from 'src/components/curriculum/selectCurriculumLayout'
import { Breadcrumb } from 'src/components/navigation'
import { BLUE } from '../../config/styles'

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
    const { path } = this.props
    const commonCurriculumProps = {
      enableToggle: true,
      showTitle: false,
      layout: LIST_LAYOUT,
      showLinkToCurriculum: false,
    }

    return (
      <Layout>
        {({ trainings }) => {
          const trainingBootcamp = selectNthTraining({
            trainings,
            type: REACT_BOOTCAMP,
          })
          const trainingFundamentals = selectNthTraining({
            trainings,
            type: REACT_FUNDAMENTALS,
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
                    to: path,
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
                bgColor={BLUE}
                bgImageName={BOOTCAMP}
              />
              <TopSection>
                <Segment>
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
                            <Th type={REACT_BOOTCAMP}>Bootcamp</Th>
                            <Th type={PART_TIME}>Part Time </Th>
                            <Th type={ADVANCED_REACT}>Advanced</Th>
                            <Th type={REACT_FUNDAMENTALS}>Fundamentals</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>ES6</Td>
                            <Td>
                              <Tick type={REACT_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={PART_TIME} />
                            </Td>
                            <Td />
                            <Td>
                              <Tick type={REACT_FUNDAMENTALS} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Routing and Forms</Td>
                            <Td>
                              <Tick type={REACT_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={PART_TIME} />
                            </Td>
                            <Td />
                            <Td>
                              <Tick type={REACT_FUNDAMENTALS} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Redux</Td>
                            <Td>
                              <Tick type={REACT_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={PART_TIME} />
                            </Td>
                            <Td />
                            <Td>
                              <Tick type={REACT_FUNDAMENTALS} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Hooks</Td>
                            <Td>
                              <Tick type={REACT_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={PART_TIME} />
                            </Td>
                            <Td>
                              <Tick type={ADVANCED_REACT} />
                            </Td>
                            <Td>
                              <Tick type={REACT_FUNDAMENTALS} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Testing</Td>
                            <Td>
                              <Tick type={REACT_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={PART_TIME} />
                            </Td>
                            <Td>
                              <Tick type={ADVANCED_REACT} />
                            </Td>
                            <Td />
                          </Tr>
                          <Tr>
                            <Td>Advanced Testing</Td>
                            <Td>
                              <Tick type={REACT_BOOTCAMP} />
                            </Td>
                            <Td />
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
                            <Td />
                            <Td>
                              <Tick type={ADVANCED_REACT} />
                            </Td>
                            <Td />
                          </Tr>
                          <Tr>
                            <Td>Design Systems</Td>
                            <Td>
                              <Tick type={REACT_BOOTCAMP} />
                            </Td>
                            <Td />
                            <Td>
                              <Tick type={ADVANCED_REACT} />
                            </Td>
                            <Td />
                          </Tr>
                          <Tr>
                            <Td verticalAlign="top">Timings/Pricing</Td>
                            <Td>
                              <Ul textAlign="left">
                                <Li>1 week</Li>
                                <Li>Full time</Li>
                                <Li>9 am to 6 pm</Li>
                                <Li>Starting at £1630</Li>
                              </Ul>
                              <LinkButton
                                variant="secondary"
                                to="/react/training/bootcamp"
                                className="training-curriculum-clicks"
                              >
                                Bootcamp
                              </LinkButton>
                            </Td>
                            <Td>
                              <Ul textAlign="left">
                                <Li>1 month</Li>
                                <Li>Part time</Li>
                                <Li>Evenings or weekends</Li>
                                <Li>Starting at £980</Li>
                              </Ul>
                              <LinkButton
                                variant="secondary"
                                to="/react/training/part-time-course/"
                                className="training-curriculum-clicks"
                              >
                                Part Time
                              </LinkButton>
                            </Td>
                            <Td>
                              <Ul textAlign="left">
                                <Li>3 days</Li>
                                <Li>Full time</Li>
                                <Li>9 am to 6 pm</Li>
                                <Li>Starting at £1100</Li>
                              </Ul>
                              <LinkButton
                                variant="secondary"
                                to="/react/training/advanced"
                                className="training-curriculum-clicks"
                              >
                                Advanced
                              </LinkButton>
                            </Td>
                            <Td>
                              <Ul textAlign="left">
                                <Li>3 days</Li>
                                <Li>Full time</Li>
                                <Li>9 am to 6 pm</Li>
                                <Li>
                                  Starting at £980
                                  <br />
                                  &nbsp;
                                </Li>
                              </Ul>
                              <LinkButton
                                variant="secondary"
                                to="/react/training/react-fundamentals/"
                                className="training-curriculum-clicks"
                              >
                                Fundamentals
                              </LinkButton>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>

                      <H5>Also available...</H5>
                      <Row>
                        {[
                          {
                            to: '/react/training/corporate/',
                            txt: 'Corporate team training',
                          },
                          {
                            to: '/react/training/workshops/',
                            txt: '1-day React workshops',
                          },
                          { to: '/graphql/training/', txt: 'GraphQL training' },
                        ].map(({ to, txt }) => (
                          <Col md={4}>
                            <LinkButton
                              display="block"
                              className="training-curriculum-clicks"
                              to={to}
                            >
                              {txt}
                            </LinkButton>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Segment>
              </TopSection>
              <Section>
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <Element name="curriculum" />
                    <H2>Choose a curriculum:</H2>
                    <Tabs onChange={this.setActive} active={this.state.active}>
                      <TabList>
                        <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
                        <TabItem name={PART_TIME}>Part-time Course</TabItem>
                        <TabItem name={ADVANCED_REACT}>Advanced React</TabItem>
                        <TabItem name={REACT_FUNDAMENTALS}>
                          React Fundamentals
                        </TabItem>
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
                            <CurriculumReactBootcamp.LearningObjectivesList />
                            <Li>
                              Not sure if our trainings are right for you? Read
                              our blog{' '}
                              <Link
                                className="perfect-course-student"
                                to="/blog/are-you-the-perfect-react-graphql-student/"
                              >
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
                                <CurriculumReactBootcamp
                                  {...commonCurriculumProps}
                                  marketingCard={
                                    <MarketingCard
                                      heading="Next React Bootcamp"
                                      text={`Take your career to the next level and master React in just 1 week!`}
                                      className="training-curriculum-next-training-cta"
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

                        <ContentItem name={PART_TIME}>
                          <P>
                            <strong>
                              On completion of the React Part-time course each
                              student will:
                            </strong>
                          </P>
                          <Ul>
                            <CurriculumPartTime.LearningObjectivesList />
                            <Li>
                              Not sure if our trainings are right for you? Read
                              our blog{' '}
                              <Link
                                className="perfect-course-student"
                                to="/blog/are-you-the-perfect-react-graphql-student/"
                              >
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
                                {...commonCurriculumProps}
                                marketingCard={
                                  trainingPartTime && (
                                    <MarketingCard
                                      heading="Next React Part time Training"
                                      text={`Next React part-time course starts on ${formatUTC(
                                        trainingPartTime.startDate,
                                        trainingPartTime.utcOffset,
                                        'D MMM'
                                      )} in ${trainingPartTime.city}`}
                                      className="training-curriculum-next-training-cta"
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
                        <ContentItem name={REACT_FUNDAMENTALS}>
                          <P>
                            <strong>
                              On completion of the React Fundamentals each
                              student will:
                            </strong>
                          </P>
                          <Ul>
                            <CurriculumReactFundamentals.LearningObjectivesList />
                            <Li>
                              Not sure if our trainings are right for you? Read
                              our blog{' '}
                              <Link
                                className="perfect-course-student"
                                to="/blog/are-you-the-perfect-react-graphql-student/"
                              >
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
                              {trainingFundamentals && (
                                <CurriculumReactFundamentals
                                  {...commonCurriculumProps}
                                  marketingCard={
                                    <MarketingCard
                                      heading="Next React Fundamentals"
                                      text={`Take your career by learning a solid foundation React in just 3 days!`}
                                      className="training-curriculum-next-training-cta"
                                      to={trainingFundamentals.toPath}
                                      buttonText={`${
                                        trainingFundamentals.city
                                      } React Fundamentals, ${formatUTC(
                                        trainingFundamentals.startDate,
                                        trainingFundamentals.utcOffset,
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
                              On completion of the Advanced React Training each
                              student will:
                            </strong>
                          </P>
                          <Ul>
                            <CurriculumAdvancedReact.LearningObjectivesList />
                            <Li>
                              Not sure if our trainings are right for you? Read
                              our blog{' '}
                              <Link
                                className="perfect-course-student"
                                to="/blog/are-you-the-perfect-react-graphql-student/"
                              >
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
                                  {...commonCurriculumProps}
                                  marketingCard={
                                    <MarketingCard
                                      heading="Next React Advanced Training"
                                      text={`You can master Advanced React - in just 2 days!`}
                                      className="training-curriculum-next-training-cta"
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
                      </TabContent>
                    </Tabs>
                  </Col>
                </Row>
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
