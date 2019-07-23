import React from 'react'
import { P, H3 } from '../text'
import Card from '../elements/Card'
import CourseBud from '../logos/CourseBud'
import { Link } from '../navigation'

const FinanceCard = () => (
  <Card my={5} small>
    <H3>Financial Support</H3>
    <P>
      Looking for a way to spread the cost of training? We've partnered with
      Coursebud to offer an easy way to obtain a suitable loan for this
      training.
    </P>
    <P>
      Just{' '}
      <Link to="https://www.coursebud.com/search">
        click the link, and apply
      </Link>{' '}
      directly on the Coursebud site... that's it!
    </P>
    <Link to="https://www.coursebud.com/search">
      <CourseBud height={50} />
    </Link>
  </Card>
)

export default FinanceCard
