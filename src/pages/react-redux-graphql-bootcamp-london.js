import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import { HideSingleComponentUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection, AttendeeQuote } from '../components/training'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import header from '../components/layout/Header.json'
import { InstallmentsCard, CheckoutSection } from '../components/payment'
import { Link, Breadcrumb } from '../components/navigation'

const BootcampLondon = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-bootcamp', label: 'React bootcamp' },
        { to: '/react-redux-graphql-bootcamp-london', label: 'London' },
      ]}
    />
    <Header
      titleLines={[
        'React Redux GraphQL Bootcamp',
        '20-25 Aug, 2018 - Greenwich, London',
      ]}
      subtitle="Take your dev career to the next level by mastering<br />React, Redux, and GraphQL - in just 7 days!"
      details={[
        <React.Fragment>
          Location: 21 Randall Pl, SE10 9LA, London.{' '}
          <Link to="https://www.google.co.uk/maps/place/James+Wolfe+Primary+School/@51.4795106,-0.0128294,17z/data=!4m5!3m4!1s0x4876028f69ad1c31:0xf60af68c0cfb8748!8m2!3d51.4795663!4d-0.0129411">
            See on map
          </Link>
        </React.Fragment>,
        'Timings: 9am-6:30pm, everyday',
      ]}
      links={header.landingTraining.links}
      bgImg="training-event"
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
                trainingInstanceId="5b3605d7b8340f47a4b8e420"
                price={1800}
                title="Bootcamp London"
                discountPercentage={12}
                ticketName="Regular ticket"
              />
              <InstallmentsCard price={2160} />
            </Col>
          </Row>
        </Card>
        <Card white border="shadow">
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={6} lg={5}>
              <Image src={BOOTCAMP_COLLAB} width="100%" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={6} lg={5} lgOffset={1}>
            <H2Ref>
              Is this bootcamp right for me? Are you...{' '}
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginerIcon} />A developer with 1+ year of
                development under your belt using JavaScript?
              </Li>
              <Li>
                <BulletIcon icon={CodeIcon} />
                Familiar with front-end technologies like JavaScript, CSS, and
                HTML?
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                Taking a step forward to become a React JS Specialist able to
                make critical decisions about the architecture of a React
                application.
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Not satisfied with the pace of online learning and it's lack of
                1-on-1 mentoring?
              </Li>
            </Ul>
            <P>If you've said 'yes' to these, our bootcamp could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a learn-to-code bootcamp. If you want to learn to
              code, we recommend you to contact our London-based partner{' '}
              <Link to="https://makers.tech/" target="_blanck">
                Makers
              </Link>
              . PLUS you'll get a &pound;250 discount using our reference
              "ReactJS Academy".
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
