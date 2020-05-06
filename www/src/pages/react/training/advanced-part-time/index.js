import React from 'react'
import Helmet from 'react-helmet'

import { FAQ } from 'src/components/training/PageContent'
import { BOOTCAMP } from 'src/../images/imageNames'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumAdvancedReactPartTime from 'src/components/curriculum/CurriculumAdvancedReactPartTime'
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
  TRAINING_TYPE_HALF_CURRICULUM,
  PART_TIME,
  ADVANCED_REACT_ID,
} from 'src/config/data'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createMetas } from 'src/components/utils'

const metas = {
  title: 'Advanced React Part-Time Training | React GraphQL Academy',
  description:
    'Interested in learning advanced React without cutting into valuable work? Learn advanced React and supercharge your dev skillset with the latest in advanced React training. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingInstanceTypeName = PART_TIME
const trainingId = ADVANCED_REACT_ID

const AdvancedTraining = ({ path, trainings, data }) => {
  const upcomingAdvancedTrainings = selectUpcomingTrainings({
    trainingInstanceTypeName,
    trainingId,
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
            label: 'Advanced Part-time',
          },
        ]}
        tech={TECH_REACT}
        titleLines={['Advanced React', 'Part-Time Training']}
        subtitle="For two and a half weeks, expert coaches and developers will work alongside you to master the React ecosystem without cutting into valuable work"
        bgImageName={BOOTCAMP}
        trainingType={trainingType}
        links={header.landingPageLinks.links}
      />
      <TopSection>
        <Segment>
          <CurriculumAdvancedReactPartTime
            trainings={upcomingAdvancedTrainings}
            pageData={data.sanityTrainingPage}
          />
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

export const query = graphql`
  query advancedReactPartTime($path: String) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`

export default AdvancedTraining
