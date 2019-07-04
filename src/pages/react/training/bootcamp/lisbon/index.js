import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumReactBootcamp } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import Gallery from 'src/components/elements/Gallery'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from 'src/config/images'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  selectUpcomingTrainings,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  WILL_VOELCKER,
  ALEX_LOBERA,
  RICHARD_MOSS,
} from 'src/components/training'
import { Image } from 'src/components/elements'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { REACT_BOOTCAMP, LISBON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'React Bootcamp in Lisbon | React GraphQL Academy',
  description:
    'Interested in a React Lisbon bootcamp? Take a deep dive into the React ecosystem and become a confident React developer with our React bootcamp Lisbon.',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const photos = [
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_Lunch.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_Lunch.jpg?alt=media',
    width: 4,
    height: 3,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FSquare_small_Sofa.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_sofa.jpg?alt=media',
    width: 1,
    height: 1,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_InnerHouse.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_InnerHouse.jpg?alt=media',
    width: 3,
    height: 4,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_students.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_innerhouse.jpg?alt=media',
    width: 3,
    height: 4,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_Beach.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_Beach.jpg?alt=media',
    width: 4,
    height: 3,
  },
  {
    // PLEASE DON'T CHANGE THIS ONE, THIS IS THE MAP OF THE LOCATION
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_map.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/locations%2Fmap-parede-min.png?alt=media',
    href:
      'https://www.google.com/maps/place/R.+Cidade+de+Coimbra+193,+2775-180+Parede,+Portugal/@38.691922,-9.3665942,16z/data=!4m5!3m4!1s0xd1ec8ac7c522ef5:0x23caa118b27f6f97!8m2!3d38.6929353!4d-9.3612727',
    width: 3,
    height: 4,
  },

  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_House.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_house.jpg?alt=media',
    width: 4,
    height: 3,
  },

  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_Rich.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_Rich.jpg?alt=media',
    width: 3,
    height: 4,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2Fsquare_small_studentsofa.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_sofastudent.jpg?alt=media',
    width: 1,
    height: 1,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_fran.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_fran.jpg?alt=media',
    width: 3,
    height: 4,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_drinks.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_drinks.jpg?alt=media',
    width: 4,
    height: 3,
  },
  {
    srcSmall:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_paredeWall.jpg?alt=media',
    srcLarge:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_ParedeWall.jpg?alt=media&',
    width: 3,
    height: 4,
  },
]

const VENUE_PDF =
  'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/pdf%2Fparede.pdf?alt=media'

const BootcampLisbon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingLisbonBootcamps = selectUpcomingTrainings({
        trainings,
        type: REACT_BOOTCAMP,
        city: LISBON,
      })
      const training =
        selectNthTraining({ trainings: upcomingLisbonBootcamps }) || {}

      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            link={[
              {
                rel: 'canonical',
                href: `https://reactgraphql.academy/react/training/bootcamp-lisbon`,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/bootcamp',
                label: 'Bootcamp',
              },
              {
                to: '/react/training/bootcamp/lison',
                label: 'Lisbon',
              },
            ]}
          />
          <Header
            titleLines={['React Redux GraphQL Bootcamp - Lisbon']}
            subtitle="Take your dev career to the next level by mastering<br />React and Redux - in just a few days!"
            links={[
              ...header.landingTraining.links,
              {
                text: 'Venue',
                to: '#venue',
              },
            ]}
            bgImageName={BOOTCAMP}
            type={REACT_BOOTCAMP}
            training={training}
            linkToGallery="venue"
            downloadVenuePDF={VENUE_PDF}
            showInfoBox={true}
          />
          <TopSection xsBgDark top>
            <Grid>
              <Card bg="dark">
                <Row>
                  <Col md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="bMD_b7w7r-g" />
                    <TrainingDetails
                      coaches={[
                        HORACIO_HERRERA,
                        WILL_VOELCKER,
                        ALEX_LOBERA,
                        RICHARD_MOSS,
                      ]}
                    />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
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
                  <Gallery downloadVenuePDF={VENUE_PDF} photos={photos} />
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
                      alt="React GraphQL Academy coach Tiago assisting two students, inspecting their laptop screens and ready to answer their questions"
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
                  <Ul>
                    <Li>
                      A developer with 1+ year of development under your belt
                      using JavaScript?
                    </Li>
                    <Li>
                      Familiar with front-end technologies like JavaScript, CSS,
                      and HTML?
                    </Li>
                    <Li>
                      Taking a step forward to become a React JS Specialist able
                      to make critical decisions about the architecture of a
                      React application.
                    </Li>
                    <Li>
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, our bootcamp could be for
                    you!
                  </P>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    This is not a learn-to-code course. If you want to learn to
                    code, we recommend checking out{' '}
                    <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                      Free Code camps
                    </Link>
                    .
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
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
                    <CurriculumReactBootcamp layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default BootcampLisbon
