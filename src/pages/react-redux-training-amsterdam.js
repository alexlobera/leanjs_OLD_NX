import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { CurriculumPartTime } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrainingDetails,
  TargetAudienceSection,
  ALEX_LOBERA,
  ROY_DERKS,
} from '../components/training'
import Header from '../components/layout/Header'
import { CATALIN } from '../config/images'
import { Newsletter } from '../components/elements'
import header from '../components/layout/Header.json'
import { InstallmentsCard, PaymentSection } from '../components/payment'
import { Breadcrumb } from '../components/navigation'
import { selectFirstTraining, PART_TIME, AMSTERDAM } from '../config/data'
import { LIST_TWO_COL } from '../components/curriculum/selectCurriculumLayout'

const training = selectFirstTraining(PART_TIME, AMSTERDAM)

const PartTimeAmsterdam = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-redux-graphql-part-time-course', label: 'Part-time' },
        { to: '/react-redux-training-amsterdam', label: 'Amsterdam' },
      ]}
    />
    <Header
      titleLines={[
        'React Redux part-time course',
        `${training.dates} - Amsterdam`,
      ]}
      subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work!"
      links={header.landingTraining.links}
      bgImg="part-time"
      type={PART_TIME}
      training={training}
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
              <InstallmentsCard price={1500} />
            </Col>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeId="E_4eQQHjc7A" />
              <TrainingDetails
                date={training.dates}
                timing="9am - 6pm Friday's"
                location={
                  <React.Fragment>
                    {training.location}
                    {/* <Link to="https://www.google.com/maps/place/Makers/@51.5173403,-0.0754695,17z/data=!3m1!4b1!4m5!3m4!1s0x48761caf26599a83:0x9b451d586c649129!8m2!3d51.5173403!4d-0.0732808">
                      See on map
                    </Link> */}
                  </React.Fragment>
                }
                coaches={[ROY_DERKS, ALEX_LOBERA]}
              />
              <Row>
                <Newsletter />{' '}
              </Row>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <TargetAudienceSection />
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
              <CurriculumPartTime layout={LIST_TWO_COL} />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default PartTimeAmsterdam
