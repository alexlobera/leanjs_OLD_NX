import React from 'react'
import styled from 'styled-components'
import Section, { TopSection } from '../components/layout/Section'
import { Button, LinkButton } from '../components/buttons'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { CurriculumBootcamp } from '../components/curriculum'
import { Ribbon, Card, Video } from '../components/elements'
import Link from '../components/navigation/Link'
import { HideSingleComponentUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { GREY2, FONT_FAMILY } from '../config/styles'
import { LONDON, BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import CallToActionRow from '../components/layout/CallToActionRow'
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
      titleLines={['React Redux GraphQL Bootcamp', 'Training in Austin']}
      subtitle="Take your dev career to the next level in Austin by mastering<br />React, Redux, and GraphQL - in just 7 days!"
      bgImg="training-event"
    />
    <TopSection>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col xs={12} lg={10} lgOffset={1}>
              <H2>We've trained developers from a range of companies</H2>
              <TrustedByLogoList />
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section xsBgDark>
      <Grid>
        <Card bg="dark">
          <Row>
            <Col xs={12} md={6} lg={4} lgOffset={1}>
              <Video src="https://www.youtube.com/embed/yvROXLQ1jHg" />
            </Col>
            <Col xs={12} md={6} lg={5} lgOffset={1}>
              <P>
                ADD SOME COOL TEXT with: - city, state or country - react,
                redux, graphql
              </P>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    {/*

            SHOULD WE ADD A QUOTE? WE DON'T WANT TO DUPLICATE CONTENT FOR SEO

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
        </Section> */}
    <Section>
      <Grid>
        <Card white border="shadow">
          <CurriculumBootcamp />
        </Card>
      </Grid>
    </Section>

    <UpcomingBootcampsSection />
  </React.Fragment>
)

export default BootcampLondon
