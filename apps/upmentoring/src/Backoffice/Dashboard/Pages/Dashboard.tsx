import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Col, Row } from '../../../App';
import Heading from '../../../App/Components/Text/Heading';
import TrainingCards, {
  FRAGMENT_TRAINING_INSTANCES_DASHBOARD,
} from '../../../Backoffice/Dashboard/Components/TrainingCards';
import PaymentCards, {
  FRAGMENT_PAYMENTS_DASHBOARD,
} from '../../../Backoffice/Dashboard/Components/PaymentCards';
import FeedbackCards, {
  FRAGMENT_FEEDBACKS_DASHBOARD,
} from '../../../Backoffice/Dashboard/Components/FeedbackCards';
import Header from '../../../App/Components/Layout/Header';
import { P } from '../../../App/Components/Text/P';

const Dashboard = () => {
  const { loading, error, data } = useQuery(QUERY_DASHBOARD, {
    fetchPolicy: 'cache-first',
  });

  if (loading) {
    return <P>...Loading</P>;
  }
  if (error) {
    return <P>There's an error</P>;
  }

  return (
    <>
      <Header title="Dashboard !" />
      <Row>
        <Col lg={4}>
          <Heading variant="h3" mb={2}>
            Courses
          </Heading>
          <TrainingCards trainingInstances={data?.trainingInstances} />
        </Col>
        <Col lg={4}>
          <Heading variant="h3" mb={2}>
            Payments
          </Heading>
          <PaymentCards payments={data?.payments} />
        </Col>
        <Col lg={4}>
          <Heading variant="h3" mb={2}>
            Latest Feedback
          </Heading>
          <FeedbackCards feedbacks={data?.feedbacks} />
        </Col>
      </Row>
    </>
  );
};

const QUERY_DASHBOARD = gql`
  query dashboard($first: Int = 4) {
    feedbacks(first: $first, orderBy: { sort: createdAt, direction: DESC }) {
      ...feedbacksDashboardFragment
    }

    payments(first: $first, orderBy: { sort: createdAt, direction: DESC }) {
      ...paymentsDashboardFragment
    }

    trainingInstances(
      filter: { startDate: future }
      orderBy: { sort: startDate, direction: DESC }
      first: $first
    ) {
      ...trainingInstancesDashboardFragment
    }
  }
  ${FRAGMENT_FEEDBACKS_DASHBOARD}
  ${FRAGMENT_PAYMENTS_DASHBOARD}
  ${FRAGMENT_TRAINING_INSTANCES_DASHBOARD}
`;

export default Dashboard;
