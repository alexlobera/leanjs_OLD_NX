import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumOneDayStyling } from 'src/components/curriculum/workshops'
import { Card } from 'src/components/elements'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from 'src/config/images'
import { CallToActionRow } from 'src/components/layout/CallToActionNextTrainings'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  selectNthTraining,
  selectUpcomingTrainings,
} from 'src/components/training'
import { Image } from 'src/components/elements'
import { Link, Breadcrumb } from 'src/components/navigation'
import LinkButton from 'src/components/buttons/LinkButton'
import { ONE_DAY_WORKSHOP, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { formatUTC } from 'src/components/utils'

const StylingDesignSystemWorkshop = () => (
  <Layout>
    {({ trainings }) => {
      const bootCampTrainings = selectUpcomingTrainings({
        trainings,
        type: ONE_DAY_WORKSHOP,
        city: LONDON,
      })
      const training = selectNthTraining({
        trainings: bootCampTrainings,
      })
      return (
        <React.Fragment>
          <Helmet
            title="Design Systems in React Workshop"
            meta={[
              {
                name: 'description',
                content: '1-day Design Systems in React Workshops.',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: '/react/training/workshops/design-system-styling-in-react',
                label: 'Styling in React using design systems',
              },
            ]}
          />
          <Header
            titleLines={['Styling in React using design systems']}
            subtitle="See how React can look gorgeous and encourage design consistency"
            links={[
              { text: 'Workshop Agenda', to: '#curriculum' },
              { text: 'Is this right for me?', to: '#target-audience' },
            ]}
            bgImageName={LONDON_BOOTCAMP}
            type={ONE_DAY_WORKSHOP}
            training={training}
          />
          <TopSection top>
            <Grid>
              <CallToActionRow left>
                <Col mdOffset={1} md={4}>
                  {training && (
                    <LinkButton variant="primary" to={training.toPath}>
                      Next workshop:{' '}
                      {formatUTC(
                        training.startDate,
                        training.utcOffset,
                        'D MMM'
                      )}
                      , {training.city}
                    </LinkButton>
                  )}
                </Col>
              </CallToActionRow>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumOneDayStyling layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>

          <Section>
            <Grid>
              <Row>
                <HideComponentsUsingCss xs sm>
                  <Col md={6} lg={5}>
                    <Image src={BOOTCAMP_COLLAB} width="100%" />
                  </Col>
                </HideComponentsUsingCss>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2Ref>
                    Is this one day workshop right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      A developer or designer with experience building React
                      components and using CSS?
                    </Li>
                    <Li>
                      A developer or designer interested in building scalable
                      and reusable UIs for big React projects?
                    </Li>
                    <Li>
                      Not satisfied with the Designer/Developer handover in
                      real-world React projects?
                    </Li>
                    <Li>
                      A designer that builds React components and interacts with
                      developers.
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, this workshop could be for
                    you!
                  </P>
                  <H3>Not for React beginners!</H3>
                  <P>
                    This is not a learn-to-code workshop. If you want to learn
                    to code, we recommend checking out{' '}
                    <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                      Free Code Camp
                    </Link>
                    .
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AttendeeQuote
                    quote="Technology nowadays changes very often and in future you may not be able to find a job with the things you know - you have to keep up. I like the fact that we got to write code rather than focus on theory."
                    fullname="Catalin Cislariu"
                    job="Senior Developer"
                    company="KLEIDO LTD"
                    profilePicUrl={CATALIN}
                  />
                </Col>
              </Row>
            </Grid>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default StylingDesignSystemWorkshop
