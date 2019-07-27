import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumReactBootcamp } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
// import Gallery from 'src/components/elements/Gallery'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  selectUpcomingTrainings,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
  RICHARD_MOSS,
} from 'src/components/training'
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

// const photos = [
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_Lunch.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_Lunch.jpg?alt=media',
//     width: 4,
//     height: 3,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FSquare_small_Sofa.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_sofa.jpg?alt=media',
//     width: 1,
//     height: 1,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_InnerHouse.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_InnerHouse.jpg?alt=media',
//     width: 3,
//     height: 4,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_students.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_innerhouse.jpg?alt=media',
//     width: 3,
//     height: 4,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_Beach.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_Beach.jpg?alt=media',
//     width: 4,
//     height: 3,
//   },
//   {
//     // PLEASE DON'T CHANGE THIS ONE, THIS IS THE MAP OF THE LOCATION
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_map.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/locations%2Fmap-parede-min.png?alt=media',
//     href:
//       'https://www.google.com/maps/place/R.+Cidade+de+Coimbra+193,+2775-180+Parede,+Portugal/@38.691922,-9.3665942,16z/data=!4m5!3m4!1s0xd1ec8ac7c522ef5:0x23caa118b27f6f97!8m2!3d38.6929353!4d-9.3612727',
//     width: 3,
//     height: 4,
//   },

//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_House.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_house.jpg?alt=media',
//     width: 4,
//     height: 3,
//   },

//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_Rich.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_Rich.jpg?alt=media',
//     width: 3,
//     height: 4,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2Fsquare_small_studentsofa.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_sofastudent.jpg?alt=media',
//     width: 1,
//     height: 1,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_fran.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_fran.jpg?alt=media',
//     width: 3,
//     height: 4,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_small_drinks.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_drinks.jpg?alt=media',
//     width: 4,
//     height: 3,
//   },
//   {
//     srcSmall:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FPortfolio_small_paredeWall.jpg?alt=media',
//     srcLarge:
//       'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flisbon_parede%2FLandscape_large_ParedeWall.jpg?alt=media&',
//     width: 3,
//     height: 4,
//   },
// ]

const VENUE_PDF =
  'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/pdf%2Fparede.pdf?alt=media'

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingLisbonBootcamps = selectUpcomingTrainings({
        trainings,
        type: REACT_BOOTCAMP,
        city: LISBON,
      })
      const training =
        selectNthTraining({ trainings: upcomingLisbonBootcamps, nth }) || {}

      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            link={[
              {
                rel: 'canonical',
                href: canonical,
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
                to: path,
                label: 'Lisbon',
              },
            ]}
          />
          <Header
            titleLines={['React Redux Bootcamp Lisbon']}
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
          <TopSection variant="dark" top>
            <Grid>
              <Card variant="primary">
                <Row>
                  <Col md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <H4>Lara's student experience</H4>
                    <Video youtubeId="_8Xox79wE9Q" />
                    <TrainingDetails
                      coaches={[HORACIO_HERRERA, ALEX_LOBERA, RICHARD_MOSS]}
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
              {/* <Row>
                <Col lg={10} lgOffset={1}>
                  <Gallery
                    className="course-details-our-venue"
                    downloadVenuePDF={VENUE_PDF}
                    photos={photos}
                  />
                </Col>
              </Row> */}
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <AttendeeQuote
                    quote="At the end of course, you have a finished project. The networking also, [students] share jobs on the [alumni] Slack channel."
                    fullname="Rafa Fraga"
                    job="Software Engineer"
                    youtubeId="pLl8uuLvKWA"
                  />
                </Col>

                <Col md={4} lgOffset={1}>
                  <H2Ref>Is this React bootcamp right for me? Are you...</H2Ref>
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
                  <Link
                    className="perfect-course-student"
                    to="/blog/are-you-the-perfect-react-graphql-student/"
                  >
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Card>
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

InstancePage.defaultProps = {
  pageContext: {},
}

export default InstancePage
