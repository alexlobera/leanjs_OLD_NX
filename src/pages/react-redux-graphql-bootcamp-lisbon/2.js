import React from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'
import Section, { TopSection } from '../../components/layout/Section'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../../components/text'
import Ul, { Li } from '../../components/layout/Ul'
import { CurriculumBootcamp } from '../../components/curriculum'
import { Card, Video } from '../../components/elements'
import { HideComponentsUsingCss } from '../../components/utils'
import Header from '../../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../../config/images'
import { TrustedByLogoList } from '../../components/training/TrustedBySection'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  WILL_VOELCKER,
  ALEX_LOBERA,
  RICHARD_MOSS,
} from '../../components/training'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
} from '../../components/icons'
import { Image, Newsletter } from '../../components/elements'
import header from '../../components/layout/Header.json'
import { InstallmentsCard, PaymentSection } from '../../components/payment'
import { Link, Breadcrumb } from '../../components/navigation'
import { selectSecondTraining, REACT_BOOTCAMP, LISBON } from '../../config/data'

const training = selectSecondTraining(REACT_BOOTCAMP, LISBON)
const startMonth = moment(training.dateStartsOn).format('MMM')

const BootcampLisbon = () => (
  <React.Fragment>
    <Helmet
      link={[
        {
          rel: 'canonical',
          href: `https://reactjs.academy/react-redux-graphql-bootcamp-lisbon`,
        },
      ]}
    />
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-bootcamp', label: 'React bootcamp' },
        {
          to: '/react-redux-graphql-bootcamp-lisbon/2',
          label: `${training.cityShortName} ${startMonth}`,
        },
      ]}
    />
    <Header
      titleLines={[
        'React Redux GraphQL Bootcamp',
        `${training.dates} - Portugal`,
      ]}
      subtitle="Take your dev career to the next level by mastering<br />React, Redux, and GraphQL - in just 1 week!"
      links={header.landingTraining.links}
      bgImg="training-event"
      type={REACT_BOOTCAMP}
      training={training}
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
                  discountPrice: training.discountPrice,
                  priceGoesUpOn: training.priceGoesUpOn,
                  currency: training.currency,
                }}
              />
              <InstallmentsCard
                price={training.price}
                currency={training.currency}
              />
            </Col>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeId="bMD_b7w7r-g" />
              <TrainingDetails
                date={training.dates}
                timing="Sunday, 4pm - 7pm. Monday-Saturday, 9am - 6:30pm"
                foodIncluded
                location={
                  <React.Fragment>
                    {training.location}.{' '}
                    <Link to="https://www.google.com/maps/place/Torres+Vedras,+Portugal/@39.0930924,-9.2980036,13z/data=!3m1!4b1!4m5!3m4!1s0xd1f2dc22d3a1b53:0xca2cc4fc7eaba688!8m2!3d39.0917759!4d-9.2600341">
                      See on map
                    </Link>
                  </React.Fragment>
                }
                coaches={[
                  HORACIO_HERRERA,
                  WILL_VOELCKER,
                  ALEX_LOBERA,
                  RICHARD_MOSS,
                ]}
              />
              <Row>
                <Newsletter />{' '}
              </Row>
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
              Is this React bootcamp right for me? Are you...{' '}
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

export default BootcampLisbon
