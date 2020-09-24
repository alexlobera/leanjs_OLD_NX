import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import ConfirmDeleteButton from '../../../App/Components/Communication/ConfirmDeleteButton';
import { QUERY_TRAININGS } from '../Pages/TrainingPage/TrainingList';

interface Props {
  trainingId: string;
}

const DeleteTraining = ({ trainingId }: Props) => {
  const history = useHistory();
  const [deleteTraining] = useMutation(DELETE_TRAINING, {
    variables: { id: trainingId },
    refetchQueries: [{ query: QUERY_TRAININGS }],
  });

  const onDeleteTraining = async () => {
    try {
      const response = await deleteTraining();
      response?.data?.deleteTraining?.training?.deletedAt &&
        history.push(`${appPaths.backoffice}${backofficePaths.training}`);
    } catch (e) {
      // empty
    }
  };

  return <ConfirmDeleteButton onConfirm={onDeleteTraining} />;
};

const DELETE_TRAINING = gql`
  mutation deleteTraining($id: ID!) {
    deleteTraining(id: $id) {
      training {
        id
        deletedAt
      }
    }
  }
`;

export default DeleteTraining;
