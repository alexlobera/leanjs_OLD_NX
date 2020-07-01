import React from 'react';

import LearningObjectivesUl from './LearningObjectivesUl';

import {
  GRAPHQL_BOOTCAMP_ID,
  TECH_GRAPHQL,
  FULL_TIME,
  TRAINING_TYPE_FULL_CURRICULUM,
} from '../../config/data';
import Curriculum, { renderSection } from './Curriculum';
import {
  sessions as sessionsApi,
  learningObjectives as learningObjectivesApi,
} from './CurriculumGraphQLAPI';
import GraphQLClientFundamentalsSession from './sessions/graphql/client/GraphQLClientFundamentalsSession';
import AdvancedApolloClientSession from './sessions/graphql/client/AdvancedApolloClientSession';
import GraphQLClientRecapSession from './sessions/graphql/client/GraphQLClientRecapSession';

const sessionsFirstHalf = sessionsApi;

export const sessionsSecondHalf = [
  {
    subTitle: 'GraphQL Apollo Client',
    comps: [
      GraphQLClientFundamentalsSession,
      AdvancedApolloClientSession,
      GraphQLClientRecapSession,
    ],
  },
];

const trainingInstanceTypeName = FULL_TIME;
const tech = TECH_GRAPHQL;
const trainingType = TRAINING_TYPE_FULL_CURRICULUM;
const trainingId = GRAPHQL_BOOTCAMP_ID;

const CurriculumGraphQLBootcamp = ({
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
      title="GraphQL Bootcamp Outline"
      trainingId={trainingId}
      tech={tech}
      training={training}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          ...renderSectionArgs,
          initialDayOffset: sessionsFirstHalf.length,
        })
      )}
    />
  );
};

export const TargetAudienceList = () => <React.Fragment></React.Fragment>;

export const LearningObjectivesList = (props) => (
  <LearningObjectivesUl {...props}>
    {learningObjectivesApi}
  </LearningObjectivesUl>
);

CurriculumGraphQLBootcamp.LearningObjectivesList = LearningObjectivesList;
CurriculumGraphQLBootcamp.TargetAudienceList = TargetAudienceList;

export default CurriculumGraphQLBootcamp;
