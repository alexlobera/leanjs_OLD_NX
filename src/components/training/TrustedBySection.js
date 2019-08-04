import React from 'react'
import styled from 'styled-components'

import { CONVINCE_THE_BOSS_PDF } from '../../config/data'
import { LinkButton } from 'src/components/buttons'
import Section from '../layout/Section'
import Flex from '../layout/Flex'
import { Col, Row } from '../layout/Grid'
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

export const CompanyList = styled(Ul)`
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
      <Microsoft colour={LIGHT_BLUE} height={50} />
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

const TrustedBySection = ({ type }) => (
  <Section variant="dark">
    <Card variant="primary" border="none">
      <Row>
        <Col lg={10} lgOffset={1} mb={5}>
          <H2>
            Developers from all these companies have trusted us{' '}
            <a href="#trusted-by" />
          </H2>
          <TrustedByLogoList />
        </Col>
      </Row>
      <Row>
        <Col md={5} mdOffset={1}>
          <Video youtubeId="o6YwbHGfPOo" />
        </Col>
        <Col md={5} mdOffset={1}>
          <H2>Why React GraphQL Academy is great for your dev team</H2>
          <Ul>
            <Li>
              Avoid delays & business losses with more reliable and consistent
              code
            </Li>
            <Li>Increase employee retention, motivation, and productivity</Li>
            <Li>
              Great for team building, and a safe environment for devs to learn.
            </Li>
            <Li>Minimise the risk of onboarding React</Li>
            <Li>Delivered wherever you need - worldwide!</Li>
          </Ul>
          <Flex flexDirection={['column', 'row']}>
            <LinkButton
              variant="primary"
              minWidth="150px"
              to={
                type === 'contact'
                  ? '#contact-us'
                  : '/react/training/corporate/'
              }
              className="corporate-team-training-testimonials-cta"
            >
              {type === 'contact' ? 'Contact us' : 'Corporate team training'}
            </LinkButton>

            <LinkButton
              pdf
              mt={[4, 0]}
              ml={[0, 3]}
              to={CONVINCE_THE_BOSS_PDF}
              className="learn-with-us-pdf"
            >
              Why devs should learn with us
            </LinkButton>
          </Flex>
        </Col>
      </Row>
    </Card>
  </Section>
)

export default TrustedBySection
