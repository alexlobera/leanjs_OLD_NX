import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { BOOTCAMP } from 'src/../images/imageNames';
import { Link } from 'src/components/navigation';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { P, H2Ref } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import CurriculumGraphQLAPI from 'src/components/curriculum/CurriculumGraphQLAPI';
import Header from 'src/components/layout/Header';
import { LIGHT_PINK } from 'src/config/styles';
import {
  AttendeeQuote,
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training';
import selectUpcomingTrainings from 'src/components/training/selectUpcomingTrainings';
import { Segment } from 'src/components/elements';
import { WHY_GQLU_ACADEMY } from 'src/config/images.js';
import {
  TECH_GRAPHQL,
  GRAPHQL_API_ID,
  FULL_TIME,
  TRAINING_TYPE_HALF_CURRICULUM,
} from 'src/config/data';
import header from 'src/components/layout/Header.json';
import { createMetas } from 'src/components/utils';
import { FAQSection, getMetaData } from 'src/components/training/PageContent';

const defaultMetas = {
  title: 'GraphQL API Training | React GraphQL Academy',
  description:
    'Looking for a GraphQL API training? Build real-world GraphQL APIs. In-person GraphQL API training from industry experts Contact us now!',
  image: WHY_GQLU_ACADEMY,
  type: 'website',
};

const trainingId = GRAPHQL_API_ID;
const trainingInstanceTypeName = FULL_TIME;
const trainingType = TRAINING_TYPE_HALF_CURRICULUM;

const GraphQL = ({ path, trainings, data }) => {
  const upcomingGraphQLTrainings = selectUpcomingTrainings({
    trainingId,
    trainingInstanceTypeName,
    trainings,
  });

  const metas = getMetaData({
    defaultMetas,
    metaData: data.sanityTrainingPage,
  });

  return (
    <React.Fragment>
      <Helmet title={metas.title}>{createMetas(metas)}</Helmet>
      <Header
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/graphql', label: 'GraphQL' },
          { to: '/graphql/training', label: 'Training' },
          { to: path, label: 'API' },
        ]}
        titleLines={['Build real-world', `GraphQL APIs`]}
        subtitle="In-person GraphQL API training from industry experts"
        bgImageName={BOOTCAMP}
        links={header.landingPageLinks.links}
        trainingType={trainingType}
      />
      <TopSection>
        <Segment>
          <CurriculumGraphQLAPI
            trainings={upcomingGraphQLTrainings}
            pageData={data.sanityTrainingPage}
            isOpen={false}
          />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              tech={TECH_GRAPHQL}
              quote="[The coaches] are very important - they're able to explain things in a way we can understand."
              fullname="Jim Plimmer"
              job="Developer"
              company="Conversion.com"
              youtubeId="GU-IIi-84t8"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <H2Ref>
              Is this GraphQL training right for me?
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul>
              <Li>
                For working developers, experience with JavaScript and npm -{' '}
                <strong>not for beginners!</strong>
              </Li>
              <Li>
                Perfect for developers with 6+ months building backends and REST
                APIs?
              </Li>
              <Li>
                <strong>Hands-on practical</strong> training.
              </Li>
              <Li>
                <strong>Build production ready</strong> apps leverging GraphQL.
              </Li>
              <Li>
                Expert coaches who are <strong>working developers</strong>
              </Li>
              <Li>
                Learn <strong>best practices</strong>.
              </Li>
              <Li>
                Alumni <strong>community</strong>.
              </Li>
            </Ul>
            <P />
          </Col>
        </Row>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <TrustedBySection />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  );
};

export const query = graphql`
  query graphqlApiTrainingPage($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;

export default GraphQL;
