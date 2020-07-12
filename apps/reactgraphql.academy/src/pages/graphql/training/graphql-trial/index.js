import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2Ref, H3, P } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import CurriculumGraphQLTrial, {
  LearningObjectives,
} from 'src/components/curriculum/CurriculumGraphQLTrial';
import { Segment } from 'src/components/elements';
import Header from 'src/components/layout/Header';
import { BOOTCAMP_COLLAB } from 'src/config/images';
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training';
import { Link } from 'src/components/navigation';
import {
  TECH_GRAPHQL,
  TRAINING_TYPE_WORKSHOP,
  GRAPHQL_TRIAL_ID,
} from 'src/config/data';
import { createMetas } from 'src/components/utils';
import { breadcrumbTrainingName } from './config.json';
import NextTrainingButton from 'src/components/training/NextTrainingButton';
import { LIGHT_PINK } from 'src/config/styles';

const metas = {
  title: 'GraphQL Training Trial | React GraphQL Academy',
  description:
    'Are you not sure yet about buying our GraphQL training? With this trial of our GraphQL training, you will be able to make an informed decision before purchasing the full training',
  image: BOOTCAMP_COLLAB,
  type: 'website',
};

const trainingId = GRAPHQL_TRIAL_ID;

const Page = ({ path, trainings, training, data }) => {
  const upcomingTrials = selectUpcomingTrainings({
    trainingId,
    trainings,
  });

  const nextTraining = selectNthTraining({
    trainings: upcomingTrials,
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
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/graphql', label: 'GraphQL' },
          { to: '/graphql/training/', label: 'Training' },
          {
            to: path,
            label: breadcrumbTrainingName,
          },
        ]}
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        titleLines={['3-Hour GraphQL Trial']}
        subtitle="With this trial of our GraphQL part-time training, you will be able to make an informed decision before purchasing the full training"
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        trainingType={TRAINING_TYPE_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumGraphQLTrial
            trainings={upcomingTrials}
            training={training}
            enableToggle
            section={{ isOpen: true }}
            learningObjectives={LearningObjectives}
            pageData={data.sanityTrainingPage}
          />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              quote="As a freelance developer, I was tired of doing online courses on my own without live support. [The training] was fantastic - the teachers didn't leave a single question unanswered."
              fullname="Rafa Fraga"
              job="Software Engineer"
              youtubeId="hZZksRcqtkc"
              tech={TECH_GRAPHQL}
            />
          </Col>
          <Col md={4} lgOffset={1}>
            <H2Ref>
              Is this 3-hour trial right for me? Are you...{' '}
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul>
              <Li>
                A developer with some experience developing Nodes.js APIs?
              </Li>
              {/* <Li>
                Familiar with front-end technologies like React (used during the
                GraphQL part-time training) and JavaScript?
              </Li> */}
              <Li>
                Taking a step forward to become a GraphQL Specialist to build
                modern and efficient APIs?
              </Li>
            </Ul>
            <P>If you've said 'yes' to these, this trial could be for you!</P>
            <H3>Not for beginner devs!</H3>
            <NextTrainingButton type="workshop" training={nextTraining} />
          </Col>
        </Row>
      </Section>

      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  );
};

export const query = graphql`
  query graphqlTrialTrainingPage($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;

export default Page;
