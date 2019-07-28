import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { Link } from 'src/components/navigation'
import { TopSection, ColSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  UpcomingTrainingTabs,
  selectUpcomingTrainings,
} from 'src/components/training'
import Ul, { Li } from 'src/components/layout/Ul'
import TrustedBySection from 'src/components/training/TrustedBySection'
import { Card } from 'src/components/elements'
import { WHY_GQLU_ACADEMY } from 'src/config/images.js'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'
import { LONDON } from '../../config/data'
import Gallery from 'src/components/elements/Gallery'

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

const metas = {
  title: 'Locations and cities | React GraphQL Academy',
  description:
    'Do you want to know in which cities is React GraphQL Academy located? We are in many cities across Europe!',
  image: WHY_GQLU_ACADEMY,
  type: 'website',
}

const GraphQL = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const upcomingLondon = selectUpcomingTrainings({
        trainings,
        city: LONDON,
      })
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
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
              { to: '/locations', label: 'Locations' },
              { to: path, label: 'London' },
            ]}
          />
          <Header
            titleLines={['React GraphQL Academy London']}
            subtitle="The React and GraphQL hub in London"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Upcoming',
                to: '#upcoming',
              },
              {
                text: 'Photos',
                to: '#instagram',
              },
            ]}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection mt={-250}>
            <Card border="shadow">
              <Link to="#upcoming" name="upcoming" />
              <Row>
                <Col lg={10} lgOffset={1}>
                  <H2>Upcoming events in London</H2>
                  <UpcomingTrainingTabs trainings={upcomingLondon} limit={12} />
                </Col>
              </Row>
            </Card>
          </TopSection>

          <ColSection
            col={<Gallery className="pictures-city-gallery" photos={photos} />}
            col2={
              <React.Fragment>
                <H2>Is React GraphQL Academy right for me?</H2>
                <Ul>
                  <Li>
                    For working developers - <strong>not for beginners!</strong>
                  </Li>
                  <Li>
                    <strong>Hands-on project-based</strong> training.
                  </Li>
                  <Li>
                    <strong>collaborative</strong> learning environment.
                  </Li>
                  <Li>
                    <Link
                      to="/react/training/bootcamp"
                      className="is-it-for-me"
                    >
                      Bootcamps
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                  <Li>
                    <Link
                      to="/react/training/part-time-course/"
                      className="is-it-for-me"
                    >
                      Part-time courses
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                </Ul>
              </React.Fragment>
            }
          />

          <TrustedBySection />

          <BlogSection tags={['london']} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQL
