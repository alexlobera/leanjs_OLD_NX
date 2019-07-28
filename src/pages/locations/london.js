import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { P, H2 } from 'src/components/text'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  UpcomingTrainingTabs,
  selectUpcomingTrainings,
} from 'src/components/training'
import LinkButton from 'src/components/buttons/LinkButton'
import { Card, Image } from 'src/components/elements'
import { WHY_GQLU_ACADEMY } from 'src/config/images.js'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'
import { LONDON } from '../../config/data'

const metas = {
  title: 'Locations and cities | React GraphQL Academy',
  description:
    'Do you want to know in which cities is React GraphQL Academy located? We are in many cities across Europe!',
  image: WHY_GQLU_ACADEMY,
  type: 'website',
}

const instagramPictures = [
  {
    pageUrl: 'https://www.instagram.com/p/BlKzTaDhgHi/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36817558_450106245453815_6112091121972674560_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bk75sNohLYj/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F35617654_170833687116966_1947517169063428096_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bk5YOLChqtU/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36086456_1480216008745939_24472745127444480_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bez93FGjzF_/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26865648_169528813824877_4406314323148800000_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BegfOKJhqlI/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864897_328580144320192_5121053768045035520_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BetL4W9jgH-/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864416_129494071196900_7973896072546222080_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BehzsERhFD-/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26297885_475227026212742_5117213139569475584_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm6aQgUBf5I/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39082080_461163161052325_8607426366004002816_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bn03JlsBzha/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F40837332_948936048642799_1172628414218297748_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm5oSYThgdh/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38906658_416479198875897_7532493989954453504_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm1fSwqhbs6/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39509245_240024560031837_3622283981887635456_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BmzERnchwWI/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38910064_2053848154901051_8646084443217330176_n.jpg?alt=media',
  },
]

const TwitterWidgetsOnlyOnClientSide = () => {
  if (typeof window !== 'undefined') {
    // package react-twitter-embed does not work on SSR, therefore it breaks the Gatsby build
    const {
      TwitterTimelineEmbed,
      TwitterFollowButton,
    } = require('react-twitter-embed')

    return (
      <React.Fragment>
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactgqlacademy"
          options={{ height: 800 }}
        />
        <TwitterFollowButton
          screenName="reactgqlacademy"
          options={{ size: 'large' }}
        />
      </React.Fragment>
    )
  } else {
    return null
  }
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
            <Grid>
              <Card border="shadow">
                <Link to="#upcoming" name="upcoming" />
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <H2>Upcoming in London</H2>
                    <UpcomingTrainingTabs
                      trainings={upcomingLondon}
                      limit={12}
                    />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>

          <Section>
            <Grid>
              <Row>
                <Col md={4} mdOffset={1}>
                  <H2>
                    London Instagram <a name="instagram" />
                  </H2>
                  <p>
                    <Link to="https://www.instagram.com/reactgraphqlacademy/">
                      @reactgraphqlacademy
                    </Link>
                  </p>
                  <Row>
                    {instagramPictures.map(({ imageUrl, pageUrl }) => (
                      <Col xs={4} key={pageUrl}>
                        <Link to={pageUrl}>
                          <Image
                            src={imageUrl}
                            alt="React GraphQL Academy Instagram images. We were unable to bring the descriptive text from Instagram, apologies."
                          />
                        </Link>
                      </Col>
                    ))}
                  </Row>
                  <Card small bg="dark">
                    <H2>
                      London Meetup
                      <a name="meetups" />
                    </H2>
                    <P>
                      We run and help support a meetup group in London called
                      JavaScript London.{' '}
                    </P>
                    <LinkButton
                      external
                      to="/https://www.meetup.com/JavaScript-london/"
                    >
                      See meetup group
                    </LinkButton>
                  </Card>
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2>
                    Twitter
                    <a name="twitter" />
                  </H2>
                  <TwitterWidgetsOnlyOnClientSide />
                </Col>
              </Row>
            </Grid>
          </Section>

          <BlogSection tags={['london']} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQL
