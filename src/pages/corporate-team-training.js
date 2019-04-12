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
import CorporateTechSelector from '../components/curriculum/CorporateTechSelector'

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
import LeanJSsprints from '../components/elements/LeanJSsprints'

const CorporateTraining = () => (
  <React.Fragment>
    <Header
      titleLines={['Corporate team training']}
      subtitle="Private team training, based in your offices anywhere in the world, based on our proven curriculum for React, Graphql and React Native."
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
              variant="primary"
              to="#contact-us"
              children="Team Training - Key Facts (PDF)"
            />
          </Col>
        </CallToActionRow>

        <Card border="shadow">
          <CorporateTechSelector />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col lg={6}>
            <H2>Trusted by industry leaders</H2>
            <TrustedByLogoList />
          </Col>
          <Col lg={6}>
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
              <LinkButton variant="primary" to="#contact-us">
                Contact us to find out more >>
              </LinkButton>
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section xsBgDarkGrey>
      <Grid>
        <LeanJSsprints />
      </Grid>
    </Section>

    <UpcomingTrainingSection />
  </React.Fragment>
)

export default CorporateTraining
