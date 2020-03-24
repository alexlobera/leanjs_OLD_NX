import React from 'react'

import Section from '../layout/Section'
import { Col, Row } from '../layout/Grid'
import { H2Ref, P } from '../text'
import UpcomingTrainings from './UpcomingTrainings'
import Link from '../navigation/Link'
import selectUpcomingTrainings from './selectUpcomingTrainings'
import { GREY } from '../../config/styles'
import Flex from '../layout/Flex'

const CorporateCrossSell = ({ to }) => (
  <Flex sx={{ alignSelf: 'self-start' }}>
    <Link
      to={to}
      sx={{ px: 3, py: 1, border: `3px dotted`, borderColor: GREY }}
    >
      <P>
        <strong>Corporate team training</strong>
      </P>
      Find out more
    </Link>
  </Flex>
)

export const UpcomingTrainingTabs = ({ trainings, limit = 15 }) => {
  const allTrainings = selectUpcomingTrainings({
    trainings,
    limit,
  })

  return (
    <Row>
      <UpcomingTrainings
        className="upcoming-courses-all-courses"
        trainings={allTrainings}
      />
      <CorporateCrossSell to="/react/training/corporate/" />
    </Row>
  )
}

export const UpcomingTrainingSection = ({ trainings, limit = 15 }) => (
  <Section>
    <Row>
      <Col md={11} mdOffset={1}>
        <H2Ref>
          Upcoming - All Events
          <Link to="#upcoming" name="upcoming">
            #
          </Link>
        </H2Ref>
        <UpcomingTrainingTabs trainings={trainings} limit={limit} />
      </Col>
    </Row>
  </Section>
)

export default React.memo(UpcomingTrainingSection)
