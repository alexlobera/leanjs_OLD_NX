import React from 'react'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
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

const ReactNativeBoocamp = () => (
  <React.Fragment>
    <Header
      titleLines={['React Native Training']}
      subtitle="Intense hands-on React Native training, <br /> return to work as a React Native specialist"
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
          <CurriculumReactNative />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Image src={BOOTCAMP_RIGHT} width="100%" />
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>Is this training right for me?</H2>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginersIcon} />
                Ideal for React developers who want to expand their skills onto
                React Native. Not for React beginners!
              </Li>
              <Li>
                <BulletIcon icon={RunFastIcon} />
                Extremely rapid, intense learning
              </Li>
              <Li>
                <BulletIcon icon={TickBadgeIcon} />
                Small classes with mentoring from expert developers & coaches
              </Li>
              <Li>
                <BulletIcon icon={TargetIcon} />
                Hands-on project-based training - most of the time you'll be
                coding.
              </Li>
              <Li>
                <BulletIcon icon={PeopleNetWorkIcon} />
                Join a growing network of alumni for advice, knowledge and
                social fun!
              </Li>
            </Ul>
            <P>
              <LinkButton cta to="/react-native-bootcamp-london">
                Next React Native: 17th Sept, London >>
              </LinkButton>
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
              quote="Small numbers of students means you’re guaranteed to get the attention you need.  We programmed in pairs, feeding off people sitting next to you who also have a lot of knowledge - something  you don’t get in a lot of training. It’s a really good environment to learn"
              fullname="Olu Omoniyi"
              job="React & React Native Developer"
              company="S&P Global"
              profilePicUrl={OLU}
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <TrustedBySection />
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default ReactNativeBoocamp
