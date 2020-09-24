import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Link from '../../../../App/Components/Navigation/Link';
import { Col, Row } from '../../../../App';
import Header from '../../../../App/Components/Layout/Header';
import TrainingList, { QUERY_TRAINING_LIST_FRAGMENT } from './TrainingList';
import TrainingInstanceList, {
  QUERY_TRAINING_INSTANCE_LIST_FRAGMENT,
} from './TrainingInstanceList';
import { P } from '../../../../App/Components/Text/P';

const TrainingPage = () => {
  const match = useRouteMatch();
  const { loading, error, data } = useQuery(QUERY_TRAINING_PAGE, {
    // fetchPolicy: 'cache-and-network',
    fetchPolicy: 'cache-first',
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
          title="Courses"
          actions={
            <>
              <Link mr={2} button={true} to={`${match.url}/create-course`}>
                Create course
              </Link>
              <Link button={true} to={`${match.url}/create-instance`}>
                Create course instance
              </Link>
            </>
          }
        />
        <Row>
          <Col md={4}>
            <TrainingList trainings={data?.trainings} />
          </Col>
          <Col md={8}>
            <Row>
              <TrainingInstanceList
                title="Upcoming course instances"
                trainingInstances={data?.upcomingTrainingInstances}
                direction="ASC"
                endDate="future"
              />
            </Row>
            <Row>
              <TrainingInstanceList
                title="Previous course instances"
                trainingInstances={data?.previousTrainingInstances}
                direction="DESC"
                endDate="past"
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  }
};

export const QUERY_TRAINING_PAGE = gql`
  query trainingPage($first: Int = 10) {
    trainings(first: $first, orderBy: { sort: updatedAt, direction: DESC }) {
      ...queryTrainingListFragment
    }
    upcomingTrainingInstances: trainingInstances(
      filter: { endDate: future }
      orderBy: { sort: startDate, direction: ASC }
      first: $first
    ) {
      ...trainingInstanceListFragment
    }

    previousTrainingInstances: trainingInstances(
      filter: { endDate: past }
      orderBy: { sort: startDate, direction: DESC }
      first: $first
    ) {
      ...trainingInstanceListFragment
    }
  }
  ${QUERY_TRAINING_LIST_FRAGMENT}
  ${QUERY_TRAINING_INSTANCE_LIST_FRAGMENT}
`;

export default TrainingPage;
