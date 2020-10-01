import React from 'react';
import { gql } from '@apollo/client';
import Markdown from 'markdown-to-jsx';

import { Ul, Li } from '../../../../App/Components/Text/Ul';
import { P, Small } from '../../../../App/Components/Text/P';
import Box from '../../../../App/Components/Layout/Box';
import Heading from '../../../../App/Components/Text/Heading';
import InfoBox from '../../../../App/Components/Elements/InfoBox';
import ExpandText from '../../../../App/Components/Layout/ExpandText';
import DeleteTrainingButton from '../../Components/DeleteTrainingButton';

const TrainingDetail = ({ training }: any) => {
  const { published } = training || {};
  const units = published.units;
  const description = published.description;
  const title = published.title;

  return (
    <InfoBox>
      <Box pr={2} mt={3} mb={4}>
        <Heading variant="h6">{title}</Heading>

        <Ul>
          <Li>
            Full Course Curriculum: <br />
            <Small>
              <Markdown>{description.syllabus || ''}</Markdown>
            </Small>
          </Li>
          <Li>
            Course Objectives: <br />
            <Small>
              <ExpandText maxLength={120}>
                {description.objectives || ''}
              </ExpandText>
            </Small>
          </Li>
          {units && units.length ? (
            <Li>
              Units
              {units.map((unit: any) => {
                const current = unit.draft ? unit.draft : unit.published;
                return (
                  <Ul key={unit.id}>
                    <Li>
                      <Small>{current.title}</Small>
                    </Li>
                  </Ul>
                );
              })}
            </Li>
          ) : null}
        </Ul>
        <DeleteTrainingButton trainingId={training.id} />
      </Box>
    </InfoBox>
  );
};

export const QUERY_TRAINING_DETAIL_FRAGMENT = gql`
  fragment trainingDetailFragment on Training {
    id
    units {
      id
      published {
        title
        objectives
      }
    }
    published {
      title
      description {
        objectives
        syllabus
      }
    }
  }
`;

export default TrainingDetail;
