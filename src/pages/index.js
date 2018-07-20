import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Card from '../components/layout/Card'
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
import Video from '../components/elements/Video'
import { Trainline, ASOS, ABInBev, Blockchain } from '../components/logos'
import { CurriculumBootcamp } from '../components/curriculum'
import { reactBlue, blue1, BLUE_3 } from '../styles'

const HeaderButton = styled(LinkButton)`
  margin-top: 15px;
`

const H1 = styled(BaseH1)`
  font-size: 64px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ffffff;
  text-shadow: 1px -1px 17px ${BLUE_3};
`
const H1Background = styled.span`
  background-color: ${blue1()};
`

const H2 = styled(BaseH2)`
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ffffff;
  text-shadow: 1px -1px 17px rgba(34, 85, 106, 0.58);
`

const IndexPage = () => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={3} md={6}>
            <H1>Take your career further by mastering React</H1>
            <H2>
              In-person training from experts who were the first in Europe to
              teach React
            </H2>
            <Row>
              <Col xs={12} sm={4} smOffset={2}>
                <HeaderButton
                  secondary
                  to="/react-redux-graphql-part-time-course"
                  children="6-week part-time course"
                />
              </Col>
              <Col xs={12} sm={4}>
                <HeaderButton
                  secondary
                  to="/about-us#private-on-site-corporate-training"
                  children="Corporate team training"
                />
              </Col>
            </Row>
            <p>
              <HeaderButton
                extraLarge
                to="/react-redux-graphql-bootcamp"
                children="1-week bootcamp"
              />
            </p>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <CurriculumBootcamp />
      </Grid>
    </Section>

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
              <Col>
                <H2>What will I get from a ReactJS Academy training?</H2>
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
              </Col>
            </Row>
            <P align="right">
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
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
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col>
                <H2>Is this training right for me? Why ReactJS Academy</H2>
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
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col md={5}>
            <H2>Developers from all these companies have trusted us</H2>
            <Row>
              <Col xs={12} md={6}>
                <Trainline />
              </Col>
              <Col xs={12} md={6}>
                <Blockchain />
              </Col>
              <Col xs={12} md={6} style={{ paddingTop: '55px' }}>
                <ASOS />
              </Col>
              <Col
                xs={12}
                md={6}
                style={{ paddingTop: '35px', paddingBottom: '15px' }}
              >
                <ABInBev />
              </Col>
            </Row>
          </Col>
          <Col md={7}>
            <Video src="https://www.youtube.com/embed/yvROXLQ1jHg" />
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
            <P align="right">
              <Link to="/react-redux-graphql-bootcamp#curriculum">
                Checkout the curriculum
              </Link>
            </P>
            <AttendeeQuote
              quote="My devs were on training for a week, but when they came back they were React Masters. We adpoted the ecosystem much quicker than we thought possible and now we work faster and more efficiently."
              fullname="Richard Moss"
              job="CTO"
              company="Financial Times"
            />
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
        <ContactForm />
      </Grid>
    </Section>
  </div>
)

export default IndexPage
