import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumStylingAndAdvUI, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI'
import { Segment } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Link, Breadcrumb } from 'src/components/navigation'
import { REACT_WORKSHOP } from 'src/config/data'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import NextTrainingButton from 'src/components/training/NextTrainingButton'
import { trainingId, breadcrumbWorkshopName } from './config.json'

const metas = {
  title: `Advanced React UIs & Styling With Design Systems Workshop | React GraphQL Academy`,
  description:
    'Interested in Design Systems? React GraphQL Academy offers Design Systems in React workshops, focussing on the design part of the React ecosystem. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const StylingDesignSystemWorkshop = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const nextTraining = getNextTrainingByTrainingId({
        trainings,
        trainingId,
      })

      return (
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
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: path,
                label: breadcrumbWorkshopName,
              },
            ]}
          />
          <Header
            titleLines={[
              'Advanced React UIs & Styling',
              'With Design Systems Workshop',
            ]}
            subtitle="See how React can look gorgeous and encourage design consistency"
            links={[
              { text: 'Workshop Agenda', to: '#curriculum' },
              { text: 'Is this right for me?', to: '#target-audience' },
            ]}
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
          />
          <TopSection>
            <Segment>
              <CurriculumStylingAndAdvUI
                trainingId={trainingId}
                trainings={trainings}
                section={{ isOpen: true }}
              />
            </Segment>
          </TopSection>

          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="With React, everything is inter-connected which can be difficult to understand. But I see it clearly now [after the course]."
                  fullname="Rafa Fraga"
                  job="Software Engineer"
                  youtubeId="9QpAWAtZy6M"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <P>
                  If you've said 'yes' to these, this workshop could be for you!
                </P>
                <H3>Not for React beginners!</H3>
                <NextTrainingButton type="workshop" training={nextTraining} />
              </Col>
            </Row>
          </Section>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default StylingDesignSystemWorkshop
