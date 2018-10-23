import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { H2, H3, P } from '../components/text'
import { Card, Image } from '../components/elements'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'

import { LinkButton } from '../components/buttons'
import {
  selectFirstTraining,
  REACT_BOOTCAMP,
} from '../config/data'
import { selectTrainings, LONDON } from '../config/data'

const nextBootcamp = selectFirstTraining(REACT_BOOTCAMP)
const nextBootcampStartDate = nextBootcamp && moment(nextBootcamp.dateStartsOn).format('D MMM')

const events = selectTrainings()

const CallToAction = styled(LinkButton)`
  position: absolute;
  top: -25px;
`
const SecondaryCard = styled(Card)`
  margin-top: 36px;
`

const EventList = styled.ul`
  list-style: none;
  margin-left: 0;
  li {
    margin-top: 18px;
    display:flex;
  }
  > li:first-child {
    margin-top: 0;
  }
  img {
    width: 117px;
    margin-right: 9px;
  }
`

const Community = () => (
  <React.Fragment>
    <Header
      titleLines={['The ReactJS', 'Academy community']}
      subtitle="We are not a group of people - but a movement!"
      links={[
        { text: 'Twitter ', to: '#twitter' },
        { text: 'Meetups', to: '#meetups' },
        { text: 'Instagram', to: '#instagram' },
        { text: 'Mentor community', to: '#mentor-community' },
      ]}
      bgImg="training-event"
    />
    <TopSection>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Card border="shadow">
              <Col md={8} mdOffset={2}>
                <H2>Twitter? Sure.<a name="twitter" /></H2>
                <CallToAction
                  cta
                  to={nextBootcamp && nextBootcamp.pathUrl}
                  children={`Next Bootcamp: ${nextBootcampStartDate}, ${nextBootcamp.cityShortName} >>`}
                />
              </Col>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card border="shadow">
              <Col md={8} mdOffset={2}>
                <H2>Meetups? Absolutely! <a name="meetups" /></H2>
                {events ? (
                  <React.Fragment>
                    <H3>
                      Events
                    </H3>
                    <EventList>
                      {events.map(({ cityShortName, country, startDate }) => (
                        <Li>
                          <Image />
                          <P>
                            <strong>Event name</strong>
                            <br />
                            Location: {cityShortName}, {country}
                            <br />
                            Starts: {startDate}
                            <br />
                            <LinkButton to={"http://google.com"} children={"RSVP"} />
                          </P>
                        </Li>
                      ))}
                    </EventList>
                  </React.Fragment>
                ) : null}
                <H3>
                  Groups
                </H3>
                <Row>
                  <Col>
                    JavaScript London
                  </Col>
                  <Col>
                    JavaScript Lisbon
                  </Col>
                </Row>
                <Ul unstyled>
                  <Li>
                    JavaScript London
                  </Li>
                  <Li>
                    JavaScript Barcelona
                  </Li>
                  <Li>
                    JavaScript Lisbon
                  </Li>

                  <Li>
                    See more
                  </Li>
                </Ul>
              </Col>
            </Card>
            <SecondaryCard border="shadow">
              <Col md={8} mdOffset={2}>
                <H2>Instagram - boom! <a name="instagram" /></H2>
              </Col>
            </SecondaryCard>
          </Col>
        </Row>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Image />
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <H2>Our mentor community <a name="mentor-community" /></H2>
            asdfasdaasdf aasdf aasdf aasdf aasdf aasdf aasdf aasdf aasdf aasdf aasdf aasdf
          </Col>
        </Row>
      </Grid>
    </Section>

    <UpcomingTrainingSection />
  </React.Fragment >
)

export default Community
