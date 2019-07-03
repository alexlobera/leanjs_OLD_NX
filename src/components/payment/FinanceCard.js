import React from 'react'
import { P, H3 } from '../text'
import Card from '../elements/Card'
import CourseBud from '../logos/CourseBud'
import { Row } from '../layout/Grid'
import ExternalLinkIcon from '../icons/ExternalLinkIcon'
import { Link } from '../navigation'

const FinanceCard = () => (
  <Card top={36} bottom={36} small>
    <H3>Financial Support</H3>
    <P>
      Looking for a way to spread the cost of training? We've partnered with
      Coursebud to offer an easy way to obtain a suitable loan for this
      training.
    </P>
    <P>
      Just click the link, and apply directly on the Coursebud site... that's
      it!
    </P>
    <Link to="https://www.coursebud.com/search">
      <Row>
        <CourseBud height={50} />
        <ExternalLinkIcon />
      </Row>
    </Link>
  </Card>
)

export default FinanceCard
