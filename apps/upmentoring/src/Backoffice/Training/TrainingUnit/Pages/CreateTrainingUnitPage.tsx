import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';

import { P } from '../../../../App/Components/Text/P';
import Header from '../../../../App/Components/Layout/Header';
import TrainingUnitForm, {
  TRAINING_UNIT_FORM_FRAGMENT,
  TRAINING_UNIT_FORM_QUERY_FRAGMENT,
} from '../Components/Form/TrainingUnitForm';
import { QUERY_TRAINING_UNIT_LIST } from './TrainingUnitsPage';
import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';
import { ALL_VIDEOS_FRAGMENT } from '../../../../Backoffice/Video/videos.graphql.js';

const CreateTrainingUnit = () => {
  const history = useHistory();
  const { trainingId } = useParams();
  const { data, error, loading } = useQuery(QUERY_TRAINING, {
    variables: { id: trainingId },
  });
  const [createTrainingUnit] = useMutation(CREATE_TRAINING_UNIT);
  // TODO ADD THE FOLLOWING BUG AND FIX WITH USE MEMO TO THE ADVANCED REACT TRAINING
  const initialValues = React.useMemo(() => ({ trainingId }), [trainingId]);

  const onSubmit = async (trainingUnit: any) => {
    try {
      const response = await createTrainingUnit({
        variables: {
          trainingUnit: {
            ...trainingUnit,
            trainingId,
          },
        },
        refetchQueries: [
          { query: QUERY_TRAINING_UNIT_LIST, variables: { trainingId } },
        ],
      });

      if (response.data) {
        history.push(
          `${appPaths.backoffice}${backofficePaths.training}/${trainingId}${backofficePaths.trainingUnit}`,
        );
      }
    } catch (e) {
      // empty
    }
  };

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else if (!data.trainingById) {
    return null;
  }
  const { title } = data.trainingById;

  return (
    <>
      <Header title={`Add training unit to: ${title}`} />
      <TrainingUnitForm
        fields={data.fields}
        onSubmit={onSubmit}
        initialValues={initialValues}
        selectVideos={data.videos}
        training={data && data.trainingById}
      />
    </>
  );
};

const CREATE_TRAINING_UNIT = gql`
  mutation createTrainingUnit($trainingUnit: CreateTrainingUnitInput!) {
    createTrainingUnit(trainingUnit: $trainingUnit) {
      trainingUnit {
        ...TrainingUnitForm
      }
    }
  }
  ${TRAINING_UNIT_FORM_FRAGMENT}
`;

const QUERY_TRAINING = gql`
  query trainingForUnitForm($id: ID!) {
    ...trainingUnitQueriesFragment
    trainingById(id: $id) {
      id
      title
    }
    ...allVideos
  }
  ${ALL_VIDEOS_FRAGMENT}
  ${TRAINING_UNIT_FORM_QUERY_FRAGMENT}
`;

export default CreateTrainingUnit;
