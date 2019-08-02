import React, { useState } from 'react'
import styled from 'styled-components'

import { formatUTC } from '../utils'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2Ref, H3, P } from '../text'
import { TrainingItem } from '.'
import Link from '../navigation/Link'
import { selectUpcomingTrainings } from './UpcomingTrainings'
import Newsletter from '../elements/Newsletter'
import { GREY } from '../../config/styles'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  PART_TIME,
  REACT_NATIVE,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  MEETUP,
} from '../../config/data'
import CorporateTrainingCard from './CorporateTrainingCard'

const CorporateCrossSell = ({ to }) => (
  <Link to={to} px={3} py={1} border={`3px dotted`} borderColor={GREY}>
    <P>
      <strong>Corporate team training</strong>
    </P>
    Find out more
  </Link>
)

export const UpcomingTrainings = ({
  curriculum,
  type,
  city,
  limit,
  trainings,
  className,
}) => {
  const filteredTrainings = selectUpcomingTrainings({
    type,
    limit,
    city,
    trainings,
  })
  if (!filteredTrainings.length || !filteredTrainings[0].id) {
    return <P>Sorry! There are no {type} dates confirmed.</P>
  } else {
    return filteredTrainings.map(training => {
      const formatedDate = formatUTC(
        training.startDate,
        training.utcOffset,
        'D MMM'
      )
      const dayMonth = formatedDate ? formatedDate.split(' ') : ['', '']
      const startDate = new Date(training.startDate)
      const endDate = new Date(training.endDate)
      const days = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
      const duration =
        days <= 2
          ? '1 day'
          : days < 3
          ? `2 days`
          : days < 5
          ? `3 days`
          : days < 10
          ? '1 week'
          : days < 25
          ? '1 month'
          : ''

      const trainingInstance = (
        <TrainingItem
          key={training.id}
          cityCountry={training.cityCountry}
          startDay={dayMonth[0]}
          startMonth={dayMonth[1]}
          duration={duration}
          type={training.type}
          title={training.title}
          path={training.toPath}
          className={className}
        />
      )
      return (
        <React.Fragment key={training.id}>
          {curriculum ? trainingInstance : <Col md={4}>{trainingInstance}</Col>}
        </React.Fragment>
      )
    })
  }
}

export const UpcomingTrainingCurriculum = ({
  type,
  trainings,
  removeAdditionalCTAs = false,
  className = 'upcoming-courses-upcoming-dates',
}) => {
  return (
    <React.Fragment>
      <Link to="#upcoming-courses" name="upcoming-courses" />
      <H3 pt={[4, 0]}>Upcoming dates</H3>
      <UpcomingTrainings
        type={type}
        limit={3}
        curriculum
        trainings={trainings}
        className={className}
      />
      <Link className="upcoming-courses-upcoming-dates" to="#upcoming">
        See all upcoming courses
      </Link>
      {!removeAdditionalCTAs && (
        <React.Fragment>
          <Link to="#free-learning-resources" name="free-learning-resources" />
          <Newsletter />
          <Link to="#corporate-training" name="corporate-training" />
          <CorporateTrainingCard type={type} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export const UpcomingTrainingTabs = ({ trainings, limit = 15 }) => {
  const [activeTab, setActiveTab] = useState(REACT_BOOTCAMP)
  const reactTrainings = selectUpcomingTrainings({
    trainings,
    limit,
    types: [
      REACT_BOOTCAMP,
      ADVANCED_REACT,
      PART_TIME,
      REACT_NATIVE,
      REACT_WORKSHOP,
      REACT_FUNDAMENTALS,
    ],
  })
  const graphqlTrainings = selectUpcomingTrainings({
    trainings,
    limit,
    types: [GRAPHQL_BOOTCAMP, GRAPHQL_API, GRAPHQL_CLIENT],
  })
  const meetups = selectUpcomingTrainings({
    trainings,
    limit,
    types: [MEETUP],
  })

  return (
    <Tabs active={activeTab} onChange={setActiveTab}>
      <TabList>
        <TabItem className="upcoming-events" name={REACT_BOOTCAMP}>
          React Courses
        </TabItem>
        <TabItem className="upcoming-events" name={GRAPHQL_BOOTCAMP}>
          GraphQL Courses
        </TabItem>
        <TabItem className="upcoming-events" name={MEETUP}>
          Meetups
        </TabItem>
      </TabList>
      <TabContent>
        <ContentItem name={REACT_BOOTCAMP}>
          <Row>
            <UpcomingTrainings
              className="upcoming-courses-all-courses"
              trainings={reactTrainings}
            />
            <CorporateCrossSell to="/react/training/corporate/" />
          </Row>
        </ContentItem>

        <ContentItem name={GRAPHQL_BOOTCAMP}>
          <Row>
            <UpcomingTrainings trainings={graphqlTrainings} />
            <CorporateCrossSell to="/graphql/training/corporate/" />
          </Row>
        </ContentItem>

        <ContentItem name={MEETUP}>
          <Row>
            <UpcomingTrainings trainings={meetups} />
          </Row>
        </ContentItem>
      </TabContent>
    </Tabs>
  )
}

export const UpcomingTrainingSection = ({ trainings, limit = 15 }) => (
  <Section>
    <Grid>
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
    </Grid>
  </Section>
)

export default UpcomingTrainingSection
