import React from 'react'
import { Link } from '../components/navigation'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, H2Ref } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumGraphQL } from '../components/curriculum'
import Header from '../components/layout/Header'
import { CallToActionRow } from '../components/layout/CallToActionNextTrainings'
import { HideComponentsUsingCss } from '../components/utils'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  withUpcomingTrainings,
  selectUpcomingTrainings,
} from '../components/training'
import { Card } from '../components/elements'
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
import { WHY_GQLU_ACADEMY, SMALL_CLASSROOM } from '../config/images.js'
import {
  CodeIcon,
  CollabsIcon,
  HeartIcon,
  NotBegginerIcon,
  ProductionReadyIcon,
  SpannerIcon,
  StarIcon,
  TrainerIcon,
  BulletIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import { Breadcrumb } from '../components/navigation'
import { GRAPHQL_BOOTCAMP } from '../config/data'
import header from '../components/layout/Header.json'

const GraphQL = ({ trainings }) => {
  const upcomingGraphQLTrainings = selectUpcomingTrainings({
    trainings,
    type: GRAPHQL_BOOTCAMP,
  })
  console.log(upcomingGraphQLTrainings)
  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: '/graphql-bootcamp', label: 'GraphQL bootcamp' },
        ]}
      />
      <Header
        titleLines={['Take your dev career further', 'by mastering GraphQL']}
        subtitle="In-person development training from industry experts"
        bgImg="full-time"
        links={header.landingPageLinks.links}
        type={GRAPHQL_BOOTCAMP}
      />
      <TopSection>
        <Grid>
          <CallToActionNextTrainings
            left
            trainings={upcomingGraphQLTrainings}
          />
          <Card border="shadow">
            <Link to="#upcoming-courses" name="upcoming-courses" />
            <CurriculumGraphQL
              trainings={upcomingGraphQLTrainings}
              enableToggle
              isOpen={false}
            />
          </Card>
        </Grid>
      </TopSection>

      <Section>
        <Grid>
          <Row>
            <Col md={5} mdOffset={1}>
              <H2Ref>
                Is ReactJS Academy's GraphQL course right for me?
                <Link to="#target-audience" name="target-audience">
                  #
                </Link>
              </H2Ref>
              <Ul unstyled>
                <Li>
                  <BulletIcon icon={NotBegginerIcon} />
                  For working developers - <strong>not for beginners!</strong>
                </Li>
                <Li>
                  <BulletIcon icon={SpannerIcon} />
                  <strong>Hands-on project-based</strong> training.
                </Li>
                <Li>
                  <BulletIcon icon={CollabsIcon} />A{' '}
                  <strong>collaborative</strong> learning environment.
                </Li>
              </Ul>
              <P />
            </Col>
            <HideComponentsUsingCss xs sm>
              <Col md={5} mdOffset={1}>
                <Image
                  src={WHY_GQLU_ACADEMY}
                  width="100%"
                  alt="Female GraphQL course student wearing glasses concentrating whilst looking into the distance, surrounded by other students with a laptop in the near distance."
                />
              </Col>
            </HideComponentsUsingCss>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Col md={5}>
              <Image
                src={SMALL_CLASSROOM}
                width="100%"
                alt="Four developers gathered around a laptop, pair programming together on a piece of work during a GraphQL bootcamp."
              />
            </Col>
            <Col md={5} mdOffset={1}>
              <H2>Why our GraphQL course is great for your developers</H2>
              <Ul unstyled>
                <Li>
                  <BulletIcon icon={ProductionReadyIcon} />
                  <strong>Build production ready</strong> apps leverging
                  GraphQL.
                </Li>
                <Li>
                  <BulletIcon icon={CollabsIcon} />
                  Discuss <strong>real-world projects</strong> with experienced
                  developers.
                </Li>
                <Li>
                  <BulletIcon icon={StarIcon} />
                  Learn <strong>best practices</strong>.
                </Li>
                <Li>
                  <BulletIcon icon={TrainerIcon} />
                  <strong>Mentoring</strong> by our expert coaches.
                </Li>
                <Li>
                  <BulletIcon icon={HeartIcon} />
                  Alumni <strong>community</strong>.
                </Li>
                <Li>
                  <BulletIcon icon={CodeIcon} />
                  <strong>Stay ahead</strong> in modern development.
                </Li>
              </Ul>
            </Col>
          </Row>
        </Grid>
      </Section>

      <TrustedBySection />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export default withUpcomingTrainings()(GraphQL)
