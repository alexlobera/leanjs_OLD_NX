import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../../../App/Components/Layout/Header';
// import { QUERY_FUTURE_TRAINING_INSTANCES } from "../Components/DELETEME_TrainingInstanceList";
import TrainingInstanceForm from '../Components/Form/TrainingInstanceForm';
import trainingInstanceFormFragment, {
  trainingInstanceTrainingFragment,
} from '../Components/Form/TrainingInstanceForm.graphql.js';
import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';
import { P } from '../../../../App/Components/Text/P';

const CreateTrainingInstance = () => {
  const history = useHistory();
  const { trainingId } = useParams();
  const { data, error, loading } = useQuery(QUERY_TRAINING, {
    variables: { id: trainingId },
    skip: !trainingId,
  });
  const [createTrainingInstance] = useMutation(CREATE_TRAINING_INSTANCE);
  const initialValues = { trainingId };

  const onSubmit = async (trainingInstance: any) => {
    try {
      const response = await createTrainingInstance({
        // refetchQueries: [{ query: QUERY_FUTURE_TRAINING_INSTANCES }],
        variables: {
          trainingInstance,
        },
      });

      if (response.data) {
        history.push(`${appPaths.backoffice}${backofficePaths.training}`);
      }
    } catch (e) {
      // empty
    }
  };

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    return (
      <>
        <Header title="Add course instance" />
        <TrainingInstanceForm
          onSubmit={onSubmit}
          initialValues={initialValues}
          training={data && data.trainingById}
        />
      </>
    );
  }
};

const CREATE_TRAINING_INSTANCE = gql`
  mutation createTrainingInstance(
    $trainingInstance: CreateTrainingInstanceInput!
  ) {
    createTrainingInstance(trainingInstance: $trainingInstance) {
      trainingInstance {
        ...TrainingInstanceForm
      }
    }
  }
  ${trainingInstanceFormFragment}
`;

const QUERY_TRAINING = gql`
  query trainingForInstanceForm($id: ID!) {
    trainingById(id: $id) {
      id
      ...TrainingInstanceTypesFragment
    }
  }
  ${trainingInstanceTrainingFragment}
`;

export default CreateTrainingInstance;
