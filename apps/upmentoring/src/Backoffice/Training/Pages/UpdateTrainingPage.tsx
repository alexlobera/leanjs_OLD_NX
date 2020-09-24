import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';

import { ALL_VIDEOS_FRAGMENT } from '../../../Backoffice/Video/videos.graphql.js';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import Header from '../../../App/Components/Layout/Header';
import { P } from '../../../App/Components/Text/P';
import TrainingForm, {
  TRAINING_FORM_FRAGMENT,
  TRAINING_FORM_QUERY_FRAGMENT,
} from '../Components/Form/TrainingForm';

const UpdateTraining = () => {
  const history = useHistory();
  const { trainingId } = useParams();
  const { data, loading, error } = useQuery(QUERY_TRAINING, {
    variables: { id: trainingId },
  });

  const [updateTraining] = useMutation(UPDATE_TRAINING);

  const onSubmit = () => async ({ __typename, ...restTraining }: any) => {
    try {
      const { __typename: __, ...description } = restTraining.description;
      const training = {
        ...restTraining,
        description: {
          ...description,
        },
      };
      await updateTraining({
        variables: {
          training,
        },
      });

      history.push(`${appPaths.backoffice}${backofficePaths.training}`);
      // todo show notification "course was saved"
    } catch (e) {
      // empty
    }
  };

  if (error) {
    return <P>There's an error</P>;
  } else if (loading) {
    return <P>...loading</P>;
  } else {
    const { trainingById: training, fields, trainingInstanceTypes } = data;

    return (
      <>
        <Header title="Update Course" />
        <TrainingForm
          fields={fields}
          onSubmit={onSubmit}
          initialValues={training}
          allVideos={data.videos}
          trainingInstanceTypes={trainingInstanceTypes}
        />
      </>
    );
  }
};

const QUERY_TRAINING = gql`
  query updateTrainingFormData($id: ID!) {
    ...trainingQueriesFragment
    trainingById(id: $id) {
      ...trainingFormFragment
    }
    ...allVideos
  }
  ${TRAINING_FORM_FRAGMENT}
  ${TRAINING_FORM_QUERY_FRAGMENT}
  ${ALL_VIDEOS_FRAGMENT}
`;

const UPDATE_TRAINING = gql`
  mutation updateTraining($training: UpdateTrainingInput!) {
    updateTraining(training: $training) {
      training {
        ...trainingFormFragment
      }
    }
  }
  ${TRAINING_FORM_FRAGMENT}
`;

export default UpdateTraining;
