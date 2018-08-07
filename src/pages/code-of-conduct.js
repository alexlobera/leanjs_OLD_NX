import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, P } from '../components/text'
import { UpcomingTrainingSection, AttendeeQuote } from '../components/training'
import Ul, { Li } from '../components/layout/Ul'
import Header from '../components/layout/Header'
import { Card } from '../components/elements'
import { Image } from '../components/elements'
import {
  CODE_OF_CONDUCT_KEYPOINTS,
  CODE_OF_CONDUCT_MORE_DETAIL,
} from '../config/images'

const CodeOfConduct = () => (
  <React.Fragment>
    <Header
      titleLines={['Our code of conduct']}
      subtitle="All students, coaches, sponsors and volunteers at our trainings are<br /> required to agree with the following code of conduct.            "
      links={[
        { text: 'Key takeaways ', to: 'key-takeaways' },
        { text: 'More detail', to: 'more-detail' },
      ]}
      bgImg="about-us"
    />
    <TopSection>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col lg={10} lgOffset={1}>
              <Row>
                <Col md={5}>
                  <H2Ref>
                    Key takeways
                    <a href="#key-takeaways" name="key-takeaways">
                      #
                    </a>
                  </H2Ref>
                  <Ul>
                    <Li>
                      Everyone is required to adhere to the code of conduct -{' '}
                      <strong>everyone</strong>.
                    </Li>
                    <Li>
                      ReactJS Academy is a harassment-free zone - offline AND
                      online.
                    </Li>
                    <Li>
                      If you don’t adhere, you’ll get thrown out without a
                      refund.
                    </Li>
                    <Li>Basically, don’t be a dick.</Li>
                  </Ul>
                  <Image src={CODE_OF_CONDUCT_KEYPOINTS} />
                </Col>
                <Col md={6} mdOffset={1}>
                  <H2>Summary</H2>
                  <P>
                    Every person at our trainings will be required to agree with
                    this code of conduct and organisers will enforce this code
                    throughout any event run by ReactJS Academy.
                  </P>
                  <P>
                    All participants are expected to cooperate with us to help
                    guarentee a safe environment for everybody.
                  </P>
                  <P>
                    Our trainings are dedicated to providing a harassment-free
                    training experience for all who attend, regardless of:
                  </P>
                  <Ul>
                    <Li>gender</Li>
                    <Li>gender identity and expression</Li>
                    <Li>age</Li>
                    <Li>sexual orientation</Li>
                    <Li>disability</Li>
                    <Li>physical appearance</Li>
                    <Li>body size</Li>
                    <Li>race</Li>
                    <Li>ethnicity</Li>
                    <Li>religion (or lack thereof)</Li>
                    <Li>technology choices</Li>
                  </Ul>
                  <P>
                    We will not accept any form of harassment of our
                    participants. Sexual imagery and language is not appropriate
                    at any of our events, including formal trainings,
                    talks/meetups, workshops, or parties. This is also
                    applicable through social media such as Twitter and other
                    online outlouts.
                  </P>
                  <P>
                    Participants to any ReactJS Acadmey event that violate these
                    rules may be sanctioned or expelled from the event without a
                    refund at the discretion of the conference organisers.
                  </P>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <H2Ref>
              More detail
              <a href="#more-detail" name="more-detail">
                #
              </a>
            </H2Ref>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5} mdOffset={1}>
            <P>
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention.
            </P>
            <P>
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </P>
            <P>
              Sponsors and coaches are also subject to the anti-harassment
              policy. In particular, sponsors and coaches should not use
              sexualised images, activities, or other material. Additionally,
              sponsors and coaches should not use sexualised
              clothing/uniforms/costumes, or otherwise create a sexualised
              environment.
            </P>
            <P>
              If a participant engages in harassing behavior, the event
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the event with no refund.
            </P>
            <P>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              ReactJS Academy staff immediately. Our coaches and representatives
              will identify themselves to you at the start of any event and may
              also be identified via branded clothing.
            </P>
            <P>
              ReactJS Academy staff will be happy to help participants contact
              local law enforcement, source escorts, or otherwise assist those
              experiencing harassment to feel safe for the duration of the
              training event. We value your attendance immensly and want you to
              have the best experience possible.
            </P>
            <P>
              We expect participants to follow these rules at our trainings and
              training-related social events.
            </P>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image src={CODE_OF_CONDUCT_MORE_DETAIL} />
          </Col>
        </Row>
      </Grid>
    </Section>
    <UpcomingTrainingSection />
  </React.Fragment>
)

export default CodeOfConduct
