import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';

import { P } from '../../../../App/Components/Text/P';
import Header from '../../../../App/Components/Layout/Header';
import TrainingInstanceForm from '../Components/Form/TrainingInstanceForm';
import trainingInstanceFormFragment from '../Components/Form/TrainingInstanceForm.graphql.js';
import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';

const UpdateTrainingInstance = () => {
  const history = useHistory();
  const { instanceId } = useParams();
  const { loading, error, data } = useQuery(QUERY_TRAINING_INSTANCE, {
    variables: {
      id: instanceId,
    },
  });
  const [updateTrainingInstance] = useMutation(UPDATE_TRAINING_INSTANCE);

  const onSubmit = async (trainingInstance: any) => {
    try {
      await updateTrainingInstance({
        variables: {
          trainingInstance,
        },
      });

      history.push(`${appPaths.backoffice}${backofficePaths.training}`);
      // todo show notification "course was saved"
    } catch (e) {
      // empty
    }
  };

  return (
    <>
      <Header title=" Update Course Instance" />
      {error ? (
        <P>There's an error</P>
      ) : loading ? (
        <P>...loading</P>
      ) : (
        <TrainingInstanceForm
          onSubmit={onSubmit}
          training={data?.trainingInstance?.training}
          initialValues={data?.trainingInstance}
        />
      )}
    </>
  );
};

const QUERY_TRAINING_INSTANCE = gql`
  query trainingInstanceDetail($id: ID!) {
    # ...trainingInstanceTypesQueriesFragment
    trainingInstance(id: $id) {
      ...TrainingInstanceForm
    }
  }
  ${trainingInstanceFormFragment}
`;

const UPDATE_TRAINING_INSTANCE = gql`
  mutation updateTrainingInstance(
    $trainingInstance: UpdateTrainingInstanceInput!
  ) {
    updateTrainingInstance(trainingInstance: $trainingInstance) {
      trainingInstance {
        ...TrainingInstanceForm
      }
    }
  }
  ${trainingInstanceFormFragment}
`;

export default UpdateTrainingInstance;
