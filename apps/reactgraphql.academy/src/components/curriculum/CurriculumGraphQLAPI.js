import React from 'react';
import { Li } from '../layout/Ul';

import LearningObjectivesUl from './LearningObjectivesUl';
import {
  GRAPHQL_API_ID,
  TECH_GRAPHQL,
  FULL_TIME,
  TRAINING_TYPE_HALF_CURRICULUM,
} from '../../config/data';
import Curriculum, { renderSection } from './Curriculum';
import SpecificationSession, {
  LearningObjectives as SpecsLearningObjectives,
} from './sessions/graphql/server/SpecificationSession';
import ThinkingInGraphQLSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from './sessions/graphql/server/ThinkingInGraphQLSession';
import SchemaDesignSession, {
  LearningObjectives as SchemaDesignLearningObjectives,
} from './sessions/graphql/server/SchemaDesignSession';
// import GraphQLServerConsoliationOneSession from './sessions/graphql/server/GraphQLServerConsoliationOneSession';
// import GraphQLServerConsoliationTwoSession from './sessions/graphql/server/GraphQLServerConsoliationTwoSession';
import FederationSession, {
  LearningObjectives as FederationLearningObjectives,
} from './sessions/graphql/server/FederationSession';
import ToolingAndPracticesSession, {
  LearningObjectives as ToolingAndPracticesSessionLearningObjectives,
} from './sessions/graphql/server/ToolingAndPracticesSession';
import HasuraSession, {
  LearningObjectives as HasuraLearningObjectives,
} from './sessions/graphql/server/HasuraSession';
import HackathonSession from './sessions/graphql/server/HackathonSession';

export const sessions = [
  {
    subTitle: ' Thinking in GraphQL, and GraphQL Specs',
    comps: [ThinkingInGraphQLSession, SpecificationSession],
  },
  {
    subTitle: 'Schema design, and Apollo Federation',
    comps: [
      // GraphQLServerConsoliationOneSession,
      SchemaDesignSession,
      FederationSession,
    ],
  },
  {
    subTitle: 'Hasura, and Advanced tooling & practices',
    comps: [
      // GraphQLServerConsoliationTwoSession,
      HasuraSession,
      ToolingAndPracticesSession,
    ],
  },
  {
    subTitle: 'Hackathon (optional day)',
    comps: [HackathonSession],
  },
];

const trainingInstanceTypeName = FULL_TIME;
const tech = TECH_GRAPHQL;
const trainingType = TRAINING_TYPE_HALF_CURRICULUM;
const trainingId = GRAPHQL_API_ID;

const CurriculumGraphQLAPI = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
    trainingId,
  };
  const renderSectionArgs = {
    training,
    initialDayOffset: 0,
    sectionProps,
  };

  return (
    <Curriculum
      title="GraphQL API Training Outline"
      training={training}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      trainingId={trainingId}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessions.map(renderSection(renderSectionArgs))}
    />
  );
};

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A JavaScript developer interested in learning the best practices to build
      production-ready GraphQL APIs.
    </Li>
    <Li>
      You are interested in how to connect GraphQL to different data sources in
      a secure and efficient way.
    </Li>
    <Li>
      You are a tech lead or architect responsible for running a GraphQL API in
      production.
    </Li>
    <Li>
      You are a full-stack developer interested in building modern APIs that
      enable faster product development.
    </Li>
  </React.Fragment>
);

export const learningObjectives = [
  <ThinkingInLearningObjectives />,
  <SpecsLearningObjectives />,
  <SchemaDesignLearningObjectives />,
  <FederationLearningObjectives />,
  <HasuraLearningObjectives />,
  <ToolingAndPracticesSessionLearningObjectives />,
];

export const LearningObjectivesList = (props) => (
  <LearningObjectivesUl {...props}>{learningObjectives}</LearningObjectivesUl>
);

CurriculumGraphQLAPI.LearningObjectivesList = LearningObjectivesList;
CurriculumGraphQLAPI.TargetAudienceList = TargetAudienceList;

export default CurriculumGraphQLAPI;
