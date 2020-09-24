import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { Grid, Col, Row } from '../../../App';
import { P } from '../../../App/Components/Text/P';
import AnonymousFeedback from '../Components/Forms/AnonymousFeedback';
import TRAINING_INSTANCE_QUERY from './NewTrainingFeedbackPage.graphql.js';

const NewTrainingFeedbackPage = () => {
  const { trainingInstanceId, trainingUnitId } = useParams();
  const { data, loading, error } = useQuery(TRAINING_INSTANCE_QUERY, {
    variables: { id: trainingInstanceId, trainingUnitId },
  });

  const onSubmit = (values) => {
    console.log('values', values);
  };

  if (loading) {
    return <P>loading</P>;
  } else if (error) {
    return <P>{error.message}</P>;
  } else {
    const { trainingInstance } = data;
    const trainingInstanceUnit = trainingInstance.unit;
    const trainingUnit =
      trainingInstance.training && trainingInstance.training.unit;

    let coaches;
    if (trainingInstanceUnit) {
      coaches = trainingInstanceUnit.coaches || [];
    } else {
      coaches = trainingInstance.coaches;
    }

    return (
      <Grid>
        <Row>
          <Col>
            <AnonymousFeedback
              onSubmit={onSubmit}
              coaches={coaches}
              trainingInstance={trainingInstance}
              trainingUnit={trainingUnit}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default NewTrainingFeedbackPage;
