import React from 'react'
import styled from 'styled-components'

import { CONVINCE_THE_BOSS_PDF } from '../../config/data'
import { LinkButton } from '../buttons'
import Section from '../layout/Section'
import Flex from '../layout/Flex'
import { Col, Row } from '../layout/Grid'
import { Video } from '../elements'
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

const TrustedBySection = ({ type, showContent = false }) => {
  const buttons = (
    <Flex sx={{ flexDirection: ['column', 'row'] }}>
      {type === 'contact' ? (
        <React.Fragment>
          <LinkButton
            variant="primary"
            sx={{
              minWidth: '150px',
            }}
            to="#contact-us"
            className="corporate-team-training-testimonials-cta"
          >
            Contact sales
          </LinkButton>

          <LinkButton
            pdf
            sx={{
              mt: [4, 0],
              ml: [0, 3],
            }}
            to={CONVINCE_THE_BOSS_PDF}
            className="learn-with-us-pdf"
          >
            Why devs should learn with us
          </LinkButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LinkButton
            to="/react/training/corporate"
            className="corporate-team-training-testimonials-cta-react"
          >
            React team training
          </LinkButton>

          <LinkButton
            sx={{
              mt: [4, 0],
              ml: [0, 3],
            }}
            to="/graphql/training/corporate"
            className="corporate-team-training-testimonials-cta-graphql"
          >
            GraphQL team training
          </LinkButton>
        </React.Fragment>
      )}
    </Flex>
  )
  return (
    <Section variant="dark">
      <Row>
        <Col lg={10} lgOffset={1} sx={{ mb: 5 }}>
          <H2>
            Developers from all these companies have trusted us{' '}
            <a name="trusted-by" />
          </H2>
          <TrustedByLogoList />
        </Col>
      </Row>
      <Row>
        {showContent ? (
          <React.Fragment>
            <Col md={5} mdOffset={1}>
              <Video youtubeId="o6YwbHGfPOo" />
            </Col>
            <Col md={5} mdOffset={1}>
              <H2>Why React GraphQL Academy is great for your dev team</H2>
              <Ul>
                <Li>
                  Avoid delays & business losses with more reliable and
                  consistent code
                </Li>
                <Li>
                  Increase employee retention, motivation, and productivity
                </Li>
                <Li>
                  Great for team building, and a safe environment for devs to
                  learn.
                </Li>
                <Li>Minimise the risk of onboarding React</Li>
                <Li>Delivered wherever you need - worldwide!</Li>
              </Ul>
              {buttons}
            </Col>
          </React.Fragment>
        ) : (
          <Col md={10} mdOffset={1}>
            {buttons}
          </Col>
        )}
      </Row>
    </Section>
  )
}

export default TrustedBySection
