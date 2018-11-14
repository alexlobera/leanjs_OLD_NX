import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, H4, P } from '../components/text'
import { UpcomingTrainingSection } from '../components/training'
import Ul, { Li } from '../components/layout/Ul'
import Header from '../components/layout/Header'
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
import { Card, Video, Image } from '../components/elements'
import { Blockquote } from '../components/text'
import { LeanJS } from '../components/logos'
import {
  RICHARD,
  HORACIO,
  WILL,
  ADAM,
  EVA,
  CODEVELOP,
  BOOTCAMP_COLLAB,
  HELLO_STUDENT,
} from '../config/images'
import { HideComponentsUsingCss } from '../components/utils'
import { WHITE } from '../config/styles'
import trackUserBehaviour, {
  SOCIAL_NETWORK_LINK_CLICK,
} from '../components/utils/trackUserBehaviour'
import { selectFirstTraining, REACT_BOOTCAMP } from '../config/data'
import { SCREEN_SM_MAX } from '../components/utils'

const trainings = [selectFirstTraining(REACT_BOOTCAMP)]

const LeanJSLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
`

const CoachTitle = styled(H3)`
  & {
    padding-top: 0;
  }
`

const BecomeACoachWrapper = styled.div`
  @media (max-width: ${SCREEN_SM_MAX}) {
    text-align: center;
    padding-bottom: 18px;
  }
`

const SocialLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={() => {
      trackUserBehaviour({
        event: SOCIAL_NETWORK_LINK_CLICK,
        payload: {
          network: children,
          to,
        },
      })
      onClick && onClick(e)
    }}
    target="_blank"
  >
    {children}
  </Link>
)

const scholarships = () => (
  <React.Fragment>
    <Header
      titleLines={['Scholarships & discounts']}
      subtitle="ReactJS Academy love to see our alumni improve their lives, </br> which is why we're committed to providing a helping hand when we can. "
      links={[
        {
          text: 'Professional scholarships ',
          to: '#professional-scholarships',
        },
        {
          text: 'Minorities in Tech discount ',
          to: '#minorities-discount',
        },
      ]}
      bgImg="about-us"
    />
    <TopSection>
      <Grid>
        <CallToActionNextTrainings left trainings={trainings} />
        <Card border="shadow">
          <Row>
            <Col md={10} mdOffset={1}>
              <Link
                style={{ paddingTop: -5 }}
                name="professional-scholarships"
                to="#professional-scholarships"
              >
                #
              </Link>
              <H2>Professional scholarships</H2>
              <H3 style={{ paddingTop: 0 }}>
                Get funded and jump straight into a new React development role!{' '}
              </H3>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <P>
                    If you're looking to join an exciting new team as an expert
                    React developer, this is for you.
                  </P>
                  <P>
                    Our corporate partners love the quality of ReactJS Academy
                    alumni and are willing to fund your training before taking
                    you on as a fully-fledged React developer.{' '}
                  </P>
                  <P>
                    All you have to do is click one of the links below and
                    register your interest.
                  </P>
                  <H4>Companies currently offering scholarships</H4>
                  <P>London courses only: </P>
                  <LinkButton secondary to="https://tradeledger.io/contact/">
                    Trade Ledger >>
                  </LinkButton>
                </Col>
                <Col md={1} />
                <HideComponentsUsingCss xs>
                  <Col xs={12} sm={12} md={5}>
                    <Image src={BOOTCAMP_COLLAB} />
                  </Col>
                </HideComponentsUsingCss>
              </Row>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col md={10} mdOffset={1}>
              <Link
                style={{ paddingTop: -5 }}
                name="minorities-discount"
                to="#minorities-discount"
              >
                #
              </Link>
              <H2>Minorities in Tech</H2>
              <H3 style={{ paddingTop: 0 }}>
                In our own little way, we want to bring more diversity to
                tech...{' '}
              </H3>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <P>
                    The problem of diversity in all levels of tech is an issue
                    we feel should be tackled at all angles - with education
                    being one of those angles!
                  </P>
                  <P>
                    To facilitate this, offer different discounts and
                    scholarships if you identify as belonging to a ethnic
                    minority - depending on your unique circumstances. Just
                    email us for more details.
                  </P>
                  <LinkButton secondary to="#contact-us">
                    Contact us >>
                  </LinkButton>
                </Col>
                <Col md={1} />
                <HideComponentsUsingCss xs>
                  <Col xs={12} sm={12} md={5}>
                    <Image src={HELLO_STUDENT} />
                  </Col>
                </HideComponentsUsingCss>
              </Row>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>

    <UpcomingTrainingSection />
  </React.Fragment>
)

export default scholarships
