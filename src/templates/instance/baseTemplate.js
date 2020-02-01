import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P, Blockquote } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import { Segment, Video } from 'src/components/elements'
import { Image } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  selectUpcomingTrainings,
  selectNthTraining,
  AlternativeTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import TrialCard from 'src/components/training/TrialCard'
import { PaymentSection } from 'src/components/payment'
import { Link } from 'src/components/navigation'
import Box from 'src/components/layout/Box'
import ContactForm from 'src/components/form/Contact'
import FinanceCard from 'src/components/payment/FinanceCard'
import BlogSection from 'src/components/blog/BlogSection'
import {
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  REACT_PART_TIME,
} from '../../config/data'
import { createMetas } from '../../components/utils'

const InstancePage = ({
  path,
  type,
  typeOfTraining = '1-day React workshop',
  curriculum: Curriculum,
  targetAudienceList: TargetAudienceList,
  crossSellTypes,
  curriculumProps = {},
  perfectStudentLink,
  learningObjectives,
  trialOfTheTrainingId,
  trialTrainingId,
  data,
  pageContext: {
    locationImage,
    posts,
    subtitle,
    financeAvailable,
    coaches,
    trainingId,
    breadcrumbTrainingName,
    breadcrumbTrainingSlug,
    breadcrumbWorkshopName,
    breadcrumbWorkshopSlug,
    instanceTitle,
    city,
    learnToCodePartners = [],
    canonical,
    nth = 1,
    videoOneTime,
    videoOneId,
    videoOneQuote,
    videoCoachId,
    videoOneFullname,
    videoOneJob,
    videoOneCompany,
    videoTwoTime,
    videoTwoId,
    videoTwoQuote,
    videoTwoFullname,
    videoTwoJob,
    videoTwoCompany,
    tech,
    siteUrl,
  },
}) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const techLowerCase = tech.toLowerCase()
      const pathTech = `/${techLowerCase}/`
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

      const trialTraingInstance = getNextTrainingByTrainingId({
        trainings,
        trainingId: trialTrainingId,
      })

      const trialOfTheTraingInstance = getNextTrainingByTrainingId({
        trainings,
        trainingId: trialOfTheTrainingId,
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

      const instanceImage =
        data &&
        data.instanceImage &&
        data.instanceImage.nodes &&
        data.instanceImage.nodes.length
          ? data.instanceImage.nodes[0].childImageSharp.fluid.src
          : locationImage.fluid.src
      const instanceImageUrl = instanceImage
        ? `${siteUrl}${instanceImage}`
        : undefined

      const furtherDetails = trialOfTheTrainingId ? (
        <P>
          This training trial for the{' '}
          <Link
            to={`/${techLowerCase}/training/${trialOfTheTraingInstance.training.slug}`}
          >
            {trialOfTheTraingInstance.training.description.title}
          </Link>
        </P>
      ) : (
        undefined
      )

      console.log('trialOfTheTraingInstance', trialOfTheTraingInstance)
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
          >
            {createMetas({
              title: instanceTitle,
              imageFullPublicUrl: instanceImageUrl,
              subtitle,
              ogType: 'website',
              twitterSite: '@reactgqlacademy',
            })}
          </Helmet>
          <Header
            breadcrumbPath={breadcrumb}
            tech={techLowerCase}
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
            infoBoxFluidImage={locationImage}
            bgColor="transparent"
            removeBgImage
          />
          <TopSection>
            <Segment>
              <Curriculum
                {...curriculumProps}
                training={training}
                learningObjectives={learningObjectives}
                type={type}
                content={
                  <React.Fragment>
                    {videoCoachId ? (
                      <React.Fragment>
                        <H3>Meet the coach</H3>
                        <Video youtubeId={videoCoachId} />
                      </React.Fragment>
                    ) : videoOneId ? (
                      <React.Fragment>
                        <H3>Attendee testimonial</H3>
                        <Video time={videoOneTime} youtubeId={videoOneId} />
                        <Box px={1}>
                          {videoOneQuote && (
                            <Blockquote>{videoOneQuote}</Blockquote>
                          )}
                          {videoOneFullname && (
                            <P pt={2}>
                              {videoOneFullname || ''}, {videoOneJob || ''} -{' '}
                              {videoOneCompany || 'Freelance'}{' '}
                            </P>
                          )}
                        </Box>
                      </React.Fragment>
                    ) : null}
                    <TrainingDetails
                      coaches={coaches}
                      training={training}
                      furtherDetails={furtherDetails}
                    />
                  </React.Fragment>
                }
              />
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote={videoTwoQuote}
                  fullname={videoTwoFullname}
                  job={videoTwoJob}
                  company={videoTwoCompany}
                  youtubeId={videoTwoId}
                  youtubeTime={videoTwoTime}
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

                <H3>Not for beginner devs!</H3>
                {perfectStudentLink === false ? null : (
                  <P>
                    <Link
                      className="perfect-course-student"
                      to="/blog/are-you-the-perfect-react-graphql-student/"
                    >
                      Blog: Are YOU the Perfect React Student?
                    </Link>
                  </P>
                )}
                {learnToCodePartners.length > 0 &&
                  (type === REACT_BOOTCAMP ||
                    type === REACT_FUNDAMENTALS ||
                    type === REACT_PART_TIME) && (
                    <React.Fragment>
                      <P>
                        If you are not a professional developer yet, we
                        recommend you to consider our {city} learn-to-code
                        partner before attending our {typeOfTraining}:
                      </P>
                      <Row>
                        {learnToCodePartners.slice(0, 2).map(partner => (
                          <Col xs={6}>
                            <Link to={partner.website}>
                              <Image
                                fluid={
                                  partner.logo.asset.localFile.childImageSharp
                                    .fluid
                                }
                              />
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </React.Fragment>
                  )}
              </Col>
            </Row>
          </Section>
          <Section variant="dark">
            <Row>
              <Col md={5} mdOffset={1}>
                <PaymentSection
                  showTrial={!!trialTraingInstance}
                  isOnline={city && city.toLowerCase() === 'online'}
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
              {trialTraingInstance && (
                <Col md={10} mdOffset={1}>
                  <TrialCard trainingInstance={trialTraingInstance} />
                </Col>
              )}
            </Row>
          </Section>
          {!trialTraingInstance && !trialOfTheTrainingId && (
            <AlternativeTrainingSection trainings={crossSellTrainings} />
          )}
          <BlogSection posts={posts} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export const query = graphql`
  fragment CoachInstance on SanityPerson {
    fullname
    image {
      asset {
        localFile(width: 200) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

InstancePage.defaultProps = {
  pageContext: {},
}

export default InstancePage
