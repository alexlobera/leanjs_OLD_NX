import React from 'react'

import { H4, P } from '../text'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import Card from '../elements/Card'

export const TrainingCardList = ({ data = [], borderColor, className = '' }) =>
  data.map((training, i) => (
    <Card
      variant="primary"
      mt={i === 0 ? 0 : 4}
      key={`${training.to}${i}`}
      borderColor={borderColor}
    >
      <H4>
        <Link underline={false} to={training.to} className={className}>
          {training.title}
        </Link>
      </H4>
      <P>{training.text}</P>
      <LinkButton to={training.to} variant="secondary" className={className}>
        Find Out More
      </LinkButton>
    </Card>
  ))

export default TrainingCardList
