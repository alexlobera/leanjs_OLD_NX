import React from 'react'
import styled from 'styled-components'

import withWidth, { MEDIUM } from '../utils/WithWidth'
import { LinkButton } from 'src/components/buttons'
import Section from '../layout/Section'
import { Col, Row } from '../layout/Grid'
import { Video, Card } from '../elements'
import Ul, { Li } from '../layout/Ul'
import { H2, P } from '../text'
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
      <Xing colour={LIGHT_BLUE} height={48} y={20} />
    </Li>
    <Li>
      <FinancialTimes colour={LIGHT_BLUE} height={26} />
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
      <JohnLewis colour={LIGHT_BLUE} secColour={LIGHT_BLUE} height={47} />
    </Li>
  </CompanyList>
)

const TrustedBySection = ({ width, video = true }) => (
  <Section variant="darkMob">
    <Card variant="transparent">
      <Row>
        <Col lg={10} lgOffset={1}>
          <H2>Developers from all these companies have trusted us</H2>
          <TrustedByLogoList />
        </Col>
      </Row>
      <Row>
        {video && width > MEDIUM && (
          <React.Fragment>
            <Col md={6} lg={5} lgOffset={1}>
              <Video youtubeId="o6YwbHGfPOo" />
            </Col>
            <Col md={6} lg={5}>
              <H2>Why React GraphQL Academy is great for your dev team</H2>
              <Ul>
                <Li>
                  <strong>Avoid delays & business losses</strong> with more
                  reliable and consistent code
                </Li>
                <Li>
                  <strong>Increase employee retention</strong>, motivation, and
                  productivity
                </Li>
                <Li>
                  Great for <strong>team building</strong>, and a safe
                  environment for devs to learn.
                </Li>
                <Li>
                  <strong>Minimise the risk</strong> of onboarding React
                </Li>
                <Li>
                  <strong>Delivered wherever you need</strong> - worldwide!
                </Li>
              </Ul>
              <P>
                <LinkButton variant="primary" to="#contact-us">
                  Contact us to find out more
                </LinkButton>
              </P>
            </Col>
          </React.Fragment>
        )}
      </Row>
    </Card>
  </Section>
)

export default withWidth()(TrustedBySection)
