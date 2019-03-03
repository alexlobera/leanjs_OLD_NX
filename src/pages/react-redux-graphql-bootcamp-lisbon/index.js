import React from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'

import Section, { TopSection } from '../../components/layout/Section'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../../components/text'
import Ul, { Li } from '../../components/layout/Ul'
import { CurriculumBootcamp } from '../../components/curriculum'
import { Card, Video } from '../../components/elements'
import Gallery from '../../components/elements/Gallery'
import { HideComponentsUsingCss } from '../../components/utils'
import Header from '../../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../../config/images'
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
import { selectFirstTraining, REACT_BOOTCAMP, LISBON } from '../../config/data'
import { LIST_TWO_COL } from '../../components/curriculum/selectCurriculumLayout'

const training = selectFirstTraining(REACT_BOOTCAMP, LISBON)
const startMonth = moment(training.dateStartsOn).format('MMM')

const photos = [
  {
    srcSmall: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 4,
    height: 3,
  },
  {
    srcSmall: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1,
  },
  {
    srcSmall: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 3,
    height: 4,
  },
  {
    srcSmall: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 3,
    height: 4,
  },
  {
    srcSmall: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 4,
    height: 3,
  },
  {
    // PLEASE DON'T CHANGE THIS ONE, THIS IS THE MAP OF THE LOCATION
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/locations%2Fmap-parede-min.png?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/locations%2Fmap-parede-min.png?alt=media',
    href:
      'https://www.google.com/maps/place/R.+Cidade+de+Coimbra+193,+2775-180+Parede,+Portugal/@38.691922,-9.3665942,16z/data=!4m5!3m4!1s0xd1ec8ac7c522ef5:0x23caa118b27f6f97!8m2!3d38.6929353!4d-9.3612727',
    width: 3,
    height: 4,
  },
  {
    srcSmall: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 4,
    height: 3,
  },
  {
    srcSmall: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1,
  },
  {
    srcSmall: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 3,
    height: 4,
  },
  {
    srcSmall: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 4,
    height: 3,
  },
  {
    srcSmall: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1,
  },
  {
    srcSmall: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 3,
    height: 4,
  },
  {
    srcSmall: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    srcLarge: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 4,
    height: 3,
  },
  {
    srcSmall: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    srcLarge: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 1,
    height: 1,
  },
  {
    srcSmall: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    srcLarge: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 1,
    height: 1,
  },
]

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
          to: '/react-redux-graphql-bootcamp-lisbon/',
          label: `${training.cityShortName} ${startMonth}`,
        },
      ]}
    />
    <Header
      titleLines={['React Redux GraphQL Bootcamp - Lisbon']}
      subtitle="Take your dev career to the next level by mastering<br />React, Redux, and GraphQL - in just 1 week!"
      links={header.landingTraining.links}
      bgImg="training-event"
      type={REACT_BOOTCAMP}
      training={training}
      linkToGallery="venue"
    />
    <TopSection xsBgDark top>
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
                    <P>
                      <Link to="#venue">See venue</Link> |{' '}
                      <Link to="https://goo.gl/maps/4YCHgrxzqbx">
                        See on map
                      </Link>
                    </P>
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
                <Newsletter />
              </Row>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} xs={12} lgOffset={1}>
            <H2Ref>
              Our Venue
              <Link to="#venue" name="venue">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
        <Row>
          <Col lg={10} lgOffset={1}>
            <Gallery photos={photos} />
            <P align="center" top="20">
              <Link to="https://www.tripadvisor.co.uk/Tourism-g1426241-Parede_Lisbon_District_Central_Portugal-Vacations.html">
                More Details on TripAdvisor
              </Link>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <HideComponentsUsingCss xs sm>
            <Col md={6} lg={5}>
              <Image
                src={BOOTCAMP_COLLAB}
                width="100%"
                alt="ReactJS Academy coach Tiago assisting two students, inspecting their laptop screens and ready to answer their questions"
              />
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
              <CurriculumBootcamp layout={LIST_TWO_COL} />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default BootcampLisbon
