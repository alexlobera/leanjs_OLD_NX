import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { paths as backofficePaths } from '../../../../Backoffice';
import { Col, Row } from '../../../../App';
import Link from '../../../../App/Components/Navigation/Link';
import TrainingCard, { QUERY_TRAINING_DETAIL_FRAGMENT } from './TrainingCard';
import Header from '../../../../App/Components/Layout/Header';
import { P } from '../../../../App/Components/Text/P';
import TrainingDetailInstanceList, {
  FRAGMENT_TRAINING_DETAIL_INSTANCE_LIST,
} from './TrainingDetailInstanceList';
import PaymentList, {
  FRAGMENT_ANY_PAYMENTS_LIST,
} from '../../../../Backoffice/Payment/Components/PaymentList';

const TrainingDetailPage = () => {
  const match = useRouteMatch();
  const { trainingId } = useParams();
  const { loading, error, data } = useQuery(QUERY_TRAINING_DETAIL_PAGE, {
    variables: { trainingId },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  if (error) {
    return <P>There's an error</P>;
  } else if (loading) {
    return <P>...loading</P>;
  } else {
    return (
      <>
        <Header
          title="Course Detail"
          actions={
            <>
              <Link
                button={true}
                to={`${match.url}${backofficePaths.createInstance}`}
              >
                Add instance
              </Link>
              <Link
                ml={3}
                button={true}
                to={`${match.url}${backofficePaths.trainingUnit}`}
              >
                Edit units
              </Link>
              <Link
                ml={3}
                button={true}
                to={`${match.url}${backofficePaths.editTraining}`}
              >
                Edit course
              </Link>
            </>
          }
        />
        <Row>
          <Col lg={8}>
            <PaymentList
              trainingId={trainingId}
              payments={data?.trainingById?.payments}
            />

            <TrainingDetailInstanceList
              title="Upcoming instances"
              trainingInstances={data?.trainingById?.upcomingInstances}
              trainingId={trainingId}
              direction="ASC"
              endDate="future"
            />
            <TrainingDetailInstanceList
              title="Previous instances"
              trainingInstances={data?.trainingById?.previousInstances}
              trainingId={trainingId}
              direction="DESC"
              endDate="past"
            />
          </Col>
          <Col lg={4}>
            <TrainingCard training={data?.trainingById} />
          </Col>
        </Row>
      </>
    );
  }
};

const QUERY_TRAINING_DETAIL_PAGE = gql`
  query trainingDetailPage($trainingId: ID!, $first: Int = 10) {
    trainingById(id: $trainingId) {
      ...trainingDetailFragment
      upcomingInstances(first: $first) {
        ...trainingDetailInstanceListFragment
      }
      previousInstances(first: $first) {
        ...trainingDetailInstanceListFragment
      }
      payments(first: $first) {
        ...anyPaymentListFragment
      }
    }
  }
  ${FRAGMENT_TRAINING_DETAIL_INSTANCE_LIST}
  ${QUERY_TRAINING_DETAIL_FRAGMENT}
  ${FRAGMENT_ANY_PAYMENTS_LIST}
`;

export default TrainingDetailPage;
