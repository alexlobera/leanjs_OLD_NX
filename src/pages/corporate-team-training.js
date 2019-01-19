import React from 'react'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrustedByLogoList,
} from '../components/training'
import Ul, { Li } from '../components/layout/Ul'
import Header from '../components/layout/Header'
import { CallToActionRow } from '../components/layout/CallToActionNextTrainings'
import { Card, Image, Video } from '../components/elements'
import { CurriculumCorpTraining } from '../components/curriculum'

import { CATALIN } from '../config/images'
import {
  BussinessIcon,
  CollabsIcon,
  HeartIcon,
  ReactIcon,
  WorldIcon,
  BulletIcon,
} from '../components/icons'
import trackUserBehaviour, {
  SOCIAL_NETWORK_LINK_CLICK,
} from '../components/utils/trackUserBehaviour'

const CorporateTraining = () => (
  <React.Fragment>
    <Header
      titleLines={['Corporate team training']}
      subtitle="If you're looking for the most up-to-date React training for your team without</br>having to leave your office, then our corporate team training is for you..."
      links={[
        { text: 'Curriculum ', to: '#curriculum' },
        { text: 'Is it right for my team?', to: '#right-for-my-team' },
      ]}
      bgImg="corp-training"
    />
    <TopSection>
      <Grid>
        <CallToActionRow left>
          <Col xs={12} mdOffset={1} md={5}>
            <LinkButton
              cta
              to="#contact-us"
              children="Contact us to find out more >>"
            />
          </Col>
        </CallToActionRow>

        <Card border="shadow">
          <CurriculumCorpTraining />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <Video
              youtubeId="o6YwbHGfPOo"
              description={
                <P>
                  <em>
                    Andru Dunn, Senior Developer at <strong>John Lewis</strong>{' '}
                    speaks how ReactJS Academy training has improved his team.
                  </em>
                </P>
              }
            />
          </Col>
          <Col md={5} mdOffset={1}>
            <H2>
              <a name="right-for-my-team" />
              Why ReactJS Academy is great for your dev team
            </H2>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={BussinessIcon} />
                <strong>Avoid delays & business losses</strong> with more
                reliable and consistent code
              </Li>
              <Li>
                <BulletIcon icon={HeartIcon} />
                <strong>Increase employee retention</strong>, motivation, and
                productivity
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Great for <strong>team building</strong>, and a safe environment
                for devs to learn.
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                <strong>Minimise the risk</strong> of onboarding React
              </Li>
              <Li>
                <BulletIcon icon={WorldIcon} />
                <strong>Delivered wherever you need</strong> - worldwide!
              </Li>
            </Ul>
            <P>
              <LinkButton cta to="#contact-us">
                Contact us to find out more >>
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
              <H2>Trusted by industry leaders</H2>
              <TrustedByLogoList />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default CorporateTraining
