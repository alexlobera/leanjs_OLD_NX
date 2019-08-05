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
import CurriculumReactBootcamp from 'src/components/curriculum/CurriculumReactBootcamp'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
} from 'src/components/training'
import { AlternativeBootcampTrainings } from 'src/components/training/AlternativeTrainings'
import { Segment } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_BOOTCAMP } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'React Bootcamp | React GraphQL Academy',
  description:
    'Interested in a React bootcamp? Take a deep dive into the React ecosystem and become a confident React developer with our React bootcamp.',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const Bootcamps = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const upcomingBootCampTrainings = selectUpcomingTrainings({
        type: REACT_BOOTCAMP,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingBootCampTrainings,
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
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: path,
                label: 'Bootcamp',
              },
            ]}
          />
          <Header
            titleLines={['React Redux Bootcamp']}
            subtitle="For a week, expert coaches and mentors will work alongside you to master the React ecosystem so you return to work as a React specialist"
            bgImageName={BOOTCAMP}
            links={header.landingPageLinks.links}
            type={REACT_BOOTCAMP}
          />
          <TopSection>
            <Segment>
              <Link to="#upcoming-courses" name="upcoming-courses" />
              <CurriculumReactBootcamp trainings={upcomingBootCampTrainings} />
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
                  Is this React bootcamp right for me?
                </H2>
                <Ul>
                  <Li>Extremely rapid, intense learning</Li>
                  <Li>
                    Ideal for experienced programmers familiar with good
                    practices. Not for beginners!
                  </Li>
                  <Li>Small classes with expert developer coaches</Li>
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
                      Next bootcamp:{' '}
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
          <Section>
            <Row>
              <Col lg={10} lgOffset={1}>
                <AlternativeBootcampTrainings trainings={trainings} />
              </Col>
            </Row>
          </Section>
          <TrustedBySection />
          <BlogSection tags={['react', 'beginner']} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default Bootcamps
