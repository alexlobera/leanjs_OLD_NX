import React from 'react'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumReactNative } from '../components/curriculum'
import Header from '../components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
} from '../components/training'
import { Card } from '../components/elements'
import { CallToActionRow } from '../components/layout/CallToActionNextTrainings'
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
import { Breadcrumb } from '../components/navigation'
import { selectTrainings, REACT_NATIVE } from '../config/data'

const trainings = selectTrainings(REACT_NATIVE)

const ReactNativeBoocamp = () => (
  <React.Fragment>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        { to: '/react-native-bootcamp', label: 'React Native' },
      ]}
    />
    <Header
      titleLines={['React Native Training']}
      subtitle="Intense hands-on React Native training, <br /> return to work as a React Native specialist"
      bgImg="full-time"
    />
    <TopSection>
      <Grid>
        <CallToActionRow>
            <Col xs={12} sm={10}>
              <LinkButton
                cta
                to="#contact-us"
                children="No courses currently planned. Signup to our newsletter to hear first about new courses"
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
            <H2>Is this React Native training right for me?</H2>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginersIcon} />
                Ideal for React developers who want to expand their skills into
                React Native. Not for React beginners!
              </Li>
              <Li>
                <BulletIcon icon={RunFastIcon} />
                Extremely rapid, intense learning
              </Li>
              <Li>
                <BulletIcon icon={TickBadgeIcon} />
                Small classes with expert developer coaches - roughly one for
                every four students
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
            {/* <P>
              <LinkButton cta to="/react-native-bootcamp-london">
                Next React Native: 17th Sept, London >>
              </LinkButton>
            </P>
            */}
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <AttendeeQuote
              quote="mall numbers of students means you get the attention you need.  We programmed in pairs, feeding off other experienced students - something you don’t get in a lot of training. It’s a really good environment to learn"
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
