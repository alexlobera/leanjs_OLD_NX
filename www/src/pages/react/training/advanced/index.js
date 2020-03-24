import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumAdvancedReact from 'src/components/curriculum/CurriculumAdvancedReact'
import TargetAudienceList from 'src/components/curriculum/CurriculumAdvancedReact/TargetAudienceList'
import Header from 'src/components/layout/Header'
import header from 'src/components/layout/Header.json'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import {
  TECH_REACT,
  FULL_TIME,
  ADVANCED_REACT_ID,
  TRAINING_TYPE_HALF_CURRICULUM,
} from 'src/config/data'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createMetas } from 'src/components/utils'

const metas = {
  title: 'Advanced React Training | React GraphQL Academy',
  description:
    'Interested in advanced React? Learn advanced React patterns and supercharge your dev skillset with the latest in advanced React training. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingInstanceTypeName = FULL_TIME
const trainingId = ADVANCED_REACT_ID

const AdvancedTraining = ({ path, trainings }) => {
  const upcomingAdvancedTrainings = selectUpcomingTrainings({
    trainingId,
    trainingInstanceTypeName,
    trainings,
  })
  const nextTraining = selectNthTraining({
    trainings: upcomingAdvancedTrainings,
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
        {createMetas(metas)}
      </Helmet>
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/react', label: 'React' },
          { to: '/react/training/', label: 'Training' },
          {
            to: path,
            label: 'Advanced',
          },
        ]}
        tech={TECH_REACT}
        titleLines={['Advanced React Training']}
        subtitle="For 3 days, expert coaches and developers will work<br />alongside you to master the React ecosystem so<br />you return to work as a Senior React developer"
        bgImageName={BOOTCAMP}
        trainingType={trainingType}
        links={header.landingPageLinks.links}
      />
      <TopSection>
        <Segment>
          <CurriculumAdvancedReact trainings={upcomingAdvancedTrainings} />
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              quote="Most of the software my company does is legacy, it's been there for a while. Coming from PHP, React seemed a good way to do that."
              fullname="Charlie Wilson"
              job="Software Engineer"
              company="ESG PLC"
              youtubeId="yG3H27y9F08"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <H2>Is this advanced React training right for me?</H2>
            <Ul>
              <TargetAudienceList />
              <Li>
                Join a growing network of alumni for advice, knowledge and
                social fun!
              </Li>
            </Ul>
            {nextTraining ? (
              <P>
                <LinkButton variant="primary" to={nextTraining.toPath}>
                  Next one:{' '}
                  {`${formatUTC(
                    nextTraining.startDate,
                    nextTraining.utcOffset,
                    'D MMM'
                  )}, ${nextTraining.city} >>`}
                </LinkButton>
              </P>
            ) : null}
          </Col>
        </Row>
      </Section>
      <TrustedBySection />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export default AdvancedTraining
