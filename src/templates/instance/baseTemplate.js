import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P, Blockquote } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import { Segment, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  selectUpcomingTrainings,
  selectNthTraining,
  AlternativeTrainingSection,
  AttendeeQuote,
} from 'src/components/training'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import Box from 'src/components/layout/Box'
import ContactForm from 'src/components/form/Contact'
import FinanceCard from 'src/components/payment/FinanceCard'
import BlogSection from 'src/components/blog/BlogSection'

const InstancePage = ({
  path,
  type,
  typeOfTraining = '1-day React workshop',
  curriculum: Curriculum,
  targetAudienceList: TargetAudienceList,
  crossSellTypes,
  curriculumProps = {},
  pageContext: {
    posts,
    subtitle,
    financeAvailable,
    coaches,
    trainingId,
    tech,
    breadcrumbTrainingName,
    breadcrumbTrainingSlug,
    breadcrumbWorkshopName,
    breadcrumbWorkshopSlug,
    instanceTitle,
    city,
    canonical,
    nth = 1,
    headerYoutubeTime,
    headerYoutubeId = '6hmKu1-vW-8',
    headerQuote,
    quoteFrom,
  },
}) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const pathTech = `/${tech.toLowerCase()}/`
      const pathTraining = `${pathTech}training/`
      const pathTrainingType = `${pathTraining}${breadcrumbTrainingSlug}/`
      const pathWorkshopType = `${pathTrainingType}${breadcrumbWorkshopSlug}/`
      const upcomingTrainings = selectUpcomingTrainings({
        trainings,
        trainingId,
        city,
      })

      const training = selectNthTraining({
        trainings: upcomingTrainings,
        nth,
      })

      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: crossSellTypes,
        excludeTrainingId: trainingId,
        city,
      })

      const breadcrumbInstance = {
        to: path,
        label: city,
      }
      const breadcrumbLastItems = breadcrumbWorkshopName
        ? [
            {
              to: pathWorkshopType,
              label: breadcrumbWorkshopName,
            },
            breadcrumbInstance,
          ]
        : [breadcrumbInstance]

      const breadcrumb = [
        { to: '/', label: 'Home' },
        { to: pathTech, label: tech },
        { to: pathTraining, label: 'Training' },
        {
          to: pathTrainingType,
          label: breadcrumbTrainingName,
        },
        ...breadcrumbLastItems,
      ]

      return (
        <React.Fragment>
          <Helmet
            title={instanceTitle}
            link={[
              {
                rel: 'canonical',
                href: canonical,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: instanceTitle,
              },
            ]}
          />
          <Breadcrumb path={breadcrumb} />
          <Header
            titleLines={[instanceTitle]}
            subtitle={subtitle}
            links={[
              {
                text: 'Course details',
                to: '#curriculum',
              },
              {
                text: 'Is it right for me?',
                to: '#target-audience',
              },
              {
                text: 'Pricing',
                to: '#pricing',
              },
            ]}
            type={type}
            training={training}
            showInfoBox={true}
            bgColor="transparent"
            removeBgImage
          />
          <TopSection>
            <Segment>
              <Curriculum
                {...curriculumProps}
                content={
                  <React.Fragment>
                    <H3>Attendee testimonial</H3>
                    <Video
                      time={headerYoutubeTime}
                      youtubeId={headerYoutubeId}
                    />
                    <Box px={1}>
                      {headerQuote && <Blockquote>{headerQuote}</Blockquote>}
                      {quoteFrom && (
                        <P pt={2}>
                          <strong>{quoteFrom}</strong>
                        </P>
                      )}
                    </Box>
                    <TrainingDetails coaches={coaches} />
                  </React.Fragment>
                }
              />
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns..."
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="blg40SCle7I"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2>
                  <a to="#target-audience" name="target-audience" />
                  Is this {typeOfTraining} right for me? Are you...{' '}
                </H2>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <P>
                  If you've said 'yes' to these, this {typeOfTraining} could be
                  for you!
                </P>
                <H3>Not for beginner devs!</H3>
                <Link
                  className="perfect-course-student"
                  to="/blog/are-you-the-perfect-react-graphql-student/"
                >
                  Blog: Are YOU the Perfect React Student?
                </Link>
              </Col>
            </Row>
          </Section>
          <Section variant="dark">
            <Row>
              <Col md={5} mdOffset={1}>
                <PaymentSection
                  training={training}
                  trainingError={trainingError}
                  trainingLoading={trainingLoading}
                />
              </Col>
              <Col md={4} mdOffset={1} pt={3}>
                <ContactForm variant="default" simplified />
              </Col>
              {financeAvailable && (
                <Col md={10} mdOffset={1}>
                  <FinanceCard />
                </Col>
              )}
            </Row>
          </Section>
          <AlternativeTrainingSection trainings={crossSellTrainings} />
          <BlogSection posts={posts} />
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
