import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumAdvancedReact } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import { HideComponentsUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  WILL_VOELCKER,
  ALEX_LOBERA,
  RICHARD_MOSS,
} from '../components/training'
import {
  BulletIcon,
  NotBegginerIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import header from '../components/layout/Header.json'
import { PaymentSection } from '../components/payment'
import { Link, Breadcrumb } from '../components/navigation'
import { selectFirstTraining, ADVANCED_REACT, LONDON } from '../config/data'

const training = selectFirstTraining(ADVANCED_REACT, LONDON)

const BootcampLondon = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        {
          to: '/advanced-react-redux-graphql-bootcamp',
          label: 'Advanced React',
        },
        {
          to: '/advanced-react-redux-graphql-bootcamp-london',
          label: 'London',
        },
      ]}
    />
    <Header
      titleLines={[
        'Advanced React Redux GraphQL',
        `Bootcamp, ${training.dates} - ${training.cityShortName}`,
      ]}
      subtitle="Take your React career to the next level by mastering<br />React, Redux, and GraphQL - in just 3 days!"
      links={header.landingTraining.links}
      bgImg="training-event"
    />
    <TopSection xsBgDark>
      <Grid>
        <Card bg="dark">
          <Row>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <PaymentSection
                data={{
                  trainingInstanceId: training.trainingInstanceId,
                  price: training.price,
                  currency: training.currency,
                }}
              />
            </Col>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeID="yvROXLQ1jHg" />
              <TrainingDetails
                date={training.dates}
                timing="9am - 6:30pm, everyday"
                location={
                  <React.Fragment>
                    {training.location}
                    <Link to="https://goo.gl/maps/Qsit5Y81Uy62">
                      {' '}
                      See on map
                    </Link>
                  </React.Fragment>
                }
                coaches={[ALEX_LOBERA, HORACIO_HERRERA, RICHARD_MOSS]}
              />
            </Col>
          </Row>
        </Card>
        <Card white border="shadow">
          <CurriculumAdvancedReact />
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
              Is this advanced React bootcamp right for me? Are you...{' '}
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginerIcon} />A{' '}
                <strong>React developer with 1+ year of development</strong>{' '}
                under your belt using React?
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                Taking a step forward to become a{' '}
                <strong>Senior React developer</strong> able to make critical
                decisions about the architecture of a React application.
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Not satisfied with the pace of online learning and it's lack of
                1-on-1 mentoring?
              </Li>
            </Ul>
            <P>
              If you've said 'yes' to these, our{' '}
              <strong>advanced React bootcamp</strong> could be for you!
            </P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is a bootcamp for React developers that are experienced with
              React. If you don't have 1+ year of experience using React we
              recommend you to attend our{' '}
              <Link to="/react-redux-graphql-bootcamp">React Bootcamp</Link>.
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
