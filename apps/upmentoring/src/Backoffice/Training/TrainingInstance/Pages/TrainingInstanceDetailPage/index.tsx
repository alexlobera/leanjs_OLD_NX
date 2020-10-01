import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams, useRouteMatch } from 'react-router-dom';
import moment from 'moment';

import Header from '../../../../../App/Components/Layout/Header';
import Heading from '../../../../../App/Components/Text/Heading';
import { Col, Row } from '../../../../../App';
import { paths as appPaths } from '../../../../../App';
import { paths as backofficePaths } from '../../../../../Backoffice';
import { formatUTC } from '../../../../../App/Utils';
import { P, Small } from '../../../../../App/Components/Text/P';
import Link from '../../../../../App/Components/Navigation/Link';
import Box from '../../../../../App/Components/Layout/Box';
import { Ul, Li } from '../../../../../App/Components/Text/Ul';
import InfoBox from '../../../../../App/Components/Elements/InfoBox';
import DeleteTrainingInstance from '../../Components/DeleteTrainingInstance';
import PaymentList, {
  FRAGMENT_ANY_PAYMENTS_LIST,
} from '../../../../Payment/Components/PaymentList';
import TrainingInstanceFeedbackList, {
  FRAGMENT_TRAINING_INSTANCE_FEEDBACKS,
} from './TrainingInstanceFeedbackList';

const TrainingInstanceDetailPage = () => {
  const match = useRouteMatch();
  const { instanceId } = useParams();
  const { data, loading, error } = useQuery(QUERY_TRAINING_INSTANCE, {
    variables: { id: instanceId },
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-first',
  });

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    if (loading) return <P>...Loading</P>;
    if (error) return <P>There's an error</P>;

    const { trainingInstance, vouchers } = data;
    const { edges } = vouchers;

    if (!trainingInstance) {
      return null;
    }

    const { trainingId } = trainingInstance;
    const isPresent = moment();
    const isFuture = moment(trainingInstance.startDate).diff(isPresent);

    const { discountPrice } = trainingInstance;
    const currentPrice = discountPrice ? discountPrice.currentPrice : undefined;

    return (
      <>
        <Header
          title="Course Instance Detail"
          actions={
            <Link
              mr={2}
              button={true}
              to={`${match.url}${backofficePaths.editInstance}`}
            >
              Edit course instance
            </Link>
          }
        />
        <Row>
          <Col md={8}>
            <TrainingInstanceFeedbackList
              feedbacks={data?.trainingInstance?.feedbacks}
              trainingInstanceId={instanceId}
            />
            <PaymentList
              payments={data?.trainingInstance?.payments}
              trainingInstanceId={instanceId}
            />
          </Col>
          <Col md={4}>
            <InfoBox>
              <Box stack marginbottom>
                <Heading variant="h6">Course instance details</Heading>
              </Box>
              <Ul nomargin>
                <Li>
                  <Small>Course: </Small>
                  <Link
                    to={`${appPaths.backoffice}${backofficePaths.training}/${trainingId}`}
                  >
                    {trainingInstance.title}
                  </Link>
                </Li>
                <Li>
                  <Small>
                    Start date:{' '}
                    {formatUTC(
                      trainingInstance.published.startDate,
                      trainingInstance.published.utcOffset
                    )}
                  </Small>
                </Li>
                <Li>
                  <Small>
                    End date:{' '}
                    {formatUTC(
                      trainingInstance.published.endDate,
                      trainingInstance.published.utcOffset
                    )}{' '}
                  </Small>
                </Li>
                <Li>
                  <Small>
                    Timings:{' '}
                    {formatUTC(
                      trainingInstance.published.startDate,
                      trainingInstance.published.utcOffset,
                      'HH:mm'
                    )}{' '}
                    -{' '}
                    {formatUTC(
                      trainingInstance.published.endDate,
                      trainingInstance.published.utcOffset,
                      'HH:mm'
                    )}
                  </Small>
                </Li>
                <Li>
                  <Small>Venue: {trainingInstance.published.venueName} </Small>
                </Li>
                <Li>
                  <Small>
                    Price: £{trainingInstance.published.standardPrice}
                  </Small>
                </Li>
                {currentPrice || currentPrice === 0 ? (
                  <>
                    <Li>
                      <Small>
                        <strong>
                          Current discount price: £
                          {Math.floor(currentPrice * 100) / 100}
                        </strong>
                      </Small>
                    </Li>
                  </>
                ) : null}
                <Li>
                  <Small>Vouchers available: </Small>
                  <Ul>
                    {edges.map(({ node }: any) => (
                      <Li key={node.id}>
                        <Link
                          to={`${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}/${node.id}`}
                        >
                          {node.description}
                        </Link>
                      </Li>
                    ))}
                  </Ul>
                </Li>
                <Li>
                  <Small>
                    Max number of students:{' '}
                    {trainingInstance.published.maxAttendees}{' '}
                  </Small>
                </Li>
                <Li>
                  <Small>Coaches: </Small>
                  <Ul>
                    {trainingInstance.published.coaches?.map((coach: any) => (
                      <Li key={coach.userId}>
                        <Link to="#">
                          {coach.firstName} {coach.lastName}
                        </Link>
                      </Li>
                    ))}
                  </Ul>
                </Li>
              </Ul>
              {isFuture > 0 && (
                <DeleteTrainingInstance instanceId={instanceId} />
              )}
            </InfoBox>
          </Col>
        </Row>
      </>
    );
  }
};

export const QUERY_TRAINING_INSTANCE = gql`
  query trainingInstance($id: ID!, $first: Int = 10) {
    vouchers(filter: { trainingInstanceId: $id }) {
      edges {
        node {
          id
          code
          description
        }
      }
    }
    trainingInstance(id: $id) {
      discountPrice {
        currentPrice
      }
      payments(first: $first) {
        ...anyPaymentListFragment
      }
      feedbacks(first: $first) {
        ...trainingInstanceFeedbacksFragment
      }
      id
      trainingId
      createdBy
      title
      published {
        coaches {
          firstName
          lastName
          userId
        }
        startDate
        endDate
        utcOffset
        standardPrice
        city
        address
        venueName
        maxAttendees
      }
    }
  }
  ${FRAGMENT_ANY_PAYMENTS_LIST}
  ${FRAGMENT_TRAINING_INSTANCE_FEEDBACKS}
`;

export default TrainingInstanceDetailPage;
