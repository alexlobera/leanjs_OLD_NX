import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import { HideComponentsUsingCss } from '../components/utils'
import { FullCurriculum } from '../components/curriculum'
import { SCREEN_XS_MAX } from '../components/utils'
import Header from '../components/layout/Header'
import { Card, Image, Video } from '../components/elements'
import TrustedBySection from '../components/training/TrustedBySection'
import { CallToActionRow } from '../components/layout/CallToActionNextTrainings'
import { UpcomingTrainingSection } from '../components/training'
import {
  BussinessIcon,
  CalendarIcon,
  CodeIcon,
  CollabsIcon,
  EnterMindIcon,
  HeartIcon,
  NotBegginerIcon,
  ProductionReadyIcon,
  SpannerIcon,
  StarIcon,
  TickBadgeIcon,
  TimeIcon,
  TrainerIcon,
  ReactIcon,
  BulletIcon,
} from '../components/icons'
import {
  COURSE_COLLAB,
  WHY_REACTJS_ACADEMY,
  DAN,
  NASSAR,
} from '../config/images.js'
import { CONVINCE_THE_BOSS_PDF } from '../config/data'

const SectionButtonRow = styled(Row)`
  margin-top: 30px;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      margin-top: 5px;
      display: block;
    }
  }
`
const IndexPage = () => (
  <Layout>
    {({ trainings }) => (
      <React.Fragment>
        <Header
          titleLines={['Take your dev career further', 'by mastering React']}
          subtitle="In-person training from experts who were <br /> the first in
        Europe to teach React"
          bgImg="home"
        />
        <TopSection>
          <Grid>
            <CallToActionRow>
              <Col xs={12} sm={4}>
                <LinkButton
                  variant="primary"
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamp "
                />
              </Col>
              <Col xs={12} sm={4}>
                <LinkButton
                  to="/graphql-bootcamp"
                  children="GraphQL Bootcamp "
                  variant="secondary"
                />
              </Col>
              <Col xs={12} sm={4}>
                <LinkButton
                  variant="secondary"
                  to="/corporate-team-training/"
                  children="Corporate training "
                />
              </Col>
            </CallToActionRow>
            <Card border="shadow">
              <FullCurriculum trainings={trainings} />
            </Card>
          </Grid>
        </TopSection>
        <Section>
          <Grid>
            <Row>
              <Col md={5}>
                <Image
                  src={COURSE_COLLAB}
                  width="100%"
                  alt="Four developers gathered around a laptop, pair programming together on a piece of work during a ReactJS Academy bootcamp."
                />
              </Col>
              <Col md={5} mdOffset={1}>
                <H2>What will I get from a ReactJS Academy training?</H2>
                <Ul unstyled>
                  <Li>
                    <BulletIcon icon={ProductionReadyIcon} />
                    <strong>Build production ready</strong> React apps.
                  </Li>
                  <Li>
                    <BulletIcon icon={CollabsIcon} />
                    Discuss <strong>real-world projects</strong>.
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
                <SectionButtonRow>
                  <Col sm={6}>
                    <LinkButton
                      variant="primary"
                      to="/react-redux-graphql-bootcamp"
                      children="React bootcamps"
                    />
                  </Col>
                  <Col sm={6}>
                    <LinkButton
                      variant="secondary"
                      to="/corporate-team-training"
                    >
                      Corporate training
                    </LinkButton>
                  </Col>
                </SectionButtonRow>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Row>
              <Col mdOffset={1} md={10}>
                <AttendeeQuote
                  quote="ReactJS Academy has literally taken me from no React experience to feeling like I can go back to my company as an expert. It’s forwarded my career significantly."
                  fullname="Dan Jones"
                  job="React developer"
                  company="AgilityWorks"
                  profilePicUrl={DAN}
                />
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Row>
              <Col md={5} mdOffset={1}>
                <H2>Is this training right for me? Why ReactJS Academy</H2>
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
                  <Li>
                    <BulletIcon icon={TimeIcon} />
                    <Link to="/react-redux-graphql-bootcamp">
                      Bootcamps
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                  <Li>
                    <BulletIcon icon={CalendarIcon} />
                    <Link to="/react-redux-graphql-part-time-course">
                      Part-time courses
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                </Ul>
                <P />
                <LinkButton variant="secondary" to="/curriculum">
                  Read our curriculum
                </LinkButton>
              </Col>
              <HideComponentsUsingCss xs sm>
                <Col md={5} mdOffset={1}>
                  <Image
                    src={WHY_REACTJS_ACADEMY}
                    width="100%"
                    alt="Female ReactJS Academy student wearing glasses concentrating whilst looking into the distance, surrounded by other students with a laptop in the near distance."
                  />
                </Col>
              </HideComponentsUsingCss>
            </Row>
          </Grid>
        </Section>
        <TrustedBySection />
        <Section>
          <Grid>
            <Row>
              <Col md={5}>
                <Video
                  youtubeId="o6YwbHGfPOo"
                  description={
                    <P>
                      <em>
                        Andru Dunn, Senior Developer at{' '}
                        <strong>John Lewis</strong> speaks how ReactJS Academy
                        training has improved his team.
                      </em>
                    </P>
                  }
                />
              </Col>
              <Col md={5} mdOffset={1}>
                <H2>
                  What's in it for your company - why ReactJS Academy is great
                  for your team
                </H2>
                <Ul unstyled>
                  <Li>
                    <BulletIcon icon={TickBadgeIcon} />
                    Avoid delays and business losses
                  </Li>
                  <Li>
                    <BulletIcon icon={ReactIcon} />
                    Minimize risk of onboarding React
                  </Li>
                  <Li>
                    <BulletIcon icon={EnterMindIcon} />
                    Safe environment for developers to learn
                  </Li>
                  <Li>
                    <BulletIcon icon={HeartIcon} />
                    Increase employee retention and productivity
                  </Li>
                  <Li>
                    <BulletIcon icon={BussinessIcon} />
                    Offer more services to internal and external clients
                  </Li>
                </Ul>
                <SectionButtonRow>
                  <Col sm={7}>
                    <LinkButton
                      variant="secondary"
                      pdf
                      to={CONVINCE_THE_BOSS_PDF}
                    >
                      Why devs should learn with us
                    </LinkButton>
                  </Col>
                  <Col sm={5}>
                    <LinkButton
                      variant="secondary"
                      to="/corporate-team-training"
                    >
                      Corporate training
                    </LinkButton>
                  </Col>
                </SectionButtonRow>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Row>
              <Col md={10} mdOffset={1}>
                <AttendeeQuote
                  quote="You get the real in-person learning experience - you actually see what’s happening. It’s better than just watching a video where you can’t ask questions."
                  fullname="Nassar Kasirye"
                  job="Web Developer"
                  company=""
                  profilePicUrl={NASSAR}
                />
              </Col>
            </Row>
          </Grid>
        </Section>
        <UpcomingTrainingSection trainings={trainings} />
      </React.Fragment>
    )}
  </Layout>
)

export default IndexPage
