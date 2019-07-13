import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumAdvancedReact } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Card } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { ADVANCED_REACT } from 'src/config/data'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'Advanced React Training | React GraphQL Academy',
  description:
    'Interested in advanced React? Learn advanced React patterns and supercharge your dev skillset with the latest in advanced React trianing. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const AdvancedTraining = () => (
  <Layout>
    {({ trainings }) => {
      const upcomingAdvancedTrainings = selectUpcomingTrainings({
        type: ADVANCED_REACT,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingAdvancedTrainings,
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
                to: '/react/training/advanced',
                label: 'Advanced',
              },
            ]}
          />
          <Header
            titleLines={['Advanced React Training']}
            subtitle="For 2 days, expert coaches and mentors will work<br />alongside you to master the React ecosystem so<br />you return to work as a Senior React developer"
            bgImageName={BOOTCAMP}
            type={ADVANCED_REACT}
          />
          <TopSection>
            <Grid>
              <Card border="shadow">
                <CurriculumAdvancedReact
                  trainings={upcomingAdvancedTrainings}
                />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <AttendeeQuote
                    small
                    quote="Most of the software my company does is legacy, it's been there for a while. Coming from PHP, React seemed a good way to do that."
                    fullname="Charlie Wilson"
                    job="Software Engineer"
                    company="ESG PLC"
                    videoUrl="yG3H27y9F08"
                  />
                </Col>
                <Col md={4} mdOffset={1}>
                  <H2>Is this advanced React training right for me?</H2>
                  <Ul>
                    <CurriculumAdvancedReact.TargetAudienceList />
                    <Li>
                      Join a growing network of alumni for advice, knowledge and
                      social fun!
                    </Li>
                  </Ul>
                  {nextTraining ? (
                    <P>
                      <LinkButton variant="primary" to={nextTraining.toPath}>
                        Next one:{' '}
                        {`${formatUTC(
                          nextTraining.startDate,
                          nextTraining.utcOffset,
                          'D MMM'
                        )}, ${nextTraining.city} >>`}
                      </LinkButton>
                    </P>
                  ) : null}
                </Col>
              </Row>
            </Grid>
          </Section>
          <TrustedBySection />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default AdvancedTraining
