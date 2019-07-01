import React from 'react'

import Layout from '../components/layout'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { Blockquote } from '../components/text'
import Section from 'src/components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P, H5 } from '../components/text'
import Header from '../components/layout/Header'

import Ul, { Li } from '../components/layout/Ul'
import { Card, Video, Image, Newsletter } from '../components/elements'
import Box from '../components/layout/Box'
import { GREY } from '../config/styles.js'
import { SCREEN_SM_MAX } from '../components/utils'
import { UpcomingTrainingSection } from '../components/training'
import BlogSection from 'src/components/blog/BlogSection'

const CoachTitle = styled(H3)`
  & {
    padding-top: 0;
  }
`

const Coach = () => {
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Header fullHeight={false} titleLines={['Alex Lobera']} />
          <Section>
            <Grid>
              <Row>
                <Col md={5} smOrder={2}>
                  <H2Ref>
                    Alex Lobera{' '}
                    <Link name="alex-lobera" to="#alex-lobera">
                      #
                    </Link>
                  </H2Ref>
                  <CoachTitle>
                    Tech Lead at <Link to="https://leanjs.com">LeanJS</Link>
                  </CoachTitle>
                  <Ul inline>
                    <Li>
                      <Link to="https://github.com/alexlbr">GitHub</Link>
                    </Li>
                    <Li>|</Li>
                    <Li>
                      <Link to="https://medium.com/@alex_lobera">Medium</Link>
                    </Li>
                    <Li>|</Li>
                    <Li>
                      <Link to="https://twitter.com/alex_Lobera">Twitter</Link>
                    </Li>
                    <Li>|</Li>
                    <Li>
                      <Link to="https://uk.linkedin.com/in/alexlobera">
                        LinkedIn
                      </Link>
                    </Li>
                  </Ul>
                  <Ul>
                    <Li>
                      Full-stack JavaScript Developer passionate about{' '}
                      <strong>
                        teaching React since{' '}
                        <Link to="https://www.meetup.com/JavaScript-London/events/230287691/">
                          May, 2016
                        </Link>
                      </strong>
                      .
                    </Li>
                    <Li>
                      Alex holds a <strong>computer science degree</strong> and
                      he is also a <strong>certified teacher</strong> in Spanish
                      language.
                    </Li>
                    <Li>
                      Organizer of the{' '}
                      <Link to="https://www.meetup.com/JavaScript-london/">
                        JavaScript London Meetup
                      </Link>{' '}
                      and other popular meetups in the EU.
                    </Li>
                  </Ul>
                  <Blockquote bg="primary" triangle="right">
                    Teaching other developers is very rewarding. I love sharing
                    what I've learned in my career to help others grow and give
                    back. I think this is what really makes our industry move
                    forward.
                  </Blockquote>
                </Col>
                <Col md={5} mdOffset={1} smOrder={1}>
                  <Video
                    youtubeId="QiR8iNq3tCQ"
                    description={
                      <P>
                        Alex talking about advanced testing at Facebook London
                        HQ
                      </P>
                    }
                  />
                </Col>
              </Row>
            </Grid>
          </Section>
          <BlogSection />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export default Coach
