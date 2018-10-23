import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { H2, H3, P } from '../components/text'
import { Link } from '../components/navigation'
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
  h3 {
    paddingTop: 0;
  }
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

const MeetupLink = styled(Link)`
  font-size: 16px;
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
                    <EventList>
                      <Li>
                        <H3>
                          Events
                        </H3>
                      </Li>
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
                  <Col xs={6}>
                    <MeetupLink to="http://meetup.com/JavaScript-London">JavaScript London</MeetupLink>
                  </Col>
                  <Col xs={6}>
                    <MeetupLink to="http://meetup.com/JavaScript-Lisbon">JavaScript Lisbon</MeetupLink>
                  </Col>
                  <Col xs={6}>
                    <MeetupLink to="http://meetup.com/JavaScript-Barcelona">JavaScript Barcelona</MeetupLink>
                  </Col>
                  <Col xs={6}>
                    <MeetupLink to="http://meetup.com/JavaScript-Amsterdam">JavaScript Amsterdam</MeetupLink>
                  </Col>
                  <Col xs={6}>
                    <MeetupLink to="http://meetup.com/JavaScript-Paris">JavaScript Paris</MeetupLink>
                  </Col>
                  <Col xs={6}>
                    <MeetupLink to="http://meetup.com/JavaScript-Berlin">JavaScript Berlin</MeetupLink>
                  </Col>
                </Row>
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
            <P>ReactJS Academy is devoted to help developers grow in their professional career. Our dedication stands beyond making them awesome React developers. We want them to make an impact in the organizations and people they choose to work with.</P>
            <P>Our experience tells us that the best way to master a skill is by teaching it. We believe sharing knowleadge also contributes to create collaborative workplaces and communities.</P>
            <P>The ReactJS Academy mentorship program enables those experienced developers in our commuity to take a step farther and become a mentor in our community events and workshops. This way they can build the experience required to become not only a great developer but also a great coach and team player.</P>
            <P><Link name="#contact-us">Contact us</Link></P>
          </Col>
        </Row>
      </Grid>
    </Section>

    <UpcomingTrainingSection />
  </React.Fragment >
)

export default Community
