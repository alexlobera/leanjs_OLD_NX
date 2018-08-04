import React from 'react'
import styled from 'styled-components'
import Section, { TopSection } from '../components/layout/Section'
import { LinkButton } from '../components/buttons'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import { Ribbon, Card, Video } from '../components/elements'
import Link from '../components/navigation/Link'
import { HideSingleComponentUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { GREY2, FONT_FAMILY } from '../config/styles'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingBootcampsSection, AttendeeQuote } from '../components/training'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import BuyQuantityButton from '../components/old_checkout/containers/PurchaseQuantityContainer'
import header from '../components/layout/Header.json'

const Price = styled.span`
  ${FONT_FAMILY} font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${GREY2};
`

const InstallmentsContainer = styled.div`
  margin: 12px 0;
`

const BootcampLondon = () => (
  <React.Fragment>
    <Header
      titleLines={['React Redux GraphQL Bootcamp', '20-25 Aug, 2018 - London']}
      subtitle="Take your dev career to the next level by mastering<br />React, Redux, and GraphQL - in just 7 days!"
      links={header.landingTraining.links}
      bgImg="training-event"
    />
    <TopSection xsBgDark>
      <Grid>
        <Card bg="dark">
          <Row>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video youtubeID="yvROXLQ1jHg" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <H2Ref>
                Prices{' '}
                <a href="#pricing" name="pricing">
                  #
                </a>
              </H2Ref>
              <P style={{ paddingBottom: '20px' }}>
                Please be aware that the tickets cover the cost of the training,
                it does not include the cost of the flights, accomodation, or
                food.
              </P>
              <Card small style={{ position: 'relative' }}>
                <Ribbon>Save 24%</Ribbon>
                <H3>
                  <strong>Early bird ticket</strong>
                </H3>
                <P>Early bird tickes available until 20th July 2018.</P>
                <BuyQuantityButton
                  course={{
                    price: 1590,
                    trainingInstanceId: '5b3605d7b8340f47a4b8e420',
                    title: 'Bootcamp London',
                  }}
                />
                <P sm>
                  By purchasing a training, you agree to our{' '}
                  <Link target="_blank" to="terms-of-service">
                    Terms of Service
                  </Link>{' '}
                  &{' '}
                  <Link target="_blank" to="code-of-conduct">
                    Code of conduct
                  </Link>
                </P>
              </Card>
              <Card small border="white" style={{ marginTop: '20px' }}>
                <H3>
                  <strong>Pay by Installments</strong>
                </H3>
                <P>
                  Pay in 3 installments - the first one being 50% of the total
                  cost and the others to follow over 6 months. Contact us and we
                  can talk things through with you.
                </P>
                <InstallmentsContainer>
                  <Price>&pound;2160</Price>
                  <LinkButton
                    secondary
                    to="mailto:hello@reactjs.academy"
                    style={{ float: 'right' }}
                  >
                    Contact us
                  </LinkButton>
                </InstallmentsContainer>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card white border="shadow">
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={6} lg={5}>
              <Image src={BOOTCAMP_COLLAB} width="100%" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={6} lg={5} lgOffset={1}>
            <H2Ref>
              Is this bootcamp right for me? Are you...{' '}
              <a href="#target-audience" name="target-audience">
                #
              </a>
            </H2Ref>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginerIcon} />A developer with 1+ year of
                development under your belt?
              </Li>
              <Li>
                <BulletIcon icon={CodeIcon} />
                Familiar with front-end technologies like JavaScript, CSS, and
                HTML?
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                Taking a step forward to become a React JS Specialist able to
                make critical decisions about the architecture of a React
                application.
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Not satisfied with the pace of online learning and it's lack of
                1-on-1 mentoring?
              </Li>
            </Ul>
            <P>If you've said 'yes' to these, our bootcamp could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a learn-to-code bootcamp. If you want to learn to
              code, we recommend you to contact our London-based partner{' '}
              <a href="https://makers.tech/" target="_blanck">
                Makers
              </a>
              . PLUS you'll get a &pound;250 discount using our reference
              "ReactJS Academy".
            </P>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <AttendeeQuote
              quote="Technology nowadays changes very often and in future you may not be able to find a job with the things you know - you have to keep up. I like the fact that we got to write code rather than focus on theory - it’s very balanced."
              fullname="Catalin Cislariu"
              job="Senior Developer"
              company="KLEIDO LTD"
              profilePicUrl={CATALIN}
            />
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col lg={10} lgOffset={1}>
              <H2>Trusted by industry leaders</H2>
              <TrustedByLogoList />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <UpcomingBootcampsSection />
  </React.Fragment>
)

export default BootcampLondon
