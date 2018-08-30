import React from 'react'
import Ul, { Li } from '../layout/Ul'
import { H3 } from '../text'
import Link from '../navigation/Link'
import coachesData from './coaches.json'

export const HORACIO_HERRERA = 'horacio-herrera'
export const WILL_VOELCKER = 'will-voelcker'
export const RICHARD_MOSS = 'richard-moss'
export const ALEX_LOBERA = 'alex-lobera'
export const ADAM_LANCASTER = 'adam-lancaster'
export const EVA_HOFFMANN = 'eva-hoffmann'

const CoachItem = ({ path, name }) => (
  <Li>
    <Link to={`/about-us#${path}`}>{name}</Link>
  </Li>
)

const TrainingDetails = ({
  date,
  timing,
  location,
  foodIncluded = false,
  coaches = [],
}) => (
  <React.Fragment>
    <H3>Details</H3>
    <Ul>
      <Li>Date: {date}</Li>
      <Li>Timing: {timing}</Li>
      <Li>Location: {location}</Li>
      <Li>{foodIncluded ? 'Lunch included' : 'Food not included'}</Li>
      <Li>Accomodation not included</Li>
    </Ul>
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
  </React.Fragment>
)

export default TrainingDetails
