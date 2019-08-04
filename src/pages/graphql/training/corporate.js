import React from 'react'
import Helmet from 'react-helmet'

import { CORP_TRAINING } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import TrustedBySection from 'src/components/training/TrustedBySection'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2 } from 'src/components/text'
import { UpcomingTrainingSection, AttendeeQuote } from 'src/components/training'
import TrustedByLogoList2 from 'src/components/training/TrustedByLogoList2'
import Header from 'src/components/layout/Header'
import { CallToActionRow } from 'src/components/layout/CallToActionRow'
import { Card } from 'src/components/elements'
import CurriculumCorporateGraphQL from 'src/components/curriculum/CurriculumCorporateGraphQL'
import LeanJSsprints from 'src/components/elements/LeanJSsprints'
import { Breadcrumb } from 'src/components/navigation'
import { createSocialMetas } from 'src/components/utils'
import { BOOTCAMP_COLLAB } from 'src/config/images'

const metas = {
  title: 'GraphQL Corporte Training | React GraphQL Academy',
  description:
    'Interested in GraphQL corporate training? We offer corporate GraphQL team training, located in your offices anywhere in the world. Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

const CorporateGraphQLTraining = ({ path }) => (
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
              to: '/graphql',
              label: 'GraphQL',
            },
            {
              to: path,
              label: 'Corporate',
            },
          ]}
        />
        <Header
          titleLines={['Corporate GraphQL Team Training']}
          subtitle="Private team training, located in your offices anywhere in the world, based on our proven GraphQL curriculum."
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
          <Card>
            <CurriculumCorporateGraphQL />
          </Card>
        </TopSection>

        <Section>
          <Row>
            <Col md={5} mdOffset={1} order={[2, 1]}>
              <a name="previous-clients" />
              <AttendeeQuote
                quote="[Before training with React GraphQL Academy] there wasn't the confidence we would meet our deadlines. Now, management know the deadlines are going to be met - that reduces our risk."
                fullname="Lara Ramey"
                job="Senior Developer"
                company="Meredith Corporation"
                youtubeId="IeZTDG7S6Dk"
                ctaButton="How Training Keeps Xing 
              Tech-Relevant (Blog)"
                ctaUrl="/blog/5-reasons-why-advanced-dev-training-will-keep-your-company-tech-relevant/"
              />
            </Col>
            <Col md={4} lgOffset={1} order={[1, 2]}>
              <H2>Trusted by industry leaders</H2>
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

export default CorporateGraphQLTraining
