import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H2, H2Ref, P } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import { CurriculumBootcamp } from '../components/curriculum'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../components/utils'
import Header from '../components/layout/Header'
import { Card } from '../components/elements'
import TrustedBySection from '../components/training/TrustedBySection'
import CallToActionRow from '../components/layout/CallToActionRow'
import TrainingItem from '../components/training/TrainingItem'
import TrainingList from '../components/training/TrainingList'
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
import london from '../../img/london.png'
import lisbon from '../../img/lisbon.png'
import courseCollab from '../../img/courseCollab.png'
import whyReactJSAcademy from '../../img/whyReactJSAcademy.png'
import companyPitch from '../../img/companyPitch.png'

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
  <div>
    <Header
      titleLines={['Take your dev career further', 'by mastering React']}
      subtitle="In-person training from experts who were <br /> the first in
      Europe to teach React"
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
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <img src={courseCollab} width="100%" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col lg={11} lgOffset={1}>
                <H2>What will I get from a ReactJS Academy training?</H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <img src={courseCollab} width="100%" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12} lg={11} lgOffset={1}>
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
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lgOffset={1} lg={10}>
            <AttendeeQuote
              quote="After being a developer for 10 years and with the increasing amount of people coming into tech, I wanted to ensure I stayed ahead of the curve in my skills to make my career further. Simply put, ReactJS Academy gave me that!"
              fullname="Joe Woodley"
              job="Senior Front-end developer"
              company="ASOS.com"
              profilePicUrl="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col md={7} lg={6} lgOffset={1}>
            <Row>
              <Col>
                <H2>
                  Is this training right for me?<br />Why ReactJS Academy
                </H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <img src={whyReactJSAcademy} width="100%" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
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
                    <BulletIcon icon={CollabsIcon} />
                    A <strong>collaborative</strong> learning environment.
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
              </Col>
            </Row>
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <SectionButtonRow>
              <Col xs={12} md={6}>
                <LinkButton
                  cta
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamps"
                />
              </Col>
              <Col xs={6} md={6}>
                <LinkButton
                  to="/react-redux-graphql-part-time-course"
                  children="Part-time courses"
                />
              </Col>
            </SectionButtonRow>
          </Col>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <img src={whyReactJSAcademy} width="100%" />
            </Col>
          </HideSingleComponentUsingCss>
        </Row>
      </Grid>
    </Section>
    <TrustedBySection />
    <Section>
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <img src={companyPitch} width="100%" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col lg={10} lgOffset={1}>
                <H2>
                  What's in it for your company - Why is ReactJS Academy great
                  for your team
                </H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <img src={companyPitch} width="100%" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12} lg={10} lgOffset={1}>
                <Ul unstyled>
                  <Li>
                    <BulletIcon icon={TickBadgeIcon} />
                    Avoid delays and business losses
                  </Li>
                  <Li>
                    <BulletIcon icon={ReactIcon} />
                    Minimize risk of on boarding React
                  </Li>
                  <Li>
                    <BulletIcon icon={EnterMindIcon} />
                    Safe environment for developers to learn
                  </Li>
                  <Li>
                    <BulletIcon icon={HeartIcon} />
                    Increase employee retention, motivation and productivity
                  </Li>
                  <Li>
                    <BulletIcon icon={BussinessIcon} />
                    Offer more services to internal and external clients
                  </Li>
                </Ul>
              </Col>
              <Col md={12} lg={10} lgOffset={1}>
                <P>
                  <Link to="/react-redux-graphql-bootcamp#curriculum">
                    Checkout the curriculum
                  </Link>
                </P>
                <SectionButtonRow>
                  <Col md={4}>
                    <LinkButton
                      to="/about-us#private-on-site-corporate-training"
                      children="Corporate team training"
                    />
                  </Col>
                  <Col md={4}>
                    <LinkButton
                      to="/react-redux-graphql-part-time-course"
                      children="6-week Part-time courses"
                    />
                  </Col>
                  <Col md={4}>
                    <LinkButton
                      to="/react-redux-graphql-bootcamp"
                      children="1-week bootcamp"
                    />
                  </Col>
                </SectionButtonRow>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <AttendeeQuote
              quote="My devs were on training for a week, but when they came back they were React Masters. We adpoted the ecosystem much quicker than we thought possible and now we work faster and more efficiently."
              fullname="Richard Moss"
              job="CTO"
              company="Financial Times"
              profilePicUrl="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <H2Ref>
          <Col lg={10} lgOffset={1}>
            Upcoming Bootcamps{' '}
            <a name="next-part-time-courses" href="#next-part-time-courses">
              #
            </a>
          </Col>
        </H2Ref>
        <Row>
          <Col lg={10} lgOffset={1}>
            <TrainingList>
              <TrainingItem
                location="Makers Academy, London"
                startDate="August 20th to 25th, 2018"
                name="London bootcamp"
                path="/react-redux-graphql-bootcamp-london"
                imageSrc={london}
              />
              <TrainingItem
                location="Lisbon, Portugal"
                startDate="TBD"
                name="Lisbon bootcamp"
                path="/react-redux-graphql-bootcamp-lisbon"
                imageSrc={lisbon}
              />
            </TrainingList>
          </Col>
        </Row>
      </Grid>
    </Section>
  </div>
)

export default IndexPage
