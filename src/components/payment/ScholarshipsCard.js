import React from 'react'
import styled from 'styled-components'
import { P, H3 } from '../text'
import { reactBlue, GREY2 } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'
import { LinkButton } from '../buttons'
import { ExternalLink } from '../../components/icons'
import { TradeLedger } from '../../components/logos'

const Card = styled.div`
  background-color: ${reactBlue(1)};
  margin-top: 36px;
  margin-bottom: 6px;
  padding: 36px;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 8px 0;
    }
  }
`

const IconMargins = styled.div`
  float: left;
  margin: ${props => (props.primary ? ' 10px 0 0 0;' : '5px 0 0 15px')};
`

const ScholarshipsCard = () => (
  <Card>
    <H3 style={{ color: `${GREY2}` }}>Scholarship available!</H3>
    <P style={{ color: `${GREY2}` }}>
      Looking to code React full time? We've partnered with Trade Ledger to
      offer a <strong>full scholarship</strong> for this bootcamp.
    </P>
    <P style={{ color: `${GREY2}` }}>
      Just click the link, contact Trade Ledger directly and outline your
      interest... that's it!
    </P>
    <LinkButton secondary to={'https://tradeledger.io/contact/'}>
      <IconMargins primary>
        <ExternalLink />
      </IconMargins>
      <IconMargins>
        <TradeLedger />
      </IconMargins>
    </LinkButton>
  </Card>
)

export default ScholarshipsCard
