import React from 'react'
import styled from 'styled-components'

import withWidth, { MEDIUM } from '../utils/WithWidth'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { Video, Card } from '../elements'
import Ul, { Li } from '../layout/Ul'
import { H2 } from '../text'
import Capgemini from '../logos/Capgemini'
import DefaultFinancialTimes from '../logos/FinancialTimes'
import Tesco from '../logos/Tesco'
import Xing from '../logos/Xing'
import IBM from '../logos/IBM'
import IKEA from '../logos/IKEA'
import Microsoft from '../logos/Microsoft'
import { DARK_BLUE } from '../../config/styles'
import { SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'

// TODO THIS IS NOT WORKING, THE IMAGE IS TOO BIG ON MOBILE
const FinancialTimes = styled(DefaultFinancialTimes)`
  @media (max-width: ${SCREEN_SM_MAX}) {
    height: 18;
  }
`

const CompanyList = styled(Ul)`
  overflow: hidden;
  li {
    margin-left: 0;
    padding: 0.5rem 1rem 1.5rem 0;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      margin-left: 0;
      padding-left: 0;
    }
  }
`
export const TrustedByLogoList = () => (
  <CompanyList inline>
    <Li>
      <Capgemini colour={DARK_BLUE} secColour={DARK_BLUE} height={47} />
    </Li>
    <Li>
      <FinancialTimes colour={DARK_BLUE} height={30} />
    </Li>
    <Li>
      <IBM colour={DARK_BLUE} height={50} width={100} />
    </Li>
    <Li>
      <Microsoft colour={DARK_BLUE} height={50} width={250} />
    </Li>
    <Li>
      <IKEA colour={DARK_BLUE} height={50} />
    </Li>
    <Li>
      <Tesco
        colour={DARK_BLUE}
        secColour={DARK_BLUE}
        stroke={DARK_BLUE}
        height={40}
      />
    </Li>
    <Li>
      <Xing colour={DARK_BLUE} height={48} y={20} />
    </Li>
  </CompanyList>
)

const TrustedBySection = ({ width }) => (
  <Section xsBgDark>
    <Grid>
      <Card bg="dark">
        <Row>
          <Col lg={10} lgOffset={1}>
            <H2>Trusted by industry leaders</H2>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={5} lgOffset={1}>
            <TrustedByLogoList />
          </Col>
          {width > MEDIUM && (
            <Col md={6} lg={5}>
              <Video youtubeId="yvROXLQ1jHg" />
            </Col>
          )}
        </Row>
      </Card>
    </Grid>
  </Section>
)

export default withWidth()(TrustedBySection)
