import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import Header from '../../../App/Components/Layout/Header';
import { P } from '../../../App/Components/Text/P';
import { ALL_VIDEOS_FRAGMENT } from '../../../Backoffice/Video/videos.graphql.js';
import TrainingForm, {
  TRAINING_FORM_FRAGMENT,
  TRAINING_FORM_QUERY_FRAGMENT,
} from '../Components/Form/TrainingForm';

const CreateTraining = () => {
  const history = useHistory();
  const { data, loading, error } = useQuery(QUERY_TRAINING);
  const [createTraining] = useMutation(CREATE_TRAINING);

  const onSubmit = (options: any) => async (training: any) => {
    try {
      const response = await createTraining({
        variables: {
          training,
        },
      });

      const path = `${appPaths.backoffice}${backofficePaths.training}`;
      history.push(
        options?.redirectToCreateTrainingInstance
          ? `${path}/${response.data.createTraining.id}${backofficePaths.createInstance}`
          : path
      );
    } catch (e) {
      // empty
    }
  };

  return (
    <>
      <Header title="Create Course" />
      {error ? (
        <P>There's an error</P>
      ) : loading ? (
        <P>...loading</P>
      ) : (
        <TrainingForm
          onSubmit={onSubmit}
          initialValues={null}
          allVideos={data.videos}
          fields={data.fields}
          trainingInstanceTypes={data.trainingInstanceTypes}
        />
      )}
    </>
  );
};

const QUERY_TRAINING = gql`
  query createTrainingFormData {
    ...trainingQueriesFragment
    ...allVideos
  }
  ${TRAINING_FORM_QUERY_FRAGMENT}
  ${ALL_VIDEOS_FRAGMENT}
`;

const CREATE_TRAINING = gql`
  mutation createTraining($training: CreateTrainingInput!) {
    createTraining(training: $training) {
      training {
        ...trainingFormFragment
      }
    }
  }
  ${TRAINING_FORM_FRAGMENT}
`;

export default CreateTraining;
