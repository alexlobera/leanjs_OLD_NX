import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumGraphQL } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import { HideComponentsUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  WILL_VOELCKER,
  ALEX_LOBERA,
  RICHARD_MOSS,
} from '../components/training'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
  SpannerIcon,
} from '../components/icons'
import { Image, Newsletter } from '../components/elements'
import header from '../components/layout/Header.json'
import { InstallmentsCard, PaymentSection } from '../components/payment'
import { Link, Breadcrumb } from '../components/navigation'
import { selectFirstTraining, GRAPHQL_BOOTCAMP, LONDON } from '../config/data'
import { LIST_TWO_COL } from '../components/curriculum/selectCurriculumLayout'
import { LinkButton } from '../components/buttons'

const training = selectFirstTraining(GRAPHQL_BOOTCAMP, LONDON)
const BootcampLondon = () => {
  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: '/graphql-bootcamp-london', label: 'GraphQL bootcamp' },
        ]}
      />
      <Header
        titleLines={['React GraphQL Bootcamp', `${training.dates} - London`]}
        subtitle="Take your dev career to the next level by mastering<br />React and GraphQL - in just 1 week!"
        links={header.landingTraining.links}
        bgImg="training-event"
        type={GRAPHQL_BOOTCAMP}
        training={training}
      />
      <TopSection xsBgDark>
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
                    countdownDate: training.countdownDate,
                    currency: training.currency,
                  }}
                />
              </Col>
              <Col xs={12} md={6} lg={4} lgOffset={1}>
                <Video youtubeId="2-IPT7Plsfc" />
                <TrainingDetails
                  date={training.dates}
                  timing="Wednesday-Tuesday, 9am - 6:30pm"
                  location={
                    <React.Fragment>
                      {training.location}
                      <Link to="https://goo.gl/maps/jjX9zs5Ags32">
                        {' '}
                        See on map
                      </Link>
                    </React.Fragment>
                  }
                  coaches={[ALEX_LOBERA, WILL_VOELCKER, HORACIO_HERRERA]}
                />
              </Col>
            </Row>
          </Card>
        </Grid>
      </TopSection>
      <Section>
        <Grid>
          <Row>
            <HideComponentsUsingCss xs sm>
              <Col md={6} lg={5}>
                <Image src={BOOTCAMP_COLLAB} width="100%" />
              </Col>
            </HideComponentsUsingCss>
            <Col md={6} lg={5} lgOffset={1}>
              <H2Ref>
                Is this GraphQL bootcamp right for me? Are you...{' '}
                <Link to="#target-audience" name="target-audience">
                  #
                </Link>
              </H2Ref>
              <Ul unstyled>
                <Li>
                  <BulletIcon icon={CodeIcon} />
                  Familiar with front-end technologies like JavaScript, CSS, and
                  HTML?
                </Li>
                <Li>
                  <BulletIcon icon={SpannerIcon} />
                  Taking a step forward to become a GraphQL Specialist able to
                  make critical decisions about the architecture of a
                  Production-ready GraphQL & React application
                </Li>
                <Li>
                  <BulletIcon icon={CollabsIcon} />
                  Not satisfied with the pace of online learning and it's lack
                  of 1-on-1 mentoring?
                </Li>
              </Ul>
              <P>
                If you've said 'yes' to these, our bootcamp could be for you!
              </P>
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
                <CurriculumGraphQL enableToggle={true} layout={LIST_TWO_COL} />
              </Col>
            </Row>
          </Card>
        </Grid>
      </Section>
      <UpcomingTrainingSection />
    </React.Fragment>
  )
}

export default BootcampLondon
