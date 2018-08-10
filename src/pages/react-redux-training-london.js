import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumPartTime } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrustedByLogoList,
} from '../components/training'
import { HideSingleComponentUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { PART_TIME, CATALIN } from '../config/images'
import { Image } from '../components/elements'
import header from '../components/layout/Header.json'
import { InstallmentsCard, CheckoutSection } from '../components/payment'
import { Link, Breadcrumb } from '../components/navigation'

const BootcampLondon = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-part-time-course', label: 'Part-time' },
        { to: '/react-redux-training-london', label: 'London' },
      ]}
    />
    <Header
      titleLines={['React part-time course', '2 Oct - 8 Nov, 2018 - London']}
      subtitle="Take your dev career to the next level by mastering<br />React, Redux, and GraphQL - without missing a day at work!"
      details={[
        <React.Fragment>Location: 50 Commercial St, E1 6LT, London . <Link to="https://www.google.com/maps/place/Makers/@51.5173403,-0.0754695,17z/data=!3m1!4b1!4m5!3m4!1s0x48761caf26599a83:0x9b451d586c649129!8m2!3d51.5173403!4d-0.0732808">See on map</Link></React.Fragment>,
        'Timings: 6pm-9pm, Tuesdays & Thursdays',
      ]}
      links={header.landingTraining.links}
      bgImg="part-time"
    />
    <TopSection xsBgDark>
      <Grid>
        <Card bg="dark">
          <Row>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeID="yvROXLQ1jHg" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <CheckoutSection
                trainingInstanceId="5b1c2197b8340f47a4b8e3e7"
                price={995}
                title="React Part-Time London"
                discountPercentage={24}
                priceGoesUpOn="Price goes up to &pound;1295 on August 31st, 2018."
                ticketName="Early bird ticket"
              />
              <InstallmentsCard price={1500} />
            </Col>
          </Row>
        </Card>
        <Card white border="shadow">
          <CurriculumPartTime showCallToActionBottom={true} />
        </Card>
      </Grid>
    </TopSection>

    <Section>
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={6} lg={5}>
              <Image src={PART_TIME} width="100%" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={6} lg={5} lgOffset={1}>
            <H2Ref>
              Is this React part-time course right for me? Are you...{' '}
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginerIcon} />A developer with ~1 year of
                development under your belt?
              </Li>
              <Li>
                <BulletIcon icon={CodeIcon} />
                Familiar with front-end technologies like JavaScript, CSS, and
                HTML?
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                Taking a step forward to become a React JS specialist, able to
                make critical decisions in the architecture of a React
                application.
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Not satisfied with online learning and it's lack of 1-on-1
                mentoring?
              </Li>
            </Ul>
            <P>
              If you've said 'yes' to these, our part-time course could be for
              you!
            </P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a learn-to-code course. If you want to learn to code,
              we recommend you contact our London-based partner{' '}
              <Link to="https://makers.tech/">Makers</Link>. PLUS you'll get a
              &pound;250 discount using our reference "ReactJS Academy".
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <AttendeeQuote
              quote="Technology nowadays changes very often and in future you may not be able to find a job with the things you know - you have to keep up. I like the fact that we got to write code rather than focus on theory - it’s very balanced."
              fullname="Catalin Cislariu"
              job="Senior Developer"
              company="KLEIDO LTD"
              profilePicUrl={CATALIN}
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col lg={10} lgOffset={1}>
              <H2>Trusted by industry leaders</H2>
              <TrustedByLogoList />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default BootcampLondon
