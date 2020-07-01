import React from 'react';
import SpecificationSession, {
  LearningObjectives as SpecsLearningObjectives,
} from './sessions/graphql/server/SpecificationSession';
import ThinkingInGraphQLSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from './sessions/graphql/server/ThinkingInGraphQLSession';
import SchemaDesignSession, {
  LearningObjectives as SchemaDesignLearningObjectives,
} from './sessions/graphql/server/SchemaDesignSession';
import FederationSession, {
  LearningObjectives as FederationLearningObjectives,
} from './sessions/graphql/server/FederationSession';
import ToolingAndPracticesSession, {
  LearningObjectives as ToolingAndPracticesSessionLearningObjectives,
} from './sessions/graphql/server/ToolingAndPracticesSession';
import HasuraSession, {
  LearningObjectives as HasuraLearningObjectives,
} from './sessions/graphql/server/HasuraSession';
import {
  PART_TIME,
  TECH_GRAPHQL,
  TRAINING_TYPE_HALF_CURRICULUM,
  GRAPHQL_API_ID,
} from '../../config/data';
import Curriculum from './Curriculum';
import renderPartTimeSection from './renderPartTimeSession';
import { TargetAudienceList } from './CurriculumGraphQLBootcamp';
import LearningObjectivesUl from './LearningObjectivesUl';

export const defaultSessionsFirstHalf = [
  { Comp: ThinkingInGraphQLSession },
  { Comp: SpecificationSession },
  { Comp: SchemaDesignSession },
];

export const defaultSessionsSecondtHalf = [
  { Comp: FederationSession },
  { Comp: HasuraSession },
  { Comp: ToolingAndPracticesSession },
];

const trainingInstanceTypeName = PART_TIME;
const tech = TECH_GRAPHQL;
const trainingType = TRAINING_TYPE_HALF_CURRICULUM;
const trainingId = GRAPHQL_API_ID;

const CurriculumGraphQLPartTime = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondtHalf = defaultSessionsSecondtHalf,
  ...rest
}) => {
  const initialIndex = 0;

  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
    trainingId,
  };
  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
  });

  return (
    <Curriculum
      title="GraphQL Part-time Training Outline"
      trainingId={trainingId}
      training={training}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondtHalf.map(
        renderSectionWithProps(sessionsFirstHalf.length)
      )}
    />
  );
};

export { TargetAudienceList };

export const LearningObjectives = (props) => (
  <LearningObjectivesUl {...props}>
    <ThinkingInLearningObjectives />
    <SpecsLearningObjectives />
    <SchemaDesignLearningObjectives />
    <FederationLearningObjectives />
    <HasuraLearningObjectives />
    <ToolingAndPracticesSessionLearningObjectives />
  </LearningObjectivesUl>
);

CurriculumGraphQLPartTime.TargetAudienceList = TargetAudienceList;

export default CurriculumGraphQLPartTime;
