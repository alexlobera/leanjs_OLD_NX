import React from 'react'
import styled from 'styled-components'
import { P, H3 } from '../text'
import { LinkButton } from '../buttons'
import { TradeLedger } from '../../components/logos'
import Card from '../elements/Card'

const ScholarshipsCard = () => (
  <Card top={36} bottom={36} bg='reactBlue' small>
    <H3>Scholarship available!</H3>
    <P>
      Looking to code React full time? We've partnered with Trade Ledger to
      offer a <strong>full scholarship</strong> for this bootcamp.
    </P>
    <P>
      Just click the link, contact Trade Ledger directly and outline your
      interest... that's it!
    </P>
    <LinkButton external secondary to={'https://tradeledger.io/contact/'}>
      <TradeLedger />
    </LinkButton>
  </Card>
)

export default ScholarshipsCard
