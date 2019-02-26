import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumReactNative } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import { Link, Breadcrumb } from '../components/navigation'
import { HideComponentsUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from '../components/training'
import {
  BulletIcon,
  NotBegginersIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { Image, Newsletter } from '../components/elements'
import header from '../components/layout/Header.json'
import { PaymentSection } from '../components/payment'
import { selectFirstTraining, REACT_NATIVE, LONDON } from '../config/data'
import { LIST_TWO_COL } from '../components/curriculum/selectCurriculumLayout'

const training = selectFirstTraining(REACT_NATIVE, LONDON)

const ReactNativeBoocampLondon = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-native-bootcamp', label: 'React Native' },
        { to: '/react-native-bootcamp-london', label: 'London' },
      ]}
    />
    <Header
      titleLines={['React Native Training', `${training.dates} - London`]}
      subtitle="Take your React developer career to the next level by<br />learning React Native, in only one day. "
      links={header.landingTraining.links}
      bgImg="training-event"
      type={REACT_NATIVE}
      training={training}
    />
    <TopSection xsBgDark top>
      <Grid>
        <Card bg="dark">
          <Row>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              {/* <PaymentSection
                data={{
                  trainingInstanceId: training.trainingInstanceId,
                  price: training.price,
                  discountPrice: training.discountPrice,
                  priceGoesUpOn: training.priceGoesUpOn,
                  currency: training.currency,
                }}
              /> */}
            </Col>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeId="yvROXLQ1jHg" />
              <TrainingDetails
                date={training.dates}
                timing="9am - 6:30pm"
                location={
                  <React.Fragment>
                    {training.location}.{' '}
                    <Link to="https://www.google.com/maps/place/Eden+House,+8+Spital+Square,+London+E1+6DQ/@51.5207898,-0.0778216,17z/data=!3m1!4b1!4m5!3m4!1s0x48761cb166ce716f:0x7309676fc6ea9b2b!8m2!3d51.5207898!4d-0.0778216">
                      See on map
                    </Link>
                  </React.Fragment>
                }
                foodIncluded
                coaches={[HORACIO_HERRERA, ALEX_LOBERA]}
              />
              <Row>
                <Newsletter />{' '}
              </Row>
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
              Is this React Native training right for me? Are you...{' '}
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginersIcon} />
                You have at least a few months of experience using React on the
                web. If you don't know React, we recommend you first to attend
                our{' '}
                <Link to="/react-redux-graphql-bootcamp">React Bootcamp</Link>
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                Taking a step forward to become a React Native Specialist able
                to make critical decisions about the architecture of a React
                Native application.
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Not satisfied with the pace of online learning and it's lack of
                1-on-1 mentoring?
              </Li>
            </Ul>
            <P>If you've said 'yes' to these, our training could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a training for React beginners. If you don't know
              React, we recommend you first to attend our{' '}
              <Link to="/react-redux-graphql-bootcamp">React Bootcamp</Link>.
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
              <CurriculumReactNative layout={LIST_TWO_COL} />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default ReactNativeBoocampLondon
