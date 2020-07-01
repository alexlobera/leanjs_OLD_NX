import React from 'react';
import { Helmet } from 'react-helmet';

import { BOOTCAMP } from 'src/../images/imageNames';
import { LinkButton } from 'src/components/buttons';
import { formatUTC } from 'src/components/utils';
import { Link } from 'src/components/navigation';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { P, H2Ref } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import CurriculumGraphQLBootcamp from 'src/components/curriculum/CurriculumGraphQLBootcamp';
import Header from 'src/components/layout/Header';
import { LIGHT_PINK } from 'src/config/styles';
import {
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
} from 'src/components/training';
import { Segment } from 'src/components/elements';
import { WHY_GQLU_ACADEMY } from 'src/config/images.js';
import header from 'src/components/layout/Header.json';
import BlogSection from 'src/components/blog/BlogSection';
import { createMetas } from 'src/components/utils';
import {
  FULL_TIME,
  TECH_GRAPHQL,
  GRAPHQL_BOOTCAMP_ID,
  TRAINING_TYPE_FULL_CURRICULUM,
} from 'src/config/data';

const metas = {
  title: 'GraphQL Bootcamp | React GraphQL Academy',
  description:
    'Interested in GraphQL bootcamp? React GraphQL Academy offers in-person GraphQL bootcamp from industry experts. Contact us now!',
  image: WHY_GQLU_ACADEMY,
  type: 'website',
};

const trainingType = TRAINING_TYPE_FULL_CURRICULUM;
const trainingInstanceTypeName = FULL_TIME;
const trainingId = GRAPHQL_BOOTCAMP_ID;

const GraphQL = ({ path, trainings, data }) => {
  const upcomingBootcampTrainings = selectUpcomingTrainings({
    trainingId,
    trainingInstanceTypeName,
    trainings,
  });
  const nextTraining = selectNthTraining({
    trainings: upcomingBootcampTrainings,
  });
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
        {createMetas(metas)}
      </Helmet>
      <Header
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/graphql', label: 'GraphQL' },
          { to: '/graphql/training', label: 'Training' },
          { to: path, label: 'Bootcamp' },
        ]}
        titleLines={[
          'Take your dev career further',
          'with our GraphQL Bootcamp',
        ]}
        subtitle="In-person GraphQL bootcamp from industry experts"
        bgImageName={BOOTCAMP}
        links={header.landingPageLinks.links}
        trainingType={trainingType}
      />
      <TopSection>
        <Segment>
          <CurriculumGraphQLBootcamp
            trainings={upcomingBootcampTrainings}
            pageData={data.sanityTrainingPage}
            enableToggle
            isOpen={false}
          />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              tech={TECH_GRAPHQL}
              quote="It's nice to have people there who know their stuff. I feel like [the training] has definitely improved my career trajectory"
              fullname="Charlie Wilson"
              job="Software Engineer"
              company="ESG PLC"
              youtubeId="tYhT8F82-z8"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <H2Ref>
              Is this GraphQL bootcamp right for me?
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul>
              <Li>
                For working developers - <strong>not for beginners!</strong>
              </Li>
              <Li>
                <strong>Hands-on practical</strong> training.
              </Li>
              <Li>
                <strong>Build production ready</strong> apps leverging GraphQL.
              </Li>
              <Li>
                Experienced coaches who are <strong>industry experts</strong>
              </Li>
              <Li>
                Learn <strong>best practices</strong>.
              </Li>
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
            </Ul>
            <P />
          </Col>
        </Row>
      </Section>

      <TrustedBySection />
      <BlogSection tags={['graphql', 'beginner']} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  );
};

export const query = graphql`
  query graphqlBootcampTrainingPage($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;

export default GraphQL;
