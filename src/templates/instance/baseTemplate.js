import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
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
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const InstancePage = ({
  path,
  curriculum: Curriculum,
  targetAudienceList: TargetAudienceList,
  crossSellTypes,
  pageContext: {
    subtitle,
    coaches,
    trainingId,
    tech,
    breadcrumbTrainingType,
    breadcrumbTrainingName,
    breadcrumbTrainingSlug,
    type,
    instanceTitle,
    city,
    canonical,
    nth = 1,
  },
}) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const pathTech = `/${tech.toLowerCase()}/`
      const pathTraining = `${pathTech}training/`
      const pathTrainingType = `/${pathTraining}/${breadcrumbTrainingType.toLowerCase()}/`
      const pathTrainingName = `/${pathTrainingType}/${breadcrumbTrainingSlug ||
        breadcrumbTrainingName.toLowerCase().replace(' ', '-')}/`
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

      const workshopBreadcrumb = pathTrainingName
        ? {
            to: pathTrainingName,
            label: breadcrumbTrainingName,
          }
        : {}

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
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: pathTech, label: tech },
              { to: pathTraining, label: 'Training' },
              {
                to: pathTrainingType,
                label: breadcrumbTrainingType,
              },
              ...workshopBreadcrumb,
              {
                to: path,
                label: city,
              },
            ]}
          />
          <Header
            titleLines={[instanceTitle]}
            subtitle={subtitle}
            links={header.landingTraining.links}
            type={type}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="darkMob">
            <Segment variant="primary">
              <Row>
                <Col md={6} lg={5} lgOffset={1}>
                  <PaymentSection
                    training={training}
                    trainingError={trainingError}
                    trainingLoading={trainingLoading}
                  />
                </Col>
                <Col md={6} lg={4} lgOffset={1}>
                  <H4>Rafa's student experience</H4>
                  <Video youtubeId="hZZksRcqtkc" />
                  <TrainingDetails coaches={coaches} />
                </Col>
              </Row>
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
                <H2Ref>
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <P>
                  If you've said 'yes' to these, this workshop could be for you!
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
          </Section>
          <Section>
            <Segment>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <Curriculum layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Segment>
          </Section>
          <AlternativeTrainingSection trainings={crossSellTrainings} />
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
