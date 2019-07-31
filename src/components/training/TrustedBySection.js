import React from 'react'
import styled from 'styled-components'

import withWidth, { MEDIUM } from '../utils/WithWidth'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { Video, Card } from '../elements'
import Ul, { Li } from '../layout/Ul'
import { H2 } from '../text'
import Capgemini from '../logos/Capgemini'
import JohnLewis from '../logos/JohnLewis'
import FinancialTimes from '../logos/FinancialTimes'
import Tesco from '../logos/Tesco'
import Xing from '../logos/Xing'
import IBM from '../logos/IBM'
import IKEA from '../logos/IKEA'
import Microsoft from '../logos/Microsoft'
import { LIGHT_BLUE } from '../../config/styles'

const CompanyList = styled(Ul)`
  overflow: hidden;
  li {
    margin-left: 0;
    margin-right: 3px;
    padding: 0.5rem 1rem 1.5rem 0;
  }
`
export const TrustedByLogoList = () => (
  <CompanyList variant="inline">
    <Li>
      <Capgemini colour={LIGHT_BLUE} secColour={LIGHT_BLUE} height={47} />
    </Li>
    <Li>
      <IBM colour={LIGHT_BLUE} height={50} width={100} />
    </Li>
    <Li>
      <FinancialTimes colour={LIGHT_BLUE} height={28} />
    </Li>
    <Li>
      <Microsoft colour={LIGHT_BLUE} height={50} width={250} />
    </Li>
    <Li>
      <Tesco
        colour={LIGHT_BLUE}
        secColour={LIGHT_BLUE}
        stroke={LIGHT_BLUE}
        height={40}
      />
    </Li>
    <Li>
      <IKEA colour={LIGHT_BLUE} height={50} />
    </Li>
    <Li>
      <Xing colour={LIGHT_BLUE} height={48} y={20} />
    </Li>
    <Li>
      <JohnLewis colour={LIGHT_BLUE} secColour={LIGHT_BLUE} height={47} />
    </Li>
  </CompanyList>
)

const TrustedBySection = ({ width }) => (
  <Section variant="dark">
    <Card variant="primary">
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
  </Section>
)

export default withWidth()(TrustedBySection)
