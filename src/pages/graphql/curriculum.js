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
import CurriculumGraphQLBootcamp from 'src/components/curriculum/CurriculumGraphQLBootcamp'
import CurriculumGraphQLApollo from 'src/components/curriculum/workshops/CurriculumGraphQLApollo'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import Card from 'src/components/elements/Card'
import { getURLParameter } from 'src/components/utils/url'
import {
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_WORKSHOP,
} from 'src/config/data'
import { LIST_LAYOUT } from 'src/components/curriculum/selectCurriculumLayout'
import { Breadcrumb } from 'src/components/navigation'
import { formatUTC } from 'src/components/utils'
import { GRAPHQL_PINK } from '../../config/styles'

class GraphQLCurriculum extends React.Component {
  state = {
    active: GRAPHQL_BOOTCAMP,
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
            type: GRAPHQL_BOOTCAMP,
          })
          const trainingApi = selectNthTraining({
            trainings,
            type: GRAPHQL_API,
          })
          const trainingClient = selectNthTraining({
            trainings,
            type: GRAPHQL_WORKSHOP,
          })
          return (
            <React.Fragment>
              <Breadcrumb
                path={[
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
              />
              <Header
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
                            <Th type={GRAPHQL_API}>GraphQL API</Th>
                            <Th type={GRAPHQL_WORKSHOP}>GraphQL Client</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>Schema Design</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_API} />
                            </Td>
                            <Td />
                          </Tr>
                          <Tr>
                            <Td>Security Design</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td>
                              <Tick type={GRAPHQL_API} />
                            </Td>
                            <Td />
                          </Tr>
                          {/* 
                            Disabled ATM
                            <Tr>
                              <Td>Server-side caching</Td>
                              <Td>
                                <Tick type={GRAPHQL_BOOTCAMP} />
                              </Td>
                              <Td>
                                <Tick type={GRAPHQL_API} />
                              </Td>
                            </Tr> */}
                          <Tr>
                            <Td>Client-side caching</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td />
                            <Td>
                              <Tick type={GRAPHQL_WORKSHOP} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Testing</Td>
                            <Td>
                              <Tick type={GRAPHQL_BOOTCAMP} />
                            </Td>
                            <Td />
                            <Td>
                              <Tick type={GRAPHQL_WORKSHOP} />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td />
                            <Td>
                              <LinkButton
                                variant="secondary"
                                to="/graphql/training/bootcamp"
                                className="training-curriculum-clicks"
                              >
                                GraphQL Bootcamp
                              </LinkButton>
                            </Td>
                            <Td>
                              <LinkButton
                                variant="secondary"
                                to="/graphql/training/api"
                                className="training-curriculum-clicks"
                              >
                                GraphQL API
                              </LinkButton>
                            </Td>
                            <Td>
                              <LinkButton
                                variant="secondary"
                                to="/graphql/training/workshops/graphql-apollo-client/"
                                className="training-curriculum-clicks"
                              >
                                GraphQL Client
                              </LinkButton>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      <Row>
                        <Col>
                          <H5>Also available...</H5>
                        </Col>
                        <Col md={6}>
                          <Card borderColor={GRAPHQL_PINK}>
                            <H4>Corporate training</H4>
                            <P>
                              Private team training, located in your offices
                              anywhere in the world.
                            </P>
                            <Link
                              to="/graphql/training/corporate"
                              className="training-curriculum-clicks"
                            >
                              Find Out More
                            </Link>
                          </Card>
                        </Col>
                        <Col md={6}>
                          <Card mb={0} borderColor={GRAPHQL_PINK}>
                            <H4>1 Day Workshops</H4>
                            <P>
                              Instense training focussing on specific parts of
                              our GraphQL curriculum.
                            </P>
                            <Link
                              variant="secondary"
                              to="/graphql/training/workshops"
                              className="training-curriculum-clicks"
                            >
                              Find Out More
                            </Link>
                          </Card>
                        </Col>
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
                        <TabItem name={GRAPHQL_BOOTCAMP}>
                          GraphQL Bootcamp
                        </TabItem>
                        <TabItem name={GRAPHQL_API}>
                          GraphQL API training
                        </TabItem>
                        <TabItem name={GRAPHQL_WORKSHOP}>
                          GraphQL Client training
                        </TabItem>
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
                            <Li>
                              Learn how to build data-driven React apps
                              efficiently and rapidly using GraphQL{' '}
                            </Li>
                            <Li>
                              Learn how to connect GraphQL to different data
                              sources in a secure way
                            </Li>
                            <Li>
                              Learn the best practices to model a business
                              domain using GraphQL schemas
                            </Li>
                            <Li>
                              Comprehend how to effectively run a GraphQL API in
                              production
                            </Li>
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
                                      text={`Learn the secrets of efficient apps with GraphQL`}
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
                        <ContentItem name={GRAPHQL_API}>
                          <P>
                            <strong>
                              On completion of the GraphQL API training each
                              student will:
                            </strong>
                          </P>
                          <Ul>
                            <Li>
                              Learn how to connect GraphQL to different data
                              sources in a secure way
                            </Li>
                            <Li>
                              Learn the best practices to model a business
                              domain using GraphQL schemas
                            </Li>
                            <Li>
                              Comprehend how to effectively run a GraphQL API in
                              production
                            </Li>
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
                                      text={`Learn the secrets of efficient GraphQL APIs`}
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

                        <ContentItem name={GRAPHQL_WORKSHOP}>
                          <P>
                            <strong>
                              On completion of the GraphQL Client training each
                              student will:
                            </strong>
                          </P>
                          <Ul>
                            <Li>
                              Learn how to build data-driven React apps
                              efficiently and rapidly using Apollo Client{' '}
                            </Li>
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

                          <H4>GraphQL Client Curriculum:</H4>
                          <Row>
                            <Col lg={1} lgOffset={1} />
                            <Col lg={9}>
                              <CurriculumGraphQLApollo
                                {...commonCurriculumProps}
                                marketingCard={
                                  trainingClient && (
                                    <MarketingCard
                                      heading="Next GraphQL Client Training"
                                      text={`Learn how to build React data-driven apps with GraphQL`}
                                      className="training-curriculum-next-training-cta"
                                      to={
                                        trainingClient && trainingClient.toPath
                                      }
                                      buttonText={`${
                                        trainingClient.city
                                      } GraphQL Client training, ${formatUTC(
                                        trainingClient.startDate,
                                        trainingClient.utcOffset,
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
