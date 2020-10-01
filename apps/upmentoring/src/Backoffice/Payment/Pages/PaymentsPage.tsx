import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRouteMatch } from 'react-router-dom';

import { formatUTC } from '../../../App/Utils';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import Link from '../../../App/Components/Navigation/Link';
import Header from '../../../App/Components/Layout/Header';
import { Table, Tbody, Tr, Td } from '../../../App/Components/Table';
import { P } from '../../../App/Components/Text/P';
import { Col } from '../../../App';
import Box from '../../../App/Components/Layout/Box';
import Heading from '../../../App/Components/Text/Heading';
import { priceFormat } from '../../../App/Utils/';
import Button from '../../../App/Components/Buttons/Button';
import { getPaymentItemData } from '../../../Backoffice/Payment/Utils';
import { connectionFetcher } from '../../utils';

const PaymentsPage = () => {
  const match = useRouteMatch();
  const { loading, error, data, fetchMore } = useQuery(QUERY_PAYMENTS, {
    fetchPolicy: 'cache-first',
  });
  const edges = data?.payments?.edges || [];
  const pageInfo = data?.payments?.pageInfo;
  const endCursor = pageInfo?.endCursor;
  const hasNextPage = pageInfo?.hasNextPage;

  return (
    <>
      <Header
        title="Payments"
        actions={
          <Link button={true} to={`${match.url}/discounts`}>
            Discounts
          </Link>
        }
      />
      <Col>
        <Heading variant="h4"> All payment activities</Heading>
      </Col>
      <Col>
        <Table>
          <Tbody>
            {edges.map(({ node: payment }: any) => {
              const { path, utcOffset, title, startDate } = getPaymentItemData(
                payment.item
              );

              return (
                <Tr key={payment.id}>
                  <Td>
                    <Link
                      to={`${appPaths.backoffice}${backofficePaths.payment}/${payment.id}`}
                    >
                      Paid on {formatUTC(payment.createdAt, utcOffset)}
                    </Link>
                  </Td>
                  <Td>{payment.email}</Td>
                  <Td>
                    <Link to={path}>
                      {title} - <small>{formatUTC(startDate, utcOffset)}</small>
                    </Link>
                  </Td>
                  <Td>
                    {priceFormat({
                      currency: payment.currency,
                      amount: payment.amount,
                    })}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        {loading ? (
          <P>...Loading</P>
        ) : error ? (
          <P>There's an error</P>
        ) : (
          hasNextPage && (
            <Box pb={3}>
              <Button
                variant="tertiary"
                onClick={connectionFetcher({
                  fetchMore,
                  endCursor,
                  fieldName: 'payments',
                })}
              >
                Load More
              </Button>
            </Box>
          )
        )}
      </Col>
    </>
  );
};

const QUERY_PAYMENTS = gql`
  query payments($cursor: String, $first: Int = 10) {
    payments(
      first: $first
      after: $cursor
      orderBy: { sort: createdAt, direction: DESC }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          createdAt
          currency
          amount
          email
          __typename
          item {
            ... on TrainingPayment {
              trainingId
              training {
                published {
                  title
                }
              }
            }
            ... on TrainingInstancePayment {
              trainingInstanceId
              trainingInstance {
                title
                published {
                  startDate
                  utcOffset
                }
              }
            }
            ... on EventPayment {
              eventId
              event {
                published {
                  title
                  startDate
                  utcOffset
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PaymentsPage;
