import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H1 as BaseH1, H2 as BaseH2, H3 } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import ContactForm from '../components/form/Contact'
import { Video } from '../components/elements'
import {
  Trainline,
  ASOS,
  ABInBev,
  Blockchain,
  JohnLewis,
  Capgemini,
  FinancialTimes,
  SainBurys,
  Tesco,
  Telegraph,
} from '../components/logos'
import { CurriculumBootcamp } from '../components/curriculum'
import {
  blue1,
  BLUE2,
  BLUE3,
  blue4,
  blue5,
  BOX_SHADOW,
  WHITE,
  BROWN,
  GREY,
} from '../styles'

const H1 = styled(BaseH1)`
  font-size: 64px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${BLUE3};
`

const TitleBackground = styled.span`
  background-color: ${blue1(0.75)};
  padding-left: 15px;
  padding-right: 15px;
  display: inline-block;
  &:first-child  {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 15px;
  }
`

const H2Header = styled(BaseH2)`
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${blue5(0.58)};
`

const H2 = styled(BaseH2)`
  font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  margin-bottom: 55px;
`

const HeaderSection = styled(Section)`
  background-color: ${blue4(0.84)};
  padding: 175px 0;
  height: 100vh;
  min-height: 700px;
`

const CurriculumBox = styled.div`
  ${BOX_SHADOW};
  padding: 80px 0 50px;
  background-color: ${WHITE};
`
const CallToActionRow = styled(Row)`
  margin-bottom: -15px;
  text-align: center;
`

const CurriculumSection = styled(Section)`
  margin-top: -125px;
`

const DarkBox = styled.div`
  background-color: ${BLUE2};
  border: solid 1px ${BROWN};
  padding: 55px;
`

const IndexPage = () => (
  <div>
    <HeaderSection top>
      <Grid>
        <Row>
          <Col>
            <H1>
              <TitleBackground>Take your dev career further</TitleBackground>
              <TitleBackground>by mastering React</TitleBackground>
            </H1>
            <H2Header>
              <TitleBackground>
                In-person training from experts who were <br /> the first in
                Europe to teach React
              </TitleBackground>
            </H2Header>
          </Col>
        </Row>
      </Grid>
    </HeaderSection>
    <CurriculumSection>
      <Grid>
        <CallToActionRow>
          <Col xs={12} sm={4}>
            <LinkButton
              cta
              large
              to="/react-redux-graphql-bootcamp"
              children="1-week bootcamp >>"
            />
          </Col>
          <Col xs={12} sm={4}>
            <LinkButton
              large
              to="/react-redux-graphql-part-time-course"
              children="6-week part-time course >>"
            />
          </Col>
          <Col xs={12} sm={4}>
            <LinkButton
              large
              to="/about-us#private-on-site-corporate-training >>"
              children="Corporate team training >>"
            />
          </Col>
        </CallToActionRow>
        <CurriculumBox>
          <CurriculumBootcamp />
          <LinkButton large to="/curriculum">
            Full curriculum>>
          </LinkButton>
        </CurriculumBox>
      </Grid>
    </CurriculumSection>
    <Section>
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col lg={11} lgOffset={1}>
                <H2>What will I get from a ReactJS Academy training?</H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12} lg={11} lgOffset={1}>
                <Ul>
                  <Li>
                    <strong>Build production ready</strong> React apps.
                  </Li>
                  <Li>
                    Discuss <strong>real-world projects</strong>.
                  </Li>
                  <Li>
                    Learn <strong>best practices</strong>.
                  </Li>
                  <Li>
                    <strong>Mentoring</strong> by our expert coaches.
                  </Li>
                  <Li>
                    Alumni <strong>community</strong>.
                  </Li>
                  <Li>
                    <strong>Stay ahead</strong> in modern development.
                  </Li>
                </Ul>
                <P>
                  <Link to="/react-redux-graphql-bootcamp#curriculum">
                    Checkout the curriculum
                  </Link>
                </P>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={1} lg={10}>
            <AttendeeQuote
              quote="After being a developer for 10 years and with the increasing amount of people coming into tech, I wanted to ensure I stayed ahead of the curve in my skills to make my career further. Simply put, ReactJS Academy gave me that!"
              fullname="Joe Woodley"
              job="Senior Front-end developer"
              company="ASOS.com"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col md={7} lg={6} lgOffset={1}>
            <Row>
              <Col>
                <H2>
                  Is this training right for me?<br />Why ReactJS Academy
                </H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>
                    For working developers - <strong>not for beginners!</strong>
                  </Li>
                  <Li>
                    <strong>Hands-on project-based</strong> training.
                  </Li>
                  <Li>
                    A <strong>collaborative</strong> learning environment.
                  </Li>
                  <Li>
                    <Link to="/react-redux-graphql-bootcamp">Bootcamps</Link>{' '}
                    for accelerated learning.
                  </Li>
                  <Li>
                    <Link to="/react-redux-graphql-part-time-course">
                      Part-time courses
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                </Ul>
              </Col>
            </Row>
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <Row>
              <Col xs={6} md={5}>
                <LinkButton
                  cta
                  extraLarge
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamps"
                />
              </Col>
              <Col xs={6} md={5}>
                <LinkButton
                  extraLarge
                  to="/react-redux-graphql-part-time-course"
                  children="Part-time courses"
                />
              </Col>
            </Row>
          </Col>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12}>
            <DarkBox>
              <Row>
                <Col xs={12}>
                  <H2>Developers from all these companies have trusted us</H2>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col xs={12} md={5}>
                      <ASOS colour={GREY} height={35} />
                    </Col>
                    <Col xs={12} md={7}>
                      <Blockchain colour={GREY} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Capgemini colour={GREY} secColour={GREY} height={47} />
                    </Col>
                    <Col xs={12} md={6}>
                      <JohnLewis colour={GREY} height={47} />
                    </Col>
                    <Col xs={12}>
                      <FinancialTimes colour={GREY} height={30} />
                    </Col>
                    <Col xs={12} md={6}>
                      <SainBurys colour={GREY} height={35} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Tesco
                        colour={GREY}
                        secColour={GREY}
                        stroke={GREY}
                        height={40}
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <Telegraph colour={GREY} height={40} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Trainline colour={GREY} height={55} />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Video src="https://www.youtube.com/embed/yvROXLQ1jHg" />
                </Col>
              </Row>
            </DarkBox>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col>
                <H2>
                  What's in it for your company - Why is ReactJS Academy great
                  for your team
                </H2>
              </Col>
            </Row>
            <Row>
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>Avoid delays and business losses</Li>
                  <Li>Minimize risk of on boarding React</Li>
                  <Li>Safe environment for developers to learn</Li>
                  <Li>
                    Increase employee retention, motivation and productivity
                  </Li>
                  <Li>Offer more services to internal and external clients</Li>
                </Ul>
              </Col>
            </Row>
            <P>
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <Row style={{ marginTop: '30px' }}>
              <Col xs={12} sm={4}>
                <LinkButton
                  to="/about-us#private-on-site-corporate-training"
                  children="Corporate team training"
                />
              </Col>
              <Col xs={12} sm={4}>
                <LinkButton
                  to="/react-redux-graphql-part-time-course"
                  children="6-week Part-time courses"
                />
              </Col>
              <Col xs={12} sm={4}>
                <LinkButton
                  to="/react-redux-graphql-bootcamp"
                  children="1-week bootcamp"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <AttendeeQuote
              quote="My devs were on training for a week, but when they came back they were React Masters. We adpoted the ecosystem much quicker than we thought possible and now we work faster and more efficiently."
              fullname="Richard Moss"
              job="CTO"
              company="Financial Times"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <ContactForm />
      </Grid>
    </Section>
  </div>
)

export default IndexPage
