import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { formatUTC } from '../../../App/Utils';
import { Col, Row } from '../../../App';
import { P } from '../../../App/Components/Text/P';
import Card from '../../../App/Components/Elements/Card';
import Link from '../../../App/Components/Navigation/Link';
import { Ul, Li } from '../../../App/Components/Text/Ul';
import Heading from '../../../App/Components/Text/Heading';
import { priceFormat } from '../../../App/Utils/';
import Header from '../../../App/Components/Layout/Header';
import Flex from '../../../App/Components/Layout/Flex';
import InfoBox from '../../../App/Components/Elements/InfoBox';
import { Em, Small } from '../../../App/Components/Text/P';
import { getPaymentItemData } from '../Utils';

const PaymentDetailPage = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(QUERY_PAYMENT, {
    variables: { id },
  });

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    const { payment } = data;
    if (!payment) {
      return null;
    }

    const { path, utcOffset, title, startDate, city } = getPaymentItemData(
      payment.item,
    );

    const subtitle = (
      <Link to={path}>
        {title} - {startDate && moment(startDate).format("D MMM 'YYYY")} -{' '}
        {city}
      </Link>
    );

    return (
      <>
        <Header title={`Payment from ${payment.email}`} subtitle={subtitle} />
        <Row>
          <Col md={8}>
            <Card>
              <Ul>
                <Li>
                  <Heading variant="h6">
                    Payment received - {formatUTC(payment.createdAt, utcOffset)}
                  </Heading>
                </Li>
                <Li>
                  <P>
                    Amount:{' '}
                    {priceFormat({
                      currency: payment.currency,
                      amount: payment.amount,
                    })}
                  </P>
                </Li>
                <Li>
                  <P>Payment Id: {payment.id}</P>
                </Li>
              </Ul>
            </Card>
          </Col>
          <Col md={4}>
            <InfoBox>
              <Flex flexDirection="column">
                <Heading mb={0} variant="h6">
                  Student details
                </Heading>
              </Flex>
              <Ul nomargin>
                <Li>
                  <Em>
                    <Small>Contact email: {payment.email} </Small>
                  </Em>
                </Li>
                <Li>
                  <Em>
                    <Small>
                      See detail:{' '}
                      <Link to={path}>
                        {title} - {startDate && formatUTC(startDate, utcOffset)}{' '}
                        - {city}
                      </Link>
                    </Small>
                  </Em>
                </Li>
              </Ul>
            </InfoBox>
          </Col>
        </Row>
      </>
    );
  }
};

const QUERY_PAYMENT = gql`
  query payment($id: ID!) {
    payment(id: $id) {
      id
      currency
      amount
      email
      createdAt
      currency
      amount
      createdAt
      __typename
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
`;

export default PaymentDetailPage;
