import React from 'react'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2Ref, P } from '../components/text'
import Link from '../components/navigation/Link'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import { CurriculumReactNative } from '../components/curriculum'
import Header from '../components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
} from '../components/training'
import { Card } from '../components/elements'
import CallToActionRow from '../components/layout/CallToActionRow'
import { Image } from '../components/elements'
import { BOOTCAMP_RIGHT, OLU } from '../config/images'
import {
  NotBegginersIcon,
  RunFastIcon,
  TargetIcon,
  TickBadgeIcon,
  BulletIcon,
  PeopleNetWorkIcon,
} from '../components/icons'

const Curriculum = () => (
  <React.Fragment>
    <Header
      titleLines={['Full ReactJS Academy curriculum']}
      subtitle="We're proud to say that our curriculum is the most<br />complete and up-to-date on the market - there really is<br />nowhere better to learn React."
      bgImg="full-time"
    />
    <TopSection>
      <Grid>
        <CallToActionRow left>
          <Col xs={12} sm={5} smOffset={1}>
            <LinkButton
              cta
              to="/react-native-bootcamp-london"
              children="Next React Native: 17th Sept, London >>"
            />
          </Col>
        </CallToActionRow>
        <Card border="shadow">
          <Row>
            <Col xs={12} md={12} lg={10} lgOffset={1}>
              <H2Ref>
                Bootcamps/part-time course - what's the difference?{' '}
                <Link to="#difference" name="difference">
                  #
                </Link>
              </H2Ref>
            </Col>
          </Row>

          <Col md={5}>
            {/* <Image src={BOOTCAMP_RIGHT} width="100%" /> */}
            image
          </Col>
          <Col md={5} mdOffset={1}>
            adfafd
          </Col>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        afdadfa  fads
      </Grid>
    </Section>
  </React.Fragment>
)

export default Curriculum
