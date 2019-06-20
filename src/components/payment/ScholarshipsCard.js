import React from 'react'
import { P, H3 } from '../text'
import Card from '../elements/Card'
import CourseBud from '../logos/CourseBud'
import { Link } from '../navigation'

const ScholarshipsCard = () => (
  <Card top={36} bottom={36} small>
    <H3>Finance available!</H3>
    <P>
      Looking for a way to spread the cost of training? We've partnered with
      CourseBud to offer an easy way to obtain a small loan for this training.
    </P>
    <P>
      Just click the link, and apply directly on the CourseBud site... that's
      it!
    </P>
    <Link to="https://www.coursebud.com/search">
      <CourseBud height={50} />
    </Link>
  </Card>
)

export default ScholarshipsCard
