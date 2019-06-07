import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { HOME_PAGE } from '../../images/imageNames'
import Layout from '../components/layout'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import { HideComponentsUsingCss } from '../components/utils'
import { FullCurriculum } from '../components/curriculum'
import { SCREEN_XS_MAX } from '../components/utils'
import Header from '../components/layout/Header'
import { Card, Image, Video } from '../components/elements'
import TrustedBySection from '../components/training/TrustedBySection'
import { CallToActionRow } from '../components/layout/CallToActionNextTrainings'
import { UpcomingTrainingSection } from '../components/training'
import { WHY_REACTJS_ACADEMY, NASSAR } from '../config/images.js'
import { CONVINCE_THE_BOSS_PDF } from '../config/data'

const SectionButtonRow = styled(Row)`
  margin-top: 30px;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      margin-top: 5px;
      display: block;
    }
  }
`

const IndexPage = () => (
  <Layout loadAutopilot={false} loadGoogleTagManager={true}>
    {({ trainings }) => (
      <React.Fragment>
        <Helmet
          title="React GraphQL Academy (formerly React Academy) - expert training for professional developers"
          meta={[
            {
              name: 'description',
              content:
                'React GraphQL Academy (formerly React Academy) is the leading React training organization in EU',
            },
          ]}
        />
        <Header
          titleLines={[
            'Take your dev career further',
            'with React GraphQL Academy',
          ]}
          subtitle="In-person training from experts who were the first in
        Europe to teach React. React GraphQL Academy formerly React Academy."
          bgColor="blue"
          bgImageName={HOME_PAGE}
        />
        <TopSection>
          <Grid>
            <CallToActionRow>
              <Col sm={4}>
                <LinkButton
                  variant="primary"
                  to="/react/training"
                  children="React Courses >>"
                />
              </Col>
              <Col sm={3}>
                <LinkButton
                  to="/graphql/training"
                  children="GraphQL Courses >>"
                  variant="primary"
                />
              </Col>
            </CallToActionRow>
            <Card border="shadow">
              <FullCurriculum trainings={trainings} />
            </Card>
          </Grid>
        </TopSection>
        <Section>
          <Grid>
            <Row>
              <Col md={5} mdOffset={1}>
                <H2>Is React GraphQL Academy right for me?</H2>
                <Ul>
                  <Li>
                    For working developers - <strong>not for beginners!</strong>
                  </Li>
                  <Li>
                    <strong>Hands-on project-based</strong> training.
                  </Li>
                  <Li>
                    <strong>collaborative</strong> learning environment.
                  </Li>
                  <Li>
                    <Link to="/react/training/bootcamp">Bootcamps</Link> for
                    accelerated learning.
                  </Li>
                  <Li>
                    <Link to="/react/training/part-time-course/">
                      Part-time courses
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                </Ul>
                <P />
                <LinkButton to="/blog/are-you-the-perfect-react-graphql-student/">
                  Blog: Are YOU the Perfect Bootcamp Student?
                </LinkButton>
              </Col>
              <HideComponentsUsingCss xs sm>
                <Col md={5} mdOffset={1}>
                  <Image
                    src={WHY_REACTJS_ACADEMY}
                    width="100%"
                    alt="Female React GraphQL Academy student wearing glasses concentrating whilst looking into the distance, surrounded by other students with a laptop in the near distance."
                  />
                </Col>
              </HideComponentsUsingCss>
            </Row>
          </Grid>
        </Section>
        <TrustedBySection />
        <Section>
          <Grid>
            <Row>
              <Col md={5}>
                <Video
                  youtubeId="o6YwbHGfPOo"
                  description={
                    <P>
                      <em>
                        Andru Dunn, Senior Developer at{' '}
                        <strong>John Lewis</strong> speaks how React GraphQL
                        Academy training has improved his team.
                      </em>
                    </P>
                  }
                />
              </Col>
              <Col md={5} mdOffset={1}>
                <H2>React GraphQL Academy - great for your whole team</H2>
                <Ul>
                  <Li>Avoid delays and business losses</Li>
                  <Li>Minimize risk of onboarding React & GraphQL</Li>
                  <Li>Safe environment for developers to learn</Li>
                  <Li>Increase employee retention and productivity</Li>
                  <Li>Offer more services to internal and external clients</Li>
                </Ul>
                <SectionButtonRow>
                  <Col sm={7}>
                    <LinkButton
                      variant="default"
                      pdf
                      to={CONVINCE_THE_BOSS_PDF}
                    >
                      Why devs should learn with us
                    </LinkButton>
                  </Col>
                  <Col sm={5}>
                    <LinkButton
                      variant="secondary"
                      to="/react/training/corporate/"
                    >
                      Corporate team training
                    </LinkButton>
                  </Col>
                </SectionButtonRow>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Row>
              <Col md={10} mdOffset={1}>
                <AttendeeQuote
                  quote="You get the real in-person learning experience - you actually see what’s happening. It’s better than just watching a video where you can’t ask questions."
                  fullname="Nassar Kasirye"
                  job="Web Developer"
                  company=""
                  profilePicUrl={NASSAR}
                />
              </Col>
            </Row>
          </Grid>
        </Section>
        <UpcomingTrainingSection trainings={trainings} />
      </React.Fragment>
    )}
  </Layout>
)

export default IndexPage
