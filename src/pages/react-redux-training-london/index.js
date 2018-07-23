import React from 'react'
import Section from '../../components/layout/Section'
import Button from '../../components/buttons/Button'
import LinkButton from '../../components/buttons/LinkButton'
import Grid, { Col, Row } from '../../components/layout/Grid'
import P from '../../components/text/P'
import ImagePlaceholder from '../../components/wireframes/ImagePlaceholder'
import { H1, H2, H2Ref, H3 } from '../../components/text'
import Ul, { Li } from '../../components/Layout/Ul'
import { CurriculumPartTime } from '../../components/curriculum'
import Ribbon from '../../components/elements/Ribbon'
import AttendeeQuote from '../../components/training/AttendeeQuote'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../../components/utils'
import { Card, Video } from '../../components/elements'

const PartTimeLondon = ({ width }) => (
  <div>
    <Section>
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={3} md={6}>
            <H1>React, Redux, GraphQL part-time course in London</H1>
            <H2>October 2nd to November 8th, 2018</H2>
            <Ul inline>
              <Li>
                <a href="#pricing">Pricing</a>
              </Li>
              <Li>|</Li>
              <Li>
                <a href="#curriculum">Curriculum</a>
              </Li>
              <Li>|</Li>
              <Li>
                <a href="#target-audience">Is it right for me</a>
              </Li>
            </Ul>
            <H3>
              Take your dev career to the next level by mastering the React
              ecosystem - in only 7 days!
            </H3>
            <p>Training for professional developers</p>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <Video
              height="415"
              src="https://www.youtube.com/embed/yvROXLQ1jHg"
            />
          </Col>
          <Col xs={12} md={5}>
            <H2Ref>
              Prices{' '}
              <a href="#pricing" name="pricing">
                #
              </a>
            </H2Ref>
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
                <Button extraLarge style={{ float: 'right' }}>
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
                <LinkButton
                  secondary
                  to="mailto:hello@reactjs.academy"
                  style={{ float: 'right' }}
                >
                  Contact us
                </LinkButton>
              </H3>
            </Card>
          </Col>
        </Row>
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
                <H2Ref>
                  Is this bootcamp right for me? Are you...{' '}
                  <a href="#target-audience" name="target-audience">
                    #
                  </a>
                </H2Ref>
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
              quote="I enjoyed the bootcamp so much. It was challenging and so rewarding - the mentors were so helpful, making sense of really complex concepts.... Recommended."
              fullname="Senior Developer"
              job="Cameron Diaz"
              company="Spotify"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <CurriculumPartTime />
      </Grid>
    </Section>
  </div>
)

export default PartTimeLondon
