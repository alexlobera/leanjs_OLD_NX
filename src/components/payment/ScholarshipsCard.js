import React from 'react'
import styled from 'styled-components'
import { Col, Row } from '../layout/Grid'
import { Span, P, H4 } from '../text'
import { CALLTOACTIONRED } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'
import { LinkButton } from '../buttons'

const Card = styled.div`
  margin-top: 36px;
  margin-bottom: 6px;
  padding: 36px;
  border: solid 4px ${CALLTOACTIONRED};
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 8px 0;
    }
  }
`

const ScholarshipsCard = () => (
  <Card>
    <H4>Looking to change careers and move into React?</H4>
    <P>
      We've partnered with Trade Ledger to offer a full scholarship for this
      bootcamp which you can take advantage of.
    </P>
    <P>
      All you have to do is click the link below, contact Trade Ledger directly
      and outline your interest in the scholarship... that's it!
    </P>
    <LinkButton to={'https://tradeledger.io/contact/'}>
      Contact Trade Ledger
    </LinkButton>
  </Card>
)

export default ScholarshipsCard
