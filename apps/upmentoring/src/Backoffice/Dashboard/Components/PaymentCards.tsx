import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { formatUTC } from '../../../App/Utils';
import Flex from '../../../App/Components/Layout/Flex';
import Card from '../../../App/Components/Elements/Card';
import { P, Small } from '../../../App/Components/Text/P';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import Link from '../../../App/Components/Navigation/Link';
import { priceFormat } from '../../../App/Utils/';
import { getPaymentItemData } from '../../../Backoffice/Payment/Utils';

const PaymentCards = ({ payments }: any) => {
  const edges = payments?.edges || [];

  return (
    <>
      {edges.map(({ node: payment }: any) => {
        const { path, utcOffset, title, startDate } = getPaymentItemData(
          payment.item,
        );

        return (
          <Card key={payment.id}>
            <Flex flexDirection="column">
              <Link
                to={`${appPaths.backoffice}${backofficePaths.payment}/${payment.id}`}
              >
                Paid on {formatUTC(payment.createdAt, utcOffset)}
              </Link>
              <Small>
                Amount -{' '}
                {priceFormat({
                  currency: payment.currency,
                  amount: payment.amount,
                })}
              </Small>
              <Link to={path}>
                {title} - {formatUTC(startDate, utcOffset)}
              </Link>

              {payment.email}
            </Flex>
          </Card>
        );
      })}
      <Link
        pb={3}
        button
        to={`${appPaths.backoffice}${backofficePaths.payment}`}
      >
        See all payments
      </Link>
    </>
  );
};

export const FRAGMENT_PAYMENTS_DASHBOARD = gql`
  fragment paymentsDashboardFragment on PaymentConnection {
    edges {
      cursor
      node {
        id
        createdAt
        currency
        amount
        email
        item {
          ... on TrainingPayment {
            trainingId
            training {
              title
            }
          }
          ... on TrainingInstancePayment {
            trainingInstanceId
            trainingInstance {
              title
              startDate
              utcOffset
            }
          }
          ... on EventPayment {
            eventId
            event {
              title
              startDate
              utcOffset
            }
          }
        }
      }
    }
  }
`;

export default PaymentCards;
