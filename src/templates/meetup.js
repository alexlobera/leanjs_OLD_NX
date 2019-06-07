import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'
import path from 'path'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H2Ref, H3, H5, P } from 'src/components/text'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectTrainingById,
} from 'src/components/training'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { MEETUP } from 'src/config/data'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: P,
    h2: H2,
    h3: H3,
    h5: H5,
  },
}).Compiler

const MeetUpPage = ({ data }) => {
  const { city } = data.markdownRemark.frontmatter
  const { htmlAst, fileAbsolutePath, excerpt } = data.markdownRemark
  const instanceID = path.basename(
    fileAbsolutePath,
    path.extname(fileAbsolutePath)
  )
  return (
    <Layout>
      {({ trainings, trainingLoading, trainingError }) => {
        const training = selectTrainingById({
          trainings,
          id: instanceID,
        })
        const meetupTitle = training && training.venueName
        return (
          <React.Fragment>
            <Helmet
              title={meetupTitle}
              meta={[
                {
                  name: 'description',
                  content: excerpt,
                },
              ]}
            >
              <meta property="og:title" content={meetupTitle} />
              <meta property="og:description" content={excerpt} />
              <meta property="og:type" content="article" />
            </Helmet>
            <Breadcrumb
              path={[
                { to: '/', label: 'Home' },
                { to: '/community', label: 'Community' },
                { to: '/community/meetups/', label: 'Meetups' },
                {
                  to: `/community/meetups/${instanceID}`,
                  label: `${meetupTitle}`,
                },
              ]}
            />
            <Header
              titleLines={[meetupTitle || '...loading']}
              links={[
                { text: 'Meetup Details', to: '#details' },
                { text: 'Buy tickets', to: '#pricing' },
              ]}
              training={training}
              showInfoBox={true}
              type={MEETUP}
            />
            <TopSection xsBgDark>
              <Grid>
                <Card bg="dark">
                  <Row>
                    <Col md={6} lg={4} lgOffset={1}>
                      <H2Ref>
                        Meetup details
                        <Link to="#details" name="details">
                          #
                        </Link>
                      </H2Ref>
                      <P>We are very excited to announce our next meetup!</P>
                      {renderAst(htmlAst)}
                      <br />
                      <H5>Meetup Group:</H5>
                      <Link to={`https://www.meetup.com/JavaScript-${city}/`}>
                        JavaScript {city}
                      </Link>
                    </Col>
                    <Col md={6} lg={5} lgOffset={1}>
                      <PaymentSection
                        training={training}
                        trainingError={trainingError}
                        trainingLoading={trainingLoading}
                      />
                    </Col>
                  </Row>
                </Card>
              </Grid>
            </TopSection>
            <UpcomingTrainingSection trainings={trainings} />
          </React.Fragment>
        )
      }}
    </Layout>
  )
}

export const query = graphql`
  query MeetupQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        city
        paragraphs
      }
      excerpt
      htmlAst
      fileAbsolutePath
    }
  }
`

export default MeetUpPage
