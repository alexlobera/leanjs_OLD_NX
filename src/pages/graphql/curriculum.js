import React from 'react'
import { Element, scroller } from 'react-scroll'

import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import Ul, { Li } from 'src/components/layout/Ul'
import { H3, H4 } from 'src/components/text'
import { CallToActionRow } from '../../components/layout/CallToActionNextTrainings'
import LinkButton from 'src/components/buttons/LinkButton'
import {
  Link,
  DEFAULT_SCROLL_OFFSET,
  DEFAULT_SCROLL_DURATION,
} from 'src/components/navigation'
import { Tabs, TabContent, ContentItem } from 'src/components/layout/Tabs'

import { CurriculumGraphQL, MarketingCard } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import { getURLParameter } from 'src/components/utils/url'
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
import { LIST_LAYOUT } from 'src/components/curriculum/selectCurriculumLayout'
import { Breadcrumb } from 'src/components/navigation'
import { formatUTC } from 'src/components/utils'

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
    return (
      <Layout>
        {({ trainings }) => {
          const graphql = selectNthTraining({
            trainings,
            type: GRAPHQL_BOOTCAMP,
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
                    to: '/graphql/curriculum',
                    label: 'Curriculum',
                  },
                ]}
              />
              <Header
                titleLines={['GraphQL curriculum']}
                subtitle="We're proud to say that our curriculum is the most<br /> up-to-date on the market - there really is<br />nowhere better to learn GraphQL."
                bgImageName={BOOTCAMP}
              />
              <TopSection>
                <Grid>
                  <CallToActionRow>
                    <Col xs={12} sm={5}>
                      <LinkButton
                        variant="primary"
                        to="/graphql/training/bootcamp/london"
                        children="GraphQL Bootcamp London"
                      />
                    </Col>
                  </CallToActionRow>
                  <Card border="shadow">
                    <Row>
                      <Col md={1} />
                      <Col md={10}>
                        <H4>
                          On completion of the GraphQL Bootcamp each student
                          will:
                        </H4>
                        <Ul>
                          <Li>
                            Understand how to build a production-ready GraphQL
                            API using Nodejs
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
                          <Li>
                            Not sure if our trainings are right for you? Read
                            our blog{' '}
                            <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                              <strong>
                                Are YOU the Perfect React GraphQL Student?
                              </strong>
                            </Link>
                          </Li>
                        </Ul>
                      </Col>

                      <Col md={10} lgOffset={1}>
                        <MarketingCard
                          heading="Looking for training for your whole team?"
                          text="Private team training, located in your offices anywhere in the world, based on our proven curriculum for React and GraphQL."
                          to="/graphql/training/corporate/"
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
                      <Tabs
                        onChange={this.setActive}
                        active={this.state.active}
                      >
                        <TabContent>
                          <ContentItem name={GRAPHQL_BOOTCAMP}>
                            <H3>Full GraphQL curriculum:</H3>
                            <Row>
                              <Col lg={1} lgOffset={1} />
                              <Col lg={9}>
                                <CurriculumGraphQL
                                  enableToggle={true}
                                  showTitle={false}
                                  layout={LIST_LAYOUT}
                                  marketingCard={
                                    <MarketingCard
                                      heading="Next GraphQL Bootcamp"
                                      text={`In just 5 days, learn the secrets of effecient apps with GraphQL`}
                                      to={graphql && graphql.toPath}
                                      buttonText={`${graphql &&
                                        graphql.city} GraphQL Bootcamp, ${formatUTC(
                                        graphql && graphql.startDate,
                                        graphql && graphql.utcOffset,
                                        'D MMM'
                                      )}  `}
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
              <UpcomingTrainingSection trainings={trainings} />
            </React.Fragment>
          )
        }}
      </Layout>
    )
  }
}

export default GraphQLCurriculum
