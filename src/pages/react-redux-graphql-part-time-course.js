import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import AttendeeQuote from '../components/training/AttendeeQuote'
import { Card } from '../components/elements'
import { CurriculumPartTime } from '../components/curriculum'
import Header from '../components/layout/Header'
import CallToActionRow from '../components/layout/CallToActionRow'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import {
  TrainingItem,
  TrainingList,
  TrustedBySection,
} from '../components/training'
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
import { LONDON, PART_TIME } from '../imageConstants'

const PartTime = () => (
  <div>
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
                Personal mentoring over online learning
              </Li>
              <Li>
                <BulletIcon icon={SpannerIcon} />
                Don't miss a single day of work - only 2 evenings a week
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
                Coaches are expert React developers
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
              quote="The ReactJS Academy part time course really worked for me. I needed to learn React but flexibility around my schedule was super important - not only that, it was great fun!"
              fullname="Richard Moss"
              job="CTO"
              company="Financial Times"
              profilePicUrl="https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg"
            />
          </Col>
        </Row>
      </Grid>
    </Section>

    <TrustedBySection />

    <Section>
      <Grid>
        <H2Ref>
          <Col lg={10} lgOffset={1}>
            Upcoming React part-time courses{' '}
            <a name="next-part-time-courses" href="#next-part-time-courses">
              #
            </a>
          </Col>
        </H2Ref>
        <Row>
          <Col lg={10} lgOffset={1}>
            <TrainingList>
              <TrainingItem
                location="Makers Academy, London"
                startDate="Oct 2nd to Nov 8th, 2018."
                name="London part-time"
                path="/react-redux-training-london"
                imageSrc={LONDON}
              />
            </TrainingList>
          </Col>
        </Row>
      </Grid>
    </Section>
  </div>
)

export default PartTime
