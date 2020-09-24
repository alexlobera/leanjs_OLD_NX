import React from 'react';

import { Col, Row } from '../../../../App';
import Header from '../../../../App/Components/Layout/Header';
import YourTrainingInstances from './YourTrainingInstances';
import LatestFeedback from './LatestFeedback';

const FeedbackPage = () => (
  <>
    <Header title="Feedback" />
    <Row>
      <Col md={4}>
        <YourTrainingInstances />
      </Col>
      <Col md={8}>
        <LatestFeedback />
      </Col>
    </Row>
  </>
);

export default FeedbackPage;
