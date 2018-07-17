import React from 'react'
import withWidth, { SMALL } from 'react-width'
import styled from 'styled-components'
import Link from '../../components/navigation/Link'
import Section from '../../components/layout/Section'
import Button from '../../components/buttons/Button'
import Grid, { Col, Row } from '../../components/layout/Grid'
import Card from '../../components/layout/Card'
import P from '../../components/layout/P'
import ImagePlaceholder from '../../components/wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3, Badge } from '../../components/text'
import Input from '../../components/form/Input'
import Ul, { Li } from '../../components/Layout/Ul'
import AttendedBy from '../../components/training/AttendedBy'
import { CurriculumBootcamp } from '../../components/curriculum'
import AttendeeQuoteSection from './AttendeeQuoteSection'
import ContactForm from '../../components/form/Contact'
import Ribbon from '../../components/elements/Ribbon'
import AttendeeQuote from '../../components/training/AttendeeQuote'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../../components/utils'

const BootcampLondon = ({ width }) => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={3} md={6}>
            <H1>Master React, Redux, GraphQL in London in a week</H1>
            <H2>20-25 August, 2018</H2>
            <Ul inline>
              <Li>
                <Link>Pricing</Link>
              </Li>
              <Li>
                <Link>Curriculum</Link>
              </Li>
              <Li>
                <Link>Target audience</Link>
              </Li>
            </Ul>
            <H3>
              Take your dev career to the next level by mastering the React
              ecosystem - in only 7 days!
            </H3>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <AttendedBy />
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            {/* <iframe style={{ marginTop: '30px', marginBottom: '30px', border: 0 }} width="100%" height="315" src="https://www.youtube.com/embed/yGwmF4AT1Fg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
            <iframe
              style={{ border: 0 }}
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/yGwmF4AT1Fg"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Col>
          <Col xs={12} md={5}>
            <H2>Prices</H2>
            <P>
              Please be aware that the tickets cover the cost of the training,
              it does not include the cost of the flights and accomodation.
            </P>
            <Card>
              <H3>
                <strong>Early bird ticket</strong>
                <Ribbon>Save 24%</Ribbon>
              </H3>
              <P>Early bird tickes available until 20th July 2018.</P>
              <H3>
                &pound;1740
                <Button fontSize={3} style={{ float: 'right' }}>
                  Buy now
                </Button>
              </H3>
            </Card>
            <Card style={{ marginTop: '20px' }}>
              <H3>
                <strong>Pay by Installments</strong>
              </H3>
              <P>
                Pay in 3 installments - the first one being 50% of the total
                cost and the others to follow over 6 months. Contact us and we
                can talk things through with you.
              </P>
              <H3>
                &pound;2160
                <Button fontSize={3} style={{ float: 'right' }}>
                  Contact us
                </Button>
              </H3>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Section>
    {/* <Section color="lightGrey">
            <Grid>
                <H2>Prices</H2>
                <P>
                    Please be aware that the tickets cover the cost of the training, it does not include the cost of the flights and accomodation.
                </P>
                <Card>
                    <P>
                        <strong>Early bird ticket</strong>
                        <Badge style={{ float: 'right' }}>Save 20%</Badge>
                    </P>
                    <P>
                        Early bird tickes available until 20th July 2018.
                    </P>
                    <H3>
                        &pound;1740
                        <Button style={{ float: 'right' }}>Buy now</Button>
                    </H3>
                </Card>
                <Card style={{ marginTop: '20px' }}>
                    <P>
                        <strong>Pay by Installments</strong>
                    </P>
                    <P>
                        Pay in 3 installments - the first one being 50% of the total cost and the others to follow over 6 months. Contact us and we can talk things through with you.
                    </P>
                    <H3>
                        &pound;2160
                        <Button style={{ float: 'right' }}>Contact us</Button>
                    </H3>
                </Card>
            </Grid>
        </Section> */}
    <Section color="lightGrey">
      <Grid>
        <Row>
          {/* {width > SMALL ? (
                        <Col md={5}>
                            <ImagePlaceholder width="100%" height="500px" />
                        </Col>
                    ) : ''} */}
          <HideSingleComponentUsingCss xs sm>
            <Col md={5}>
              <ImagePlaceholder width="100%" height="500px" />
            </Col>
          </HideSingleComponentUsingCss>
          <Col md={7}>
            <Row>
              <Col>
                <H2>Is this bootcamp right for me? Are you...</H2>
              </Col>
            </Row>
            <Row>
              {/* {width <= SMALL ? (
                                <Col xs={5}>
                                    <ImagePlaceholder width="100%" height="500px" />
                                </Col>
                            ) : ''} */}
              <DisplaySingleComponentUsingCss xs sm>
                <Col xs={5}>
                  <ImagePlaceholder width="100%" height="500px" />
                </Col>
              </DisplaySingleComponentUsingCss>
              <Col xs={7} md={12}>
                <Ul>
                  <Li>
                    A developer with 1+ year of development under your belt?
                  </Li>
                  <Li>
                    Familiar with front-end technologies like JavaScript, CSS,
                    and HTML?
                  </Li>
                  <Li>
                    Taking a step forward to become a React JS Specialist able
                    to make critical decisions in the architecture of a React
                    application.
                  </Li>
                  <Li>
                    Unhappy with online learning and it's lack of 1-on-1
                    mentoring?
                  </Li>
                </Ul>
              </Col>
            </Row>
            <P>If you've said 'yes' to these, our bootcamp could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <P>
              This is not a lear-to-code bootcamp. If you want to learn to code,
              we recommend you to contact our London-based partner{' '}
              <a href="https://makers.tech/" target="_blanck">
                Makers
              </a>. PLUS you'll get a &pound;250 discount using our reference
              "ReactJS Academy".
            </P>
            <AttendeeQuote
              quote="Best training ever! lorem "
              fullname="Joe Foo s sss sss 2"
              job="CTO2"
              company="ASOS.com"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <CurriculumBootcamp />
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <ContactForm />
      </Grid>
    </Section>
  </div>
)

export default BootcampLondon
