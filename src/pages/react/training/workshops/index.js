import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumReactWorkshops from 'src/components/curriculum/CurriculumReactWorkshops'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_WORKSHOP } from 'src/config/data'
import BlogSection from 'src/components/blog/BlogSection'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'React Workshops | React GraphQL Academy',
  description:
    'Interested in React workshops? React GraphQL Academy offers specialist React workshops, focussing on one specific part of the React ecosystem. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const Bootcamps = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const allReactWorkshops = selectUpcomingTrainings({
        trainings,
        types: [REACT_WORKSHOP],
      })
      const nextTraining = selectNthTraining({
        trainings: allReactWorkshops,
      })

      return (
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
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/react',
                label: 'React',
              },
              {
                to: '/react/training/',
                label: 'Training',
              },
              {
                to: path,
                label: 'Workshops',
              },
            ]}
          />
          <Header
            titleLines={['1-Day React Workshops']}
            subtitle="Intense, 1-day workshops that focusses on one specific part of React - all delivered by industry experts"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Workshop offerings',
                to: '#curriculum',
              },
              {
                text: 'Upcoming workshops',
                to: '#upcoming-courses',
              },
              {
                text: 'Is it right for me?',
                to: '#target-audience',
              },
            ]}
            type={REACT_WORKSHOP}
          />
          <TopSection>
            <Segment>
              <CurriculumReactWorkshops trainings={allReactWorkshops} />
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="Developing at my company for 2 years I hadn't touched React. The Bootcamp works because you're able ask questions - it's better than watching a video."
                  fullname="Charlie Wilson"
                  job="Software Engineer"
                  company="ESG PLC"
                  youtubeId="CP422OORbPA"
                />
              </Col>
              <Col md={4} mdOffset={1}>
                <H2>
                  <Link to="#target-audience" name="target-audience" />
                  Are these React workshops right for me?
                </H2>
                <Ul>
                  <Li>Extremely rapid, intense learning</Li>
                  <Li>
                    Ideal for experienced programmers familiar with good
                    practices and React.
                  </Li>
                  <Li>Not for React beginners!</Li>
                  <Li>
                    Small classes focused on one topic with expert developer
                    coaches
                  </Li>
                  <Li>
                    Hands-on project-based training - most of the time you'll be
                    coding.
                  </Li>
                  <Li>
                    Join a growing network of alumni for advice, knowledge and
                    social fun!
                  </Li>
                </Ul>
                <P>
                  {nextTraining && (
                    <LinkButton variant="primary" to={nextTraining.toPath}>
                      Next workshop:{' '}
                      {formatUTC(
                        nextTraining.startDate,
                        nextTraining.utcOffset,
                        'D MMM'
                      )}
                      , {nextTraining.city}
                    </LinkButton>
                  )}
                </P>
              </Col>
            </Row>
          </Section>
          <TrustedBySection />
          <BlogSection tags={['react', 'advanced']} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default Bootcamps
