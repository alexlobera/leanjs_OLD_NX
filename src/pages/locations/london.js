import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { Link } from 'src/components/navigation'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  UpcomingTrainingTabs,
  selectUpcomingTrainings,
} from 'src/components/training'
import TrustedBySection from 'src/components/training/TrustedBySection'
import { Card } from 'src/components/elements'
import { WHY_GQLU_ACADEMY } from 'src/config/images.js'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
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

          <TrustedBySection />

          <BlogSection tags={['london']} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQL
