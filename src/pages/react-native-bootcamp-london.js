import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumReactNative } from '../components/curriculum'
import { Ribbon, Card, Video } from '../components/elements'
import Link from '../components/navigation/Link'
import { HideSingleComponentUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection, AttendeeQuote } from '../components/training'
import {
  BulletIcon,
  NotBegginersIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import BuyQuantityButton from '../components/old_checkout/containers/PurchaseQuantityContainer'
import header from '../components/layout/Header.json'

const ReactNativeBoocampLondon = () => (
  <React.Fragment>
    <Header
      titleLines={['React Native Training', '17 September, 2018 - London']}
      subtitle="Take your React developer career to the next level by<br />learning React Native, in only one day. "
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
                <Ribbon>Save 21%</Ribbon>
                <H3>
                  <strong>Early bird ticket</strong>
                </H3>
                <P>Price goes up to &pound;450 on August 31st, 2018.</P>
                <BuyQuantityButton
                  course={{
                    price: 332.5,
                    trainingInstanceId: '5b68c95eaff9b939d15e509c',
                    title: 'React Native London',
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
            </Col>
          </Row>
        </Card>
        <Card white border="shadow">
          <CurriculumReactNative />
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
              Is this training right for me? Are you...{' '}
              <a href="#target-audience" name="target-audience">
                #
              </a>
            </H2Ref>
            <Ul unstyled>
              <Li>
                <BulletIcon icon={NotBegginersIcon} />
                You have at least a few months of experience using React on the
                web. If you don't know React, we recommend you first to attend
                our{' '}
                <Link to="/react-redux-graphql-bootcamp">React Bootcamp</Link>
              </Li>
              <Li>
                <BulletIcon icon={ReactIcon} />
                Taking a step forward to become a React Native Specialist able
                to make critical decisions about the architecture of a React
                Native application.
              </Li>
              <Li>
                <BulletIcon icon={CollabsIcon} />
                Not satisfied with the pace of online learning and it's lack of
                1-on-1 mentoring?
              </Li>
            </Ul>
            <P>If you've said 'yes' to these, our training could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a training for React beginners. If you don't know
              React, we recommend you first to attend our{' '}
              <Link to="/react-redux-graphql-bootcamp">React Bootcamp</Link>.
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
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default ReactNativeBoocampLondon
