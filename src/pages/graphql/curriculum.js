import React from 'react'
import { Element, scroller } from 'react-scroll'

import Layout from 'src/components/layout'
import { Table, Thead, Tbody, Tr, Th, Td } from 'src/components/table'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import Ul, { Li } from 'src/components/layout/Ul'
import { H2Ref, H2, P, H4, H5 } from 'src/components/text'
import { Tick } from 'src/components/icons'
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
import MarketingCard from 'src/components/curriculum/MarketingCard'
import CurriculumGraphQLAPI from 'src/components/curriculum/CurriculumGraphQLAPI'
import CurriculumGraphQLPartTime from 'src/components/curriculum/CurriculumGraphQLPartTime'
import CurriculumGraphQLBootcamp from 'src/components/curriculum/CurriculumGraphQLBootcamp'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { getURLParameter } from 'src/components/utils/url'
import {
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  TECH_GRAPHQL,
  GRAPHQL_PART_TIME,
} from 'src/config/data'
import { LIST_LAYOUT } from 'src/components/curriculum/selectCurriculumLayout'
import { formatUTC } from 'src/components/utils'
import { GRAPHQL_PINK } from '../../config/styles'

class GraphQLCurriculum extends React.Component {
  state = {
    active: GRAPHQL_PART_TIME,
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
      section: { enableToggle: true },
      showTitle: false,
      layout: LIST_LAYOUT,
      showLinkToCurriculum: false,
    }

    return (
      <Layout>
        {({ trainings }) => {
          const trainingBootcamp = selectNthTraining({
            trainings,
            type: GRAPHQL_BOOTCAMP,
          })
          const trainingPartTime = selectNthTraining({
            trainings,
            type: GRAPHQL_PART_TIME,
          })
          const trainingApi = selectNthTraining({
            trainings,
            type: GRAPHQL_API,
          })
          return (
            <React.Fragment>
              <Header
                breadcrumbPath={[
                  { to: '/', label: 'Home' },
                  {
                    to: '/graphql',
                    label: 'GraphQL',
                  },
                  {
                    to: path,
                    label: 'Curriculum',
                  },
                ]}
                tech={TECH_GRAPHQL}
                titleLines={['GraphQL curriculum']}
                subtitle="We're proud to say that our curriculum is the most<br /> up-to-date on the market - there really is<br />nowhere better to learn GraphQL."
                bgColor={GRAPHQL_PINK}
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
                            <Th type={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</Th>
                            <Th type={GRAPHQL_PART_TIME}>GraphQL Part-time</Th>
                            <Th type={GRAPHQL_API}>GraphQL API</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>Node.js & Cloud</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_PART_TIME} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_API} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Schema Design</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_PART_TIME} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_API} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Security & Error Handling</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_PART_TIME} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_API} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Data-Driven application</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_PART_TIME} />
                            </Td>
                            <Td />
                          </Tr>
                          <Tr>
                            <Td>Client-side caching</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_PART_TIME} />
                            </Td>
                            <Td />
                          </Tr>
                          <Tr>
                            <Td verticalAlign="top">Timings/Pricing</Td>
                            <Td>
                              <Ul textAlign="left">
                                <Li>3 days</Li>
                                <Li>Full time</Li>
                                <Li>9 am to 6 pm</Li>
                                <Li>£995</Li>
                              </Ul>
                              <LinkButton
                                variant="secondary"
                                to="/graphql/training/bootcamp"
                                className="training-curriculum-clicks"
                              >
                                GraphQL Bootcamp
                              </LinkButton>
                            </Td>
                            <Td>
                              <Ul textAlign="left">
                                <Li>1 month</Li>
                                <Li>Part time</Li>
                                <Li>Evenings or weekends</Li>
                                <Li>£995</Li>
                              </Ul>
                              <LinkButton
                                variant="secondary"
                                to="/graphql/training/part-time-course/"
                                className="training-curriculum-clicks"
                              >
                                GraphQL Part-Time
                              </LinkButton>
                            </Td>
                            <Td>
                              <Ul textAlign="left">
                                <Li>2 days</Li>
                                <Li>Full time</Li>
                                <Li>9 am to 6 pm</Li>
                                <Li>£795</Li>
                              </Ul>
                              <LinkButton
                                variant="secondary"
                                to="/graphql/training/api"
                                className="training-curriculum-clicks"
                              >
                                GraphQL API
                              </LinkButton>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      <H5>Also available...</H5>
                      <Row>
                        {[
                          {
                            to: '/graphql/training/corporate/',
                            txt: 'Corporate team training',
                          },
                          {
                            to: '/graphql/training/workshops/',
                            txt: '1-day GraphQL workshops',
                          },
                          { to: '/react/training/', txt: 'React training' },
                        ].map(({ to, txt }) => (
                          <Col md={4}>
                            <LinkButton
                              display="block"
                              className="training-curriculum-clicks"
                              to={to}
                              mt={[2, 0]}
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
                        <TabItem name={GRAPHQL_PART_TIME}>
                          GraphQL Part-time
                        </TabItem>
                        <TabItem name={GRAPHQL_BOOTCAMP}>
                          GraphQL Bootcamp
                        </TabItem>
                        <TabItem name={GRAPHQL_API}>GraphQL API</TabItem>
                      </TabList>
                      <TabContent>
                        <ContentItem name={GRAPHQL_BOOTCAMP}>
                          <P>
                            <strong>
                              On completion of the GraphQL Bootcamp each student
                              will:
                            </strong>
                          </P>
                          <Ul>
                            <CurriculumGraphQLBootcamp.LearningObjectivesList />
                            <Li>
                              Not sure if our trainings are right for you? Read
                              our blog{' '}
                              <Link
                                className="perfect-course-student"
                                to="/blog/are-you-the-perfect-react-graphql-student/"
                              >
                                <strong>
                                  Are YOU the Perfect GraphQL Student?
                                </strong>
                              </Link>
                            </Li>
                          </Ul>
                          <H4>GraphQL Bootcamp Curriculum:</H4>
                          <Row>
                            <Col lg={1} lgOffset={1} />
                            <Col lg={9}>
                              <CurriculumGraphQLBootcamp
                                {...commonCurriculumProps}
                                marketingCard={
                                  trainingBootcamp && (
                                    <MarketingCard
                                      heading="Next GraphQL Bootcamp"
                                      className="training-curriculum-next-training-cta"
                                      to={
                                        trainingBootcamp &&
                                        trainingBootcamp.toPath
                                      }
                                      buttonText={`${
                                        trainingBootcamp.city
                                      } GraphQL Bootcamp, ${formatUTC(
                                        trainingBootcamp.startDate,
                                        trainingBootcamp.utcOffset,
                                        'D MMM'
                                      )}  `}
                                    />
                                  )
                                }
                              />
                            </Col>
                          </Row>
                        </ContentItem>
                        <ContentItem name={GRAPHQL_PART_TIME}>
                          <P>
                            <strong>
                              On completion of the GraphQL part-time course each
                              student will:
                            </strong>
                          </P>
                          <Ul>
                            <CurriculumGraphQLPartTime.LearningObjectivesList />
                            <Li>
                              Not sure if our trainings are right for you? Read
                              our blog{' '}
                              <Link
                                className="perfect-course-student"
                                to="/blog/are-you-the-perfect-react-graphql-student/"
                              >
                                <strong>
                                  Are YOU the Perfect GraphQL Student?
                                </strong>
                              </Link>
                            </Li>
                          </Ul>
                          <H4>GraphQL part-time Curriculum:</H4>
                          <Row>
                            <Col lg={1} lgOffset={1} />
                            <Col lg={9}>
                              <CurriculumGraphQLPartTime
                                {...commonCurriculumProps}
                                marketingCard={
                                  trainingPartTime && (
                                    <MarketingCard
                                      heading="Next GraphQL part-time course"
                                      text={`Don't cut into valuable work-days!`}
                                      className="training-curriculum-next-training-cta"
                                      to={
                                        trainingPartTime &&
                                        trainingPartTime.toPath
                                      }
                                      buttonText={`${
                                        trainingPartTime.city
                                      } GraphQL part-time, ${formatUTC(
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
                        <ContentItem name={GRAPHQL_API}>
                          <P>
                            <strong>
                              On completion of the GraphQL API training each
                              student will:
                            </strong>
                          </P>
                          <Ul>
                            <CurriculumGraphQLAPI.LearningObjectivesList />
                            <Li>
                              Not sure if our trainings are right for you? Read
                              our blog{' '}
                              <Link
                                className="perfect-course-student"
                                to="/blog/are-you-the-perfect-react-graphql-student/"
                              >
                                <strong>
                                  Are YOU the Perfect GraphQL Student?
                                </strong>
                              </Link>
                            </Li>
                          </Ul>

                          <H4>GraphQL API Curriculum:</H4>
                          <Row>
                            <Col lg={1} lgOffset={1} />
                            <Col lg={9}>
                              <CurriculumGraphQLAPI
                                {...commonCurriculumProps}
                                marketingCard={
                                  trainingApi && (
                                    <MarketingCard
                                      heading="Next GraphQL API Training"
                                      className="training-curriculum-next-training-cta"
                                      to={trainingApi && trainingApi.toPath}
                                      buttonText={`${
                                        trainingApi.city
                                      } GraphQL API training, ${formatUTC(
                                        trainingApi.startDate,
                                        trainingApi.utcOffset,
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
              </Section>
              <UpcomingTrainingSection trainings={trainings} />
            </React.Fragment>
          )
        }}
      </Layout>
    )
  }
}

export default GraphQLCurriculum
