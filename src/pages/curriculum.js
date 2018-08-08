import React from 'react'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { H2Ref, P, H3 } from '../components/text'
import Link from '../components/navigation/Link'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import { CurriculumReactNative } from '../components/curriculum'
import Header from '../components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
} from '../components/training'
import { Card } from '../components/elements'
import CallToActionRow from '../components/layout/CallToActionRow'
import { Image } from '../components/elements'
import { BOOTCAMP_RIGHT } from '../config/images'
import {
  NotBegginersIcon,
  RunFastIcon,
  TargetIcon,
  TickBadgeIcon,
  BulletIcon,
  PeopleNetWorkIcon,
} from '../components/icons'

const Curriculum = () => (
  <React.Fragment>
    <Header
      titleLines={['Full ReactJS Academy curriculum']}
      subtitle="We're proud to say that our curriculum is the most<br />complete and up-to-date on the market - there really is<br />nowhere better to learn React."
      bgImg="full-time"
    />
    <TopSection>
      <Grid>
        <CallToActionRow left>
          <Col xs={12} sm={5} smOffset={1}>
            <LinkButton
              cta
              to="/react-redux-graphql-bootcamp-london"
              children="Next React Bootcamp: 20-25 Aug, London >>"
            />
          </Col>
        </CallToActionRow>
        <Card border="shadow">
          <Row>
            <Col lg={10} lgOffset={1}>
              <H2Ref>
                Bootcamps/part-time course - what's the difference?{' '}
                <Link to="#difference" name="difference">
                  #
                </Link>
              </H2Ref>
            </Col>
          </Row>
          <Row>
            <Col md={3} mdOffset={1}>
              {/* <Image src={BOOTCAMP_RIGHT} width="100%" /> */}
              image
          </Col>
            <Col md={6} mdOffset={1}>
              <H3>React bootcamp</H3>
              <P>
                Our React bootcamp has the most complete curriculum on the market, with a syllabus that covers:
              </P>
              <Ul>
                <Li>
                  Server-side rendering
              </Li>
                <Li>
                  Advanced React patterns
              </Li>
                <Li>
                  Advanced Redux
              </Li>
                <Li>
                  Functional programming
              </Li>
                <Li>
                  Hackathon to consolidate knowleadge
              </Li>
              </Ul>
              <P>
                <Link>See React bootcamp curriculum</Link>
              </P>
              <H3>React Native bootcamp</H3>
              <P>
                Our React Native bootcamp is the smoothest transition between React and Native.
              </P>
              <Ul>
                <Li>
                  React Native foundation
                </Li>
                <Li>
                  Native animations
                </Li>
                <Li>
                  Gestures
                </Li>
              </Ul>
              <P>
                <Link>See React Native curriculum</Link>
              </P>
              <H3>React part-time course</H3>
              <P>
                The part-time course has a condensed version of the React bootcamp curriculum, ideal for those who value flexible learning and can’t miss a day at work.
              </P>
              <P>
                <Link>See React part-time course curriculum</Link>
              </P>
              <H3>With all courses you will:</H3>
              <Ul>
                <Li>
                  Build production ready React applications
                </Li>
                <Li>
                  Discuss real-world projects
                </Li>
                <Li>
                  Learn best practices
                </Li>
                <Li>
                  Be mentored by the our expert coaches
                </Li>
                <Li>
                  Join our alumni community
                </Li>
                <Li>
                  Stay ahead in modern development
                </Li>
              </Ul>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <Ul inline>
              <Li>
                Choose a curriculum:
              </Li>
              <Li>
                React 1-week bootcamp
              </Li>
              <Li>
                React Native bootcamp
              </Li>
              <Li>
                Part-time course
              </Li>
            </Ul>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
)

export default Curriculum
