import React from 'react'
import Helmet from 'react-helmet'

import { CORP_TRAINING } from 'src/../images/imageNames'
import TrustedBySection from 'src/components/training/TrustedBySection'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import { UpcomingTrainingSection, AttendeeQuote } from 'src/components/training'
import TrustedByLogoList2 from 'src/components/training/TrustedByLogoList2'
import Header from 'src/components/layout/Header'
import { CallToActionRow } from 'src/components/layout/CallToActionRow'
import { Segment } from 'src/components/elements'
import CurriculumCorporateReact from 'src/components/curriculum/CurriculumCorporateReact'
import LeanJSsprints from 'src/components/elements/LeanJSsprints'
import { Breadcrumb } from 'src/components/navigation'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'React Corporte Training | React GraphQL Academy',
  description:
    'Interested in React corporate training? We offer corporate React team training, located in your offices anywhere in the world. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const CorporateReactTraining = ({ path }) => (
  <Layout>
    {({ trainings }) => (
      <React.Fragment>
        <Helmet
          title={metas.title}
          meta={[
            {
              name: 'description',
              content: metas.description,
            },
          ]}
        >
          {createSocialMetas(metas)}
        </Helmet>
        <Breadcrumb
          path={[
            { to: '/', label: 'Home' },
            {
              to: '/react',
              label: 'React',
            },
            {
              to: path,
              label: 'Corporate',
            },
          ]}
        />
        <Header
          titleLines={['Corporate React team training']}
          subtitle="Private team training, located in your offices anywhere in the world, based on our proven React curriculum."
          links={[
            { text: 'Training schedule', to: '#schedule' },
            { text: 'How tailored', to: '#how-tailored' },
            { text: 'Pricing', to: '#pricing' },
            { text: 'Previous clients', to: '#previous-clients' },
            { text: 'Custom training', to: '#custom-training' },
          ]}
          bgImageName={CORP_TRAINING}
        />
        <TopSection>
          <CallToActionRow>
            <Col mdOffset={1} md={4}>
              <LinkButton
                variant="primary"
                to="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/pdfs%2FCorporate%20Team%20Training%20with%20React%20GraphQL%20Academy.pdf?alt=media&"
                children="Team Training - Key Facts (PDF)"
              />
            </Col>
            <Col mdOffset={1} md={6} />
          </CallToActionRow>
          <a name="schedule" />
          <Segment>
            <CurriculumCorporateReact />
          </Segment>
        </TopSection>
        <Section>
          <Row>
            <Col md={5} mdOffset={1} order={[2, 1]}>
              <a name="previous-clients" />
              <AttendeeQuote
                quote="It's really hard to find good advanced tech training. In house, you standardise the knowledge [in a team] and start doing things the right way."
                fullname="Eber Herrera"
                job="Technical Director"
                company="Xing"
                youtubeId="TAtsPib9P9w"
                ctaButton="How Training Keeps Xing 
              Tech-Relevant (Blog)"
                ctaUrl="/blog/5-reasons-why-advanced-dev-training-will-keep-your-company-tech-relevant/"
              />
            </Col>
            <Col md={4} lgOffset={1} order={[1, 2]}>
              <H2>
                We have delivered Corporate training to almost any industry
              </H2>
              <TrustedByLogoList2 />
            </Col>
          </Row>
        </Section>
        <TrustedBySection type="contact" showContent />
        <Section>
          <a name="custom-training" />
          <LeanJSsprints />
        </Section>
        <UpcomingTrainingSection trainings={trainings} />
      </React.Fragment>
    )}
  </Layout>
)

export default CorporateReactTraining
