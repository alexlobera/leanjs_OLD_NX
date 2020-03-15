import React from 'react'
import Ul, { Li } from '../layout/Ul'
import { H3 } from '../text'
import Link from '../navigation/Link'
import Image from '../elements/Image'
import coachesData from './coaches.json'

const CoachItem = ({ path, name, coachFluidImg }) => (
  <Li>
    {coachFluidImg && (
      <Image
        sx={{ maxWidth: '150px' }}
        circle
        fluid={coachFluidImg}
        alt={name}
      />
    )}{' '}
    <Link to={`/team/${path}/`}>{name}</Link>
  </Li>
)

const TrainingDetails = ({
  furtherDetails,
  foodIncluded = false,
  coaches = [],
  training,
}) => (
  <React.Fragment>
    {coaches.length ? (
      <React.Fragment>
        <H3>Coaches</H3>
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
    {furtherDetails ? (
      furtherDetails
    ) : (
      <Ul>
        {training && training.isOnline ? (
          <>
            <Li>
              24 hours of remote training with industry experts across 4 weeks.
            </Li>
            <Li>
              15-minute video call with each coach for 1-on-1 mentoring during
              the training on top of the workshops.
            </Li>
          </>
        ) : (
          <>
            <Li>{foodIncluded ? 'Lunch included' : 'Food not included'}.</Li>
            <Li>Accomodation not included.</Li>
          </>
        )}
        <Li>
          Hans-on training and progressive curriculum based on our{' '}
          <Link to="/blog/react-graphql-academy-teaching-method/">
            teaching method
          </Link>
          .
        </Li>
        <Li>Cohort and alumni Slack channels.</Li>
        {training && !training.isOnline && (
          <Li>
            <Link to="/blog/4-reasons-why-you-should-host-our-react-graphql-training/">
              Become a host and get exclusive promotions
            </Link>{' '}
            for your company.
          </Li>
        )}
        <Li>
          Further questions?{` `}
          <Link to="#contact-us">Contact us :)</Link>
        </Li>
      </Ul>
    )}
  </React.Fragment>
)

export default TrainingDetails
