import React, { useState } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { WHITE, DARK_GREY, DARK_BLUE } from '../config/styles'
import { HOME_PAGE } from '../../images/imageNames'
import Layout from '../components/layout'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import { defaultButtonStyle } from '../components/buttons/Button'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Box from '../components/layout/Box'
import { H2, P } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import { HideComponentsUsingCss } from '../components/utils'
import {
  FullCurriculumsReact,
  FullCurriculumsGraphQL,
} from '../components/curriculum'
import { SCREEN_XS_MAX, createSocialMetas } from '../components/utils'
import Header from '../components/layout/Header'
import { Card, Image, Video } from '../components/elements'
import TrustedBySection from '../components/training/TrustedBySection'
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
const metas = {
  title: 'React & GraphQL Expert Training | React GraphQL Academy',
  description:
    'Looking for React and GraphQL training courses? React GrpahQL Academy offers unique in-person training by our experts. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const StyledTabItem = styled(Link)`
  ${defaultButtonStyle}
  &:first-child {
    box-shadow: -5px -5px 15px -5px rgba(0, 0, 0, 0.26);
  }
  &:last-child {
    box-shadow: 5px -5px 15px -5px rgba(0, 0, 0, 0.26);
  }
  position: relative;
  z-index: 99;
  border-bottom: none;
  text-decoration: none;
`

const TabItem = ({ variant, ...rest }) => (
  <StyledTabItem {...(variant ? tabItemVariantProps[variant] : {})} {...rest} />
)

TabItem.defaultProps = {
  border: '1px solid',
  variant: 'default',
  p: 3,
  borderColor: DARK_BLUE,
}

export const tabItemVariantProps = {
  default: {
    color: WHITE,
    backgroundColor: DARK_BLUE,
  },
  active: {
    color: DARK_GREY,
    bg: WHITE,
    textShadow: 'bold',
  },
}

const TAB_REACT = 'react'
const TAB_GRAPHQL = 'graphql'

const IndexPage = () => {
  const [selectedTab, setTab] = useState(TAB_REACT)

  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Header
            titleLines={[
              'Take your dev career further',
              'with React GraphQL Academy',
            ]}
            subtitle="In-person courses, workshops and meetups from experts who were the first in
        Europe to teach React. "
            bgColor="blue"
            bgImageName={HOME_PAGE}
          />
          <TopSection>
            <Grid>
              <Row>
                <Col lgOffset={1} lg={11}>
                  <TabItem
                    onClick={() => setTab(TAB_REACT)}
                    to="#tab-curriculum"
                    variant={selectedTab === TAB_REACT ? 'active' : undefined}
                  >
                    React
                  </TabItem>
                  <TabItem
                    variant={selectedTab === TAB_GRAPHQL ? 'active' : undefined}
                    onClick={() => setTab(TAB_GRAPHQL)}
                    to="#tab-curriculum"
                  >
                    GraphQL
                  </TabItem>
                  <a name="tab-curriculum" />
                </Col>
              </Row>
              <Card border="shadow">
                {selectedTab === TAB_REACT ? (
                  <FullCurriculumsReact trainings={trainings} />
                ) : (
                  <FullCurriculumsGraphQL trainings={trainings} />
                )}
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
                      For working developers -{' '}
                      <strong>not for beginners!</strong>
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
                    <Li>
                      Offer more services to internal and external clients
                    </Li>
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
}

export default IndexPage
