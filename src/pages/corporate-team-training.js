import React from 'react'

import Layout from '../components/layout'
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
import { Card, Video } from '../components/elements'
import CorporateTechSelector from '../components/curriculum/CorporateTechSelector'
import { EBER } from '../config/images'
import {
  BussinessIcon,
  CollabsIcon,
  HeartIcon,
  ReactIcon,
  WorldIcon,
  BulletIcon,
} from '../components/icons'
import LeanJSsprints from '../components/elements/LeanJSsprints'

const CorporateTraining = () => (
  <Layout>
    {({ trainings }) => (
      <React.Fragment>
        <Header
          titleLines={['Corporate team training']}
          subtitle="Private team training, located in your offices anywhere in the world, based on our proven curriculum for React and GraphQL."
          links={[
            { text: 'Training schedule', to: '#schedule' },
            { text: 'Developer level', to: '#dev-level' },
            { text: 'Pricing', to: '#pricing' },
            { text: 'Previous clients', to: '#previous-clients' },
            { text: 'Benefits to you', to: '#right-for-my-team' },
            { text: 'Custom training', to: '#custom-training' },
          ]}
          bgImg="corp-training"
        />
        <TopSection>
          <Grid>
            <CallToActionRow left>
              <Col xs={12} mdOffset={1} md={4}>
                <LinkButton
                  variant="primary"
                  to="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/pdf%2FCorporate%20Team%20Training%20with%20ReactJS%20Academy.pdf?alt=media&"
                  children="Team Training - Key Facts (PDF)"
                />
              </Col>
              <Col xs={12} mdOffset={1} md={6} />
            </CallToActionRow>
            <a name="schedule" />
            <Card border="shadow">
              <CorporateTechSelector />
            </Card>
          </Grid>
        </TopSection>
        <Section>
          <Grid>
            <Row>
              <a name="previous-clients" />
              <Col lg={5}>
                <H2>Trusted by industry leaders</H2>
                <TrustedByLogoList />
              </Col>
              <Col lg={6} mdOffset={1}>
                <AttendeeQuote
                  small
                  quote="If you asked me if I would put my team in for this sort of training instead of a conference, I would say yes. I think it’s way deeper, you learn a lot more and, in the end, your team gets back way more rewarded."
                  fullname="Eber Herrera"
                  job="Technical Director"
                  company="Xing"
                  profilePicUrl={EBER}
                  ctaButton="How Training Keeps Xing 
              Tech-Relevant (Blog)"
                  ctaUrl="/blog/5-reasons-why-advanced-dev-training-will-keep-your-company-tech-relevant/"
                />
              </Col>
            </Row>
          </Grid>
        </Section>

        <Section>
          <Grid>
            <Row>
              <a name="right-for-my-team" />
              <Col md={5}>
                <Video
                  youtubeId="o6YwbHGfPOo"
                  description={
                    <P>
                      <em>
                        Andru Dunn, Senior Developer at{' '}
                        <strong>John Lewis</strong> speaks how ReactJS Academy
                        training has improved his team.
                      </em>
                    </P>
                  }
                />
              </Col>
              <Col md={5} mdOffset={1}>
                <H2>Why ReactJS Academy is great for your dev team</H2>
                <Ul unstyled>
                  <Li>
                    <BulletIcon icon={BussinessIcon} />
                    <strong>Avoid delays & business losses</strong> with more
                    reliable and consistent code
                  </Li>
                  <Li>
                    <BulletIcon icon={HeartIcon} />
                    <strong>Increase employee retention</strong>, motivation,
                    and productivity
                  </Li>
                  <Li>
                    <BulletIcon icon={CollabsIcon} />
                    Great for <strong>team building</strong>, and a safe
                    environment for devs to learn.
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
                    Contact us to find out more
                  </LinkButton>
                </P>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section xsBgDarkGrey>
          <Grid>
            <a name="custom-training" />
            <LeanJSsprints />
          </Grid>
        </Section>
        <UpcomingTrainingSection trainings={trainings} />
      </React.Fragment>
    )}
  </Layout>
)

export default CorporateTraining
