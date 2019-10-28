import React from 'react'
import Ul, { Li } from '../layout/Ul'
import { H3 } from '../text'
import Link from '../navigation/Link'
import coachesData from './coaches.json'

const CoachItem = ({ path, name }) => (
  <Li>
    <Link to={`/team/${path}/`}>{name}</Link>
  </Li>
)

const TrainingDetails = ({ foodIncluded = false, coaches = [] }) => (
  <React.Fragment>
    {coaches.length ? (
      <React.Fragment>
        <H3>Teaching staff</H3>
        <Ul>
          {coaches.map(coachKey => (
            <CoachItem
              key={coachKey}
              path={coachKey}
              name={coachesData[coachKey]}
            />
          ))}
        </Ul>
      </React.Fragment>
    ) : null}
    <H3>Further details</H3>
    <Ul>
      <Li>{foodIncluded ? 'Lunch included' : 'Food not included'}</Li>
      <Li>Accomodation not included</Li>
    </Ul>
  </React.Fragment>
)

export default TrainingDetails
