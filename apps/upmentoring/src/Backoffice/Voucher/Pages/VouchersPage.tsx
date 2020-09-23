import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { paths as backofficePaths } from '../../../Backoffice';
import Link from '../../../App/Components/Navigation/Link';
import Header from '../../../App/Components/Layout/Header';
import { Table, Tbody, Tr, Td } from '../../../App/Components/Table';
import { P } from '../../../App/Components/Text/P';
import Button from '../../../App/Components/Buttons/Button';
import Box from '../../../App/Components/Layout/Box';
import { connectionFetcher } from '../../utils';

const VouchersPage = () => {
  const match = useRouteMatch();
  const { loading, error, data, fetchMore } = useQuery(QUERY_VOUCHERS, {
    fetchPolicy: 'cache-first',
  });
  const edges = data?.vouchers?.edges || [];
  const pageInfo = data?.vouchers?.pageInfo;
  const endCursor = pageInfo?.endCursor;
  const hasNextPage = pageInfo?.hasNextPage;

  return (
    <>
      <Header
        title="Discounts"
        actions={
          <Link
            button={true}
            to={`${match.url}${backofficePaths.createVoucher}`}
          >
            Create new discount
          </Link>
        }
      />
      <Table>
        <Tbody>
          {edges.map(({ node: voucher }: any) => (
            <Tr key={voucher.id}>
              <Td>
                <Link to={`${match.url}/${voucher.id}`}>
                  {voucher.description}
                </Link>
              </Td>
              <Td>{voucher.code}</Td>
              {voucher.discountPercentage ? (
                <Td>{voucher.discountPercentage}%</Td>
              ) : voucher.discountAmount ? (
                <Td>£{voucher.discountAmount}</Td>
              ) : (
                <Td />
              )}
              <Td>Type: {voucher.type}</Td>
              <Td>Used {voucher.redemptions} times</Td>
            </Tr>
          ))}
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
                fieldName: 'vouchers',
              })}
            >
              Load More
            </Button>
          </Box>
        )
      )}
    </>
  );
};

export const QUERY_VOUCHERS = gql`
  query discounts($cursor: String, $first: Int = 10) {
    vouchers(
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
          code
          discountPercentage
          discountAmount
          redemptions
          description
          createdAt
          type
        }
      }
    }
  }
`;

export default VouchersPage;
