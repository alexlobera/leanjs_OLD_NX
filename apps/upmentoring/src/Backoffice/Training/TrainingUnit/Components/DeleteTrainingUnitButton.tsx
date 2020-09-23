import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';
import ConfirmDeleteButton from '../../../../App/Components/Communication/ConfirmDeleteButton';

// import { QUERY_TRAINING } from "../Pages/TrainingPage/TrainingList";

interface Props {
  trainingUnitId: string;
}

const DeleteTrainingUnit = ({ trainingUnitId }: Props) => {
  const history = useHistory();

  const [deleteTrainingUnit] = useMutation(DELETE_TRAINING, {
    variables: { id: trainingUnitId },
    // TODO REFETCH THE UNITS OF THE TRAINING
    // refetchQueries: [{ query: ??? }],
  });

  const onDeleteTrainingUnit = async () => {
    try {
      const response = await deleteTrainingUnit();
      response?.data?.deleteTrainingUnit?.trainingUnit?.deletedAt &&
        history.push(`${appPaths.backoffice}${backofficePaths.training}`);
    } catch (e) {
      // empty
    }
  };

  return <ConfirmDeleteButton ml={2} onConfirm={onDeleteTrainingUnit} />;
};

const DELETE_TRAINING = gql`
  mutation deleteTrainingUnit($id: ID!) {
    deleteTrainingUnit(id: $id) {
      trainingUnit {
        id
        deletedAt
      }
    }
  }
`;

export default DeleteTrainingUnit;
