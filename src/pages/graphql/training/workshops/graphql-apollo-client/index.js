import React from 'react'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumGraphqlApollo } from 'src/components/curriculum/workshops/'
import { Card } from 'src/components/elements'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from 'src/config/images'
import { CallToActionRow } from 'src/components/layout/CallToActionNextTrainings'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  selectNthTraining,
  selectUpcomingTrainings,
} from 'src/components/training'
import { Image } from 'src/components/elements'
import { Link, Breadcrumb } from 'src/components/navigation'
import LinkButton from 'src/components/buttons/LinkButton'
import { ONE_DAY_WORKSHOP, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const graphqlApolloWorkshop = () => (
  <Layout>
    {({ trainings }) => {
      const bootCampTrainings = selectUpcomingTrainings({
        trainings,
        type: ONE_DAY_WORKSHOP,
        city: LONDON,
      })
      const training = selectNthTraining({
        trainings: bootCampTrainings,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/graphql', label: 'GraphQL' },
              { to: '/graphql/training/', label: 'Training' },
              { to: '/graphql/training/workshops', label: 'Workshops' },
              {
                to: '/graphql/training/workshops/graphql-apollo-client',
                label: 'GraphQL Apollo Client',
              },
            ]}
          />
          <Header
            titleLines={['GraphQL  Apollo Client']}
            subtitle="Create production-ready React applications with the most community-driven GraphQL client"
            links={[
              { text: 'Workshop Agenda', to: '#curriculum' },
              { text: 'Is this right for me?', to: '#target-audience' },
            ]}
            bgImageName={LONDON_BOOTCAMP}
            type={ONE_DAY_WORKSHOP}
            training={training}
          />
          <TopSection top>
            <Grid>
              {/* 
              Temporarily disabled until we fix how to identify workshops in Up Mentoring
              <CallToActionRow left>
                <Col  mdOffset={1} md={4}>
                  <LinkButton
                    variant="primary"
                    to="/graphql/training/workshops/graphql-apollo-client/london"
                    children="Next workshop: 29 July, London"
                  />
                </Col>
              </CallToActionRow> */}
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumGraphqlApollo layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>

          <Section>
            <Grid>
              <Row>
                <HideComponentsUsingCss xs sm>
                  <Col md={6} lg={5}>
                    <Image src={BOOTCAMP_COLLAB} width="100%" />
                  </Col>
                </HideComponentsUsingCss>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2Ref>
                    Is this one day workshop right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      A developer with some experience developing React
                      applications?
                    </Li>
                    <Li>
                      Familiar with front-end technologies like React,
                      JavaScript, CSS, and HTML?
                    </Li>
                    <Li>
                      Taking a step forward to become a GraphQL Specialist able
                      to make critical decisions about the architecture of an
                      application.
                    </Li>
                    <Li>
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, this workshop could be for
                    you!
                  </P>
                  <H3>Not for beginner devs!</H3>
                  <P>This is not a learn-to-code workshop!</P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AttendeeQuote
                    quote="Technology nowadays changes very often and in future you may not be able to find a job with the things you know - you have to keep up. I like the fact that we got to write code rather than focus on theory."
                    fullname="Catalin Cislariu"
                    job="Senior Developer"
                    company="KLEIDO LTD"
                    profilePicUrl={CATALIN}
                  />
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

export default graphqlApolloWorkshop
