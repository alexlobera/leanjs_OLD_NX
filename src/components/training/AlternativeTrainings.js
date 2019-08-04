import React from 'react'

import { H3 } from '../text'
import { UpcomingTrainings } from './UpcomingTrainingSection'
import { selectUpcomingTrainings } from './UpcomingTrainings'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import { Row, Col } from '../layout/Grid'
import Flex from '../layout/Flex'
import Section from '../layout/Section'

import {
  ADVANCED_REACT,
  PART_TIME,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
} from '../../config/data'

const AlternativeTrainings = ({
  trainings,
  titleText = 'You may also be interested in',
  city,
  hideAllBtn,
  type = 'react',
}) =>
  trainings && trainings.length ? (
    <React.Fragment>
      <H3>{titleText}</H3>
      <Row>
        <UpcomingTrainings
          className="suggested-courses"
          limit={3}
          city={city}
          trainings={trainings}
        />
      </Row>
      {!hideAllBtn && (
        <Flex flexDirection={['column', 'row']}>
          <LinkButton mr={4} className="suggested-courses" to="#upcoming">
            See all public courses
          </LinkButton>
          <Link
            pt={[3, 1]}
            to={type === 'react' ? '/react/training/corporate/' : ''}
          >
            See private corporate training
          </Link>
        </Flex>
      )}
    </React.Fragment>
  ) : null

export const AlternativeTrainingSection = ({
  hideAllBtn = true,
  trainings,
}) => (
  <Section>
    <Row>
      <Col lg={10} lgOffset={1}>
        <AlternativeTrainings hideAllBtn={hideAllBtn} trainings={trainings} />
      </Col>
    </Row>
  </Section>
)

export const AlternativeBootcampTrainings = ({ trainings, city }) => {
  const reactTrainings = selectUpcomingTrainings({
    trainings,
    city,
    types: [REACT_FUNDAMENTALS, REACT_WORKSHOP, ADVANCED_REACT, PART_TIME],
    limit: 3,
  })

  return (
    <AlternativeTrainings
      trainings={reactTrainings}
      titleText="Alternatives to the React Bootcamp"
    />
  )
}

export default AlternativeTrainings
