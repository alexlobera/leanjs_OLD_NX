import React from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import ConfirmDeleteButton from '../../../../App/Components/Communication/ConfirmDeleteButton';
// import { QUERY_FUTURE_TRAINING_INSTANCES } fro./DELETEME_TrainingInstanceListist";

interface Props {
  instanceId: string;
}

const DeleteTrainingInstance = ({ instanceId }: Props) => {
  const history = useHistory();

  const [deleteTrainingInstance] = useMutation(DELETE_TRAINING_INSTANCE, {
    variables: { id: instanceId },
    // refetchQueries: [{ query: QUERY_FUTURE_TRAINING_INSTANCES }]
  });

  const onDeleteTrainingInstance = async () => {
    try {
      const response = await deleteTrainingInstance();

      response?.data?.deleteTrainingInstance?.trainingInstance?.deletedAt &&
        history.push('/backoffice/courses');
    } catch (e) {
      // empty
    }
  };

  return <ConfirmDeleteButton onConfirm={onDeleteTrainingInstance} />;
};

const DELETE_TRAINING_INSTANCE = gql`
  mutation deleteTrainingInstance($id: ID!) {
    deleteTrainingInstance(id: $id) {
      trainingInstance {
        id
        deletedAt
      }
    }
  }
`;

export default DeleteTrainingInstance;
