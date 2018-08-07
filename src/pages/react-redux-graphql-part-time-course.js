import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrustedBySection,
} from '../components/training'
import { Card } from '../components/elements'
import { CurriculumPartTime } from '../components/curriculum'
import Header from '../components/layout/Header'
import CallToActionRow from '../components/layout/CallToActionRow'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import {
  CollabsIcon,
  NotBegginerIcon,
  NotBegginersIcon,
  SpannerIcon,
  TrainerIcon,
  BulletIcon,
  DiscussIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import { PART_TIME, STEFANO } from '../config/images'

const PartTime = () => (
  <React.Fragment>
    <Header
      titleLines={['6-week part-time React', 'Redux GraphQL course']}
      subtitle="Expert coaches work alongside you, 2 evenings a week, <br /> to master the React ecosystem without having to cut <br /> into valuable work-days"
      bgImg="part-time"
    />
    <TopSection>
      <Grid>
        <CallToActionRow left>
          <Col lg={11} lgOffset={1}>
            <LinkButton
              cta
              to="/react-redux-training-london"
              children="Next course: 2nd October, London >>"
            />
          </Col>
        </CallToActionRow>
        <Card border="shadow">
          <CurriculumPartTime />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Image src={PART_TIME} width="100%" />
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>Is this React part-time course right for me?</H2>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Meaningful, collaborative learning
              </Li>
              <Li>
                <BulletIcon icon={TrainerIcon} />
                Personal mentoring rather than online learning
              </Li>
              <Li>
                <BulletIcon icon={SpannerIcon} />
                Don't miss work days or projects - only 2 evenings a week
              </Li>
              <Li>
                <BulletIcon icon={NotBegginersIcon} />
                Not for beginners! Looking for a{' '}
                <Link to="https://makers.tech/">
                  Learn-to-Code course?
                </Link>{' '}
              </Li>
              <Li>
                <BulletIcon icon={DiscussIcon} />
                Discuss real-world projects to learn best practices
              </Li>
              <Li>
                <BulletIcon icon={NotBegginerIcon} />
                Expert coaches with extensive React experience
              </Li>
            </Ul>
            <P>
              <Link to="/react-redux-training-london">
                Next part-time course: London - 2nd October 2018
              </Link>
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
              quote="I like the fact that you meet other developers that are in the same professional situation as you. I really felt comfortable."
              fullname="Stefano Mezza"
              job="Core Developer"
              company="SISLAB UniTN"
              profilePicUrl={STEFANO}
            />
          </Col>
        </Row>
      </Grid>
    </Section>

    <TrustedBySection />

    <UpcomingTrainingSection />
  </React.Fragment>
)

export default PartTime
