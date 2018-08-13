import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../buttons'
import { H3, P } from '../text'
import { Card } from '../elements'
import Price from './Price'

const InstallmentsContainer = styled.div`
  margin: 12px 0;
`

const InstallmentsCard = ({ price }) => (
  <Card small bg="dark" style={{ marginTop: '20px' }}>
    <H3>
      <strong>Pay by Installments</strong>
    </H3>
    <P>
      Pay in 3 installments - the first one being 50% of the total cost and the
      others to follow over 3 months. Contact us and we can talk things through
      with you.
    </P>
    <InstallmentsContainer>
      <Price>
        &pound;
        {price}
      </Price>
      <LinkButton
        secondary
        to="mailto:hello@reactjs.academy"
        style={{ float: 'right' }}
      >
        Contact us
      </LinkButton>
    </InstallmentsContainer>
  </Card>
)

export default InstallmentsCard
