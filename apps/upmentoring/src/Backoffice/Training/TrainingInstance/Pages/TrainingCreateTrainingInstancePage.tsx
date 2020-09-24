import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../../../App/Components/Layout/Header';
import { paths as backofficePaths } from '../../../../Backoffice';
import TrainingSelector from '../../Components/TrainingSelector';

const TrainingCreateTrainingInstancePage = () => {
  const history = useHistory();
  return (
    <>
      <Header title="Add course instance" />
      <TrainingSelector
        name="trainingId"
        onChange={(trainingId: string) => {
          history.push(
            `/backoffice${backofficePaths.training}/${trainingId}${backofficePaths.createInstance}`
          );
        }}
      />
    </>
  );
};

export default TrainingCreateTrainingInstancePage;
