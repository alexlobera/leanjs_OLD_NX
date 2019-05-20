import React from 'react'
import styled from 'styled-components'
import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H4, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training'
import { Card, Image } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
import { GRAPHQL_PINK } from '../../config/styles'

const LearningResource = styled.div`
  img {
    max-height: 5rem;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0;
  }
  h4 p {
    margin: 0.5rem 2rem;
  }
  h4 {
    margin-top: 1rem;
  }
`

const LearningResourceWrapper = styled.div`
  margin-top: 2rem;
`

const TrainingType = styled.div`
  border-left: 5px solid ${GRAPHQL_PINK};
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 1rem 0;
  button {
    display: inline-block;
  }
`

const MoreFreeResouces = styled.div``

const GraphQLPage = () => (
  <Layout>
    {({ trainings }) => {
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/graphql', label: 'GraphQL' },
            ]}
          />
          <Header
            titleLines={['Learn GraphQL with us...']}
            subtitle="Supercharge your development skill set with latest curriculum in GraphQL"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Latest GraphQL Blogs',
                to: '#free-graphql-resources',
              },
              {
                text: 'Our GraphQL training',
                to: '#our-graphql-training',
              },
              {
                text: 'What is GraphQL?',
                to: '#what-is-graphql',
              },
            ]}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Link
                    to="#free-graphql-resources"
                    name="free-graphql-resources"
                  />

                  <Col md={1} />
                  <Col md={6}>
                    <H2>Latest GraphQL Blogs</H2>
                    <LearningResourceWrapper>
                      <Card border="shadow" small bottom={36}>
                        <LearningResource>
                          <Image
                            src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fthink-outside-box.jpeg?alt=media"
                            alt="Think outside the box with GraphQL"
                          />
                          <Link to="/blog/what-is-graphql-used-for/">
                            <H4>What is GraphQL and what is it used for?</H4>
                          </Link>
                          <P>
                            "Some say that data is the new oil, but it isn’t
                            enough to just have a vast amount of data - you also
                            need to know how to use it efficiently..."{' '}
                            <Link to="/blog/what-is-graphql-used-for/">
                              Learn More
                            </Link>
                          </P>
                        </LearningResource>
                      </Card>
                      <Card border="shadow" small bottom={36}>
                        <LearningResource>
                          <Image
                            src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fintro-thinking-in-react%2Fthink-outside-box.jpeg?alt=media"
                            alt="Think outside the box with React"
                          />
                          <Link to="/blog/who-uses-graphql-anyway/">
                            <H4>Who uses GraphQL anyway?</H4>
                          </Link>
                          <P>
                            "You may know what GraphQL is and why it’s so
                            useful, but if you’re yet to be convinced of this
                            syntax’s capabilities you need only look at some of
                            the big names that are already using it..."{' '}
                            <Link to="/blog/who-uses-graphql-anyway/">
                              Learn More
                            </Link>
                          </P>
                        </LearningResource>
                      </Card>

                      <MoreFreeResouces>
                        <H3>Get React learning resources</H3>
                        <P>
                          Over 5 weeks, we email you directly with free
                          resources{' '}
                          <strong>
                            directly from our{' '}
                            <Link to="/react/curriculum">
                              <strong>React Curriculum</strong>
                            </Link>
                          </strong>{' '}
                          . We'd love for you to enjoy and learn from them!{' '}
                        </P>
                        <LinkButton variant="primary" to="#newsletter">
                          Sign up now
                        </LinkButton>
                      </MoreFreeResouces>
                    </LearningResourceWrapper>
                  </Col>
                  <Link
                    to="#our-graphql-training"
                    name="our-graphql-training"
                  />
                  <Col md={1} />
                  <Col md={4}>
                    <H3>Our GraphQL training</H3>
                    <TrainingType>
                      <H4>7-day Bootcamp</H4>
                      <P>
                        Rapid learning with a deep-dive into GraphQL in it's
                        entirity
                      </P>
                      <LinkButton
                        variant="secondary"
                        to="/graphql/training/bootcamp/"
                      >
                        Find Out More
                      </LinkButton>
                    </TrainingType>

                    <TrainingType>
                      <H4>Corporate Team Training</H4>
                      <P>
                        We come to you, teach skills and best practice to your
                        entire team!
                      </P>
                      <LinkButton
                        to="/graphql/training/corporate"
                        variant="secondary"
                      >
                        Find Out More
                      </LinkButton>
                    </TrainingType>
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>

          <Section>
            <Grid>
              <Row>
                <Col md={12} mdOffset={1}>
                  <H2>
                    <Link to="#what-is-graphql" name="what-is-graphql" />
                    What is GraphQL?
                  </H2>
                </Col>
                <Col md={5} mdOffset={1}>
                  <P>
                    GraphQL is a modern syntax for building and querying APIs,
                    but what does that actually mean? And why should you use
                    GraphQL?
                  </P>
                  <Ul>
                    <Li>
                      At it's core, GraphQL describes how ot ask a server for
                      data
                    </Li>
                    <Li>
                      Your apps decide what data they need and recieve only that
                    </Li>
                    <Li>
                      Therefore, GraphQL is very effecient and helps your system
                      be well organised
                    </Li>
                    <Li>
                      It's growing at a fast pace and the community is
                      fantastic!
                    </Li>
                  </Ul>
                  <LinkButton to="/blog/what-is-graphql-used-for/">
                    Blog: What is GraphQL and What Is It Used For?
                  </LinkButton>
                </Col>
                <Col md={5}>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/graphql_university%2Fhomepage_whyGQLU.jpg?alt=media&"
                    alt="Why learn GraphQL"
                  />
                </Col>
              </Row>
            </Grid>
          </Section>
          <TrustedBySection />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQLPage
