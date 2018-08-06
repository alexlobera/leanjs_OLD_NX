import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import { HideSingleComponentUsingCss } from '../components/utils'
import { FullCurriculum } from '../components/curriculum'
import { SCREEN_XS_MAX } from '../components/utils'
import Header from '../components/layout/Header'
import { Card, Image } from '../components/elements'
import TrustedBySection from '../components/training/TrustedBySection'
import CallToActionRow from '../components/layout/CallToActionRow'
import {
  UpcomingBootcampsSection,
} from '../components/training'
import {
  BussinessIcon,
  CalendarIcon,
  CodeIcon,
  CollabsIcon,
  EnterMindIcon,
  HeartIcon,
  NotBegginerIcon,
  ProductionReadyIcon,
  RunFastIcon,
  SpannerIcon,
  StarIcon,
  TargetIcon,
  TickBadgeIcon,
  TimeIcon,
  TrainerIcon,
  ReactIcon,
  WorldIcon,
  BulletIcon,
} from '../components/icons'

import {
  LONDON,
  LISBON,
  COURSE_COLLAB,
  WHY_REACTJS_ACADEMY,
  COMPANY_PITCH,
  DAN,
  NASSAR,
} from '../config/images.js'

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
              cta
              to="/react-redux-graphql-bootcamp"
              children="1-week bootcamp >>"
            />
          </Col>
          <Col xs={12} sm={4}>
            <LinkButton
              to="/react-redux-graphql-part-time-course"
              children="6-week part-time course >>"
            />
          </Col>
          <Col xs={12} sm={4}>
            <LinkButton
              to="/about-us#corporate-training"
              children="Corporate team training >>"
            />
          </Col>
        </CallToActionRow>
        <Card border="shadow">
          <FullCurriculum />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Image src={COURSE_COLLAB} width="100%" />
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
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col mdOffset={1} md={10}>
            <AttendeeQuote
              quote="The ReactJS Academy bootcamp has literally taken me from being someone who has no React experience to feeling like I can go back to my company and be one of the experts in house. It’s forwarded my career significantly."
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
            <H2>
              Is this training right for me?
              <br />
              Why ReactJS Academy
            </H2>
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
                <Link to="/react-redux-graphql-bootcamp">Bootcamps</Link> for
                accelerated learning.
              </Li>
              <Li>
                <BulletIcon icon={CalendarIcon} />
                <Link to="/react-redux-graphql-part-time-course">
                  Part-time courses
                </Link>{' '}
                for accelerated learning.
              </Li>
            </Ul>
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <SectionButtonRow>
              <Col sm={6}>
                <LinkButton
                  cta
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamps"
                />
              </Col>
              <Col sm={6}>
                <LinkButton
                  to="/react-redux-graphql-part-time-course"
                  children="Part-time courses"
                />
              </Col>
            </SectionButtonRow>
          </Col>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5} mdOffset={1}>
              <Image src={WHY_REACTJS_ACADEMY} width="100%" />
            </Col>
          </HideSingleComponentUsingCss>
        </Row>
      </Grid>
    </Section>
    <TrustedBySection />
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Image src={COMPANY_PITCH} width="100%" />
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>
              What's in it for your company - Why ReactJS Academy is great for
              your team
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
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <SectionButtonRow>
              <Col md={4}>
                <LinkButton
                  to="/about-us#private-on-site-corporate-training"
                  children="Corporate training"
                />
              </Col>
              <Col md={4}>
                <LinkButton
                  to="/react-redux-graphql-part-time-course"
                  children="Part-time courses"
                />
              </Col>
              <Col md={4}>
                <LinkButton
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamps"
                />
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
    <UpcomingBootcampsSection />
  </React.Fragment>
)

export default IndexPage
